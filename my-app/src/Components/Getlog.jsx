import {
  border,
  Box,
  FormControl,
  FormLabel,
  Input,
  header,
  Text,
  Button,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";

export default function Getlogin() {
  return (
    <Box
      style={{
        display: "flex",
        marginLeft: "25%",
        marginRight: "25%",
        border: "2px solid black",
      }}
    >
      <Box style={{ width: "60%", padding: "20px" }}>
        <Text fontSize="30px" marginLeft="-35%">
          {" "}
          Set up your account
        </Text>
        <FormControl isRequired>
          <br />
          <FormLabel>Full name</FormLabel>

          <Input placeholder="Full name" />
          <br />
          <br />
          <FormLabel>Create Password</FormLabel>
          <Input type="password" placeholder="Create Password" />
          <br />
          <br />
          <FormLabel>Account Name</FormLabel>
          <Input type="password" placeholder="Account Name" />
          <br />
          <br />
          <Checkbox defaultChecked>
            I agree to the Terms of Service and Privacy Policy
          </Checkbox>
          <br />
          <br />
          <Button width="400px" colorScheme="orange">
            Continue
          </Button>
        </FormControl>
      </Box>
      <Box
        style={{
          width: "40%",
          color: "white",
          paddingTop: "100px",
          paddingLeft: "20px",
          paddingRight: "30px",
          backgroundImage:
            "url('https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/sign-up.png')",
        }}
      >
        "Now that we have monday.com Work OS as the backbone of our organization
        I frrl I have an overview I can trust." <br />
        -------- <br /> Charlie MacGregor <br /> Founder & CEO
      </Box>
    </Box>
  );
}
