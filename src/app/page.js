'use client';
import React from 'react'
import { motion, useScroll, useSpring } from "framer-motion";
import Home from "./pages";

export default function Page() {
   const { scrollYProgress } = useScroll();
   const scaleX = useSpring(scrollYProgress, {
     stiffness: 100,
     damping: 30,
     restDelta: 0.001,
   });

  return (
    <>
    <motion.div className="progress-bar"  style={{ scaleX }}  /> 
    <Home/>
     </>
  )
}