import { Box, Text } from "@chakra-ui/react";

interface StatItemProps {
  number: string;
  label: string;
}

const StatItem = ({ number, label }: StatItemProps) => {
  return (
    <Box textAlign={{ base: "center", sm: "left" }} my={{ base: 3, sm: 0 }}>
      <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" lineHeight="1">{number}</Text>
      <Text fontSize="md" fontWeight="medium" color="whiteAlpha.800">{label}</Text>
    </Box>
  );
};

export default StatItem;
