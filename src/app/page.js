'use client';
import React from 'react'
import { motion, useScroll } from "framer-motion"
import Home from "./pages";

export default function page() {
  const { scrollYProgress } = useScroll();

  return (
    <>
    <motion.div style={{ scaleX: scrollYProgress,position:'fixed',left:0,right:0,background:'#870000' ,height:5 }} /> 
    <Home/>
     </>
  )
}