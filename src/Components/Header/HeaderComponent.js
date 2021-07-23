import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import menuIcon from '../../Assets/Icons/menu.png'
import Logo from '../../Svg/Logo'
import TypingComponent from '../TypingComponent/TypingComponent'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    useDisclosure,
  } from "@chakra-ui/react"
import LoginModalComponent from '../ChakraModal/LoginModalComponent'
import GraphPickAccordion from '../Accordion/GraphPickAccordion'
import { useRef } from 'react'
import { useClickAway } from 'react-use'


function HeaderComponent() {
    const [showNavBar, setShowNavBar] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dropDownRef = useRef()

    const handleShowNavBar = () => {
         setShowNavBar(!showNavBar)
         console.log('in')
    }

   

        useClickAway(dropDownRef, ()=>{
            setShowNavBar(false)           
    
        })
    

    

   


    return (
        <>
            <nav>

                <div className="crazyNavBarRow1">
                    <div className={showNavBar ? "crazyLogo adjust" : " crazyLogo "}>
                        <h1 >GRAPHS</h1>
                        <div className={showNavBar ? "crazyLogoWidth" : ''}><Logo /></div>

                    </div>


                    <div className="contactMenu">
                        <Menu backgroundColor="#3c6e71">
                            <MenuButton 
                             
                             _active={{
                                background: "#3c6e71",
                                
                              }}
                              _hover={{
                                background: "#3c6e71",
                                
                              }}
                              
                            backgroundColor="#3c6e71" as={Button}>
                            <i class='bx bx-user-circle'></i>
                            </MenuButton>
                            <MenuList backgroundColor="#ffffff">
                                <MenuItem 
                                
                                onClick={onOpen}

                                _hover={{
                                background: "#3c6e71",
                                 }}

                                 _focus={{
                                    background: "#ffffff",
                                     }}
                                color="#353535"
                                fontFamily="'Luckiest Guy', cursive"
                                fontWeight="extrabold"
                              >Login</MenuItem>
                                
                            </MenuList>
                        </Menu>
                        <i onClick={handleShowNavBar} class={showNavBar ? 'bx bx-x' : 'bx bx-menu'}></i>
                    </div>

                </div>


                <div ref={dropDownRef} className={showNavBar ? "crazyNavBarRow2 show" : "crazyNavBarRow2 hide"}>
                    <div onClick={handleShowNavBar} className="crazyMenuList"><Link to="/">Home</Link></div>
                    <div className="crazyMenuList"><GraphPickAccordion handleShowNavBar={handleShowNavBar} /></div>
                    <div onClick={handleShowNavBar} className="crazyMenuList"><Link>Contact</Link></div>
                </div>

            </nav>
            

            <LoginModalComponent isOpen={isOpen} onClose={onClose} />
        </>
    )
}

export default HeaderComponent
