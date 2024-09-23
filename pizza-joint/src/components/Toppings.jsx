import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { addTopping } from '../../features/pizza/pizzaSlice';
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

const Toppings = () => {

  const pizza = useSelector((state) => state.pizza.pizza)
  const dispatch = useDispatch()

  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  const addToppingList = (topping) => {
    let newToppings;
    if(!pizza?.toppings.includes(topping)){
      newToppings = [...pizza?.toppings, topping];
    } else {
      newToppings = pizza?.toppings.filter(item => item !== topping);
    }
    dispatch(addTopping(newToppings));
  }

  return (
    <motion.div className="toppings container"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza?.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addToppingList(topping)}
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
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          variants={buttonVarient}
          whileHover='hover'
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;