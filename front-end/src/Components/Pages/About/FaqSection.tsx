import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight, MessageCircle } from "lucide-react";

const faqData = [
  {
    question: "What is Campo de Cricket Beas De Segura?",
    answer:
      "Campo de Cricket Beas De Segura is a grassroots cricket ground in Beas De Segura, Spain, designed to host competitive matches and tournaments.",
  },
  {
    question: "When are the tournaments held?",
    answer:
      "Major tournaments are typically held during the spring and late summer seasons when weather conditions are ideal.",
  },
  {
    question: "How can I register a team?",
    answer:
      "You can register a team through our website registration page or by contacting our team directly.",
  },
  {
    question: "Can individuals visit the ground?",
    answer:
      "Yes! Individuals are welcome to visit the ground, watch matches and experience the cricket environment.",
  },
  {
    question: "What facilities are available for players?",
    answer:
      "We provide professional nets, changing rooms, player lounges and other modern facilities.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="grid lg:grid-cols-3 gap-6 items-start">

          {/* Accordion */}
          <div className="lg:col-span-2 space-y-3">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition"
                  >
                    <span className="text-base font-medium text-gray-800">
                      {item.question}
                    </span>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-blue-600"
                    >
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                      >
                        <div className="px-5 pb-4 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-3">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-gray-100 shadow-lg rounded-xl p-7 flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center mb-6">
              <MessageCircle className="text-white" size={26} />
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Have more questions?
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Contact us anytime to learn more about tournaments, facilities,
              or joining our cricket community.
            </p>

            <button className="w-full group flex items-center justify-between pl-5 pr-2 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:border-red-400 transition">
              Speak To The Team

              <span className="bg-white border border-red-200 text-red-500 rounded-full p-1.5 group-hover:bg-red-500 group-hover:text-white transition">
                <ArrowRight size={15} />
              </span>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;