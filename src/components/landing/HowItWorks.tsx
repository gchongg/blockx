import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Icon,
  List,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import { FaUpload } from "react-icons/fa";
import ProcessStep from "../ui/ProcessStep";

const HowItWorks: React.FC = () => {
  const highlightColor = "blue.400";

  return (
    <Box as="section" py={{ base: 16, md: 20 }} bg="gray.50">
      <Container maxW="container.xl">
        <VStack spacing={8} mb={16} textAlign="center">
          <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }}>
            How It <Text as="span" color={highlightColor}>Works</Text>
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} maxW="800px" color="gray.500">
            BlockX makes data exchange simple, secure, and transparent
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {/* Buy Data */}
          <Card variant="outline" shadow="md" overflow="hidden">
            <CardHeader bg="blue.50" borderBottom="1px" borderColor="gray.200" py={6}>
              <Flex align="center" gap={2}>
                <Icon as={DownloadIcon} boxSize={5} color="blue.500" />
                <Heading size="md">Buying Data</Heading>
              </Flex>
            </CardHeader>
            <CardBody py={6}>
              <List spacing={4}>
                <ProcessStep 
                  title="Browse the catalog" 
                  description="of available datasets"
                />
                <ProcessStep 
                  title="Find and filter" 
                  description="datasets that match your requirements"
                />
                <ProcessStep 
                  title="Purchase securely" 
                  description="using blockchain-based transactions"
                />
                <ProcessStep 
                  title="Access your data" 
                  description="with encrypted, secure delivery"
                />
              </List>
            </CardBody>
          </Card>

          {/* Sell Data */}
          <Card variant="outline" shadow="md" overflow="hidden">
            <CardHeader bg="cyan.50" borderBottom="1px" borderColor="gray.200" py={6}>
              <Flex align="center" gap={2}>
                <Icon as={FaUpload} boxSize={5} color="cyan.500" />
                <Heading size="md">Selling Data</Heading>
              </Flex>
            </CardHeader>
            <CardBody py={6}>
              <List spacing={4}>
                <ProcessStep 
                  title="Prepare your dataset" 
                  description="and add descriptive information"
                />
                <ProcessStep 
                  title="Upload and encrypt" 
                  description="your data securely to IPFS"
                />
                <ProcessStep 
                  title="Set your price" 
                  description="and publish to the marketplace"
                />
                <ProcessStep 
                  title="Receive payments" 
                  description="automatically via smart contracts"
                />
              </List>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default HowItWorks;
