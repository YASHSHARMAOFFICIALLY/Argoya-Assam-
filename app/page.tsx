import FAQ from "@/components/Landing/faq";
import Hero from "@/components/Landing/hero";
import Problem from "@/components/Landing/problem";
import Solution from "@/components/Landing/solution";

export default function Home() {
	return (
		<div>
			<Hero />
			<Problem />
			<Solution />
			<FAQ />
		</div>
	);
}
