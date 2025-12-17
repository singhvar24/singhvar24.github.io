"use client";

import { motion } from "framer-motion";

interface Qualification {
  degree: string;
  institution: string;
  period: string;
  description: string;
  grade?: string;
}

const qualifications: Qualification[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Wollongong (UOW)",
    period: "2024 – 2025",
    description: "Specialization in Artificial Intelligence and Cloud Computing",
    grade: "High Distinction",
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Engineering Institute",
    period: "2017 – 2021",
    description: "Focus on software engineering and distributed systems",
    grade: "First Class Honours",
  },
];

export default function Qualifications() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
        >
          Qualifications
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-blue-500/30" />

          <div className="space-y-12">
            {qualifications.map((qual, index) => (
              <motion.div
                key={qual.degree}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-20"
              >
                {/* Dot on timeline */}
                <div className="absolute left-[-6px] md:left-[26px] top-2 w-3 h-3 bg-blue-500 rounded-full ring-4 ring-blue-500/20" />

                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <h3 className="text-2xl font-bold text-white">{qual.degree}</h3>
                    <span className="text-blue-400 text-sm md:text-base mt-1 md:mt-0">
                      {qual.period}
                    </span>
                  </div>
                  <p className="text-lg text-gray-300 mb-2">{qual.institution}</p>
                  <p className="text-gray-400 mb-2">{qual.description}</p>
                  {qual.grade && (
                    <p className="text-blue-400 font-medium">Grade: {qual.grade}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
