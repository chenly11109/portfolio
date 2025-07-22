"use client";
import FaceImg from "@/public/unhappy_face.svg";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import NavLink from "./home/components/NavLink";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Optional: automatic redirect for root path
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      router.replace("/home/projects");
    }
  }, []);

  return (
    <main className="w-screen h-screen">
      {/* Include shared UI here e.g. a header or sidebar */}
      <NavLink href="/home/projects" />

      <section className="flex flex-col items-center justify-center h-full text-center font-sans">
        <Image
          src={FaceImg}
          className="-mb-6 relative -mt-[200px]"
          alt="unhappy_face"
          width={300}
          height={400}
        />
        <h1 className="text-2xl font-bold text-sky-700 mb-3">
          404 – Page Not Found
        </h1>

        <p className="text-lg text-sky-800 max-w-xl mb-6">
          Hmm... you`ve reacehd a work-in-progress.
          <br />
          This page might be under construction or lost in the digital abyss.
        </p>

        <button
          onClick={() => router.push("/home/projects")}
          className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
        >
          Go to Projects
        </button>
      </section>
      <footer className="text-sm font-sans w-full absolute bottom-0 h-[60px] text-white bg-sky-900 text-center leading-[60px]">
        Copyright © Lingya Chen (chenlingya109@gmail.com). All Rights Reserved.
      </footer>
    </main>
  );
}
