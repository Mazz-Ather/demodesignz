'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { CheckCircle2 } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i:any) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2 } }),
};

const WhyUs: FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-11 lg:px-8">
        {/* Heading & Intro Paragraph */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl text-center md:text-6xl font-bold text-blue-800 mb-4"
        >
          Why Us?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center md:px-20 pb-9 text-gray-800 text-base md:text-lg mb-8"
        >
          At BATP, we provide evidence-based, compassionate care to help children, teens,
          and young adults overcome behavioural challenges and thrive.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            {/* Feature Blocks */}
            <div className="space-y-6">
              {[ 
                { title: "We Help Children", text: "We help children, teens, and young adults overcome behavioural challenges and thrive through proven techniques and dedicated support." },
                { title: "Personalized Care", text: "At BATP, we use Applied Behaviour Analysis (ABA) and other proven methods to provide personalized care." },
                { title: "Who We Serve", text: "We work with children and young adults aged birth to 21 in Philadelphia and surrounding areas." },
                { title: "Our Priority", text: "Our top priority is to provide compassionate and effective therapy that improves the quality of life for both children and their families." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="relative pl-4 border-l-4 border-blue-800"
                >
                  <h3 className="text-blue-700 text-lg md:text-xl font-semibold flex items-center gap-2">
                    {item.title} <CheckCircle2 className="w-5 h-5" />
                  </h3>
                  <p className="text-gray-600 mt-1">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side (Image) */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="order-first md:order-last"
          >
            <Image
              src="/images/therapist2.jfif"
              alt="Why Us"
              className="w-full h-auto object-cover rounded-md shadow-md"
              height={900}
              priority
              width={700}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
