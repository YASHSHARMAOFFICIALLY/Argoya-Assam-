"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
		<div className="relative min-h-screen overflow-hidden bg-blue-50">
			<div className="absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat opacity-70" />
			<div className="absolute inset-0 bg-linear-to-br from-blue-100/90 via-blue-50/70 to-white/90" />
			<div className="relative z-10 flex min-h-screen items-center justify-center p-4">
				<div className="w-full max-w-sm rounded-2xl border border-white/60 bg-white/85 p-8 shadow-[0_20px_40px_rgba(15,23,42,0.25)] backdrop-blur-md transition-transform duration-300 hover:scale-[1.02]">
					<h1 className="mb-2 text-center text-3xl font-bold text-slate-900">Sign Up</h1>
					<p className="mb-6 text-center text-sm text-slate-600">Create a new account</p>

				{error && (
					<div className="mb-4 rounded-lg border border-red-300 bg-red-100 px-3 py-2 text-sm text-red-700">{error}</div>
				)}

				{success && (
					<div className="mb-4 rounded-lg border border-emerald-300 bg-emerald-100 px-3 py-3 text-sm text-emerald-700">
						<div className="font-semibold">Account Created Successfully!</div>
						<p className="mt-1">A confirmation email would be sent to <span className="font-semibold">{formData.email}</span>.</p>
						<p className="mt-1">Redirecting to sign in page...</p>
					</div>
				)}

				<form onSubmit={handleSubmit} className="space-y-4">
					<input
						type="text"
						name="name"
						placeholder="Username"
						value={formData.name}
						onChange={handleChange("name")}
						disabled={loading || success}
						className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
					/>

					<input
						type="email"
						name="email"
						placeholder="Email"
						value={formData.email}
						onChange={handleChange("email")}
						disabled={loading || success}
						className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
					/>

					<input
						type="password"
						name="password"
						placeholder="Password (min 6 characters)"
						value={formData.password}
						onChange={handleChange("password")}
						disabled={loading || success}
						className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
					/>

					<button
						type="submit"
						disabled={loading || success}
						className="w-full rounded-lg bg-blue-600 py-2 text-white font-semibold transition-all hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
					>
						{loading ? "Creating Account..." : success ? "Success!" : "Sign Up"}
					</button>
				</form>

				<p className="mt-4 text-center text-sm text-slate-600">
					Already have an account? <Link href="/signin" className="font-medium text-blue-600 hover:underline">Sign In</Link>
				</p>
			</div>
		</div>
	</div>
	);
}
