import { ListItem, ListIcon, Text, Box } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import React from "react";

interface ProcessStepProps {
  title: string;
  description: string;
}

const ProcessStep = ({ title, description }: ProcessStepProps) => {
  return (
    <ListItem display="flex" alignItems="center">
      <ListIcon as={CheckCircleIcon} color="green.500" mr={2} />
      <Box>
        <Text as="span" fontWeight="medium">{title}</Text>
        <Text as="span" color="gray.500" ml={1}>{description}</Text>
      </Box>
    </ListItem>
  );
};

export default ProcessStep;
