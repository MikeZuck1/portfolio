import Navigation from "../components/Navbar";
import projects from "@/app/data/projects.json";
export default function Skills() {
  return (
    <>
      <Navigation />
      <section className="max-w-4xl mx-auto px-6 py-16 text-[#fff]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Mes projets</h1>
          <p className="text-lg text-gray-300">
            Voici quelques projets sur lesquels j&apos;ai travaillé.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid)cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-blue-500 hover:underline"
              >
                {" "}
                Voir le projet →
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
