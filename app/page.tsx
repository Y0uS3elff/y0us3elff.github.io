import About from "@/components/main/About";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Parcours from "@/components/main/Parcours";
import VeilleTechnologique from "@/components/main/VeilleTechnologique";
import TableauSynthese from "@/components/main/TableauSynthese";

const FadeBridge = ({ from, to }: { from: "dark" | "light"; to: "dark" | "light" }) => {
    const gradient =
        from === "dark"
            ? "bg-gradient-to-b from-black to-apple-gray-50"
            : "bg-gradient-to-b from-apple-gray-50 to-black";
    return <div className={`h-32 md:h-40 w-full ${gradient}`} aria-hidden />;
};

export default function Home() {
    return (
        <main className="w-full">
            <Hero />
            <FadeBridge from="dark" to="light" />
            <About />
            <FadeBridge from="light" to="dark" />
            <Parcours />
            <Skills />
            <FadeBridge from="dark" to="light" />
            <Projects />
            <FadeBridge from="light" to="dark" />
            <VeilleTechnologique />
            <FadeBridge from="dark" to="light" />
            <TableauSynthese />
        </main>
    );
}
