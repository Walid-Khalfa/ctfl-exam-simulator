import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Loader2, ScrollText } from "lucide-react";
import { AdminShell } from "@/components/AdminShell";
import { listAuditLog } from "@/lib/admin.functions";
import { t } from "@/lib/i18n";

export const Route = createFileRoute("/_authenticated/admin/audit")({
  component: AdminAudit,
});

function actionLabel(action: string): string {
  const map = t.admin.audit.actions as Record<string, string>;
  return map[action] ?? action;
}

function AdminAudit() {
  const { data, isLoading } = useQuery({
    queryKey: ["admin-audit"],
    queryFn: () => listAuditLog(),
  });

  return (
    <AdminShell>
      <div className="mb-6 flex items-center gap-2">
        <ScrollText className="h-6 w-6 text-primary" />
        <h1 className="font-display text-3xl font-bold text-foreground">{t.admin.audit.title}</h1>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-20 text-muted-foreground">
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          {t.common.loading}
        </div>
      ) : !data || data.length === 0 ? (
        <div className="rounded-2xl border bg-card p-10 text-center text-muted-foreground">
          {t.admin.audit.empty}
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
          <table className="w-full text-sm">
            <thead className="border-b bg-muted/40 text-left text-xs uppercase text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-medium">{t.admin.audit.date}</th>
                <th className="px-4 py-3 font-medium">{t.admin.audit.actor}</th>
                <th className="px-4 py-3 font-medium">{t.admin.audit.action}</th>
                <th className="px-4 py-3 font-medium">{t.admin.audit.target}</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id} className="border-b last:border-0">
                  <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">
                    {new Date(row.created_at).toLocaleString("fr-FR")}
                  </td>
                  <td className="px-4 py-3 font-medium text-foreground">{row.actor_name || "—"}</td>
                  <td className="px-4 py-3 text-foreground">{actionLabel(row.action)}</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {row.target_type
                      ? `${row.target_type} · ${(row.target_id ?? "").slice(0, 8)}`
                      : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminShell>
  );
}
