'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is Applied Behaviour Analysis (ABA)?',
    answer:
      'ABA is a leading, evidence-based approach to helping children with autism and other behavioural challenges. It focuses on teaching positive behaviours and reducing harmful ones through personalized learning techniques.',
  },
  {
    question: 'How We Work ?',
    answer:
      'Assessment: We start by understanding your child’s needs through interviews, assessments, and observation.\n\nPlan: A licensed Behaviour Consultant creates a Functional Behaviour Analysis with a detailed treatment plan.\n\nTeam: Your child’s care team may include a Behaviour Consultant and/or a Mobile Therapist. There may also be a one-on-one trained specialist called a Behaviour Health Technician.\n\nSupport: We provide care in your child’s natural environment—home, school, or community—to ensure comfort and success.',
  },
  {
    question: 'Our Payment Options ?',
    answer:
      'Most individuals under 21 are eligible for our services at no cost to you through PA Medicaid.\n\nIf you don’t have coverage yet, call us to learn more or to get authorization for services.',
  },
  {
    question: 'Contact Behavioral Analysis & Therapy Partners ?',
    answer:
      '267-507-2719 – Philadelphia\n\n610-664-6200 – Delaware, Montgomery, Bucks counties.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50 px-6 md:px-16 lg:px-32">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold text-center text-blue-800 mb-8"
      >
        Frequently Asked Questions
      </motion.h2>
      
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left text-lg font-semibold text-blue-700 hover:bg-blue-50 transition"
            >
              {faq.question}
              <ChevronDown
                className={`w-6 h-6 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
              />
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="px-5 pb-5 text-gray-700"
              >
                {faq.answer.split('\n').map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="mb-2"
                  >
                    {line}
                  </motion.p>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
