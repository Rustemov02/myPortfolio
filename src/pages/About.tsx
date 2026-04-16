import { Calendar } from "lucide-react";
import { motion } from "motion/react";
import info from "../constants/skills";

const About = () => {
  const { skills, timeline } = info;

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 tracking-tight">About.</h2>
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3 space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                I’m a frontend developer focused on building clean, high-performance, and 
                user-centered digital experiences. With a foundation in computer engineering 
                and a passion for modern web technologies, I bridge the gap between 
                complex functionality and intuitive design.
              </p>
              <p>
                My expertise lies in React, Next.js, and TypeScript, where I focus on 
                writing maintainable code and optimizing every interaction for speed 
                and accessibility.
              </p>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-6">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span 
                    key={skill.name}
                    className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-medium"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience & Education */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-10">Experience & Education</h2>
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="group relative grid md:grid-cols-4 gap-4 md:gap-12">
                <div className="text-zinc-500 text-sm font-medium pt-1">
                  {item.period}
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-zinc-400 font-medium mb-3">{item.company}</div>
                  <p className="text-zinc-500 leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
