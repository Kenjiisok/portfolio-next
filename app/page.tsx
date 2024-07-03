import About from "@/Components/About";
import Intro from "@/Components/Intro";
import SectionDivider from "@/Components/SectionDivider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
    </main>
  );
}
