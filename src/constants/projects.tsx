import birilmek from "../assets/birilmek.jpg";
import booking from "../assets/booking.png";
import etihi from "../assets/etihi.png";
import hiri from "../assets/Hiri.svg";
import propertyPulse from "../assets/propertyPulse-wallpaper.png";
export const projects = [
  {
    id: 1,
    title: "HIRI",
    description:
      "Modern, multilingual job platform with a clean and responsive design.",
    longDescription:
      "Hiri is a modern and responsive job platform that connects job seekers and companies through a clean, user-friendly interface. It features multilingual support, dynamic vacancy listings, and a professional design focused on accessibility and usability.",
    image: hiri,
    tags: ["ReactJs", "NextJs", "TailwindCSS"],
    liveUrl: "https://hiri.siesco.studio/en",
    githubUrl: "",
  },
  {
    id: 2,
    title: "ETİHİ",
    description:
      "ETİHİ is the official platform of Azerbaijan’s Teachers’ Union, sharing news and supporting educators’ rights and collaboration.",
    longDescription:
      "ETİHİ is the digital platform of Azerbaijan’s Teachers’ Trade Union, providing news, organizational information, and a hub for educators’ rights and collaboration.",
    image: etihi,
    tags: ["Next", "TailwindCSS"],
    liveUrl: "https://etihi.org/",
    githubUrl: "",
  },
  {
    id: 3,
    title: "Property Pulse",
    description:
      "Property Pulse is a platform for renting and listing properties easily.",
    longDescription:
      "It is a sleek rental‑platform where tenants can find their dream place and owners can list properties for long‑term or short‑term stays.",
    image: propertyPulse,
    tags: ["NextJs", "TailwindCss", "MongoDB", "OAuth", "Cloudinary"],
    liveUrl: "https://yourproperties.vercel.app/",
    githubUrl: "https://github.com/Rustemov02/Coursera-NextJs-Properties",
  },

  {
    id: 4,
    title: "Online Booking",
    description:
      "A modern full-stack hotel booking platform built with TypeScript, designed for smooth browsing and reservation experiences.",
    longDescription:
      "Booking is a full-stack hotel reservation system built with TypeScript, offering a seamless interface to browse hotels, filter options, and make bookings. It combines a robust backend with a clean frontend to deliver a complete booking experience.",
    image: booking,
    tags: ["ReactJs", "TailwindCss", "MongoDB", "Express"],
    liveUrl: "https://booking-02.vercel.app",
    githubUrl: "https://github.com/Rustemov02/booking",
  },
  {
    id: 5,
    title: "Birilmek",
    description:
      "A clean and minimal e-commerce project for showcasing handmade crafts with style and simplicity.",
    longDescription:
      "Birilmek is a minimalist e-commerce page built with React and Tailwind CSS, created to showcase and sell unique handmade products. Its goal is to combine simplicity and aesthetics, offering a smooth browsing experience that highlights each craft's individuality.",
    image: birilmek,
    tags: ["React", "Tailwind CSS", "EmailJs"],
    liveUrl: "https://birilmek.vercel.app/",
    githubUrl: "https://github.com/Rustemov02/birilmek",
  },
];
