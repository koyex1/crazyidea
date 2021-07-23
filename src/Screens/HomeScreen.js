import { useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import ChakraModalComponent from '../Components/ChakraModal/ChakraModalComponent'
import Accurate from '../Svg/Accurate'
import Best from '../Svg/Best'
import Customizable from '../Svg/Customizable'
import Readable from '../Svg/Readable'
import Simple from '../Svg/Simple'
import Versatile from '../Svg/Versatile'
import {graphFunctions} from '../Data/data'
import TypingComponent from '../Components/TypingComponent/TypingComponent'


function HomeScreen() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [title, setTitle] = useState()
    const [body, setBody] = useState()
    

    const handleOpen=(e, index)=>{

    if(index==1){
        setTitle('ACCURATE')
        setBody(graphFunctions.accurate)
}
if(index==2){
    setTitle('SIMPLE')
    setBody(graphFunctions.simple)
}
if(index==3){
    setTitle('READABLE')
    setBody(graphFunctions.readable)
}
if(index==4){
    setTitle('CUSTOMIZABLE')
    setBody(graphFunctions.customizable)
}
if(index==5){
    setTitle('THE BEST')
    setBody(graphFunctions.best)
}
if(index==6){
    setTitle('VERSATILE')
    setBody(graphFunctions.versatile)
}
    }


    return (
        <>
        <div className="typingEffectBox crazyMiddle">
                <div className=""><TypingComponent /></div>
            </div>
        <div>

            
        <div className="cardContainer">
            <div className="functionCard"> 
                <div className="svgBox">
                <Accurate/>
                </div>
                <div className="crazyCardTitle">
                    Accurate
                </div>
                <div className="crazyCardBody">
                How to Get Started and Install Chakra UI. Inside your respective directory, install 
                </div>
                <div onClick={e=>{handleOpen(e, 1)}}>
                <div onClick={onOpen}  className="seeMore">
                    Read More
                </div>
                </div>
            </div>

            <div className="functionCard"> 
                <div className="svgBox">
                <Simple/>
                </div>
                <div className="crazyCardTitle">
                    Simple
                </div>
                <div className="crazyCardBody">
                How to Get Started and Install Chakra UI. Inside your respective directory, install 
                </div>
                <div onClick={e=>{handleOpen(e, 2)}}>
                <div onClick={onOpen}  className="seeMore">
                    Read More
                </div>
                </div>
            </div>

            <div className="functionCard"> 
                <div className="svgBox">
                <Readable/>
                </div>
                <div className="crazyCardTitle">
                    Readable
                </div>
                <div className="crazyCardBody">
                How to Get Started and Install Chakra UI. Inside your respective directory, install 
                </div>
                <div onClick={e=>{handleOpen(e, 3)}}>
                <div onClick={onOpen}  className="seeMore">
                    Read More
                </div>
                </div>
            </div>

            <div className="functionCard"> 
                <div className="svgBox">
                <Customizable/>
                </div>
                <div className="crazyCardTitle">
                    Customizable
                </div>
                <div className="crazyCardBody">
                How to Get Started and Install Chakra UI. Inside your respective directory, install 
                </div>
                <div onClick={e=>{handleOpen(e, 4)}}>
                <div onClick={onOpen}  className="seeMore">
                    Read More
                </div>
                </div>
            </div>

            <div className="functionCard"> 
                <div className="svgBox">
                <Best/>
                </div>
                <div className="crazyCardTitle">
                    The Best
                </div>
                <div className="crazyCardBody">
                How to Get Started and Install Chakra UI. Inside your respective directory, install 
                </div>
                <div onClick={e=>{handleOpen(e, 5)}}>
                <div onClick={onOpen}  className="seeMore">
                    Read More
                </div>
                </div>
            </div>

            <div className="functionCard"> 
                <div className="svgBox">
                <Versatile/>
                </div>
                <div className="crazyCardTitle">
                    Versatile
                </div>
                <div className="crazyCardBody">
                How to Get Started and Install Chakra UI. Inside your respective directory, install 
                </div>
                <div onClick={e=>{handleOpen(e, 6)}}>
                <div onClick={onOpen}  className="seeMore">
                    Read More
                </div>
                </div>
            </div>
        </div>
        </div>
        <ChakraModalComponent title={title} body={body} isOpen={isOpen} onClose={onClose} />
        </>
    )
}

export default HomeScreen
