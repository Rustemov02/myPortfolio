import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import CustomToast from "../components/CustomToast";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type SocialType = { icon: any; url: string; label: string; color: string };

const Contact = () => {
  const socialLinks: SocialType[] = [
    {
      icon: Github,
      url: "https://github.com/Rustemov02?tab=repositories",
      label: "GitHub",
      color: "hover:text-white",
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/bunyamin-rustamov-7a9359224/",
      label: "LinkedIn",
      color: "hover:text-white",
    },
    {
      icon: Send,
      url: "@rustamovb0",
      label: "Telegram",
      color: "hover:text-white",
    },
    {
      icon: Mail,
      url: "mailto:rustmovbunyamin@gmail.com",
      label: "Email",
      color: "hover:text-white",
    },
  ];

  const contactInfo = [
    { label: "Email", icon: Mail, text: "rustmovbunyamin@gmail.com" },
    { label: "Call", icon: Phone, text: "+994 (55) 778 33 24" },
    { label: "Location", icon: MapPin, text: "Azerbaijan, Baku" },
  ];

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleSocialLinks = (social: SocialType) => {
    if (social.label === "Telegram" || social.label === "Email") {
      // For Email, extract the address from mailto: if present
      const copyText = social.label === "Email" 
        ? social.url.replace("mailto:", "") 
        : social.url;
        
      navigator.clipboard.writeText(copyText);
      toast(<CustomToast title="Success" message={`${social.label} copied`} variant="success" />);
    } else {
      window.open(social.url, "_blank");
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://formspree.io/f/xdkprdej", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast(<CustomToast title="Success" message="Message sent successfully" variant="success" />);
        reset();
      }
    } catch {
      toast(<CustomToast title="Error" message="Something went wrong" variant="error" />);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-4 block">Communication</span>
          <h2 className="text-4xl font-bold tracking-tight">Let's start a <span className="text-zinc-500 italic">conversation.</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="name"
                control={control}
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Name</label>
                    <input
                      {...field}
                      placeholder="Your name"
                      className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none focus:border-white transition-colors text-white placeholder:text-zinc-700"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                )}
              />

              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                }}
                render={({ field }) => (
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Email</label>
                    <input
                      {...field}
                      placeholder="your@email.com"
                      className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none focus:border-white transition-colors text-white placeholder:text-zinc-700"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                )}
              />

              <Controller
                name="message"
                control={control}
                rules={{ required: "Message is required" }}
                render={({ field }) => (
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Message</label>
                    <textarea
                      {...field}
                      placeholder="Your message..."
                      rows={4}
                      className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none focus:border-white transition-colors text-white placeholder:text-zinc-700 resize-none"
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                  </div>
                )}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center gap-2 text-white font-bold py-4 hover:translate-x-2 transition-transform disabled:opacity-50 disabled:translate-x-0 cursor-pointer"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-16 lg:pl-12"
          >
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-8">Contacts</h3>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    <div className="text-zinc-500 text-xs font-bold uppercase tracking-tighter">
                      {info.label}
                    </div>
                    <div className="text-xl font-medium text-white">{info.text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-8">Socials</h3>
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    onClick={() => handleSocialLinks(social)}
                    className="text-zinc-500 hover:text-white text-lg font-medium transition-colors cursor-pointer"
                  >
                    {social.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
