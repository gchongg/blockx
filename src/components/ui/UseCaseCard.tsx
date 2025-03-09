import { Flex, Icon, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface UseCaseCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const UseCaseCard = ({ icon, title, description }: UseCaseCardProps) => {
  const cardBg = useColorModeValue("gray.50", "gray.700");
  
  return (
    <Flex 
      direction="column" 
      p={6} 
      bg={cardBg} 
      borderRadius="md" 
      borderWidth="1px" 
      borderColor="gray.200"
      align="flex-start"
      transition="all 0.2s"
      _hover={{ borderColor: "blue.300", shadow: "md" }}
    >
      <Flex 
        align="center" 
        mb={4}
        color="blue.500"
      >
        <Icon as={icon} boxSize={5} mr={2} />
        <Heading size="md">{title}</Heading>
      </Flex>
      <Text color="gray.500">{description}</Text>
    </Flex>
  );
};

export default UseCaseCard;
