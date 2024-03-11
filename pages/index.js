"use client"
import { Hero } from "@/sections";
import Head from "next/head";

// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/ui/tracing-beam.tsx"
export default function Home() {
  return (
    <>
      <Head>
        <title>TaskBust</title>
      </Head>
      <TracingBeam className="px-1">
        <Hero />
      </TracingBeam>
    </>
  );
}
