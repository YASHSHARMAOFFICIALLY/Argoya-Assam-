"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const severityOptions = [
	{ label: "None", value: 0 },
	{ label: "Mild", value: 1 },
	{ label: "Moderate", value: 2 },
	{ label: "Severe", value: 3 },
];

const dietOptions = [
	{ label: "Regular", value: 0 },
	{ label: "Occasional", value: 1 },
	{ label: "Rare", value: 2 },
];

type ScreeningData = {
	fatigue: number;
	dizziness: number;
	breathlessness: number;
	pallor: number;
	diet: number;
	heartRate: string;
};

function calculateRisk(data: ScreeningData) {
	const maxScore = 16; // 4 symptoms (0-12) + diet (0-2) + heart rate bonus (0-2)
	let rawScore = 0;

	rawScore += data.fatigue;
	rawScore += data.dizziness;
	rawScore += data.breathlessness;
	rawScore += data.pallor;
	rawScore += data.diet;

	if (Number(data.heartRate) > 100) {
		rawScore += 2;
	}

	const normalizedScore = Math.min(100, Math.round((rawScore / maxScore) * 100));

	let riskLevel = "Low";

	if (normalizedScore >= 65) {
		riskLevel = "High";
	} else if (normalizedScore >= 35) {
		riskLevel = "Medium";
	}

	return { score: normalizedScore, riskLevel };
}

export default function ScreenPage() {
	const router = useRouter();
	const [formData, setFormData] = useState<ScreeningData>({
		fatigue: 0,
		dizziness: 0,
		breathlessness: 0,
		pallor: 0,
		diet: 0,
		heartRate: "",
	});

	const handleChange = (field: keyof ScreeningData, value: number | string) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!formData.heartRate) {
			alert("Please enter heart rate");
			return;
		}

		const result = calculateRisk(formData);

		router.push(`/result?score=${result.score}&risk=${result.riskLevel}`);
	};

	return (
		<div className="relative min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-100">
			<div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-16">
				<div className="space-y-3 text-center">
					<span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
						Severity scale locked: 0 None · 1 Mild · 2 Moderate · 3 Severe
					</span>
					<h1 className="text-3xl font-semibold text-slate-900">Screen Patient</h1>
					<p className="text-base text-slate-600">Collect symptoms, score risk, and move to the summary. No data leaves this device.</p>
				</div>

				<form onSubmit={handleSubmit} className="grid gap-6 rounded-3xl border border-blue-100 bg-white/80 p-8 shadow-xl shadow-blue-100 backdrop-blur">
					<div className="grid gap-6 md:grid-cols-2">
						<label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
							Fatigue
							<select
								className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
								value={formData.fatigue}
								onChange={(event) => handleChange("fatigue", Number(event.target.value))}
							>
								{severityOptions.map((option) => (
									<option key={option.value} value={option.value}>
										{option.label}
									</option>
								))}
							</select>
						</label>
						<label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
							Dizziness
							<select
								className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
								value={formData.dizziness}
								onChange={(event) => handleChange("dizziness", Number(event.target.value))}
							>
								{severityOptions.map((option) => (
									<option key={option.value} value={option.value}>
										{option.label}
									</option>
								))}
							</select>
						</label>
						<label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
							Breathlessness
							<select
								className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
								value={formData.breathlessness}
								onChange={(event) => handleChange("breathlessness", Number(event.target.value))}
							>
								{severityOptions.map((option) => (
									<option key={option.value} value={option.value}>
										{option.label}
									</option>
								))}
							</select>
						</label>
						<label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
							Pallor
							<select
								className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
								value={formData.pallor}
								onChange={(event) => handleChange("pallor", Number(event.target.value))}
							>
								{severityOptions.map((option) => (
									<option key={option.value} value={option.value}>
										{option.label}
									</option>
								))}
							</select>
						</label>
					</div>

					<div className="grid gap-6 md:grid-cols-2">
						<label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
							Diet (iron-rich intake)
							<select
								className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
								value={formData.diet}
								onChange={(event) => handleChange("diet", Number(event.target.value))}
							>
								{dietOptions.map((option) => (
									<option key={option.value} value={option.value}>
										{option.label}
									</option>
								))}
							</select>
						</label>
						<label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
							Heart rate
							<input
								type="number"
								min={0}
								className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
								value={formData.heartRate}
								onChange={(event) => handleChange("heartRate", event.target.value)}
								placeholder="eg. 96"
							/>
						</label>
					</div>

					<div className="flex flex-col gap-3 rounded-2xl bg-blue-50/80 p-4 text-sm text-blue-800">
						<span className="font-semibold">How scoring works</span>
						<span>Each symptom uses the locked 0-3 scale. Diet adds a penalty if intake is low. Heart rates above 100 add a two-point bonus.</span>
						<span>Scores scale to 0-100: below 35 → Low risk, 35-64 → Medium risk, 65+ → High risk.</span>
					</div>

					<button
						type="submit"
						className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-500"
					>
						Calculate Risk
					</button>
				</form>
			</div>
		</div>
	);
}
