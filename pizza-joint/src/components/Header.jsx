import React from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const svgVarient = {
  hidden: {
    rotate: -180,
  },
  visible: {
    rotate: 0,
    transition: {
      duration: 1,
    },
  },
}

const pathVarient = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
}

const Header = () => {
  return (
    <header>
      <motion.div className="logo"
        whileHover={{
          scale: 1.1,
        }}
      >
        <motion.svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
          variants={svgVarient}
          initial="hidden"
          animate="visible"
        >
          <motion.path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            variants={pathVarient}
          />
          <motion.path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            variants={pathVarient}
          />
        </motion.svg>
      </motion.div>
      <motion.div className="title"
        initial={{y: -250}}
        animate={{y: -10}}
        transition={{delay: 0.5, type: 'spring', stiffness: 120}}
      >
        <Link to={'/'}>
          <motion.h1
            whileHover={{
              scale: 1.1,
              originX: 0
            }}
          >
            Pizza Joint
          </motion.h1>
        </Link>
      </motion.div>
    </header>
  )
}

export default Header;