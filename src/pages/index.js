import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { ContentAdd } from "../components/ContentAdd";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { StreamerList } from "../components/StreamerList";

export default function Home() {
  return (
    <Box>
      <Header />
      <ContentAdd />
      <StreamerList />
      <Footer />
    </Box>
  );
}
