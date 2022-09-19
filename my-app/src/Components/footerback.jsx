import { Box, Button, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import Getstart from "./Getstart";

function Footerback() {
  return (
    <Box>
      <div className="modal">
        <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/customer-support/support_globe.png" />
        <div className="text">
          <p>
            <b>Supporting</b>
            <light>
              {" "}
              your growth <br />
              every step of the way{" "}
            </light>
          </p>
          <p id="p">
            Our support superheroes are a click away to help you get the most
            out of monday.com, so you can focus on working without limits.
          </p>

          <div className="modal2">
            <div className="modal3">
              <img src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/customer-support/phone.png" />
            </div>
            <div id="modal4">
              <h1>24/7</h1>

              <p>
                support anytime, <br /> anywhere
              </p>
            </div>

            <div className="modal3">
              <img src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/customer-support/heart.png" />
            </div>
            <div id="modal4">
              <h1>Voted #1</h1>

              <p>
                Most loved by , <br /> customer G2
              </p>
            </div>

            <div className="modal3">
              <img src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/customer-support/fast.png" />
            </div>
            <div id="modal4">
              <h1>2 hour </h1>

              <p>
                average response, <br /> time
              </p>
            </div>
          </div>

          <br />
          <div id="res">
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

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </Box>
  );
}
export default Footerback;
