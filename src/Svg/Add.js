import { motion } from 'framer-motion'
import React from 'react'

function Add() {
    return (
        <>
           <motion.svg whileHover={{scale: 1.2}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 30" version="1.1" x="0px" y="0px">
               <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                   <path d="M13,11 L20,11 C20.5522847,11 21,11.4477153 21,12 C21,12.5522847 20.5522847,13 20,13 L13,13 L13,20 C13,20.5522847 12.5522847,21 12,21 C11.4477153,21 11,20.5522847 11,20 L11,13 L4,13 C3.44771525,13 3,12.5522847 3,12 C3,11.4477153 3.44771525,11 4,11 L11,11 L11,4 C11,3.44771525 11.4477153,3 12,3 C12.5522847,3 13,3.44771525 13,4 L13,11 Z" fill="#000000" fill-rule="nonzero"/>
                   </g>
                   </motion.svg> 
        </>
    )
}

export default Add
