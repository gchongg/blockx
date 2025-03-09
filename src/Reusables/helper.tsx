import React, { ReactNode } from "react";
import {
  Image,
  chakra,
  HStack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";

export const Logo = (props: any) => {
  return (
    <HStack>
      <>
        <Image
          width={8}
          height={8}
          alt={"Login Image"}
          objectFit={"cover"}
          src={"/logo.png"}
        />
        <Text as="kbd">DataX</Text>
      </>
    </HStack>
  );
};

export const SocialButton = ({
  children,
  label,
  href,
  bg,
  _hover,
  ...rest
}: {
  children: ReactNode;
  label: string;
  href: string;
  bg?: any;
  _hover?: any;
  [x: string]: any;
}) => {
  const defaultBg = useColorModeValue("blackAlpha.100", "whiteAlpha.100");
  const defaultHover = { bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200") };
  
  return (
    <chakra.button
      bg={bg || defaultBg}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target={"_blank"}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"all 0.3s ease"}
      _hover={_hover || defaultHover}
      boxShadow="0 2px 4px rgba(0,0,0,0.1)"
      {...rest}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
