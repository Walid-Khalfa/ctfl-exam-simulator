import { useEffect, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Loader2, ShieldCheck } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { bootstrapAvailable, claimInstructorRole } from "@/lib/admin.functions";
import { t } from "@/lib/i18n";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/setup/first-admin")({
  component: FirstAdminSetupPage,
});

function FirstAdminSetupPage() {
  const { role, loading } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [submitting, setSubmitting] = useState(false);

  const { data: boot, isLoading: bootLoading } = useQuery({
    queryKey: ["bootstrap-available"],
    queryFn: () => bootstrapAvailable(),
    enabled: !loading,
  });

  // If an admin already exists (bootstrap closed) or the caller is already an
  // admin, this page must never show — send them away.
  useEffect(() => {
    if (loading || bootLoading) return;
    if (role === "admin") {
      navigate({ to: "/admin", replace: true });
    } else if (boot && !boot.available) {
      navigate({ to: "/dashboard", replace: true });
    }
  }, [loading, bootLoading, role, boot, navigate]);

  if (loading || bootLoading || !boot?.available || role === "admin") {
    return (
      <AppShell>
        <div className="flex items-center justify-center py-20 text-muted-foreground">
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          {t.common.loading}
        </div>
      </AppShell>
    );
  }

  const handleClaim = async () => {
    setSubmitting(true);
    try {
      await claimInstructorRole();
      await queryClient.invalidateQueries({ queryKey: ["bootstrap-available"] });
      toast.success(t.admin.setup.done);
      // Full reload so the auth context re-resolves the admin role before /admin.
      setTimeout(() => {
        window.location.assign("/admin");
      }, 700);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Erreur");
      setSubmitting(false);
    }
  };

  return (
    <AppShell>
      <div className="mx-auto max-w-lg rounded-2xl border bg-card p-8 text-center shadow-sm">
        <Badge variant="secondary" className="mb-4">
          {t.admin.setup.badge}
        </Badge>
        <ShieldCheck className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 font-display text-2xl font-bold text-foreground">
          {t.admin.setup.title}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">{t.admin.setup.body}</p>
        <Button className="mt-6" onClick={handleClaim} disabled={submitting}>
          {submitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t.admin.setup.working}
            </>
          ) : (
            t.admin.setup.button
          )}
        </Button>
      </div>
    </AppShell>
  );
}
