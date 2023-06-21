import { Box, Fade, Text } from "@chakra-ui/react";
import HeroForm from "../HeroForm/HeroForm";

const HeroBanner = () => {
  return (
    <Fade in>
    <Box
      position="relative"
      minHeight={{ base: "110vh", sm: "60vh" }}
      backgroundImage={`url("./hero/heroBG.jpg")`}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundAttachment="fixed"

    >
      <Box 
      position="absolute" 
      width="100%" 
      height="100%" 
      opacity="0.85" 
      backgroundColor="blue.900"
      />
      <Box 
      display="flex" 
      flexDirection={{base:"column", sm: "row"}} 
      alignItems="center" 
      justifyContent={{base:"flex-start", sm:"space-between"}}
      maxWidth="1280px"
      position="absolute"
      color="white"
      fontWeight="light"
      left="0"
      right="0"
      bottom="0"
      top="0"
      padding="2rem"
      >
        <Box width={{base:"100%", sm: "50%" }}>
            <Text 
            fontSize={{base:"4xl", sm:"5xl"}} 
            lineHeight="shorter" 
            marginBottom="1.5rem"
            >
                Download our new <strong>
                property buying guide
                    </strong> today ...
            </Text>
            <Text fontSize={{base:"lg", sm:"2xl"}}>A free PDF with our best secrets for evaluating a property purchase, calculating profit and so much more.</Text>
        </Box>
        <Box 
        width={{base:"100%", sm:"auto"}} 
        marginTop={{base:"2rem", sm:"0"}}
        ><HeroForm/>
        </Box>
      </Box>
    </Box>
    </Fade>
  );
};

export default HeroBanner;
