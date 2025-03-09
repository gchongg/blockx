import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { FaShieldAlt, FaDatabase, FaDollarSign, FaSearch, FaServer } from "react-icons/fa";
import FeatureCard from "../ui/FeatureCard";
import UseCaseCard from "../ui/UseCaseCard";

const ValueProposition: React.FC = () => {
  const highlightColor = "blue.400";

  return (
    <Box 
      as="section" 
      py={{ base: 24, md: 28 }}
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        bg: 'linear-gradient(180deg, rgba(243,244,246,0.1) 0%, rgba(243,244,246,0.1) 100%)',
        opacity: '0.3',
        zIndex: '0'
      }}
    >
      <Container maxW="container.xl" position="relative" zIndex="1">
        <VStack spacing={10} mb={20} textAlign="center">
          <Heading 
            as="h2" 
            fontSize={{ base: "4xl", md: "5xl" }}
            bgGradient="linear(to-r, blue.600, purple.600)"
            bgClip="text"
            className="animate-fade-in"
          >
            A Better Way To <Text as="span" color={highlightColor}>Exchange Data</Text>
          </Heading>
          <Text 
            fontSize={{ base: "xl", md: "2xl" }} 
            maxW="800px" 
            color="gray.600"
            className="animate-fade-in"
          >
            BlockX combines blockchain technology with data marketplace capabilities to create a secure, transparent, and efficient platform for data exchange
          </Text>
        </VStack>

        <SimpleGrid 
          columns={{ base: 1, md: 3 }} 
          spacing={12}
          className="animate-fade-in-up"
        >
          <FeatureCard 
            icon={FaShieldAlt} 
            title="Secure & Private" 
            description="End-to-end encryption and blockchain verification ensures your data remains secure and private throughout the entire process"
          />
          <FeatureCard 
            icon={FaDollarSign} 
            title="Monetize Your Data" 
            description="Turn your valuable datasets into revenue streams by selling directly to interested buyers without intermediaries"
          />
          <FeatureCard 
            icon={FaDatabase} 
            title="Quality Data Access" 
            description="Find and purchase verified, high-quality datasets for research, machine learning, analytics, and more"
          />
        </SimpleGrid>
        
        {/* Added use case section */}
        <Box mt={28} className="animate-fade-in">
          <Heading 
            as="h3" 
            fontSize={{ base: "2xl", md: "3xl" }} 
            textAlign="center"
            mb={12}
          >
            Popular Use Cases
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            <UseCaseCard 
              title="Market Research" 
              description="Access consumer insights and market trends to make data-driven business decisions."
              icon={FaSearch}
            />
            <UseCaseCard 
              title="Machine Learning" 
              description="Train advanced AI models with high-quality, diverse datasets."
              icon={FaServer}
            />
            <UseCaseCard 
              title="Analytics & Business Intelligence" 
              description="Enhance your analytics capabilities with external data sources."
              icon={FaDatabase}
            />
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default ValueProposition;
