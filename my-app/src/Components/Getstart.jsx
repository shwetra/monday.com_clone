import { Box, Text } from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,

    
  } from '@chakra-ui/react'
import Getlogin from "./Getlog";
import Inputtag from "./Input";

export default function Getstart() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
<Box >
      <Button style={{color:"blue" , background: "#6C6CFF",}} onClick={onOpen}>Getstart</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent style={{backgroundColor:" rgb(62, 255, 239)",paddingLeft:"20px"}}>
          <ModalHeader style={{textAlign:"center"}}>Sign up for free</ModalHeader>
          <ModalCloseButton />
          <ModalBody >


{/* //main */}
            <Box >
              <Text style={{textAlign:"center"}}>Full access. No credit card needed.</Text>
              <br />
            <FormControl>
                <FormLabel>Email address</FormLabel>
                {/* <Input style={{border:"1px solid black",
            width:"90%",borderRadius:"5PX"}} type='email' placeholder="Enter your work email" required/>                */}
            <Inputtag/>
            <br />
            <br />
            <br />
            <Button colorScheme='orange' width="90%" onClick={(()=>  <Getlogin/>)}>Countinue</Button>
            </FormControl>
            </Box>

          

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={160}  onClick={onClose}>
              Start Later
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Box>
  )
}
    