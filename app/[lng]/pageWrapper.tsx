'use client';

import { motion, AnimatePresence } from 'framer-motion';

import { PageLayout } from '@/layouts/pageLayout';

export const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <PageLayout>
    <AnimatePresence>
      <motion.div
        className="flex w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}>
        {children}
      </motion.div>
    </AnimatePresence>
  </PageLayout>
);
