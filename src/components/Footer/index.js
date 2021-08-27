import {
  Icon,
  IconButton,
  Center,
  Wrap,
  Link,
  Box,
  Button,
  VStack,
  Avatar,
  Text,
  Badge,
  Flex,
  useBoolean,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react";
import React from "react";
import { FaTwitter } from "react-icons/fa";

export function Footer() {
  const [flag, setFlag] = useBoolean();

  return (
    <>
      <Center w="100%" h="20" mx="auto" mt="4" px="6" align="center">
        <VStack>
          <div onMouseEnter={setFlag.on} onMouseLeave={setFlag.off}>
            {flag ? "Follow Me on Twitter!" : "Let's chat!"}
          </div>
          {/* <Box></Box> */}
          <Link href="https://twitter.com/honzcha" isExternal>
            <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
              Twitter
            </Button>
          </Link>
        </VStack>
      </Center>
    </>
  );
}
