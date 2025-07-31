"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, Phone, X, MessagesSquare, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-6 bottom-6 z-50">
      {/* Contact options panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="mb-4 flex flex-col items-end space-y-3"
          >
            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/923010510316"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 text-white py-2 pl-4 pr-5 rounded-full shadow-lg hover:bg-green-600 transition-colors"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-white p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-green-600"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <span className="text-sm font-medium">WhatsApp</span>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+447955426807"
              className="flex items-center gap-3 bg-blue-500 text-white py-2 pl-4 pr-5 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white p-2 rounded-full">
                <Phone className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-sm font-medium">Call</span>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:handsecommerce@gmail.com"
              className="flex items-center gap-3 bg-purple-500 text-white py-2 pl-4 pr-5 rounded-full shadow-lg hover:bg-purple-600 transition-colors"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-white p-2 rounded-full">
                <Mail className="w-4 h-4 text-purple-600" />
              </div>
              <span className="text-sm font-medium">Email</span>
            </motion.a>

            {/* Contact Page */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="flex items-center gap-3 bg-gray-800 dark:bg-gray-700 text-white py-2 pl-4 pr-5 rounded-full shadow-lg hover:bg-gray-900 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="bg-white p-2 rounded-full">
                  <MessagesSquare className="w-4 h-4 text-gray-800" />
                </div>
                <span className="text-sm font-medium">Contact Form</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center w-16 h-16 rounded-full shadow-lg focus:outline-none ${
          isOpen
            ? "bg-red-500 hover:bg-red-600"
            : "bg-primary hover:bg-primary/90"
        } text-white transition-colors`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </motion.button>
    </div>
  );
}
