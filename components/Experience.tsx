"use client";

import { motion } from "framer-motion";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Hysata",
    role: "AI & Cloud Engineer",
    period: "2025",
    description: "Working on cutting-edge AI and cloud infrastructure solutions",
  },
  {
    company: "University of Wollongong (UOW)",
    role: "Research & Development",
    period: "2024 – 2025",
    description: "Advanced research in AI and cloud computing technologies",
  },
  {
    company: "Hewlett Packard Enterprise (HPE)",
    role: "Cloud Engineer",
    period: "2021 – 2022",
    description: "Developed and maintained enterprise cloud solutions",
  },
];

export default function Experience() {
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
          Experience
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-blue-500/30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
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
                    <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                    <span className="text-blue-400 text-sm md:text-base mt-1 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-lg text-gray-300 mb-2">{exp.role}</p>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
