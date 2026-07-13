import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Loader2, ChevronRight } from "lucide-react";
import { AdminShell } from "@/components/AdminShell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { listStudentResults } from "@/lib/admin.functions";
import { formatSeconds } from "@/lib/format";
import { t } from "@/lib/i18n";

export const Route = createFileRoute("/_authenticated/admin/results")({
  component: AdminResults,
});

function AdminResults() {
  const { data, isLoading } = useQuery({
    queryKey: ["admin-results"],
    queryFn: () => listStudentResults(),
  });

  return (
    <AdminShell>
      <h1 className="mb-6 font-display text-3xl font-bold text-foreground">{t.admin.results}</h1>
      {isLoading ? (
        <div className="flex items-center justify-center py-20 text-muted-foreground">
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          {t.common.loading}
        </div>
      ) : !data || data.length === 0 ? (
        <div className="rounded-2xl border bg-card p-10 text-center text-muted-foreground">
          {t.admin.stats.noData}
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t.admin.review.student}</TableHead>
                <TableHead>{t.admin.review.exam}</TableHead>
                <TableHead>{t.admin.review.score}</TableHead>
                <TableHead>{t.admin.review.percentage}</TableHead>
                <TableHead>{t.admin.review.result}</TableHead>
                <TableHead>{t.admin.review.timeUsed}</TableHead>
                <TableHead>{t.admin.review.date}</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((r) => (
                <TableRow key={r.id}>
                  <TableCell className="font-medium">{r.studentName}</TableCell>
                  <TableCell>{r.examTitle}</TableCell>
                  <TableCell>
                    {r.score}/{r.maxScore}
                  </TableCell>
                  <TableCell>{r.percentage}%</TableCell>
                  <TableCell>
                    <Badge
                      variant={r.passed ? "default" : "destructive"}
                      className={r.passed ? "bg-success text-success-foreground" : ""}
                    >
                      {r.passed ? t.admin.review.passed : t.admin.review.failed}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {r.timeUsedSeconds != null ? formatSeconds(r.timeUsedSeconds) : "—"}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {r.submittedAt ? new Date(r.submittedAt).toLocaleDateString("fr-FR") : "—"}
                  </TableCell>
                  <TableCell>
                    <Button asChild variant="ghost" size="sm" className="gap-1">
                      <Link to="/admin/results/$attemptId" params={{ attemptId: r.id }}>
                        {t.admin.review.view} <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </AdminShell>
  );
}
