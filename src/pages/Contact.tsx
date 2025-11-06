import { motion } from "motion/react";
import Button from "../components/Button";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import Input from "../components/Input";
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
      color: "hover:text-purple-400",
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/bunyamin-rustamov-7a9359224/",
      label: "LinkedIn",
      color: "hover:text-cyan-400",
    },
    {
      icon: Send,
      url: "@rustamovb0",
      label: "Telegram",
      color: "hover:text-blue-400",
    },
    {
      icon: Mail,
      url: "mailto:rustmovbunyamin@gmail.com",
      label: "Email",
      color: "hover:text-pink-400",
    },
  ];

  const contactInfo = [
    { icon: Mail, text: "rustmovbunyamin@gmail.com", color: "text-purple-400" },
    { icon: Phone, text: "+994 (55) 778 33 24", color: "text-cyan-400" },
    { icon: MapPin, text: "Azerbaijan, Baku", color: "text-pink-400" },
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
    if (social.label === "Telegram" || social.label === 'Email') {
      navigator.clipboard.writeText(social.label);
      toast(
        <CustomToast title="Success" message="Link copied" variant="success" />
      );
    }else{
      window.open(social.url,"_blank")
    }
  };
  const onSubmit = async (data: FormData) => {
    console.log(data);
    try {
      const response = await fetch("https://formspree.io/f/xdkprdej", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast(
          <CustomToast
            title="Success"
            message="Operation Completed"
            variant="success"
          />
        );
        reset();
      } else {
        // setStatus("error");
      }
    } catch {
      // setStatus("error");
    }

    reset();
  };
  return (
    <section
      id="contact"
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
          <h2 className="mb-4 text-white/60">Get In Touch</h2>
          <div className="w-20 h-1 bg-linear-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
          <p className="mt-6 text-white/60 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8 rounded-2xl border border-white/10 backdrop-blur-md bg-white/5 shadow-xl">
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                {/* Name Field */}
                <div className="space-y-2">
                  <Controller
                    name="name"
                    control={control}
                    rules={{ required: "Name is required" }}
                    render={({ field }) => (
                      <Input
                        label="Name"
                        placeholder="Your name"
                        {...field}
                        error={errors.name && errors.name.message}
                      />
                    )}
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email",
                      },
                    }}
                    render={({ field }) => (
                      <Input
                        label="Mail"
                        placeholder="your.email@example.com"
                        error={errors.email && errors.email.message}
                        {...field}
                      />
                    )}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <Controller
                    name="message"
                    control={control}
                    rules={{ required: "Message is required" }}
                    render={({ field }) => (
                      <>
                        <label>Message</label>
                        <textarea
                          {...field}
                          placeholder="Your message"
                          className="w-full outline-none p-2 rounded-lg bg-white/5 border-2 border-white/10 text-white placeholder:text-white/30 focus:border-purple-500/50 focus:ring-purple-500/20 transition-all"
                          rows={4}
                        />
                      </>
                    )}
                  />
                </div>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full cursor-pointer rounded-lg flex items-center justify-center py-2 px-3 text-black/60 font-medium bg-linear-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 border-0 shadow-lg shadow-purple-500/50"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div className="glass-card p-8 rounded-2xl border border-white/10 backdrop-blur-md bg-white/5 shadow-xl">
              <h3 className="mb-6 text-white/90">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className={`p-3 rounded-lg bg-white/5 ${info.color}`}>
                      <info.icon className="w-5 h-5" />
                    </div>
                    <span className="text-white/70">{info.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 rounded-2xl border border-white/10 backdrop-blur-md bg-white/5 shadow-xl">
              <h3 className="mb-6 text-white/90">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    // href={social.url}
                    // target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    // transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`flex cursor-pointer items-center justify-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 text-white/70 ${social.color}`}
                    onClick={() => handleSocialLinks(social)}
                  >
                    <social.icon className="w-5 h-5" />
                    <span>{social.label}</span>
                  </motion.div>
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
