import { Box, Text, Image, Button } from "@chakra-ui/react";
export default function Home() {
  return (
    <Box width="100%" bg="#f5f6f7" overflow="auto">
      <Box
        pr={{
          xl: "calc((100% - 1110px) / 2)",
          md: "90px",
          sm: "30px",
          base: "25px",
        }}
        pl={{
          xl: "calc((100% - 1110px) / 2)",
          md: "90px",
          sm: "30px",
          base: "25px",
        }}
        overflow="auto"
      >
        <Box
          textAlign="center"
          mt="75px"
          float="left"
          width="100%"
          bg="#f5f6f7"
          overflow="auto"
          mb="49px"
        >
          <Text
            fontSize="1.875em"
            mb="10px"
            fontFamily="FedraSansCondensedMedium"
          >
            What You Can Do
          </Text>
          <Image
            display="inline-block"
            src="https://static.ishaoutreach.org/static/assets/cauvery-calling/img/blue-divider.svg"
          ></Image>
        </Box>
        <Box overflow="auto" height="100%" w="100%" textAlign="center">
          <Box
            width={{
              lg: "calc((100% - 70px) / 3)",
              sm: "calc((100% - 29px) / 2)",
              base: "100%",
            }}
            mr={{ lg: "30px", sm: "29px" }}
            mb="30px"
            minH="400px"
            textAlign="center"
            boxShadow="0 6px 18px 0 rgba(0,0,0,.03)"
            display="inline-block"
            float="left"
            padding="25px"
            bg="#fff"
          >
            <Image
              borderRadius="100%"
              boxSize="124px"
              src="https://static.ishaoutreach.org/d-124x124/isha-outreach-images/2019-08/PGH_Donate_20110214_NEE_0040-e_1.jpg"
              alt="Dan Abramov"
              marginBottom="28px"
              display="inline-block"
            />

            <Text
              mb="20px"
              fontFamily="FedraSansCondensedMedium, sans-serif"
              color="#000"
              fontSize="1em"
            >
              Action Now
            </Text>
            <Text
              mb="20px"
              color="#4d4d4d"
              fontFamily="FedraSansCondStdBook, sans-serif"
              fontSize="1em"
              minHeight="92px"
            >
              Support farmers to plant trees. Make your contribution to save
              Cauvery.
            </Text>
            <Button
              bg="#d04b02"
              color="#fff"
              fontFamily="FedraSansCondensedMedium"
              fontSize="16px"
              borderRadius="5px"
              width="100%"
              padding="12px 0"
              cursor="pointer"
              _hover={{
                bg: "#d04b02",
              }}
            >
              DONATE
            </Button>
          </Box>
          <Box
            width={{
              lg: "calc((100% - 70px) / 3)",
              sm: "calc((100% - 29px) / 2)",
              base: "100%",
            }}
            mr={{ lg: "30px", md: "0" }}
            mb="30px"
            minH="400px"
            textAlign="center"
            boxShadow="0 6px 18px 0 rgba(0,0,0,.03)"
            display="inline-block"
            float="left"
            padding="25px"
            bg="#fff"
          >
            <Image
              borderRadius="100%"
              boxSize="124px"
              src="https://static.ishaoutreach.org/d-124x124/isha-outreach-images/2019-08/START-campaign20170903_HKS_1417-e.jpg"
              alt="Dan Abramov"
              mb="28px"
              display="inline-block"
            />
            <Text
              mb="20px"
              fontFamily="FedraSansCondensedMedium, sans-serif"
              color="#000"
              fontSize="1em"
            >
              Start a campaign
            </Text>
            <Text
              mb="20px"
              color="#4d4d4d"
              fontFamily="FedraSansCondStdBook, sans-serif"
              fontSize="1em"
              minHeight="92px"
            >
              Tell the world that you want to make a difference by starting your
              own campaign.
            </Text>
            <Button
              bg="#0b0c7c"
              color="#fff"
              fontFamily="FedraSansCondensedMedium"
              fontSize="16px"
              borderRadius="5px"
              width="100%"
              cursor="pointer"
              padding="12px 0"
              _hover={{
                bg: "#000056",
              }}
            >
              GET STARTED
            </Button>
          </Box>
          <Box
            width={{
              lg: "calc((100% - 70px) / 3)",
              sm: "calc((100% - 29px) / 2)",
              base: "100%",
            }}
            mb="30px"
            minH="400px"
            textAlign="center"
            boxShadow="0 6px 18px 0 rgba(0,0,0,.03)"
            padding="25px"
            display="inline-block"
            float={{ lg: "left", base: "none" }}
            bg="#fff"
          >
            <Image
              borderRadius="100%"
              boxSize="124px"
              src="https://static.ishaoutreach.org/d-124x124/isha-outreach-images/2019-08/PGH_Volunteer_20120817_SLH_0040-e_1.jpg"
              alt="Dan Abramov"
              mb="28px"
              display="inline-block"
            />
            <Text
              mb="20px"
              fontFamily="FedraSansCondensedMedium, sans-serif"
              color="#000"
              fontSize="1em"
            >
              Volunteer
            </Text>
            <Text
              mb="20px"
              color="#4d4d4d"
              fontFamily="FedraSansCondStdBook, sans-serif"
              fontSize="1em"
              minHeight="92px"
            >
              Support us in awareness generation, at events and more.
            </Text>
            <Button
              bg="#0b0c7c"
              color="#fff"
              fontFamily="FedraSansCondensedMedium"
              fontSize="16px"
              borderRadius="5px"
              width="100%"
              padding="12px 0"
              cursor="pointer"
              _hover={{
                bg: "#000056",
              }}
            >
              REGISTER
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
