import { Calendar } from "lucide-react";
import { motion } from "motion/react";
import info from "../constants/skills";

const About = () => {
  const { skills, timeline } = info;

  const isDesktop = typeof window !== "undefined" && window.innerWidth > 768;

  return (
    <section
      id="about"
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
          <h2 className="mb-4 text-purple-300">About Me</h2>
          <div className="w-20 h-1 bg-linear-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Who I Am - Featured Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="glass-card p-8 sm:p-10 rounded-2xl border border-white/10 backdrop-blur-md bg-linear-to-br from-white/10 to-white/5 shadow-2xl relative overflow-hidden">
            {/* Decorative corner accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-purple-500/20 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-cyan-500/20 to-transparent rounded-tr-full" />

            <div className="relative z-10">
              <h3 className="mb-4 text-purple-300">Who I Am</h3>
              <p className="text-white/80 text-lg leading-relaxed mb-4">
                I’m a frontend developer with around 1 year of experience,
                passionate about turning ideas into clean, modern, and
                user-friendly web experiences. I work mainly with Next.js,
                React, and Tailwind CSS to build fast and responsive
                applications that feel smooth and intuitive.
              </p>
              <p className="text-white/70 leading-relaxed">
                My focus is on writing clean, maintainable code and creating
                interfaces that not only work well but also feel great to use.
                I’m constantly learning and improving, always exploring new ways
                to deliver better user experiences on the web.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="glass-card p-4 md:p-8 rounded-2xl border border-white/10 backdrop-blur-md bg-white/5 shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-linear-to-b from-purple-500 to-cyan-500 rounded-full" />
              <h3 className="text-white/90">My Skills</h3>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-3 flex-col sm:flex-row justify-center sm:justify-start"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  {...(isDesktop ? { whileHover: { scale: 1.08, y: -4 } } : {})}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <div
                    className={`relative overflow-hidden rounded-full px-5 py-3 bg-linear-to-r ${skill.color} bg-opacity-10 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all cursor-pointer shadow-lg hover:shadow-xl`}
                  >
                    {/* Hover overlay */}
                    <div
                      className={`absolute inset-0 bg-linear-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex items-center justify-center sm:justify-start gap-2.5">
                      <span className="text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </span>
                      <span className="text-white/90 group-hover:text-white transition-colors text-xl sm:text-[16px]">
                        {skill.name}
                      </span>
                    </div>

                    {/* Glow */}
                    <div
                      className={`absolute inset-0 bg-linear-to-r ${skill.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Experience & Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="glass-card p-8 rounded-2xl border border-white/10 backdrop-blur-md bg-white/5 shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-linear-to-b from-purple-500 to-cyan-500 rounded-full" />
              <h3 className="text-white/90">Experience & Education</h3>
            </div>

            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="relative"
                >
                  <div className="flex gap-4 group">
                    {/* Icon */}
                    <div className="relative shrink-0">
                      <div
                        className={`w-6 sm:w-12 h-6 sm:h-12 rounded-xl bg-linear-to-br ${item.color} p-0.5 group-hover:scale-110 transition-transform`}
                      >
                        <div className="w-full h-full rounded-xl bg-black/90 flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="absolute left-1/2 top-12 bottom-0 w-0.5 bg-linear-to-b from-white/20 to-transparent -translate-x-1/2" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="glass-card p-5 rounded-xl border border-white/10 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors">
                        <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                          <h4 className="text-white/90">{item.title}</h4>
                          <div className="flex items-center gap-2 text-white/50 text-sm">
                            <Calendar className="w-4 h-4" />
                            {item.period}
                          </div>
                        </div>
                        <p className="text-white/60 text-sm mb-2">
                          {item.company}
                        </p>
                        <p className="text-white/50 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
