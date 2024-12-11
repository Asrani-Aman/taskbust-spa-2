import React from "react";
import { motion } from "framer-motion";

const TaskBustLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
    >
      <div className="relative w-48 h-48">
        {/* Rotating outer ring */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 border-4 border-t-emerald-500 border-r-blue-500 border-b-purple-500 border-l-teal-500 rounded-full"
        />

        {/* Inner content */}
        <div className="absolute inset-4 flex items-center justify-center">
          <motion.div
            animate={{ scale: [0.8, 1, 0.8] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
              Task
            </span>
            <span className="text-3xl font-bold text-white">Bust</span>

            {/* Animated icons representing services */}
            <div className="absolute -inset-6">
              {/* Web Development Icon */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full"
              >
                <code className="text-emerald-400">&lt;/&gt;</code>
              </motion.div>

              {/* Graphic Design Icon */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.75,
                }}
                className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2"
              >
                <span className="text-blue-400">✦</span>
              </motion.div>

              {/* Video Icon */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1.5,
                }}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full"
              >
                <span className="text-purple-400">▶</span>
              </motion.div>

              {/* Web3 Icon */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 2.25,
                }}
                className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2"
              >
                <span className="text-teal-400">⟠</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Progress indicator */}
        <svg className="absolute inset-0 w-full h-full rotate-90">
          <motion.circle
            cx="96"
            cy="96"
            r="94"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="565.48"
            className="text-gray-800"
          />
          <motion.circle
            cx="96"
            cy="96"
            r="94"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="565.48"
            initial={{ strokeDashoffset: 565.48 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-emerald-500"
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default TaskBustLoader;
