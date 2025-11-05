import { motion } from "motion/react";
import { Card } from "../components/Card";
import Badge from "../components/Badge";
import CustomDialog from "../components/CustomDialog";
import { useState } from "react";
import { projects } from "../constants/projects";

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
    <section
      id="projects"
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white/60">Featured Projects</h2>
          <div className="w-20 h-1 bg-linear-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
          <p className="mt-6 text-white/60 max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in building
            modern web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="group relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer h-full"
                onClick={() => {
                  setSelectedIndex(project.id - 1);
                  setIsOpen(true);
                }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="mb-2 text-white/90 transition-all">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        // variant="outline"
                        className="text-xs py-1 px-3 rounded-lg bg-white/5 border-white/10 text-white/70 hover:bg-white/10 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-linear-to-r from-purple-500/10 to-cyan-500/10" />
                  <div className="absolute inset-0 border border-purple-500/20 rounded-lg" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <CustomDialog
        data={projects[selectedIndex!]}
        open={isOpen}
        onOpenChange={() => setIsOpen(false)}
      />
    </section>
  );
};

export default Projects;
