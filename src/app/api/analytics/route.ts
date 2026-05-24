import { NextResponse } from "next/server";

const REVALIDATE_SECONDS = 60 * 60;

type SimpleAnalyticsStats = {
  pageviews?: unknown;
  visitors?: unknown;
};

function toMetric(value: unknown) {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}

export async function GET() {
  const domain = process.env.SIMPLE_ANALYTICS_DOMAIN;

  if (!domain) {
    return NextResponse.json({
      configured: false,
      pageviews: 0,
      visitors: 0,
    });
  }

  const params = new URLSearchParams({
    version: "6",
    fields: "pageviews,visitors",
  });

  const headers: HeadersInit = {};
  if (process.env.SIMPLE_ANALYTICS_API_KEY) {
    headers["Api-Key"] = process.env.SIMPLE_ANALYTICS_API_KEY;
  }

  try {
    const response = await fetch(
      `https://simpleanalytics.com/${encodeURIComponent(domain)}.json?${params}`,
      {
        headers,
        next: { revalidate: REVALIDATE_SECONDS },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { configured: true, error: "Unable to load analytics." },
        { status: 502 }
      );
    }

    const stats = (await response.json()) as SimpleAnalyticsStats;

    return NextResponse.json({
      configured: true,
      pageviews: toMetric(stats.pageviews),
      visitors: toMetric(stats.visitors),
    });
  } catch {
    return NextResponse.json(
      { configured: true, error: "Unable to load analytics." },
      { status: 502 }
    );
  }
}
