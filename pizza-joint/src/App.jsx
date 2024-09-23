import React, { useState } from 'react';
import Header from './components/Header';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Base, Home, Modal, Order, Toppings } from './components';
import { useDispatch } from 'react-redux';
import { toggelVisible } from '../features/modal/modalSlice'

function App() {

  const location = useLocation()
  const dispatch = useDispatch()

  return (
    <>
      <Header />
      <Modal />
        {/* <main>
          <AnimatePresence >
            <Outlet location={location} key={location.key} />
          </AnimatePresence>
        </main> */}

        <AnimatePresence mode='wait' onExitComplete={() => dispatch(toggelVisible(false))}>
          <Routes location={location} key={location.key}>
            <Route path='/' element={<Home />} />
            <Route path='/base' element={<Base />} />
            <Route path='/toppings' element={<Toppings />} />
            <Route path='/order' element={<Order />} />
          </Routes>
        </AnimatePresence>
    </>
  );
}

export default App;