import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { motion, stagger } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { toggelVisible } from '../../features/modal/modalSlice'

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
      when: 'beforeChildren',
      staggerChildren: 0.4
    }
  },
  exit: {
    y: '-100vh',
    transition: {
      ease: "easeInOut"
    }
  }
}

const childVarient = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1
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

const Order = () => {

  const dispatch = useDispatch()

  const pizza = useSelector((state) => state.pizza.pizza)

  useEffect(() => {
    setTimeout(() => {
      dispatch(toggelVisible(true))
    }, 3000)
  }, [])
  
  return (
    <motion.div className="container order"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p
        variants={childVarient}
      >You ordered a {pizza?.base} pizza with:</motion.p>
      <motion.div
        variants={childVarient}
      >
        {pizza?.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;