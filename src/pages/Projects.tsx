import { motion } from "motion/react";
import { Card } from "../components/Card";
import Badge from "../components/Badge";
import CustomDialog from "../components/CustomDialog";
import { useState } from "react";
import { projects } from "../constants/projects";
import { ArrowRight } from "lucide-react";

export interface Project {
  id: number | null;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-4 block">Selected Works</span>
          <h2 className="text-4xl font-bold tracking-tight">Case <span className="text-zinc-500 italic">Studies.</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => {
                setSelectedIndex(index);
                setIsOpen(true);
              }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 mb-8">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 grayscale-0 md:grayscale md:group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 max-w-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-wider font-bold text-zinc-400 px-2 py-1 rounded bg-zinc-900 border border-zinc-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CustomDialog
        data={selectedIndex !== null ? projects[selectedIndex] : null}
        open={isOpen}
        onOpenChange={() => setIsOpen(false)}
      />
    </section>
  );
};

export default Projects;
