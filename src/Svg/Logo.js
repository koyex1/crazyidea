import { motion } from 'framer-motion'
import React from 'react'
import { variants } from '../Variants/variants'

function Logo({showNavBar}) {
    return (
        <>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30" x="0px" y="0px">
                {/*<title>02</title>*/}
                <g >
                    <motion.path variants={variants.pathBinAddVariantD3} initial="initial" fill="none" animate="move"  stroke="white" strokeWidth="0.8" d="M24,14a3,3,0,0,0-3,3V27a3,3,0,0,0,6,0V17A3,3,0,0,0,24,14Zm1,13a1,1,0,0,1-2,0V17a1,1,0,0,1,2,0Z" />
                    <motion.path variants={variants.pathBinAddVariant} initial="initial" fill="none" animate="move"  stroke="white" strokeWidth="0.8" d="M8,8a3,3,0,0,0-3,3V27a3,3,0,0,0,6,0V11A3,3,0,0,0,8,8ZM9,27a1,1,0,0,1-2,0V11a1,1,0,0,1,2,0Z" />
                    <motion.path variants={variants.pathBinAddVariantD2} initial="initial" fill="none" animate="move"  stroke="white" strokeWidth="0.8" d="M16,2a3,3,0,0,0-3,3V27a3,3,0,0,0,6,0V5A3,3,0,0,0,16,2Zm1,25a1,1,0,0,1-2,0V5a1,1,0,0,1,2,0Z" />
                </g>
               {/* <text x="0" y="47" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">
                </text>
                <text x="0" y="52" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">
                </text>*/}
            </svg>

        </>
    )
}

export default Logo
