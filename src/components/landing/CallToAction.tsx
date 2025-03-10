import React from "react";
import { NextRouter } from "next/router";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

interface CallToActionProps {
  router: NextRouter;
}

const CallToAction: React.FC<CallToActionProps> = ({ router }) => {
  return (
    <Box 
      as="section" 
      py={{ base: 24, md: 28 }} 
      bgGradient="linear(to-r, blue.600, purple.700)"
      position="relative"
      overflow="hidden"
    >
      {/* Background decoration */}
      <Box
        position="absolute"
        top="-5%"
        right="-5%"
        width="40%"
        height="40%"
        bgGradient="radial(circle, rgba(66,153,225,0.3) 0%, transparent 70%)"
        borderRadius="full"
      />
      <Box
        position="absolute"
        bottom="-10%"
        left="-5%"
        width="30%"
        height="30%"
        bgGradient="radial(circle, rgba(159,122,234,0.3) 0%, transparent 70%)"
        borderRadius="full"
      />

      <Container maxW="container.xl" position="relative">
        <VStack spacing={10} textAlign="center" className="animate-fade-in">
          <Heading as="h2" fontSize={{ base: "4xl", md: "5xl" }} color="white">
            Ready to get started?
          </Heading>
          <Text fontSize={{ base: "xl", md: "2xl" }} maxW="800px" color="whiteAlpha.900">
            Join the decentralized data revolution today and discover the power of secure, direct data exchange.
          </Text>
          <Flex 
            direction={{ base: "column", sm: "row" }}
            gap={6}
            mt={8}
            width="100%"
            justifyContent="center"
            alignItems="center"
          >
            <Button 
              size="lg" 
              colorScheme="white" 
              color="blue.600"
              bg="white"
              _hover={{ bg: "gray.100" }}
              onClick={() => router.push("/catalog")}
              height="64px"
              px={8}
              fontSize="lg"
              rounded="md"
              boxShadow="md"
              fontWeight="bold"
            >
              Explore the Marketplace
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              color="white"
              borderColor="white"
              _hover={{ bg: "whiteAlpha.200" }}
              onClick={() => router.push("/publish")}
              height="64px"
              px={8}
              fontSize="lg"
              rounded="md"
            >
              Publish Data
            </Button>
          </Flex>
          
          {/* Newsletter signup */}
          <Box 
            mt={12} 
            p={8} 
            borderRadius="lg" 
            bg="whiteAlpha.200" 
            width={{ base: "full", md: "75%" }}
            className="animate-fade-in-up"
          >
            <Heading as="h3" size="md" color="white" mb={4}>
              Stay updated with BlockX news
            </Heading>
            <Flex 
              direction={{ base: "column", md: "row" }}
              gap={4}
            >
              <Box flexGrow={1}>
                <Text fontSize="sm" color="whiteAlpha.800" mb={2} textAlign="left">
                  Email address
                </Text>
                <Box
                  p={2}
                  bg="whiteAlpha.300"
                  borderRadius="md"
                  borderWidth="1px"
                  borderColor="whiteAlpha.400"
                >
                  <Box
                    as="input"
                    width="100%"
                    bg="transparent"
                    border="none"
                    color="white"
                    placeholder="Your email"
                    _placeholder={{ color: "whiteAlpha.600" }}
                    px={2}
                    py={1}
                  />
                </Box>
              </Box>
              <Button
                colorScheme="blue"
                bg="blue.400"
                _hover={{ bg: "blue.500" }}
                height="auto"
                alignSelf={{ base: "stretch", md: "flex-end" }}
                mt={{ base: 0, md: 6 }}
              >
                Subscribe
              </Button>
            </Flex>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default CallToAction;
