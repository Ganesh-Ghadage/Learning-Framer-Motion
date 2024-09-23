import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearPizza } from '../../features/pizza/pizzaSlice'

const backdrop = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
}

const modal = {
    hidden: { 
        y: "-100vh", 
        opacity: 0 
    },
    visible: { 
        y: "200px", 
        opacity: 1,
        transition: { delay: 0.5 }
    },
}

function Modal() {

    const isVisible = useSelector((state) => state.modal.isVisible)

    const dispatch = useDispatch()

    console.log(isVisible);
    


  return (
    <AnimatePresence mode='wait' onExitComplete={() => dispatch(clearPizza())}>
        {isVisible && 
        <motion.div className='backdrop'
            variants={backdrop}
            initial='hidden'
            animate='visible'
        >   
            <motion.div className='modal'
                variants={modal}
            >
                <p>Want to make another Pizaa?</p>
                <Link to={'/'}>
                    <button>Start Again</button>
                </Link>
            </motion.div>

        </motion.div>}
    </AnimatePresence>
  )
}

export default Modal