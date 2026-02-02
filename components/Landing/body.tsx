"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Body() {
	const faqs = [
		{
			question: "Which endemic diseases are most common in Assam?",
			answer:
				"Malaria, Japanese encephalitis, dengue, filariasis, acute diarrhoeal diseases, tuberculosis, and scrub typhus remain the dominant endemic conditions faced by rural and flood-affected communities.",
		},
		{
			question: "When do outbreaks usually spike?",
			answer:
				"Vector-borne diseases such as malaria, dengue, and Japanese encephalitis spike during the monsoon and post-monsoon seasons when standing water and humid conditions fuel mosquito breeding.",
		},
		{
			question: "Who is most at risk of Japanese encephalitis?",
			answer:
				"Children and adults in agrarian and peri-urban belts face the highest risk, with seasonal surges that can lead to severe disability or death if symptoms are not treated early.",
		},
		{
			question: "How is filariasis being tackled?",
			answer:
				"Several districts run mass drug administration drives to curb lymphatic filariasis, aiming to prevent the lifelong disability associated with chronic cases.",
		},
		{
			question: "What emerging threats should teams watch for?",
			answer:
				"Scrub typhus is increasingly reported and often misdiagnosed as a viral fever, so keeping it in differential diagnoses during monsoon months helps avoid missed treatment.",
		},
	];
	const [activeIndex, setActiveIndex] = useState<number | null>(0);

	const handleToggle = (index: number) => {
		setActiveIndex((prev) => (prev === index ? null : index));
	};
	return (
		<div className="bg-linear-to-b from-slate-50 via-white to-slate-200 text-slate-900">
			<main className="mx-auto max-w-5xl px-6 py-20 space-y-20">
				<section className="grid gap-10 rounded-3xl bg-white/90 p-10 shadow-xl shadow-blue-100 sm:grid-cols-[1.1fr,0.9fr] sm:items-center">
					<div className="space-y-6">
						<span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
							Field-ready anemia insights
						</span>
						<h1 className="text-4xl font-semibold leading-tight md:text-5xl">
							Screen, score, and guide within minutes
						</h1>
						<p className="text-lg text-slate-600">
							A minimal workflow for frontline teams to flag anemia risk using simple symptom inputs.
						</p>
						<p className="text-sm text-blue-600">
							(গ্ৰাম্য অসমৰ বাবে সহজ স্বাস্থ্য পৰীক্ষা ব্যৱস্থা)
						</p>
						<div className="flex flex-wrap items-center gap-4">
							<Link href="/screen">
								<span className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-500">
									Start Screening
								</span>
							</Link>
							<span className="text-sm text-slate-500">Offline support · Works on entry-level Android</span>
						</div>
					</div>
					<div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-slate-700">
						<p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-600">Quick snapshot</p>
						<div className="grid gap-4 sm:grid-cols-2">
							<div className="rounded-2xl bg-white p-4 shadow-sm shadow-blue-100">
								<p className="text-xs uppercase text-blue-600">Inputs</p>
								<p className="mt-2 text-lg font-semibold text-slate-900">Vitals + symptoms</p>
							</div>
							<div className="rounded-2xl bg-white p-4 shadow-sm shadow-blue-100">
								<p className="text-xs uppercase text-blue-600">Output</p>
								<p className="mt-2 text-lg font-semibold text-slate-900">Clear next steps</p>
							</div>
						</div>
						<p className="text-sm text-slate-600">
							Built with ASHA feedback for low-touch triage between home visits and PHC follow-ups.
						</p>
					</div>
				</section>

				<section className="space-y-10">
					<div className="space-y-3 text-center">
						<h2 className="text-3xl font-semibold">Core features</h2>
						<p className="text-base text-slate-600">Condensed tools inspired by MediConnect's streamlined cards.</p>
					</div>
					<div className="grid gap-6 md:grid-cols-3">
						{[
							{ title: "Risk scoring", copy: "Simple RAG triage based on 10 frontline observations." },
							{ title: "Guided prompts", copy: "Step-by-step questions so helpers never miss critical signs." },
							{ title: "Referral notes", copy: "Auto-generated summaries to hand over at the PHC." },
						].map((feature) => (
							<div key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-blue-100">
								<h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
								<p className="mt-2 text-sm text-slate-600">{feature.copy}</p>
							</div>
						))}
					</div>
				</section>

				<section className="space-y-8">
					<div className="space-y-2 text-center">
						<h2 className="text-3xl font-semibold">Three-step workflow</h2>
						<p className="text-base text-slate-600">Designed for rapid visits and limited connectivity.</p>
					</div>
					<ol className="grid gap-6 md:grid-cols-3">
						{[
							"Capture vitals & symptoms",
							"Review instant risk tier",
							"Share referral or self-care",
						].map((step, index) => (
							<li key={step} className="relative rounded-2xl border border-slate-200 bg-white p-6 text-slate-700 shadow-lg shadow-blue-100">
								<span className="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-semibold text-white shadow-lg shadow-blue-200">
									{index + 1}
								</span>
								<p className="pt-4 text-base font-medium text-slate-900">{step}</p>
							</li>
						))}
					</ol>
				</section>

				<section className="space-y-6">
					<div className="space-y-2 text-center">
						<h2 className="text-3xl font-semibold">Built for rural care teams</h2>
						<p className="text-base text-slate-600">Lean personas keep the story grounded.</p>
					</div>
					<ul className="flex flex-wrap justify-center gap-3">
						{[
							"ASHA & ANM workers",
							"Community volunteers",
							"Primary health centers",
						].map((label) => (
							<li key={label} className="rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700 shadow-sm">
								{label}
							</li>
						))}
					</ul>
				</section>

				<section>
					<div className="rounded-3xl border border-blue-100 bg-linear-to-r from-blue-500 via-blue-400 to-blue-500 p-12 text-center shadow-2xl shadow-blue-200">
						<h2 className="text-3xl font-semibold text-white">Ready to prioritise anemia care?</h2>
						<p className="mt-3 text-base text-blue-50">Start the guided screening and surface high-risk cases early.</p>
						<div className="mt-8 flex justify-center">
							<Link href="/screen">
								<span className="inline-flex items-center justify-center rounded-full bg-white/90 px-10 py-3 text-base font-semibold text-blue-600 shadow-lg shadow-blue-300 transition hover:bg-white">
									Start Screening
								</span>
							</Link>
						</div>
					</div>
				</section>

				<section className="space-y-8">
					<div className="space-y-2 text-center">
						<h2 className="text-3xl font-semibold text-slate-900">Common endemic disease FAQs</h2>
						<p className="text-base text-slate-600">Equip conversations with quick facts tailored for Assam's frontline teams.</p>
					</div>
					<div className="mx-auto max-w-3xl space-y-4">
						{faqs.map((faq, index) => {
							const isOpen = activeIndex === index;
							return (
								<div key={faq.question} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-blue-100">
									<button
										type="button"
										onClick={() => handleToggle(index)}
										className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
									>
										<span className="text-base font-semibold text-slate-900">{faq.question}</span>
										<ChevronDown className={`h-5 w-5 text-blue-600 transition-transform ${isOpen ? "rotate-180" : ""}`} />
									</button>
									{isOpen && (
										<div className="border-t border-slate-100 px-6 pb-6 pt-4 text-sm text-slate-600">
											{faq.answer}
										</div>
									)}
								</div>
							);
						})}
					</div>
					<div className="mx-auto max-w-3xl rounded-2xl border border-blue-200 bg-blue-50 px-6 py-5 text-sm font-medium text-blue-700">
						Assam faces a high burden of endemic diseases such as malaria, Japanese encephalitis, dengue, filariasis, diarrhoeal diseases, tuberculosis, and scrub typhus, particularly in rural and flood-prone areas.
					</div>
				</section>
			</main>
		</div>
	);
}
