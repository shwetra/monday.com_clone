import {
  Box,
  Text,
  Heading,
  Button,
  Flex,
  Spacer,
  AspectRatio,
} from "@chakra-ui/react";
import After from "./afterstart";
import Div from "./div";
import { Footer } from "./footer";
import Footerback from "./footerback";
import Main from "./main";
import Navbar1 from "./Navbar";
import Star from "./start";
import Video from "./video";
import Video2 from "./video2";

export default function Head() {
  return (
    <Box>
      <Navbar1 />
      <Box
        sx={{
          width: "100%",
          marginBottom: "10px",
          height: "600px",
          background: "linear-gradient(rgb(0, 1, 51) 0%, rgb(15, 16, 72) 100%)",
        }}
      >
        <Heading
          sx={{
            paddingBottom: "12px",
            paddingTop: "90px",
            fontSize: "70px",
            lineHeight: "85px",
            fontWeight: "400",
            color: "white",
            fontFamily: "sofia-pro,Roboto,Helvetica,Arial,sans-serif",
          }}
        >
          A PlatFrom Build for a <br />
          New Way Of Working
        </Heading>
        <Div />
        <Text
          sx={{
            color: "white",
            fontFamily: "sofia-pro,Roboto,Helvetica,Arial,sans-serif",
            paddingTop: "10px",
            fontSize: "20px",
          }}
        >
          What Would you Like to manage with monday.com Work With OS?{" "}
        </Text>

        <Button
          sx={{
            marginTop: "19px",
            background: "linear-gradient(90deg, #5034FF 25.69%, #B4B4FF 100%)",

            color: "#ffffff",
          }}
        >
          Get Started →
        </Button>

        <Text
          sx={{
            color: "white",
            paddingTop: "5px",
            fontSize: "14px",
            fontFamily: "sofia-pro,Roboto,Helvetica,Arial,sans-serif",
          }}
        >
          No Credit Card Needed ♦ Unlimited time for free plan
        </Text>
      </Box>
      <img
        style={{ marginTop: "-19px" }}
        src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/image.png"
      />
      <Box>
        <Text
          sx={{
            fontSize: "30px",
            color: "#333",
            WebkitBoxSizing: "border-box",
            boxSizing: "border-box",
          }}
        >
          Trusted by 152,000+ customers worldwide
        </Text>

        <Flex className="logos">
          <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/hulu.png" />
          <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/bd.png" />
          <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/canva.png" />
          <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/nhl.png" />
          <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/coca_cola.png" />
          <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/hubspot.png" />
          <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/Electronic_Arts.png" />
          <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/nautica.png" />
          <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/universal.png" />
        </Flex>
        <Flex sx={{ paddingTop: "170px", width: "90%", margin: "auto" }}>
          <h2
            style={{
              color: "#333333",
              fontSize: "32px",
              lineHeight: "40px",
              fontWeight: "300",
              marginLeft:"20%",
            }}
          >
            The Work OS thats lets you shape worksflows,<b>your way</b>
          </h2>
          </Flex>
          <Box>
            <Text
              style={{
                fontSize: "22px",
                lineHeight: "30px",
                wordBreak: "break-word",
                fontWeight: "300",
                textAlign: "center",
                marginTop:"30px",
                marginBottom:"50x",
                fontFamily: "sofia-pro,Roboto,Helvetica,Arial,sans-serif",
              }}
            >
              Boost your team’s alignment, efficiency, and productivity by
              customizing any workflow to fit your needs.
            </Text>
          </Box>
       
        <Button
          sx={{
            marginLeft: "100px",
            backgroundColor: "#6C6CFF",
            color: "#ffffff",
            borderRadius: "40px",
            padding: "16px 32px 16px 31px;",
            fontWeight: "400",
            cursor: "pointer",
          }}
        >
          Get Started →
        </Button>
      </Box>
      <br />
      <br />
      <img
        style={{ marginTop: "-19px" }}
        src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/image.png"
      />
      <br />
      <br />
      <br />
      <br />
      <Video />
      <Main /> <br />
      <Video2 />
      <Footerback />
      <br />
      <Star />
      <br />
      <After />
      <br />
      <br />
      <br />
      <Footer />
      <br />
    </Box>
  );
}

