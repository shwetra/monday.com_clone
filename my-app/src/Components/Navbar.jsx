import { Menu, MenuButton, MenuList, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import "./navbar.css";
import NavClick from "./NavClick";
import Getstart from "./Getstart";

export default function Navbar1() {
  return (
    <div className="main_div">
      <div className="navbar_1">
        <div className="navbar_1img">
          <img
            width="170px"
            height="160px"
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png"
            alt="error"
          />
        </div>

        <Menu>
          <MenuButton
            sx={{
              color: "#888b8d",
              fontFamily: "hero-new,sans-sarif",
              fontSize: "1rem",
            }}
            _hover={{ bg: "transparent" }}
            bg="transparent"
            _expanded={{ color: "black" }}
            className="navbar_1menu"
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            Product
          </MenuButton>
          <NavClick />
        </Menu>

        <Menu>
          <MenuButton
            sx={{
              color: "#888b8d",
              fontFamily: "hero-new,sans-sarif",
              fontSize: "1rem",
            }}
            _hover={{ bg: "transparent" }}
            bg="transparent"
            _expanded={{ color: "black" }}
            className="navbar_1menu"
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            Use Cases
          </MenuButton>
          <NavClick />
        </Menu>

        <Menu>
          <MenuButton
            sx={{
              color: "#888b8d",
              fontFamily: "hero-new,sans-sarif",
              fontSize: "1rem",
            }}
            _hover={{ bg: "transparent" }}
            bg="transparent"
            _expanded={{ color: "black" }}
            className="navbar_1menu"
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            Features
          </MenuButton>
          <NavClick />
        </Menu>

        <Menu>
          <MenuButton
            sx={{
              color: "#888b8d",
              fontFamily: "hero-new,sans-sarif",
              fontSize: "1rem",
            }}
            _hover={{ bg: "transparent" }}
            bg="transparent"
            _expanded={{ color: "black" }}
            className="navbar_1menu"
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            Resources
          </MenuButton>
          <NavClick />
        </Menu>

        <Button
          _hover={{ bg: "white" }}
          className="navbar_1btn"
          sx={{ fontSize: "1rem", background: "tranparent" }}
        >
          Price
        </Button>

        <Button
          _hover={{ bg: "white" }}
          className="navbar_1btn"
          sx={{ fontSize: "1rem", background: "tranparent" }}
        >
          Contact Sales
        </Button>

        <Button
          _hover={{ bg: "white" }}
          className="navbar_1btn"
          sx={{ fontSize: "1rem", background: "tranparent" }}
        >
          Login
        </Button>

        <Button 
          sx={{
            background: "#6C6CFF",
            padding: " 13px 24px  13px",
            borderRadius: "22px",
          }}
        >
          <Getstart/>
        </Button>
        
      </div>
    </div>
  );
}
