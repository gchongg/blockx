import { Card, CardBody, Icon, Flex, Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  const cardBg = useColorModeValue("white", "gray.800");
  
  return (
    <Card 
      h="full" 
      variant="outline" 
      p={8} 
      shadow="xl"
      borderRadius="lg"
      borderWidth="1px"
      borderColor="gray.200"
      bg={cardBg}
      transition="all 0.3s"
      _hover={{ 
        transform: "translateY(-5px)", 
        shadow: "2xl",
        borderColor: "blue.200" 
      }}
    >
      <CardBody>
        <Flex direction="column" align="center" textAlign="center">
          <Box 
            bgGradient="linear(to-br, blue.400, purple.500)" 
            p={4} 
            borderRadius="full" 
            boxSize="80px" 
            display="flex" 
            alignItems="center" 
            justifyContent="center" 
            mb={6}
            boxShadow="md"
          >
            <Icon as={icon} boxSize={8} color="white" />
          </Box>
          <Heading size="lg" mb={4} fontWeight="bold">{title}</Heading>
          <Text color="gray.500" fontSize="lg">{description}</Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default FeatureCard;
