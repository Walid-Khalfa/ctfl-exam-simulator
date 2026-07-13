import { type ReactNode, useEffect } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { LayoutDashboard, FileStack, Users, Loader2, ShieldAlert, ScrollText } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { bootstrapAvailable, claimInstructorRole } from "@/lib/admin.functions";
import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const tabs = [
  { to: "/admin", label: t.admin.dashboard, icon: LayoutDashboard, exact: true },
  { to: "/admin/exams", label: t.admin.exams, icon: FileStack, exact: false },
  { to: "/admin/results", label: t.admin.results, icon: Users, exact: false },
  { to: "/admin/audit", label: t.admin.audit.nav, icon: ScrollText, exact: false },
] as const;

export function AdminShell({ children }: { children: ReactNode }) {
  const { role, loading } = useAuth();
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const { data: boot, isLoading: bootLoading } = useQuery({
    queryKey: ["bootstrap-available"],
    queryFn: () => bootstrapAvailable(),
    enabled: !loading && role !== "admin",
  });

  useEffect(() => {
    if (!loading && role !== "admin" && !bootLoading && boot && !boot.available) {
      navigate({ to: "/dashboard", replace: true });
    }
  }, [loading, role, bootLoading, boot, navigate]);

  if (loading || (role !== "admin" && bootLoading)) {
    return (
      <AppShell>
        <div className="flex items-center justify-center py-20 text-muted-foreground">
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          {t.common.loading}
        </div>
      </AppShell>
    );
  }

  if (role !== "admin") {
    // Not an admin. If a first-admin bootstrap is available, offer it.
    if (boot?.available) {
      return (
        <AppShell>
          <div className="mx-auto max-w-lg rounded-2xl border bg-card p-8 text-center">
            <ShieldAlert className="mx-auto h-10 w-10 text-primary" />
            <h1 className="mt-4 font-display text-2xl font-bold text-foreground">
              {t.admin.claimTitle}
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">{t.admin.claimBody}</p>
            <Button
              className="mt-6"
              onClick={async () => {
                try {
                  await claimInstructorRole();
                  toast.success(t.admin.claimDone);
                  setTimeout(() => window.location.reload(), 800);
                } catch (e) {
                  toast.error(e instanceof Error ? e.message : "Erreur");
                }
              }}
            >
              {t.admin.claimButton}
            </Button>
          </div>
        </AppShell>
      );
    }
    return (
      <AppShell>
        <div className="py-20 text-center text-muted-foreground">{t.admin.accessDenied}</div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <nav className="mb-8 flex flex-wrap gap-2 border-b pb-2">
        {tabs.map((tab) => {
          const active = tab.exact ? pathname === tab.to : pathname.startsWith(tab.to);
          return (
            <Link
              key={tab.to}
              to={tab.to}
              className={cn(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </Link>
          );
        })}
      </nav>
      {children}
    </AppShell>
  );
}
