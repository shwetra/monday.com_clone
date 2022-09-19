import { AspectRatio, Box } from "@chakra-ui/react";

function Video() {
  return (
    <Box
      sx={{
        background: "linear-gradient(rgb(0, 1, 51) 0%, rgb(15, 16, 72) 100%)",
        height: "700px",
        width: "100%",
      }}
    >
      <AspectRatio sx={{ margin: "auto" }} maxW="100%" maxH="90%" ratio={1}>
        <iframe
          width="1110"
          height="624"
          src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/products_video.mp4"
          title="Meet the New HappyFox Help Desk Software"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write;
          encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </AspectRatio>
    </Box>
  );
}
export default Video;
