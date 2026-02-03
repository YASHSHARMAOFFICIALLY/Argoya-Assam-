"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserPlus, Mail, Lock, User, Sparkles } from "lucide-react";

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

export default function SignUpPage() {
	const router = useRouter();
	const [formData, setFormData] = useState({ name: "", email: "", password: "" });
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [alias, setAlias] = useState<string | null>(null);

	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}

		let storedAlias = localStorage.getItem(aliasStorageKey);
		if (!storedAlias) {
			storedAlias = generateAlias();
			localStorage.setItem(aliasStorageKey, storedAlias);
		}
		setAlias(storedAlias);
	}, []);

	const handleChange = (field: "name" | "email" | "password") => (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({ ...prev, [field]: event.target.value }));
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setError("");
		setSuccess(false);

		if (!formData.name.trim()) {
			setError("Please enter your name");
			return;
		}

		if (!formData.email.trim()) {
			setError("Please enter your email");
			return;
		}

		if (formData.password.length < 6) {
			setError("Password must be at least 6 characters");
			return;
		}

		setLoading(true);

		setTimeout(() => {
			setLoading(false);
			setSuccess(true);
			if (typeof window !== "undefined") {
				localStorage.setItem(aliasStorageKey, formData.name || alias || generateAlias());
			}
			setTimeout(() => {
				router.push("/signin?message=" + encodeURIComponent("Account created! Please sign in."));
			}, 2600);
		}, 900);
	};
	
	return (
		<div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-red-50 via-rose-50 to-pink-50">
			{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-20 left-10 w-72 h-72 bg-red-300/20 rounded-full blur-3xl animate-pulse" />
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300/15 rounded-full blur-3xl animate-pulse delay-500" />
			</div>

			<div className="relative z-10 flex min-h-screen items-center justify-center p-4">
				<div className="w-full max-w-md">
					{/* Header Badge */}
					<div className="text-center mb-8">
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md mb-4">
							<Sparkles className="w-5 h-5 text-red-600" />
							<span className="text-sm font-semibold text-slate-700">
								Health Screening Portal
							</span>
						</div>
					</div>

					{/* Main Card */}
					<div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-sm p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
						{/* Icon Header */}
						<div className="flex justify-center mb-6">
							<div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-lg">
								<UserPlus className="w-8 h-8 text-white" />
							</div>
						</div>

						<h1 className="mb-2 text-center text-3xl font-bold bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">
							Create Account
						</h1>
						<p className="mb-6 text-center text-slate-600">
							Join our health screening platform today
						</p>

						{error && (
							<div className="mb-4 rounded-lg border border-red-400 bg-red-100 px-4 py-3 text-sm text-red-800 font-medium">
								{error}
							</div>
						)}

						{success && (
							<div className="mb-4 rounded-lg border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
								<div className="font-semibold mb-1">Account Created Successfully! 🎉</div>
								<p className="text-xs">
									A confirmation email would be sent to <span className="font-semibold">{formData.email}</span>.
								</p>
								<p className="text-xs mt-1">Redirecting to sign in page...</p>
							</div>
						)}

						<form onSubmit={handleSubmit} className="space-y-5">
							{/* Name Input */}
							<div className="space-y-2">
								<label className="text-sm font-medium text-slate-700 flex items-center gap-2">
									<User className="w-4 h-4 text-red-600" />
									Username
								</label>
								<input
									type="text"
									name="name"
									placeholder="Enter your username"
									value={formData.name}
									onChange={handleChange("name")}
									disabled={loading || success}
									className="w-full rounded-lg border border-slate-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
								/>
							</div>

							{/* Email Input */}
							<div className="space-y-2">
								<label className="text-sm font-medium text-slate-700 flex items-center gap-2">
									<Mail className="w-4 h-4 text-red-600" />
									Email Address
								</label>
								<input
									type="email"
									name="email"
									placeholder="Enter your email"
									value={formData.email}
									onChange={handleChange("email")}
									disabled={loading || success}
									className="w-full rounded-lg border border-slate-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
								/>
							</div>

							{/* Password Input */}
							<div className="space-y-2">
								<label className="text-sm font-medium text-slate-700 flex items-center gap-2">
									<Lock className="w-4 h-4 text-red-600" />
									Password
								</label>
								<input
									type="password"
									name="password"
									placeholder="Minimum 6 characters"
									value={formData.password}
									onChange={handleChange("password")}
									disabled={loading || success}
									className="w-full rounded-lg border border-slate-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
								/>
							</div>

							{/* Submit Button */}
							<button
								type="submit"
								disabled={loading || success}
								className="w-full rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 py-3.5 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
							>
								{loading ? (
									<span className="flex items-center justify-center gap-2">
										<svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
											<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
											<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
										</svg>
										Creating Account...
									</span>
								) : success ? (
									"Success! ✓"
								) : (
									"Create Account"
								)}
							</button>
						</form>

						{/* Footer Link */}
						<div className="mt-6 text-center">
							<p className="text-sm text-slate-600">
								Already have an account?{" "}
								<Link
									href="/signin"
									className="font-semibold text-red-600 hover:text-rose-700 hover:underline transition-colors"
								>
									Sign In
								</Link>
							</p>
						</div>
					</div>

					{/* Bottom Text */}
					<p className="mt-6 text-center text-xs text-slate-500">
						Secure health screening platform for anemia detection
					</p>
				</div>
			</div>
		</div>
	);
}
