import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { addBase } from '../../features/pizza/pizzaSlice';
import { motion } from 'framer-motion';

const containerVarients = {
  hidden: {
    y: '100vh',
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring', 
      stiffness: 70,
      damping: 8,
      mass: 0.4,
      delay: 0.5
    }
  },
  exit: {
    y: '-100vh',
    transition: {
      ease: "easeInOut"
    }
  }
}

const nextVarients = {
  hidden: {
    opacity: 0,
    x: '-100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 120
    }
  }
}

const buttonVarient = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.5
    }
  }
}

const Base = () => {

  const pizza = useSelector((state) => state.pizza.pizza)
  const dispatch = useDispatch()

  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];
  
  return (
    <motion.div className="base container"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
      exit="exit"
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza?.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => dispatch(addBase(base))}
            whileHover={{
              scale: 1.2,
              color: '#fe82bb',
              originX: 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 300
            }}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

        {pizza?.base && (
        <motion.div className="next"
          variants={nextVarients}
        >
          <Link to="/toppings">
            <motion.button
              variants={buttonVarient}
              whileHover='hover'
            >
              Next
            </motion.button>
          </Link>
        </motion.div>)}
    </motion.div>
  )
}

export default Base;