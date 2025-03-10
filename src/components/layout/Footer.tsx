import React from "react";
import {
  Box,
  Container,
  Link,
  Stack,
  Text,
  SimpleGrid,
  Heading,
  VStack,
  HStack,
  Icon,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import {
  SITE_DESCRIPTION,
  SOCIAL_GITHUB,
  SOCIAL_LINKEDIN,
  SOCIAL_TWITTER,
  SOCIAL_DISCORD,
} from "../../configuration/Config";
import { NetworkStatus } from "../NetworkStatus";
import { Logo } from "../../Reusables/helper";

interface Props {
  className?: string;
}

export function Footer(props: Props) {
  const className = props.className ?? "";
  const footerBg = useColorModeValue("gray.50", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const mutedTextColor = useColorModeValue("gray.500", "gray.400");
  const hoverTextColor = useColorModeValue("gray.900", "white");

  return (
    <Box
      className={className}
      bg={footerBg}
      color={textColor}
      borderTopWidth="1px"
      borderColor={borderColor}
    >
      <Container maxW="7xl" py={12} px={{ base: 4, md: 6, lg: 8 }} style={{ display: 'none' }}>
        <SimpleGrid 
          templateColumns={{ 
            base: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }} 
          spacing={8}
        >
          {/* PRODUCT column */}
          <Box>
            <Heading
              as="h3"
              size="sm"
              color={headingColor}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wider"
              mb={4}
            >
              Product
            </Heading>
            <VStack spacing={4} align="start">
              <Link 
                href="/features" 
                color={mutedTextColor}
                _hover={{ color: hoverTextColor }}
                fontSize="md"
              >
                Features
              </Link>
              <Link 
                href="/pricing" 
                color={mutedTextColor}
                _hover={{ color: hoverTextColor }}
                fontSize="md"
              >
                Pricing
              </Link>
              <Link 
                href="/integrations" 
                color={mutedTextColor}
                _hover={{ color: hoverTextColor }}
                fontSize="md"
              >
                Integrations
              </Link>
              <Link 
                href="/api" 
                color={mutedTextColor}
                _hover={{ color: hoverTextColor }}
                fontSize="md"
              >
                API
              </Link>
            </VStack>
          </Box>

          {/* COMPANY column */}
          <Box>
            <Heading
              as="h3"
              size="sm"
              color={headingColor}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wider"
              mb={4}
            >
              Company
            </Heading>
            <VStack spacing={4} align="start">
              <Link 
                href="/about" 
                color={mutedTextColor}
                _hover={{ color: hoverTextColor }}
                fontSize="md"
              >
                About
              </Link>
              <Link 
                href="/blog" 
                color={mutedTextColor}
                _hover={{ color: hoverTextColor }}
                fontSize="md"
              >
                Blog
              </Link>
              <Link 
                href="/careers" 
                color={mutedTextColor}
                _hover={{ color: hoverTextColor }}
                fontSize="md"
              >
                Careers
              </Link>
              <Link 
                href="/press" 
                color={mutedTextColor}
                _hover={{ color: hoverTextColor }}
                fontSize="md"
              >
                Press
              </Link>
            </VStack>
          </Box>

          {/* LEGAL column */}
          <Box>
            <Heading
              as="h3"
              size="sm"
              color={headingColor}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wider"
              mb={4}
            >
              Legal
            </Heading>
            <VStack spacing={4} align="start">
              <Link 
                href="/privacy" 
                color={mutedTextColor}
                _hover={{ color: hoverTextColor }}
                fontSize="md"
              >
                Privacy
              </Link>
              <Link 
                href="/terms" 
                color={mutedTextColor}
                _hover={{ color: hoverTextColor }}
                fontSize="md"
              >
                Terms
              </Link>
              <Link 
                href="/cookie-policy" 
                color={mutedTextColor}
                _hover={{ color: hoverTextColor }}
                fontSize="md"
              >
                Cookie Policy
              </Link>
            </VStack>
          </Box>

          {/* COMPANY INFO column */}
          <Box>
            <Box mb={6}>
              <Logo />
            </Box>
            <Text mb={4}>{SITE_DESCRIPTION}</Text>
            <NetworkStatus />
          </Box>
        </SimpleGrid>

        <Divider my={8} borderColor={borderColor} />
        
        <Stack 
          direction={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={{ base: 4, md: 0 }}
        >
          <Text fontSize="md">
            &copy; {new Date().getFullYear()} StreamLine, Inc. All rights reserved.
          </Text>
          
          <HStack spacing={6}>
            {SOCIAL_TWITTER && (
              <Link href={SOCIAL_TWITTER} isExternal color={mutedTextColor} _hover={{ color: hoverTextColor }}>
                <Icon as={FaTwitter} boxSize={6} />
                <span className="sr-only">Twitter</span>
              </Link>
            )}
            {SOCIAL_GITHUB && (
              <Link href={SOCIAL_GITHUB} isExternal color={mutedTextColor} _hover={{ color: hoverTextColor }}>
                <Icon as={FaGithub} boxSize={6} />
                <span className="sr-only">GitHub</span>
              </Link>
            )}
            {SOCIAL_LINKEDIN && (
              <Link href={SOCIAL_LINKEDIN} isExternal color={mutedTextColor} _hover={{ color: hoverTextColor }}>
                <Icon as={FaLinkedin} boxSize={6} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            )}
            {SOCIAL_DISCORD && (
              <Link href={SOCIAL_DISCORD} isExternal color={mutedTextColor} _hover={{ color: hoverTextColor }}>
                <Icon as={FaDiscord} boxSize={6} />
                <span className="sr-only">Discord</span>
              </Link>
            )}
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
}
