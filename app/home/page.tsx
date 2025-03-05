"use client";
import { useEffect } from "react";
import Image from "next/image";
import Profil from "@/public/design/Profil.jpg";
import {
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
} from "react-icons/ti";

export default function HomePage() {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      // Supprime le overflow-hidden en quittant la page home
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="flex flex-col items-center text-center max-w-lg">
        <Image
          src={Profil}
          width={100}
          height={100}
          alt="My picture"
          className="my-5 w-24 h-24 border border-white-600 p-[.3rem] rounded-full sm:w-32 sm:h-32"
        />
        <h1 className="my-4 text-white text-3xl sm:text-5xl font-bold">
          Hi, I&apos;m Mike
        </h1>
        <p className="my-4 text-white text-base sm:text-lg">
          Développeur informatique orienté web application.
        </p>
        <p className="my-4 text-white italic text-sm sm:text-base">
          &quot; Une ligne de code à la fois.&quot;
        </p>
        <div className="flex flex-row mt-[1rem]">
          <a
            href="https://www.linkedin.com/in/mike-batelahoko-585884174/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialLinkedinCircular className="mx-6 text-[#fff] w-10 h-10" />
          </a>
          <a
            href="https://github.com/MikeZuck1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialGithubCircular className="mx-6 text-[#fff] w-10 h-10" />
          </a>
        </div>
      </div>
    </div>
  );
}
