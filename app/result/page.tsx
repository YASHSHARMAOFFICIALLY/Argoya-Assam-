"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function normalizeRisk(value?: string | null) {
	if (!value) {
		return "Unknown";
	}

	return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

 function ResultContent() {
	const params = useSearchParams();
	const scoreValue = Number(params.get("score") ?? 0);
	const score = Number.isNaN(scoreValue) ? 0 : scoreValue;
	const risk = normalizeRisk(params.get("risk"));
	const isHighRisk = risk === "High";

	return (
		<div className="relative min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-100">
			<div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col justify-center gap-10 px-6 py-16">
				<div className="space-y-3 text-center">
					<h1 className="text-3xl font-semibold text-slate-900">Screening Summary</h1>
					<p className="text-base text-slate-600">Review the automated risk calculation before advising next steps.</p>
				</div>

				<div className="grid gap-6 rounded-3xl border border-blue-100 bg-white/80 p-8 shadow-xl shadow-blue-100 backdrop-blur">
					<div className="flex flex-col gap-2 text-center">
						<span className="text-sm font-medium text-slate-700">Total score (0-100)</span>
						<span className="text-4xl font-semibold text-blue-700">{score}</span>
					</div>

					<div className="flex flex-col gap-2 text-center">
						<span className="text-sm font-medium text-slate-700">Risk category</span>
						<span className={`text-2xl font-semibold ${isHighRisk ? "text-red-600" : "text-blue-900"}`}>{risk}</span>
					</div>

					{isHighRisk && (
						<div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
							<span className="font-semibold">Immediate care required</span>
							<p>High risk detected—consult a doctor or hospital immediately.</p>
						</div>
					)}

					<div className="rounded-2xl bg-blue-50/80 p-4 text-sm text-blue-800">
						<span className="font-semibold">Next actions</span>
						<p>Confirm results with clinical judgment. Consider lab work for medium or high risk. For low risk, provide routine follow-up guidance.</p>
					</div>

					<a
						href="/screen"
						className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-500"
					>
						Run Another Screening
					</a>
				</div>
			</div>
		</div>
	);
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading result...</div>}>
      <ResultContent />
    </Suspense>
  );
}