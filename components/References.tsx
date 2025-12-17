"use client";

import { motion } from "framer-motion";

interface Reference {
  name: string;
  title: string;
  company: string;
  email: string;
  phone?: string;
  relationship: string;
}

const references: Reference[] = [
  {
    name: "Dr. John Smith",
    title: "Professor of Computer Science",
    company: "University of Wollongong",
    email: "j.smith@uow.edu.au",
    phone: "+61 2 4221 3555",
    relationship: "Academic Supervisor",
  },
  {
    name: "Sarah Johnson",
    title: "Senior Cloud Architect",
    company: "Hewlett Packard Enterprise",
    email: "sarah.johnson@hpe.com",
    relationship: "Former Manager",
  },
  {
    name: "Michael Chen",
    title: "Lead AI Engineer",
    company: "Hysata",
    email: "m.chen@hysata.com",
    phone: "+61 2 9876 5432",
    relationship: "Current Supervisor",
  },
];

export default function References() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-8 text-center"
        >
          References
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mb-16 max-w-2xl mx-auto"
        >
          Available upon request. Below are professional references who can speak to my work experience and capabilities.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {references.map((ref, index) => (
            <motion.div
              key={ref.email}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-1">{ref.name}</h3>
                <p className="text-gray-300 text-sm mb-1">{ref.title}</p>
                <p className="text-blue-400 text-sm">{ref.company}</p>
              </div>

              <div className="space-y-2 text-sm">
                <p className="text-gray-400">
                  <span className="font-medium text-gray-300">Relationship:</span>{" "}
                  {ref.relationship}
                </p>
                <p className="text-gray-400 break-all">
                  <span className="font-medium text-gray-300">Email:</span>{" "}
                  <a
                    href={`mailto:${ref.email}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {ref.email}
                  </a>
                </p>
                {ref.phone && (
                  <p className="text-gray-400">
                    <span className="font-medium text-gray-300">Phone:</span>{" "}
                    {ref.phone}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
