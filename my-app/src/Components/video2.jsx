import { AspectRatio, Box, Flex, Text } from "@chakra-ui/react";

export default function Video2() {
  return (
    <Flex sx={{ width: "95%", justifyContent: "space-evenly" }}>
      <Box
        sx={{
          background: " rgba(0, 0, 0, 0.35) 0px 5px 15px;",
          height: "700px",
          width: "100%",
        }}
      >
        <AspectRatio
          sx={{
            marginTop: "50px",
            marginLeft: "84px",
            boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px;",
          }}
          maxW="56%"
          maxH="50%"
          ratio={1}
        >
          <iframe
            width="1110"
            height="624"
            src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/7_status.mp4"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write;
          encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </AspectRatio>
      </Box>

      <Text
        sx={{
          marginTop: "75px",
          width: "50%",
          height: "fit-content",
          fontSize: "30px",
          marginLeft: "-80px",
          color: "#333333",
        }}
      >
        Everything starts with a visual board — the core of monday.com Work OS.
        Tailor it your way and manage anything from projects to departments.
      </Text>
    </Flex>
  );
}

