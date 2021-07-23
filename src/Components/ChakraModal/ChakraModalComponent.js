import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Box,
    Button,
} from "@chakra-ui/react"
import React from 'react'


function ChakraModalComponent({ isOpen, onClose , title, body}) {
    return (
        <>
            <Modal motionPreset="slideInRight" isCentered w={900} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay backgroundColor="#3c6e71"/>
                <ModalContent  w={900} backgroundColor='#353535'>
                    <ModalHeader letterSpacing={2} color='#3c6e71' fontFamily="'Luckiest Guy', cursive" fontSize={25} >{title}</ModalHeader>
                   
                    <ModalCloseButton />
                    <ModalBody color="#ffffff">
                    {body}
                    </ModalBody>

                    <ModalFooter  fontFamily="'Luckiest Guy', cursive" >
                            <Button fontSize={20} backgroundColor="#353535" fontWeight="extrabold"  color="#3c6e71" fontFamily="'Luckiest Guy', cursive" mr={3} onClick={onClose}>
                                CLOSE
                            </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ChakraModalComponent
