import { Briefcase, Code2, GraduationCap } from "lucide-react";

const info = {
  skills: [
    { name: "CSS", color: "from-blue-400 to-cyan-400", icon: "🎯" },
    { name: "JavaScript", color: "from-yellow-500 to-amber-500", icon: "⚡" },
    { name: "React", color: "from-cyan-500 to-blue-500", icon: "⚛️" },
    {
      name: "Redux Toolkit",
      color: "from-purple-500 to-emerald-500",
      icon: "🟢",
    },
    { name: "Context API", color: "from-orange-500 to-amber-500", icon: "🎬" },
    { name: "TypeScript", color: "from-blue-500 to-indigo-500", icon: "📘" },
    { name: "Next.js", color: "from-indigo-500 to-purple-500", icon: "▲" },
    { name: "Tailwind CSS", color: "from-purple-500 to-pink-500", icon: "🎨" },
    { name: "Material UI", color: "from-pink-500 to-rose-500", icon: "✨" },
    { name: "Restful API", color: "from-violet-500 to-purple-500", icon: "◈" },
    { name: "Git", color: "from-red-500 to-orange-500", icon: "🔀" },
    {
      name: "Responsive Design",
      color: "from-emerald-500 to-teal-500",
      icon: "📱",
    },
  ],

  timeline: [
    {
      icon: Briefcase,
      title: "Junior Frontend Developer",
      company: "Siesco MMC.",
      period: "Dec 2024 - Present",
      description:
        "I actively work on real-world projects, using React, Next.js, and Tailwind CSS to turn ideas into smooth, modern, and visually clean web experiences.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Code2,
      title: "Frontend Programming Trainer",
      company: "UCode Course.",
      period: "Oct 2022 - Jan 2023",
      description:
        "I teach the basics of HTML, CSS, and JavaScript, helping others understand how modern websites are built from the ground up.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: GraduationCap,
      title: "B.S. Computer Engineering",
      company: "Azerbaijan State Oil and Industry University",
      period: "2019 - 2023",
      description:
        "Specialized in Computer Engineering with a growing focus on modern technologies and user-centered digital experiences.",
      color: "from-indigo-500 to-purple-500",
    },
  ],
};

export default info;
