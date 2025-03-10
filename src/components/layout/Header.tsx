import React, { useEffect } from "react";
import {
  Text,
  Flex,
  useColorModeValue,
  Spacer,
  Box,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useDisclosure,
  useBreakpointValue,
  Badge,
} from "@chakra-ui/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Logo } from "../../Reusables/helper";
import { SITE_NAME } from "../../configuration/Config";
import { motion } from "framer-motion";
import { useScrollAwareAnimation } from "../ui/animations";

// Motion components
const MotionFlex = motion(Flex);
const MotionBox = motion(Box);
const MotionLink = motion(Link);
interface Props {
  className?: string;
}

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export function Header(props: Props) {
  const className = props.className ?? "";
  const { isOpen, onToggle } = useDisclosure();
  const { scrolled, scrollDirection } = useScrollAwareAnimation(50);
  
  const bgLight = useColorModeValue("rgba(255, 255, 255, 0.85)", "rgba(26, 32, 44, 0.85)");
  const bgDark = useColorModeValue("rgba(255, 255, 255, 0.98)", "rgba(26, 32, 44, 0.98)");
  const borderColorLight = useColorModeValue("gray.200", "gray.700");
  const borderColorDark = useColorModeValue("blue.100", "blue.800");
  const shadowLight = "0 4px 6px -1px rgba(0, 0, 0, 0.05)";
  const shadowDark = "0 4px 10px -1px rgba(0, 0, 0, 0.1)";
  
  return (
    <MotionFlex
      as="header"
      className={className}
      style={{ 
        backdropFilter: "blur(15px)"
      }}
      animate={{
        backgroundColor: scrolled ? bgDark : bgLight,
        borderColor: scrolled ? borderColorDark : borderColorLight,
        boxShadow: scrolled ? `${shadowDark}, inset 0 1px 0 rgba(255, 255, 255, 0.1)` : shadowLight,
        height: scrolled ? "70px" : "80px",
        transform: scrollDirection === 'down' && scrolled ? 'translateY(-100%)' : 'translateY(0%)',
        opacity: scrolled ? 0.98 : 0.95
      }}
      transition={{ 
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1.0]
      }}
      px={4}
      py={2}
      mb={8}
      position="sticky"
      top={0}
      w="full"
      alignItems="center"
      zIndex={100}
      borderBottom="1px"
      borderBottomWidth="small"
      borderBottomStyle="solid"
    >
      <Flex flex={{ base: 2 }} justify={{ base: "center", md: "start" }}>
        <MotionLink
          href={"/"}
          textAlign={useBreakpointValue({ base: "center", md: "left" })}
          fontFamily={"heading"}
          color={useColorModeValue("gray.800", "white")}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Logo />
        </MotionLink>
        <Flex display={{ base: "none", md: "flex" }} ml={10}>
          <DesktopNav />
        </Flex>
      </Flex>

      <Spacer />

      <Flex alignItems="center" gap={4}>
        <MotionBox
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          p={1}
        >
          <ConnectButton
            accountStatus={{
              smallScreen: "address",
              largeScreen: "full",
            }}
            showBalance={{
              smallScreen: false,
              largeScreen: true,
            }}
          />
        </MotionBox>
        <ThemeSwitcher />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </MotionFlex>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const activeBg = useColorModeValue("blue.50", "blue.900");
  const activeColor = useColorModeValue("blue.600", "blue.200");
  const hoverBg = useColorModeValue("rgba(237, 242, 247, 0.9)", "rgba(45, 55, 72, 0.9)");
  const hoverBorderColor = useColorModeValue("blue.100", "blue.700");
  
  const [activePath, setActivePath] = React.useState("/");
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActivePath(window.location.pathname);
    }
  }, []);
  
  return (
    <Stack direction={"row"} spacing={3}>
      {NAV_ITEMS.map((navItem) => {
        const isActive = activePath === navItem.href;
        
        return (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <MotionLink
                  p={2.5}
                  href={navItem.href ?? "#"}
                  fontSize={"lg"}
                  fontFamily="Inter, Montserrat, sans-serif"
                  letterSpacing="0.2px"
                  fontWeight={500}
                  color={isActive ? activeColor : linkColor}
                  rounded={"md"}
                  minWidth={"500px"}  // Corrected from minwidth to minWidth
                  bg={isActive ? activeBg : "transparent"}
                  width="auto"  // This adjusts the width dynamically based on content
                  whiteSpace="nowrap"  // Corrected from whitespace to whiteSpace
                  transitionProperty="all"
                  transitionDuration="0.3s"
                  transitionTimingFunction="ease"
                  border="1px solid transparent"
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                    bg: hoverBg,
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                    borderColor: hoverBorderColor,
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { 
                      duration: 0.2,
                      ease: "easeOut"
                    }
                  }}
                >
                  <Text as="span" fontWeight={isActive ? "600" : "medium"}>
                    {navItem.label}
                    {isActive && (
                      <MotionBox
                        position="absolute"
                        bottom="0px"
                        left="10%"
                        right="10%"
                        height="3px"
                        background="linear-gradient(to right, var(--primary), var(--secondary))"
                        boxShadow="0 0 8px rgba(76, 110, 245, 0.5)"
                        layoutId="activeNavIndicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Text>
                  
                  {navItem.isNew && (
                    <Badge ml={1} colorScheme="blue" fontSize="xs" variant="subtle">
                      New
                    </Badge>
                  )}
                </MotionLink>
              </PopoverTrigger>
              {navItem.children && (
                <PopoverContent
                  border="1px solid"
                  borderColor={hoverBorderColor}
                  boxShadow="lg"
                  bg={popoverContentBgColor}
                  backdropFilter="blur(8px)"
                  p={4}
                  rounded="xl"
                  minW="sm"
                  overflow="hidden"
                  _after={{
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "linear-gradient(to right, var(--primary), var(--secondary))"
                  }}
                  transitionProperty="all"
                  transitionDuration="0.3s"
                  transitionTimingFunction="ease"
                >
                  <Stack spacing={2}>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        );
      })}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  // Move all color mode hooks to the top
  const hoverBg = useColorModeValue("rgba(237, 242, 247, 0.9)", "rgba(45, 55, 72, 0.9)");
  const hoverTextColor = useColorModeValue("blue.600", "blue.200");
  const hoverBorderColor = useColorModeValue("blue.100", "blue.700");
  const subTextHoverColor = useColorModeValue("gray.600", "gray.300");
  
  return (
    <MotionLink
      href={href}
      role="group"
      display="block"
      p={3}
      rounded="md"
      mb={1}
      border="1px solid transparent"
          transitionProperty="all"
          transitionDuration="0.2s"
          transitionTimingFunction="ease"
      _hover={{ 
        bg: hoverBg,
        borderColor: hoverBorderColor,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)"
      }}
      whileHover={{ 
        x: 4,
        transition: { duration: 0.2 }
      }}
    >
      <Stack direction="row" align="center">
        <Box flex={1}>
          <Text
            fontFamily="Inter, Montserrat, sans-serif"
            transitionProperty="all"
            transitionDuration="0.3s"
            transitionTimingFunction="ease"
            _groupHover={{ color: hoverTextColor }}
            fontWeight={500}
            fontSize="md"
          >
            {label}
          </Text>
          <Text 
            fontSize="sm" 
            color="gray.500"
            _groupHover={{ color: subTextHoverColor }}
          >
            {subLabel}
          </Text>
        </Box>
        <Flex
          transitionProperty="all"
          transitionDuration="0.3s"
          transitionTimingFunction="ease"
          transform="translateX(-10px)"
          opacity={0}
          _groupHover={{ opacity: 1, transform: "translateX(0)" }}
          justify="flex-end"
          align="center"
        >
          <Icon 
            color="blue.400" 
            w={5} 
            h={5} 
            as={ChevronRightIcon} 
            _groupHover={{ color: hoverTextColor }}
          />
        </Flex>
      </Stack>
    </MotionLink>
  );
};

const MobileNav = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  
  return (
    <Box
      position="absolute"
      top="100%"
      left={0}
      right={0}
      bg={bgColor}
      boxShadow="lg"
      borderBottomRadius="md"
      overflow="hidden"
      borderTop="1px solid"
      borderColor={borderColor}
      display={{ md: "none" }}
      style={{ backdropFilter: "blur(15px)" }}
    >
      <Stack
        p={4}
        spacing={1}
        divider={<Box h="1px" bg={borderColor} my={1} />}
      >
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    </Box>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  const [activePath, setActivePath] = React.useState("/");
  
  // Move all color mode hooks to the top to avoid conditional calling
  const activeColor = useColorModeValue("blue.600", "blue.200");
  const hoverBg = useColorModeValue("rgba(237, 242, 247, 0.9)", "rgba(45, 55, 72, 0.9)");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const linkColor = useColorModeValue("gray.600", "gray.400");
  const linkHoverColor = useColorModeValue("blue.600", "blue.200");
  
  const isActive = activePath === href;
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActivePath(window.location.pathname);
    }
  }, []);

  return (
    <Stack spacing={1}>
      <Flex
        py={3}
        px={2}
        as={Link}
        href={href ?? "#"}
        justify="space-between"
        align="center"
        rounded="md"
        fontFamily="Inter, Montserrat, sans-serif"
        position="relative"
        transitionProperty="all"
        transitionDuration="0.2s"
        transitionTimingFunction="ease"
        bg={isActive ? hoverBg : "transparent"}
        _hover={{
          textDecoration: "none",
          bg: hoverBg,
        }}
        onClick={children ? onToggle : undefined}
      >
        <Text
          fontWeight={isActive ? "600" : "500"}
          fontSize="lg"
          color={isActive ? activeColor : textColor}
          letterSpacing="0.2px"
        >
          {label}
        </Text>
        
        {isActive && (
          <Box
            position="absolute"
            left={0}
            top="50%"
            transform="translateY(-50%)"
            width="3px"
            height="70%"
            background="linear-gradient(to bottom, var(--primary), var(--secondary))"
            boxShadow="0 0 8px rgba(76, 110, 245, 0.5)"
            borderRightRadius="full"
          />
        )}
        
        {children && (
          <Icon
            as={ChevronDownIcon}
            transitionProperty="all"
            transitionDuration="0.25s"
            transitionTimingFunction="ease"
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
            color={isActive ? activeColor : "gray.500"}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={1}
          pl={6}
          ml={2}
          borderLeft="1px solid"
          borderColor={borderColor}
          align="start"
          spacing={2}
        >
          {children &&
            children.map((child) => (
              <Link 
                key={child.label} 
                py={2} 
                px={2}
                href={child.href}
                fontSize="md"
                fontWeight="medium"
                color={linkColor}
                _hover={{
                  color: linkHoverColor,
                  textDecoration: "none"
                }}
                rounded="md"
                width="100%"
                display="block"
              >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS: Array<NavItem & { isNew?: boolean }> = [
  {
    label: "Home",
    href: "/",
    children: [
      {
        label: 'Explore Decentralized Finance',
        subLabel: 'Trending DeFi Apps to inspire you',
        href: 'https://dappradar.com/rankings/category/defi',
      },
      {
        label: 'View wallet balance',
        subLabel: 'View your wallet full balance',
        href: 'https://etherscan.io/',
      },
    ],
  },
  { 
    label: "Publish",
    href: "/publish", 
  },
  { 
    label: "Catalog",
    href: "/catalog"
  },
  {
    label: "My Datasets",
    href: "/my-dataset",
  }, 
  {
    label: "Listed Datasets",
    href: "/listed-datasets",
  }
]
