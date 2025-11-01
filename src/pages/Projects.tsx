import { motion } from "motion/react";
import { Card } from "../components/Card";
import Badge from "../components/Badge";
import CustomDialog from "../components/CustomDialog";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Analytics Dashboard",
      description:
        "A comprehensive analytics platform with real-time data visualization.",
      longDescription:
        "Built a full-featured analytics dashboard for tracking business metrics with real-time updates, interactive charts, and customizable widgets. Implemented using React, TypeScript, and Recharts for data visualization. The platform handles thousands of data points efficiently with optimized rendering and state management.",
      image:
        "https://images.unsplash.com/photo-1634836023845-eddbfe9937da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkYXNoYm9hcmQlMjBkYXJrfGVufDF8fHx8MTc2MTkzMzc0NXww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "TypeScript", "Recharts", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Web App",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description:
        "Modern mobile banking interface with seamless UX and security.",
      longDescription:
        "Developed a mobile-first banking application with emphasis on security and user experience. Features include biometric authentication, transaction history, budget tracking, and instant transfers. Built with React Native and integrated with secure payment APIs.",
      image:
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzYxODIyMzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React Native", "Node.js", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Mobile App",
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "Full-stack online store with modern shopping experience.",
      longDescription:
        "Created a complete e-commerce solution with product catalog, shopping cart, checkout process, and admin dashboard. Implemented features like product search, filtering, user reviews, and order tracking. Utilized Next.js for SEO optimization and server-side rendering.",
      image:
        "https://images.unsplash.com/photo-1744446979012-2029135f0d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbW9kZXJufGVufDF8fHx8MTc2MTkzMzc0NXww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Web App",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

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
                  //  setSelectedProject(project)
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
      <CustomDialog open={isOpen} onOpenChange={() => setIsOpen(false)} />
    </section>
  );
};

export default Projects;
