import Image from "next/image";
import Profil from "@/public/design/Profil.jpg";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialGithubCircular } from "react-icons/ti";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="flex flex-col items-center text-center max-w-lg">
        {/* Picture */}
        <Image
          src={Profil}
          width={100}
          height={100}
          alt="My picture"
          className="my-5 w-24 h-24 border border-white-600 p-[.3rem] rounded-full sm:w-32 sm:h-32"
        />

        {/* Title*/}
        <h1 className="my-4 text-white text-3xl sm:text-5xl font-bold">
          Hi, I&apos;m Mike
        </h1>

        {/* Description */}
        <p className="my-4 text-white text-base sm:text-lg">
          Développeur informatique orienté web application.
        </p>

        {/* Quote */}
        <p className="my-4 text-white italic text-sm sm:text-base">
          &quot; Une ligne de code à la fois.&quot;
        </p>

        {/* Links */}
        <div className="flex flex-row mt-[1rem]">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <TiSocialLinkedinCircular className="mx-6 text-[#fff] w-10 h-10" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <TiSocialGithubCircular className="mx-6 text-[#fff] w-10 h-10" />
          </a>
        </div>
      </div>
    </div>
  );
}
