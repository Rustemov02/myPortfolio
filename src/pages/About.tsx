import { Award, Briefcase, Calendar, Code2, GraduationCap } from "lucide-react";
import { motion } from "motion/react";

const About = () => {
  const skills = [
    { name: "React", color: "from-cyan-500 to-blue-500", icon: "⚛️" },
    { name: "TypeScript", color: "from-blue-500 to-indigo-500", icon: "📘" },
    { name: "Next.js", color: "from-indigo-500 to-purple-500", icon: "▲" },
    { name: "Tailwind CSS", color: "from-purple-500 to-pink-500", icon: "🎨" },
    { name: "Node.js", color: "from-green-500 to-emerald-500", icon: "🟢" },
    { name: "UI/UX Design", color: "from-pink-500 to-rose-500", icon: "✨" },
    {
      name: "Motion/Framer",
      color: "from-orange-500 to-amber-500",
      icon: "🎬",
    },
    { name: "GraphQL", color: "from-violet-500 to-purple-500", icon: "◈" },
    { name: "JavaScript", color: "from-yellow-500 to-amber-500", icon: "⚡" },
    { name: "CSS/SCSS", color: "from-blue-400 to-cyan-400", icon: "🎯" },
    { name: "Git", color: "from-red-500 to-orange-500", icon: "🔀" },
    {
      name: "Responsive Design",
      color: "from-emerald-500 to-teal-500",
      icon: "📱",
    },
  ];

  const timeline = [
    {
      icon: Briefcase,
      title: "Senior Frontend Developer",
      company: "Tech Innovators Inc.",
      period: "2022 - Present",
      description:
        "Leading frontend architecture and mentoring junior developers.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Code2,
      title: "Frontend Developer",
      company: "Digital Solutions Co.",
      period: "2020 - 2022",
      description: "Built responsive web applications using React and Next.js.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: GraduationCap,
      title: "B.S. Computer Science",
      company: "Stanford University",
      period: "2016 - 2020",
      description:
        "Specialized in Human-Computer Interaction and Web Technologies.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Award,
      title: "Web Design Award",
      company: "CSS Design Awards",
      period: "2023",
      description: "Honored for exceptional UI/UX design and innovation.",
      color: "from-amber-500 to-orange-500",
    },
  ];

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
                I'm a creative frontend developer who transforms ideas into
                elegant digital experiences. With over 5 years of crafting
                pixel-perfect interfaces, I blend technical expertise with
                artistic vision to build web applications that users love.
              </p>
              <p className="text-white/70 leading-relaxed">
                My approach combines cutting-edge technologies with timeless
                design principles, ensuring every project is not just
                functional, but memorable. I thrive on challenges and
                continuously push the boundaries of what's possible on the web.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 rounded-xl border border-white/10 backdrop-blur-md bg-white/5 text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 mb-3 group-hover:bg-white/10 transition-colors">
                <highlight.icon className={`w-6 h-6 ${highlight.color}`} />
              </div>
              <p className="text-white/80 text-sm">{highlight.text}</p>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="glass-card p-8 rounded-2xl border border-white/10 backdrop-blur-md bg-white/5 shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-linear-to-b from-purple-500 to-cyan-500 rounded-full" />
              <h3 className="text-white/90">My Skills</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.08, y: -4 }}
                  className="group"
                >
                  <div
                    className={`relative overflow-hidden rounded-full px-5 py-3 bg-linear-to-r ${skill.color} bg-opacity-10 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all cursor-pointer shadow-lg hover:shadow-xl`}
                  >
                    {/* Linear overlay on hover */}
                    <div
                      className={`absolute inset-0 bg-linear-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex items-center gap-2.5">
                      <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </span>
                      <span className="text-white/90 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>

                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 bg-linear-to-r ${skill.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
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
                        className={`w-12 h-12 rounded-xl bg-linear-to-br ${item.color} p-0.5 group-hover:scale-110 transition-transform`}
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
