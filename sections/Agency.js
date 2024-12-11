import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Title, TitleSm } from "@/components/common/Title";
import Banner from "@/components/Banner";
import Testimonial from "@/components/Testimonial";

const ParallaxImage = ({ src, speed = 1 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div ref={ref} style={{ y: springY }} className="relative">
      <img src={src} alt="" className="rounded-2xl shadow-2xl" />
    </motion.div>
  );
};

const GlowingNumber = ({ number, label }) => (
  <motion.div whileHover={{ scale: 1.05 }} className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
    <div className="relative p-6 bg-gray-900/90 backdrop-blur border border-gray-800 rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <h3 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-2">
        {number}
      </h3>
      <p className="text-gray-400">{label}</p>
    </div>
  </motion.div>
);

const Agency = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <motion.section
        ref={containerRef}
        className="relative min-h-screen py-20 overflow-hidden bg-gray-900"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23009473' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              opacity: 0.1,
            }}
            animate={{
              y: ["0%", "-50%"],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              y: { duration: 20, repeat: Infinity, ease: "linear" },
              opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute inset-0"
          />
        </div>

        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <TitleSm title="ABOUT TASKBUST" className="inline-block mb-4" />
            <Title
              title="Where Innovation Meets Implementation"
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 mb-8"
            />
            <p className="text-lg text-gray-400 leading-relaxed">
              We're not just another digital agency. We're your partners in
              digital transformation, turning complex challenges into elegant
              solutions.
            </p>
          </motion.div>

          {/* Immersive Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
            <GlowingNumber number="5+" label="Years of Innovation" />
            <GlowingNumber number="100+" label="Projects Delivered" />
            <GlowingNumber number="50+" label="Happy Clients" />
            <GlowingNumber number="15+" label="Team Members" />
          </div>

          {/* Parallax Content Sections */}
          <div className="space-y-32">
            {/* Vision Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Our Vision
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    At TaskBust, we envision a digital landscape where
                    technology empowers businesses to reach their fullest
                    potential. Our approach combines cutting-edge technology
                    with creative problem-solving to deliver solutions that make
                    a real impact.
                  </p>
                </motion.div>
              </div>
              <ParallaxImage src="/images/s1.jpg" speed={0.5} />
            </div>

            {/* Mission Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ParallaxImage src="/images/s4.jpg" speed={-0.5} />
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Our Mission
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Push the boundaries of digital innovation",
                      "Deliver exceptional value through technology",
                      "Create lasting partnerships with our clients",
                      "Build solutions that scale and evolve",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-gray-300">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Progress Timeline */}
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="fixed left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 transform origin-left"
          />
        </div>
      </motion.section>

      <Testimonial />
      <Banner />
    </>
  );
};

export default Agency;
