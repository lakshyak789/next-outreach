import { Box, Text, Image, Button } from "@chakra-ui/react";

export default function WhyToDo() {
  return (
    <Box className="container" mt="200px">
      <Box
        className="text-col"
        float="left"
        width="100%"
        position="relative"
        paddingTop="35px"
        zIndex="0"
      >
        <Box className="story-block">
          <Box
            className="story-img"
            float="right"
            // mr="-495px"
            width="445px"
            borderRadius="4px"
            position="relative"
            mt="-100px"
            zIndex="2"
          >
            <Image
              src="https://static.ishaoutreach.org/d-445x445/isha-outreach-images/2019-08/Cauvery_Kaveri_River_Karnataka_India_(2).jpg"
              borderRadius="9px"
              float="left"
              w="!00%"
            />
            <Box
              className="img-patch"
              position="absolute"
              w="120px"
              h="65px"
              borderRadius="4px"
              bottom="-15px"
              bg="#8ddde3"
              zIndex="-1"
            ></Box>
          </Box>
          <Text>A Game-Changer for River Revitalization</Text>
        </Box>
      </Box>
    </Box>
  );
}
