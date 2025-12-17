"use client";

import { motion } from "framer-motion";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-PSA-12345",
  },
  {
    name: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "2023",
    credentialId: "GCP-PCA-67890",
  },
  {
    name: "Microsoft Azure AI Engineer Associate",
    issuer: "Microsoft",
    date: "2023",
    credentialId: "MS-AI-54321",
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    credentialId: "LF-CKA-98765",
  },
];

export default function Certifications() {
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
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                  <p className="text-gray-300 mb-1">{cert.issuer}</p>
                  <p className="text-blue-400 text-sm">{cert.date}</p>
                </div>
                <div className="text-blue-500">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              {cert.credentialId && (
                <p className="text-gray-500 text-xs mt-4">
                  ID: {cert.credentialId}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
