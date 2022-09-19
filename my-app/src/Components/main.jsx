import { Box, Button, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer,Text } from "@chakra-ui/react";

function Main(){
    return(
<Box>
    <Text sx={{fontFamily: "sofia-pro,Roboto,Helvetica,Arial,sans-serif",display:"flex",gap:"5px",justifyContent:"center",fontSize: "40px",
    fontWeight: "400",
    lineHeight: "48px",
    wordBreak: "break-word",
    paddingTop:"20px",
    color: "#333"}}>
        <b>Everything</b>
        <light>you need for</light>
        <b>any workflow</b>
    </Text>
    <div className="div">Easily build your ideal workflow with monday.com building blocks.</div>
    <div  className="w">
    <div  class="wrapper">
        <img src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/board_icon.svg" />
        <span class="iris">Boards</span>
        </div>

    <div class="wrapper">
        <img src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/views_icon.svg" /> 
        <span class="iris">Views</span></div>

    <div class="wrapper">
        <img src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/dashboard_icon.svg"/>
        <span class="iris">Dashboards</span></div>

    <div class="wrapper">
    <img src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/integrations_icon.svg"/>
        <span class="iris">Integrations</span></div>

    <div class="wrapper">
    <img src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/automations_icon.svg"/>
        <span class="iris">Automations</span></div>

    <div class="wrapper">
    <img src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/apps_icon.svg"/>
       <span class="iris">Apps</span></div>


    <div class="wrapper">
    <img src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/docs_icon.svg"/>
        <span class="iris">Docs</span></div>
    </div>


   
</Box>
    )
}
export default Main;