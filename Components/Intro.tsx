"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import rostoImg from "@/public/rosto copiar.png";
import corpoImg from "@/public/corpo copiar.png";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="mb-2 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Image
            src={rostoImg}
            quality={90}
            className="h-24 w-24 rounded-full border-[0.30rem] border-gray-600 shadow-xl"
            priority={true}
            alt="Emoji de Eduardo Kenji"
          />
        </motion.div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.125,
        }}
      >
        Olá, eu sou <span className="font-bold">Eduardo Kenji</span> sou um
        <span className="font-bold"> desenvolvedor frontend</span> com 1 ano de
        experiência <span className="italic"> com foco em </span>
        <span className="underline">React (Next.js).</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-neutral-50 px-7 py-3 outline-none transition focus:scale-110 hover:scale-105 hover:bg-gray-950 active:scale-100 flex items-center gap-2 rounded-full"
        >
          Entre em contato{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex border border-slate-200 items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
          href="/Curriculo_Eduardo_Kenji_2024.pdf"
          download
        >
          Meu curriculo{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-slate-200"
          href="https://www.linkedin.com/in/eduardo-kenji/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-slate-200"
          href="https://github.com/Kenjiisok"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
