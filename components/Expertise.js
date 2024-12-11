import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Code2, Video, Palette, PenTool } from "lucide-react";

const WebDevAnimation = () => (
  <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      className="w-full h-full"
    >
      {/* Animated code lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-0 h-px bg-gradient-to-r from-emerald-500 to-transparent"
          style={{ top: `${20 + i * 20}%`, width: "60%" }}
          animate={{
            scaleX: [0, 1, 0],
            x: [-100, 0, 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}
    </motion.div>
  </div>
);

const VideoAnimation = () => (
  <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <svg viewBox="0 0 100 100" className="w-32 h-32">
        <motion.path
          d="M50 10 A40 40 0 1 1 50 90 A40 40 0 1 1 50 10"
          fill="none"
          stroke="rgba(168, 85, 247, 0.4)"
          strokeWidth="1"
          strokeDasharray="0 1"
          animate={{
            strokeDasharray: ["1 0", "0 1"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </svg>
    </motion.div>
  </div>
);

const GraphicAnimation = () => (
  <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{
          width: "20px",
          height: "20px",
          border: "2px solid rgba(249, 115, 22, 0.4)",
          borderRadius: "4px",
          left: `${25 * (i + 1)}%`,
          top: "50%",
        }}
        animate={{
          rotate: [0, 180],
          scale: [1, 1.2, 1],
          y: [-20, 20],
        }}
        transition={{
          duration: 3,
          delay: i * 0.3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    ))}
  </div>
);

const ContentAnimation = () => (
  <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
    <motion.div className="absolute inset-0">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-4 h-2 bg-gradient-to-r from-teal-500 to-transparent rounded"
          style={{
            top: `${30 + i * 20}%`,
            width: "70%",
            height: "2px",
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: [0, 1, 1, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 4,
            delay: i * 0.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}
    </motion.div>
  </div>
);

const ExpertiseCard = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
      },
    },
  };

  const AnimationComponent = {
    web: WebDevAnimation,
    video: VideoAnimation,
    graphic: GraphicAnimation,
    content: ContentAnimation,
  }[service.type];

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className="group relative"
    >
      <div
        className={`relative p-8 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 
        hover:border-${service.accentColor}-500/50 transition-all duration-500 overflow-hidden`}
      >
        {/* Background Animation */}
        <AnimationComponent />

        {/* Content */}
        <div className="relative z-10">
          <div
            className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${service.gradient} p-0.5`}
          >
            <div className="w-full h-full bg-gray-900 rounded-lg flex items-center justify-center">
              <service.icon
                size={28}
                className={`text-${service.accentColor}-400`}
              />
            </div>
          </div>

          <h3
            className={`text-2xl font-bold text-white mb-4 group-hover:text-${service.accentColor}-400 
            transition-colors duration-300`}
          >
            {service.title}
          </h3>

          <p className="text-gray-400 leading-relaxed mb-6">
            {service.description}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-lg bg-${service.accentColor}-500/10 text-${service.accentColor}-400 
              border border-${service.accentColor}-500/20 hover:bg-${service.accentColor}-500/20 transition-all duration-300`}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Expertise = () => {
  const services = [
    {
      type: "web",
      icon: Code2,
      title: "Web Development & Design",
      description:
        "Transform your online presence with responsive, user-friendly websites that convert. From landing pages to complex web applications, we bring your vision to life.",
      gradient: "from-emerald-600 to-teal-600",
      accentColor: "emerald",
    },
    {
      type: "video",
      icon: Video,
      title: "Video Production",
      description:
        "Create compelling visual stories that engage your audience. Specialized in social media content, promotional videos, and brand storytelling that captures attention.",
      gradient: "from-purple-600 to-pink-600",
      accentColor: "purple",
    },
    {
      type: "graphic",
      icon: Palette,
      title: "Graphic Design",
      description:
        "Stand out with stunning visuals that speak your brand's language. From logos to marketing materials, we design with purpose and impact.",
      gradient: "from-orange-600 to-red-600",
      accentColor: "orange",
    },
    {
      type: "content",
      icon: PenTool,
      title: "Content Creation",
      description:
        "Words that work, content that converts. Our expert writers craft engaging narratives across blogs, websites, and marketing materials.",
      gradient: "from-teal-600 to-cyan-600",
      accentColor: "teal",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Core Expertise
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Transforming ideas into digital reality through our comprehensive
            suite of services. Each offering is crafted with precision and
            delivered with excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ExpertiseCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
