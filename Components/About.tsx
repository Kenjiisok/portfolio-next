"use client";

import React from "react";
import Image from "next/image";
import corpoImg from "@/public/corpo copiar.png";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-7 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <SectionHeading>Sobre mim</SectionHeading>
      <p className="mb-3">
        Sempre tive preferência pela área de{" "}
        <span className="font-medium">exatas</span>, conforme cresci fiquei cada
        vez mais em torno de novas <span className="italic">técnologias</span> e
        me apaixonei, assim decidi o que eu queria ser quando crescer. Recém
        <span className="font-medium"> formado em ADS na FIAP</span> ,
        atualmente estou trabalhando como{" "}
        <span className="underline font-medium">
          estágiario frontend na empresa OKN{" "}
        </span>{" "}
        e cursando meu segundo semestre em Cyber Security na IMPACTA, além do
        front-end tenho conhecimentos no back-end e{" "}
        <span className="italic">metodologias ágeis,</span> como
        <span className="font-medium"> SCRUM.</span>
      </p>
    </motion.section>
  );
}
