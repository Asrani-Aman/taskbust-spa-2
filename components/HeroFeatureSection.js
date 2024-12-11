import React from "react";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { motion } from "framer-motion";
import { Sparkles, Users, Wallet, BarChart3 } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, gradient }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex-1 min-w-[280px] max-w-[320px] relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />

      <div className="relative p-8 bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
        <div className="mb-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-xl" />
          <div
            className={`w-14 h-14 flex items-center justify-center rounded-lg ${gradient}`}
          >
            <Icon className="w-7 h-7 text-white" />
          </div>
        </div>

        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const HeroFeaturesSection = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Smart Task Management",
      description:
        "Efficiently divide and conquer complex projects with our intelligent task distribution system.",
      gradient: "bg-gradient-to-r from-purple-600 to-indigo-600",
    },
    {
      icon: Users,
      title: "Collaborative Platform",
      description:
        "Connect task givers, managers, and doers in a seamless, integrated workspace.",
      gradient: "bg-gradient-to-r from-blue-600 to-cyan-600",
    },
    {
      icon: Wallet,
      title: "Secure Payments",
      description:
        "Transparent and secure payment system for all completed tasks and milestones.",
      gradient: "bg-gradient-to-r from-emerald-600 to-teal-600",
    },
    {
      icon: BarChart3,
      title: "Real-time Progress",
      description:
        "Track project progress and task completion status in real-time.",
      gradient: "bg-gradient-to-r from-orange-600 to-rose-600",
    },
  ];

  return (
    <section className="hero-sec relative overflow-hidden">
      <div className="container relative z-10">
        <div className="heading-title text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Title title="The last digital agency you'll ever need" />
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-10 mt-2">
              TaskBust transforms how work gets done. Our platform connects task
              givers with skilled managers and doers, creating a seamless
              ecosystem for efficient project completion.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
            />
          ))}
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>
    </section>
  );
};

export default HeroFeaturesSection;
