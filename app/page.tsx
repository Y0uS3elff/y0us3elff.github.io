import About from "@/components/main/About";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Parcours from "@/components/main/Parcours";
import VeilleTechnologique from "@/components/main/VeilleTechnologique";
import TableauSynthese from "@/components/main/TableauSynthese";

export default function Home() {
    return (
        <main className="h-full w-full">
			<div className="flex flex-col gap-20">
				<Hero />
				<About />
				<Parcours />
				<Skills />
				<Projects />
				<VeilleTechnologique />
				<TableauSynthese />
			</div>
        </main>
    );
}  