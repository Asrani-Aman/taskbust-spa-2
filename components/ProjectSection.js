import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Calendar,
  Users,
  Code2,
  Rocket,
  Globe,
  Smartphone,
  Bitcoin,
  Bus,
  Car,
  Award,
} from "lucide-react";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative">
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-all duration-500 blur-xl`}
      />

      <div className="relative bg-gray-900/90 rounded-xl overflow-hidden">
        <div className="h-64 relative overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} Preview`}
            layout="fill"
            objectFit="cover"
            priority
            className="transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent opacity-80" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`px-4 py-2 rounded-full text-xs font-semibold ${project.categoryStyle}`}
            >
              {project.category}
            </span>
          </div>

          {/* Tech Stack Tags */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-black/30 backdrop-blur-sm text-white rounded-full border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="p-8 relative">
          <div className="absolute right-8 top-0 transform -translate-y-1/2">
            <span
              className={`inline-flex items-center justify-center w-12 h-12 ${project.iconBg} rounded-xl shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}
            >
              <project.icon size={24} className="text-white" />
            </span>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-white">
            {project.title}
          </h3>

          <div className="flex gap-6 mb-6 text-gray-400 text-sm">
            {project.stats.map((stat, index) => (
              <span key={index} className="flex items-center gap-2">
                <stat.icon size={16} />
                {stat.value}
              </span>
            ))}
          </div>

          <div className="space-y-3 mb-6 text-gray-300">
            {project.features.map((feature, index) => (
              <p key={index} className="flex items-center space-x-3">
                <span
                  className={`w-1.5 h-1.5 ${project.dotColor} rounded-full`}
                />
                <span className="text-sm">{feature}</span>
              </p>
            ))}
          </div>

          <div className="flex gap-4">
            {project.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center space-x-2 ${project.linkColor} transition-colors`}
              >
                <span className="text-sm font-medium">{link.label}</span>
                <link.icon
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "D'n'D Rodhak",
      category: "Full Stack Application",
      categoryStyle: "bg-blue-500/20 text-blue-400 border border-blue-500/20",
      image: "/images/dndRodhak.png",
      technologies: ["React", "Material UI", "WebSocket", "Node.js"],
      icon: Globe,
      iconBg: "bg-gradient-to-r from-blue-500 to-indigo-500",
      gradient: "from-blue-500 to-indigo-500",
      stats: [
        { icon: Users, value: "50K+ Users" },
        { icon: Bus, value: "Live Tracking" },
        { icon: Smartphone, value: "Mobile App" },
      ],
      features: [
        "Modern UI/UX implementation with Material UI",
        "Real-time bus tracking via WebSockets",
        "Cross-platform mobile app (Himraahi)",
        "Advanced route optimization system",
      ],
      dotColor: "bg-blue-400",
      linkColor: "text-blue-400 hover:text-blue-300",
      links: [
        {
          label: "Visit Site",
          url: "https://dndrodhak.in",
          icon: ExternalLink,
        },
        {
          label: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.himraahi",
          icon: Smartphone,
        },
      ],
    },
    {
      title: "Unified Liquidity NFTs",
      category: "Web3 DeFi",
      categoryStyle:
        "bg-purple-500/20 text-purple-400 border border-purple-500/20",
      image: "/images/ul-nft.png",
      technologies: ["Archway", "CosmWasm", "React", "Euclid Protocol"],
      icon: Bitcoin,
      iconBg: "bg-gradient-to-r from-purple-500 to-pink-500",
      gradient: "from-purple-500 to-pink-500",
      stats: [
        { icon: Code2, value: "Smart Contracts" },
        { icon: Rocket, value: "Cross-chain" },
      ],
      features: [
        "Tokenized liquidity pool positions",
        "Cross-chain liquidity management",
        "NFT marketplace integration",
        "Portfolio management dashboard",
      ],
      dotColor: "bg-purple-400",
      linkColor: "text-purple-400 hover:text-purple-300",
      links: [
        {
          label: "Launch App",
          url: "https://unified-liquidity-nft-euclid-six.vercel.app",
          icon: ExternalLink,
        },
      ],
    },
    {
      title: "Honbil",
      category: "Web3 Platform",
      categoryStyle:
        "bg-emerald-500/20 text-emerald-400 border border-emerald-500/20",
      image: "/images/Honbil.png",
      technologies: ["MERN Stack", "Web3", "Smart Contracts"],
      icon: Car,
      iconBg: "bg-gradient-to-r from-emerald-500 to-teal-500",
      gradient: "from-emerald-500 to-teal-500",
      stats: [
        { icon: Users, value: "1000+ Users" },
        { icon: Car, value: "Vehicle Rental" },
      ],
      features: [
        "Blockchain-based rental agreements",
        "Real-time availability tracking",
        "Secure payment processing",
        "Digital identity verification",
      ],
      dotColor: "bg-emerald-400",
      linkColor: "text-emerald-400 hover:text-emerald-300",
      links: [
        {
          label: "Visit Platform",
          url: "https://www.honbil.com",
          icon: ExternalLink,
        },
      ],
    },
    {
      title: "Electrothon",
      category: "Event Platform",
      categoryStyle: "bg-cyan-500/20 text-cyan-400 border border-cyan-500/20",
      image: "/images/elec.png",
      technologies: ["Next.js", "Node.js", "MongoDB"],
      icon: Award,
      iconBg: "bg-gradient-to-r from-cyan-500 to-blue-500",
      gradient: "from-cyan-500 to-blue-500",
      stats: [
        { icon: Users, value: "5000+ Participants" },
        { icon: Award, value: "National Event" },
      ],
      features: [
        "Dynamic event registration system",
        "Real-time participant tracking",
        "Automated team formation",
        "Comprehensive analytics dashboard",
      ],
      dotColor: "bg-cyan-400",
      linkColor: "text-cyan-400 hover:text-cyan-300",
      links: [
        {
          label: "Visit Site",
          url: "https://electrothon.nith.ac.in",
          icon: ExternalLink,
        },
      ],
    },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#080e10] to-[#0a1418]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
          >
            Featured Success Stories
          </motion.h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto text-center mt-6"
          >
            Transforming ideas into impactful digital solutions across web,
            mobile, and blockchain platforms
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
