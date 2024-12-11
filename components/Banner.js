import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, ArrowRight, Calendar, Clock } from "lucide-react";
import { Title, TitleLogo } from "./common/Title";

const CallButton = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
      <motion.a
        href="tel:9765000111"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative inline-flex items-center justify-center"
      >
        {/* Pulsing background effect */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-600 to-blue-600 blur-lg opacity-75 group-hover:opacity-100 animate-pulse transition-opacity duration-500" />

        <button className="relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25">
          <PhoneCall className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          <span>Request a Call Back</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </motion.a>

      {/* Available time indication */}
      <div className="flex items-center gap-4 text-gray-400">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">Mon - Fri</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span className="text-sm">9:00 AM - 6:00 PM</span>
        </div>
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <section className="banner relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-blue-900/20 backdrop-blur-sm" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Title title="We are looking forward to start a new project" />
            <br />
            <TitleLogo title="Let's take your business to the next level!" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            <CallButton />
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-l from-blue-500/10 to-transparent rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Banner;
