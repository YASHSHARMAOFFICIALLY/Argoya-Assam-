"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const adjectives = [
	"Caring",
	"Swift",
	"Gentle",
	"Bright",
	"Kind",
	"Steady",
	"Brave",
	"Calm",
];

const animals = [
	"Heron",
	"Lotus",
	"River",
	"Meadow",
	"Horizon",
	"Seeker",
	"Willow",
	"Guide",
];

const generateAlias = () => {
	const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
	const noun = animals[Math.floor(Math.random() * animals.length)];
	return `${adjective}${noun}`;
};

const aliasStorageKey = "alias";

export default function SignInPage() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [formData, setFormData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const [infoMessage, setInfoMessage] = useState<string | null>(null);
	const [successMessage, setSuccessMessage] = useState<string | null>(null);

	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}

		if (!localStorage.getItem(aliasStorageKey)) {
			localStorage.setItem(aliasStorageKey, generateAlias());
		}
	}, []);

	useEffect(() => {
		const message = searchParams.get("message");
		if (message) {
			setInfoMessage(message);
		}
	}, [searchParams]);

	const handleChange = (field: "email" | "password") => (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({ ...prev, [field]: event.target.value }));
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setError("");
		setSuccessMessage(null);

		if (!formData.email.trim()) {
			setError("Please enter your email");
			return;
		}

		if (!formData.password) {
			setError("Please enter your password");
			return;
		}

		setLoading(true);

		setTimeout(() => {
			setLoading(false);
			setSuccessMessage("Signed in successfully! Redirecting...");
			setTimeout(() => {
				router.push("/");
			}, 800);
		}, 900);
	};

	return (
		<div className="relative min-h-screen overflow-hidden bg-blue-50">

			<div className="absolute inset-0 bg-linear-to-br from-blue-100/10 via-blue-50/5 to-white/15" />
			<div className="relative z-10 flex min-h-screen items-center justify-center p-4">
				<div className="w-full max-w-sm rounded-2xl border border-white/25 bg-white p-8 shadow-[0_20px_40px_rgba(15,23,42,0.25)] backdrop-blur-xl transition-transform duration-300 hover:scale-[1.02]">
					<h1 className="mb-2 text-center text-3xl font-bold text-slate-900">Sign In</h1>
					<p className="mb-6 text-center text-sm text-slate-600">Welcome back! Please enter your details</p>

					{infoMessage && (
						<div className="mb-4 rounded-lg border border-blue-300 bg-blue-100 px-3 py-2 text-sm text-blue-700">
							{infoMessage}
						</div>
					)}

					{error && (
						<div className="mb-4 rounded-lg border border-red-300 bg-red-100 px-3 py-2 text-sm text-red-700">{error}</div>
					)}

					{successMessage && (
						<div className="mb-4 rounded-lg border border-emerald-300 bg-emerald-100 px-3 py-2 text-sm text-emerald-700">
							{successMessage}
						</div>
					)}

					<form onSubmit={handleSubmit} className="space-y-4">
						<input
							type="email"
							name="email"
							placeholder="Email"
							value={formData.email}
							onChange={handleChange("email")}
							disabled={loading}
							className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
						/>

						<input
							type="password"
							name="password"
							placeholder="Password"
							value={formData.password}
							onChange={handleChange("password")}
							disabled={loading}
							className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
						/>

						<button
							type="submit"
							disabled={loading}
							className="w-full rounded-lg bg-blue-600 py-2 text-white font-semibold transition-all hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
						>
							{loading ? "Signing in..." : "Sign In"}
						</button>
					</form>

					<p className="mt-4 text-center text-sm text-slate-600">
						Don’t have an account? <Link href="/signup" className="font-medium text-blue-600 hover:underline">Sign Up</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
