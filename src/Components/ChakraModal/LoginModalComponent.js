import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    FormLabel,
    FormControl,
    Button,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react"

function LoginModalComponent({ isOpen, onClose }) {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                isCentered
            >
                <ModalOverlay backgroundColor="#3c6e71" />
                <ModalContent backgroundColor='#353535'>
                    <ModalHeader fontSize={20} color="#3c6e71" fontFamily="'Luckiest Guy', cursive" >START PLOTTING</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel fontWeight="extrabold" fontSize={16}  color="#d9d9d9" >First name</FormLabel>
                            <Input size="lg" fontWeight="extrabold" fontSize={16}   color="#ffffff" backgroundColor="#d9d9d9" variant="filled" placeholder="Full Name" />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel fontSize={16} fontWeight="extrabold" color="#d9d9d9">Password</FormLabel>
                            <InputGroup size="md">
                                <Input
                                size="lg"
                                fontWeight="extrabold" fontSize={16} 
                                backgroundColor="#d9d9d9" variant="filled" color="#000000" 
                                    pr="4.5rem"
                                    type={show ? "text" : "password"}
                                    placeholder="Enter password"
                                />
                                <InputRightElement width="4.5rem">
                                    <Button fontWeight="extrabold" fontSize={16}  h="1.75rem" size="lg" onClick={handleClick}>
                                        {show ? "Hide" : "Show"}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button backgroundColor='#353535' color="#3c6e71" fontFamily="'Luckiest Guy', cursive" fontSize={20} mr={3}>
                            Start
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>
    )
}

export default LoginModalComponent
