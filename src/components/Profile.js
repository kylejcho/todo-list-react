import React from 'react'
import { motion } from 'framer-motion'

export default function Profile() {
   return (
      <motion.div
         id='profileOptions'
         style={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.2 }}
      ></motion.div>
   )
}
