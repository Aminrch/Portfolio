import { projects } from "@/data/projects"
import { notFound } from "next/navigation"

export default function ProjectPage({ params }: any) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) return notFound()

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-3 gap-12">

        {/* MAIN CONTENT */}
        <div className="lg:col-span-2 space-y-10">

          {/* Title */}
          <div>
            <h1 className="text-4xl font-bold">
              {project.title}
            </h1>
            <p className="text-zinc-500 mt-2">
              {project.category} • {project.year}
            </p>
          </div>

          {/* Overview */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Overview</h2>
            <p className="text-zinc-300 leading-relaxed">
              {project.overview}
            </p>
          </section>

          {/* Problem */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Problem</h2>
            <p className="text-zinc-400 leading-relaxed">
              {project.problem}
            </p>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Solution</h2>
            <p className="text-zinc-400 leading-relaxed">
              {project.solution}
            </p>
          </section>

          {/* Result */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Result</h2>
            <p className="text-zinc-400 leading-relaxed">
              {project.result}
            </p>
          </section>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-8">

          {/* Image */}
          <div className="rounded-xl overflow-hidden border border-zinc-800">
            <img
              src={project.coverImage}
              className="w-full h-auto"
            />
          </div>

          {/* Tech */}
          <div className="p-5 rounded-xl border border-zinc-800">
            <h3 className="font-semibold mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech?.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 bg-zinc-900 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Meta */}
          <div className="p-5 rounded-xl border border-zinc-800 space-y-3">
            <div>
              <p className="text-xs text-zinc-500">Category</p>
              <p>{project.category}</p>
            </div>

            <div>
              <p className="text-xs text-zinc-500">Year</p>
              <p>{project.year}</p>
            </div>

            <div>
              <p className="text-xs text-zinc-500">Type</p>
              <p>Case Study</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
