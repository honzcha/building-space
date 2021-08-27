import { Icon, IconButton, Center, Wrap, HStack, Box } from "@chakra-ui/react";
import React from "react";
import { FaTwitch } from "react-icons/fa";
import { Logo } from "./Logo";

export function Header() {
  return (
    <>
      <Center w="100%" h="20" mx="auto" mt="4" px="6" align="center">
        <IconButton
          aria-label="Logo"
          icon={<Icon as={FaTwitch} />}
          fontSize="24"
          variant="unstyled"
          // onClick={onOpen}
          mr="2"
        />
        <Logo />
      </Center>
    </>
  );
}
