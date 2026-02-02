"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants for staggered fade-in
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const },
	},
};

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
		<div className="bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
			<main className="mx-auto max-w-5xl px-4 py-12 space-y-16 sm:px-6 lg:py-20 lg:space-y-24">
				{/* Hero Section */}
				<motion.section
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={containerVariants}
					className="grid gap-8 rounded-2xl bg-white p-6 shadow-lg sm:grid-cols-[1.1fr,0.9fr] sm:items-center sm:gap-10 sm:p-10 lg:rounded-3xl"
				>
					<motion.div variants={itemVariants} className="space-y-5">
						<span className="inline-flex items-center rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-800 border border-teal-200">
							Field-ready anemia insights
						</span>
						<h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
							Screen, score, and guide within minutes
						</h1>
						<p className="text-base text-slate-700 sm:text-lg leading-relaxed">
							A minimal workflow for frontline teams to flag anemia risk using simple symptom inputs.
						</p>
						<p className="text-sm text-teal-700 font-medium">
							(গ্ৰাম্য অসমৰ বাবে সহজ স্বাস্থ্য পৰীক্ষা ব্যৱস্থা)
						</p>
						<div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center">
							<Link href="/screen" className="w-full sm:w-auto">
								<motion.span
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									className="inline-flex w-full items-center justify-center rounded-lg bg-teal-600 px-8 py-4 text-base font-semibold text-white shadow-md transition-colors hover:bg-teal-700 focus:outline-hidden focus:ring-4 focus:ring-teal-300 sm:w-auto"
								>
									Start Screening
								</motion.span>
							</Link>
							<span className="text-sm text-slate-600">
								Offline support · Works on entry-level Android
							</span>
						</div>
					</motion.div>

					<motion.div
						variants={itemVariants}
						className="space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8"
					>
						<p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
							Quick snapshot
						</p>
						<div className="grid gap-3 sm:grid-cols-2">
							<div className="rounded-lg bg-white p-4 shadow-sm border border-slate-100">
								<p className="text-xs font-medium uppercase text-teal-600">Inputs</p>
								<p className="mt-2 text-lg font-semibold text-slate-900">Vitals + symptoms</p>
							</div>
							<div className="rounded-lg bg-white p-4 shadow-sm border border-slate-100">
								<p className="text-xs font-medium uppercase text-teal-600">Output</p>
								<p className="mt-2 text-lg font-semibold text-slate-900">Clear next steps</p>
							</div>
						</div>
						<p className="text-sm text-slate-700 leading-relaxed">
							Built with ASHA feedback for low-touch triage between home visits and PHC follow-ups.
						</p>
					</motion.div>
				</motion.section>

				{/* Core Features Section */}
				<motion.section
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={containerVariants}
					className="space-y-8"
				>
					<motion.div variants={itemVariants} className="space-y-3 text-center">
						<h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Core features</h2>
						<p className="text-base text-slate-600 max-w-2xl mx-auto">
							Condensed tools inspired by MediConnect's streamlined cards.
						</p>
					</motion.div>
					<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{[
							{ title: "Risk scoring", copy: "Simple RAG triage based on 10 frontline observations." },
							{ title: "Guided prompts", copy: "Step-by-step questions so helpers never miss critical signs." },
							{ title: "Referral notes", copy: "Auto-generated summaries to hand over at the PHC." },
						].map((feature, index) => (
							<motion.div
								key={feature.title}
								variants={itemVariants}
								whileHover={{ y: -4 }}
								transition={{ duration: 0.2 }}
								className="rounded-xl border border-slate-200 bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
							>
								<h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
								<p className="mt-3 text-sm text-slate-700 leading-relaxed">{feature.copy}</p>
							</motion.div>
						))}
					</div>
				</motion.section>

				{/* Three-Step Workflow Section */}
				<motion.section
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={containerVariants}
					className="space-y-8"
				>
					<motion.div variants={itemVariants} className="space-y-3 text-center">
						<h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Three-step workflow</h2>
						<p className="text-base text-slate-600 max-w-2xl mx-auto">
							Designed for rapid visits and limited connectivity.
						</p>
					</motion.div>
					<ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{[
							"Capture vitals & symptoms",
							"Review instant risk tier",
							"Share referral or self-care",
						].map((step, index) => (
							<motion.li
								key={step}
								variants={itemVariants}
								className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-md"
							>
								<span className="absolute -top-4 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-lg font-bold text-white shadow-lg">
									{index + 1}
								</span>
								<p className="pt-6 text-base font-semibold text-slate-900">{step}</p>
							</motion.li>
						))}
					</ol>
				</motion.section>

				{/* Target Users Section */}
				<motion.section
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={containerVariants}
					className="space-y-6"
				>
					<motion.div variants={itemVariants} className="space-y-3 text-center">
						<h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Built for rural care teams</h2>
						<p className="text-base text-slate-600 max-w-2xl mx-auto">
							Lean personas keep the story grounded.
						</p>
					</motion.div>
					<motion.ul
						variants={itemVariants}
						className="flex flex-wrap justify-center gap-3"
					>
						{[
							"ASHA & ANM workers",
							"Community volunteers",
							"Primary health centers",
						].map((label) => (
							<li
								key={label}
								className="rounded-full border-2 border-teal-200 bg-teal-50 px-6 py-3 text-sm font-semibold text-teal-800"
							>
								{label}
							</li>
						))}
					</motion.ul>
				</motion.section>

				{/* Call to Action Section */}
				<motion.section
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={itemVariants}
				>
					<div className="rounded-2xl bg-gradient-to-br from-teal-600 to-teal-700 p-8 text-center shadow-xl sm:p-12 lg:rounded-3xl">
						<h2 className="text-2xl font-bold text-white sm:text-3xl">
							Ready to prioritise anemia care?
						</h2>
						<p className="mt-3 text-base text-teal-50 max-w-2xl mx-auto">
							Start the guided screening and surface high-risk cases early.
						</p>
						<div className="mt-8 flex justify-center">
							<Link href="/screen">
								<motion.span
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									className="inline-flex items-center justify-center rounded-lg bg-white px-10 py-4 text-base font-semibold text-teal-700 shadow-lg transition-colors hover:bg-teal-50 focus:outline-hidden focus:ring-4 focus:ring-white/50"
								>
									Start Screening
								</motion.span>
							</Link>
						</div>
					</div>
				</motion.section>

				{/* FAQ Section */}
				<motion.section
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={containerVariants}
					className="space-y-8"
				>
					<motion.div variants={itemVariants} className="space-y-3 text-center">
						<h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
							Common endemic disease FAQs
						</h2>
						<p className="text-base text-slate-600 max-w-2xl mx-auto">
							Equip conversations with quick facts tailored for Assam's frontline teams.
						</p>
					</motion.div>

					<motion.div variants={itemVariants} className="mx-auto max-w-3xl space-y-3">
						{faqs.map((faq, index) => {
							const isOpen = activeIndex === index;
							return (
								<motion.div
									key={faq.question}
									initial={false}
									className="overflow-hidden rounded-xl border-2 border-slate-200 bg-white shadow-sm"
								>
									<button
										type="button"
										onClick={() => handleToggle(index)}
										aria-expanded={isOpen}
										className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-slate-50 focus:outline-hidden focus:ring-4 focus:ring-teal-300 focus:ring-inset sm:px-6"
									>
										<span className="text-base font-semibold text-slate-900 pr-2">
											{faq.question}
										</span>
										<motion.div
											animate={{ rotate: isOpen ? 180 : 0 }}
											transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
										>
											<ChevronDown className="h-5 w-5 flex-shrink-0 text-teal-600" aria-hidden="true" />
										</motion.div>
									</button>
									<AnimatePresence initial={false}>
										{isOpen && (
											<motion.div
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: "auto", opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
											>
												<div className="border-t-2 border-slate-100 px-5 pb-6 pt-4 text-sm text-slate-700 leading-relaxed sm:px-6">
													{faq.answer}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</motion.div>
							);
						})}
					</motion.div>

					<motion.div
						variants={itemVariants}
						className="mx-auto max-w-3xl rounded-xl border-2 border-teal-200 bg-teal-50 px-5 py-5 text-sm font-medium text-teal-900 leading-relaxed sm:px-6"
						role="note"
						aria-label="Endemic disease context for Assam"
					>
						Assam faces a high burden of endemic diseases such as malaria, Japanese encephalitis, dengue, filariasis, diarrhoeal diseases, tuberculosis, and scrub typhus, particularly in rural and flood-prone areas.
					</motion.div>
				</motion.section>
			</main>
		</div>
	);
}
