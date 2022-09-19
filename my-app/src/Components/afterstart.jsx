import { Box, Button, color, Text } from "@chakra-ui/react";
import Getstart from "./Getstart";

function After() {
  return (
    <Box
      sx={{
        background: "linear-gradient(rgb(0, 1, 51) 0%, rgb(15, 16, 72) 100%)",
        widht: "97%",
        height: "550px",
        color: "white",
        fontFamily: "sofia-pro,Roboto,Helvetica,Arial,sans-serif",
        WebkitBoxSizing: "border-box",
        boxSizing: "border-box",
      }}
    >
      <Text
        sx={{
          fontSize: "40px",
          paddingTop: "190px",
          lineHeight: "40px",
          fontWeight: "300",
          fontFamily: "sofia-pro,Roboto,Helvetica,Arial,sans-serif",
        }}
      >
        Deliver your best work with monday.com
      </Text>
      <br />

      <Text
        sx={{
          color: "white",
          paddingTop: "1px",
          fontSize: "20px",
          fontFamily: "sofia-pro,Roboto,Helvetica,Arial,sans-serif",
        }}
      >
        No Credit Card Needed ♦ Unlimited time for free plan
      </Text>

      <br />
      <Button
        sx={{
          background: "#6C6CFF",
          padding: " 13px 24px  13px",
          borderRadius: "22px",
        }}
      >
         <Getstart/>
      </Button>
    </Box>
  );
}
export default After;
