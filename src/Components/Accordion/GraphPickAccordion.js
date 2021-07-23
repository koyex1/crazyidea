import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from "@chakra-ui/react"
import { Link } from 'react-router-dom'

function GraphPickAccordion({titleAccordion, handleShowNavBar }) {
    return (
        <>
         <Accordion  allowToggle>
  <AccordionItem border="none" isFocusable={true}>
    <h2>
      <AccordionButton margin="auto"  >
        <Box flex="1"  fontFamily="'Luckiest Guy', cursive" letterSpacing={2} color='#353535' textAlign="center" position="relative" >
          Graphs
          <AccordionIcon/>
        </Box>
        
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div fontWeight="bold" className="accordionFlexColum">

   <div onClick={handleShowNavBar}><Link to="/BarChart" >Bar Chart</Link></div> 
   <div onClick={handleShowNavBar}> <Link>Histogram</Link></div> 
   <div onClick={handleShowNavBar}> <Link >Pie Chart</Link></div>

    </div>
   
      
    </AccordionPanel>
  </AccordionItem>
</Accordion>   
        </>
    )
}

export default GraphPickAccordion
