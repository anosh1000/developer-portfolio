"use client";

import { BarChart3, Eye, Users } from "lucide-react";
import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type AnalyticsStats = {
  configured: boolean;
  pageviews: number;
  visitors: number;
  error?: string;
};

function formatMetric(value: number) {
  return new Intl.NumberFormat("en-US", {
    notation: value >= 10000 ? "compact" : "standard",
    maximumFractionDigits: 1,
  }).format(value);
}

export function AnalyticsCard() {
  const [stats, setStats] = React.useState<AnalyticsStats | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    let isMounted = true;

    async function loadStats() {
      try {
        const response = await fetch("/api/analytics");
        const data = (await response.json()) as AnalyticsStats;

        if (!response.ok || data.error) {
          throw new Error(data.error ?? "Unable to load analytics.");
        }

        if (isMounted) {
          setStats(data);
        }
      } catch {
        if (isMounted) {
          setHasError(true);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadStats();

    return () => {
      isMounted = false;
    };
  }, []);

  const showFallback = hasError || !stats?.configured;

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
      <Card className="border-border/80 bg-card/70">
        <CardHeader className="space-y-2">
          <div className="flex items-center gap-2 text-accent">
            <BarChart3 className="h-5 w-5" aria-hidden />
            <p className="font-mono text-xs uppercase tracking-[0.2em]">
              Site analytics
            </p>
          </div>
          <CardTitle className="text-2xl">Portfolio traffic</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <p className="text-sm text-muted-foreground">Loading stats...</p>
          ) : showFallback ? (
            <p className="text-sm text-muted-foreground">
              Analytics coming soon once tracking is configured.
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-secondary/30 p-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Eye className="h-4 w-4" aria-hidden />
                  <p className="text-sm">Page views</p>
                </div>
                <p className="mt-3 text-3xl font-semibold text-foreground">
                  {formatMetric(stats.pageviews)}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-secondary/30 p-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" aria-hidden />
                  <p className="text-sm">Visitors</p>
                </div>
                <p className="mt-3 text-3xl font-semibold text-foreground">
                  {formatMetric(stats.visitors)}
                </p>
              </div>
            </div>
          )}
          <p className="mt-4 text-xs text-muted-foreground">
            Powered by privacy-friendly analytics.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
