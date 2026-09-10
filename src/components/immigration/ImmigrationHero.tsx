'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface HeroCTA {
  label: string
  href: string
}

interface ImmigrationHeroProps {
  heading: string
  description: string
  primaryCta?: HeroCTA
  secondaryCta?: HeroCTA
  showScrollIndicator?: boolean
}

export default function ImmigrationHero({
  heading,
  description,
  primaryCta = { label: 'Free Eligibility Check', href: '/contact' },
  secondaryCta = { label: 'Browse All Guides', href: '/immigration/blog' },
  showScrollIndicator = true,
}: ImmigrationHeroProps) {
  return (
    <motion.section
      className="relative bg-gradient-to-br from-accent-orange-red/85 via-[#436175]/75 to-[#585a5e]/85 pt-48 pb-24 lg:pt-36 lg:pb-32 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#436175]/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#436175]/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            {heading}
          </motion.h1>

          <motion.p
            className="text-xl lg:text-2xl mb-8 text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#436175] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                {primaryCta.label}
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                {secondaryCta.label}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {showScrollIndicator && (
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-gray-400 uppercase tracking-wider">Scroll</span>
              <motion.div
                className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-1 h-3 bg-white rounded-full mt-2" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}
