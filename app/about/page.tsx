import Navigation from "@/app/components/Navbar";

export default function About() {
  return (
    <>
      <Navigation />
      <section className="max-w-4xl mx-auto px-6 py-15 text-[#fff]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">À propos de moi</h1>
          <p className="text-lg text-gray-300">
            Développeur, je conçois des applications web.
          </p>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center gap-8">
          <p className="text-gray-300 text-lg text-justify">
            Salut ! Moi, c&apos;est Mike, et j&apos;adore construire des trucs
            sur le net et résoudre des problèmes complexes. Avec un bachelier en
            E-business (la tech et le business ensemble), j&apos;ai découvert le
            code en cours de &apos;programmation orientée web&apos;, en touchant
            au HTML, CSS, JS, PHP et MySQL. Mais j&apos;ai vite voulu aller plus
            loin et me suis formé en autodidacte. Aujourd&apos;hui, je crée des
            interfaces utilisateurs et dynamiques avec React, Next.js et
            TailwindCSS, toujours dans l&apos;objectif d&apos;offrir des
            expériences modernes et performantes.
          </p>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/cv.pdf"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-600 transition"
          >
            Télécharger mon CV
          </a>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-6">
            Expériences & Compétences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Développement frontend</h3>
              <p className="text-gray-400">
                React, Next.js, TailwindCSS & TypeScript
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Design & Wireframe</h3>
              <p className="text-gray-400">Figma & Excalidraw</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Développemt backend</h3>
              <p className="text-gray-400">Firebase & MySQL</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Outils</h3>
              <p className="text-gray-400">Terminal, Git & GitHub</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-around text-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-500">3</h3>
            <p className="text-gray-400">Années d&apos;expérience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-500">10+</h3>
            <p className="text-gray-400">Projets réalisés</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-500">3+</h3>
            <p className="text-gray-400">Technos maîtrisées</p>
          </div>
        </div>

        <div className="flex justify-center my-[2rem]">
          <a
            href="/contact"
            className="ml-4 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-600 transition"
          >
            Me contacter
          </a>
        </div>
      </section>
    </>
  );
}
