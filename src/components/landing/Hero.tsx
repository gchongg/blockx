import React from "react";
import { NextRouter } from "next/router";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";
import { MotionBox, MotionHeading, MotionText, MotionButton } from "../ui/motion";
import StatItem from "../ui/StatItem";
import { AnimateOnScroll } from "../ui/animations";

interface HeroProps {
  router: NextRouter;
}

const Hero: React.FC<HeroProps> = ({ router }) => {
  const bgGradient = "linear(to-r, blue.900, purple.900, blue.800)";
  const highlightColor = "blue.400";

  return (
    <MotionBox 
      as="section" 
      bgGradient={bgGradient}
      py={{ base: 20, md: 32 }}
      color="white"
      position="relative"
      overflow="hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Abstract background patterns */}
      <MotionBox 
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.1"
        bgImage="url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3NjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIxMDAlIiB5MT0iMTAwJSIgeDI9IjAlIiB5Mj0iMCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjOEM4RUZGIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRiIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTAgMGgxNDQwdjc2OEgweiIgZmlsbD0ibm9uZSIvPjxnIG9wYWNpdHk9Ii42IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yNTEuNSA2MTJDMTgwLjUgNTA0IDEyOS41IDQwNCAxOTkgMzExYzY5LjUtOTMgMTU5LjUtNzYgMjY5LTIwYzEwOS41IDU2IDE5MiAxMjkgMjI3IDIwNWMzNSA3NiAxMS41IDE2Mi0yOSAyMDdjLTQwLjUgNDUtOTcuNSA0OS0xODAgNDljLTgyLjUgMC0xNjUtMzQtMjM0LjUtMTQweiIgZmlsbD0idXJsKCNhKSIgb3BhY2l0eT0iLjQiIHRyYW5zZm9ybT0icm90YXRlKC00MyAzNTcuNDIxIDMzMS40NDkpIi8+PHBhdGggZD0iTTkwMCA2MTJjLTcxLTEwOC0xMjItMjA4LTUyLjUtMzAxczE1OS41LTc2IDI2OS0yMGMxMDkuNSA1NiAxOTIgMTI5IDIyNyAyMDVjMzUgNzYgMTEuNSAxNjItMjkgMjA3Yy00MC41IDQ1LTk3LjUgNDktMTgwIDQ5Yy04Mi41IDAtMTY1LTM0LTIzNC41LTE0MHoiIGZpbGw9InVybCgjYSkiIG9wYWNpdHk9Ii40IiB0cmFuc2Zvcm09InJvdGF0ZSg1MCAxMDc2LjIyIDQ0MC4xMTEpIi8+PHBhdGggZD0iTTU3Ni41IDkwQzUwNS41LTE4IDQ1NC41LTExOCA1MjQtMjExYzY5LjUtOTMgMTU5LjUtNzYgMjY5LTIwYzEwOS41IDU2IDE5MiAxMjkgMjI3IDIwNWMzNSA3NiAxMS41IDE2Mi0yOSAyMDdjLTQwLjUgNDUtOTcuNSA0OS0xODAgNDljLTgyLjUgMC0xNjUtMzQtMjM0LjUtMTQweiIgZmlsbD0idXJsKCNhKSIgb3BhY2l0eT0iLjQiIHRyYW5zZm9ybT0icm90YXRlKC0xOSA2ODQuMTU5IC0zNS40MSkiLz48L2c+PC9zdmc+')"
        bgRepeat="no-repeat"
        bgSize="cover"
        animate={{ 
          opacity: [0.05, 0.12, 0.05],
          scale: [1, 1.02, 1],
        }}
        transition={{ 
          repeat: Infinity,
          repeatType: "reverse",
          duration: 8,
        }}
      />

      <Container maxW="container.xl">
        <Flex 
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
        >
          <MotionBox
            textAlign={{ base: "center", lg: "left" }}
            maxW={{ base: "full", lg: "50%" }}
            pr={{ base: 0, lg: 12 }}
            zIndex={1}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <MotionHeading
              as="h1"
              fontSize={{ base: "5xl", md: "7xl" }}
              fontWeight="extrabold"
              lineHeight="1.1"
              mb={6}
              bgGradient="linear(to-r, white, blue.300)"
              bgClip="text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Block<Text as="span" color={highlightColor}>X</Text>
            </MotionHeading>
            <MotionText 
              fontSize={{ base: "xl", md: "2xl" }} 
              maxW={{ base: "full", lg: "600px" }} 
              mb={10} 
              opacity={0.9}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              A secure decentralized marketplace for buying and selling valuable data assets with blockchain-powered trust and ownership
            </MotionText>
            <MotionBox
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Stack 
                direction={{ base: "column", sm: "row" }} 
                spacing={5} 
                justify={{ base: "center", lg: "flex-start" }}
              >
                <MotionButton 
                  size="lg" 
                  colorScheme="blue"
                  bgGradient="linear(to-r, blue.400, purple.500)"
                  _hover={{ bgGradient: "linear(to-r, blue.500, purple.600)" }}
                  onClick={() => router.push("/catalog")}
                  height="64px"
                  px={8}
                  fontSize="lg"
                  rounded="md"
                  boxShadow="lg"
                  className="animate-shimmer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Marketplace
                </MotionButton>
                <MotionButton 
                  size="lg" 
                  variant="outline" 
                  onClick={() => router.push("/publish")}
                  height="64px"
                  px={8}
                  fontSize="lg"
                  borderWidth="2px"
                  _hover={{ bg: "whiteAlpha.200" }}
                  rounded="md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Sell Your Data
                </MotionButton>
              </Stack>
            </MotionBox>
          </MotionBox>

          {/* Animated illustration/graphic */}
          <MotionBox 
            display={{ base: "none", lg: "block" }}
            position="relative"
            maxW="40%"
            zIndex={1}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Box 
              position="relative"
              width="100%"
              height="400px"
            >
              <MotionBox 
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                width="300px"
                height="300px"
                borderRadius="full"
                bg="rgba(147, 197, 253, 0.1)"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut"
                }}
              />
              <MotionBox
                position="absolute"
                top="20%"
                right="20%"
                width="80px"
                height="80px"
                borderRadius="lg"
                bgGradient="linear(to-br, blue.400, purple.500)"
                boxShadow="lg"
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut"
                }}
              />
              <MotionBox
                position="absolute"
                bottom="25%"
                left="10%"
                width="100px"
                height="100px"
                borderRadius="lg"
                bgGradient="linear(to-br, cyan.400, blue.500)"
                boxShadow="lg"
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              <MotionBox
                position="absolute"
                top="30%"
                left="25%"
                width="60px"
                height="60px"
                borderRadius="lg"
                bgGradient="linear(to-br, purple.400, pink.500)"
                boxShadow="lg"
                animate={{ 
                  y: [0, -25, 0],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 7,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              <MotionBox 
                position="absolute"
                top="60%"
                right="15%"
                width="40px"
                height="40px"
                borderRadius="md"
                bgGradient="linear(to-br, orange.300, red.500)"
                boxShadow="lg"
                animate={{ 
                  y: [0, -12, 0],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              />
              {/* Connection lines */}
              <MotionBox 
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                opacity={0.6}
                bgImage="url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiM2MkEzRkYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWRhc2hhcnJheT0iNiA2Ij48cGF0aCBkPSJNMTAwLDI1MCBMMjUwLDEwMCIvPjxwYXRoIGQ9Ik0yODAsMzAwIEwxMDAsMjUwIi8+PHBhdGggZD0iTTI1MCwxMDAgTDMwMCwyMDAiLz48cGF0aCBkPSJNMzAwLDIwMCBMMjgwLDMwMCIvPjxwYXRoIGQ9Ik0xNTAsMTUwIEwyNTAsMTAwIi8+PC9nPjwvc3ZnPg==')"
                bgRepeat="no-repeat"
                bgPosition="center"
                bgSize="cover"
                animate={{ 
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut"
                }}
              />
            </Box>
          </MotionBox>
        </Flex>
        
        {/* Stats/metrics row */}
        <AnimateOnScroll animation="fadeIn" delay={0.8}>
          <Flex 
            mt={{ base: 16, lg: 24 }}
            mb={8}
            direction={{ base: "column", sm: "row" }}
            justify="space-between"
            align="center"
            textAlign={{ base: "center", sm: "left" }}
            color="whiteAlpha.900"
            zIndex={1}
            position="relative"
          >
            <StatItem number="100+" label="Datasets Available" />
            <StatItem number="50+" label="Active Users" />
            <StatItem number="99%" label="Secure Transactions" />
          </Flex>
        </AnimateOnScroll>
      </Container>
    </MotionBox>
  );
};

export default Hero;
