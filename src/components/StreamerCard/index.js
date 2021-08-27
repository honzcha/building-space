import {
  Box,
  Flex,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Container,
  Spacer,
  Icon,
  useBreakpointValue,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

export function StreamerCard(props) {
  const isWideVersion = useBreakpointValue({
    sl: false,
    base: true,
  });

  const { username, online, profilePicture, } = props;

  return (
    <Container align={"center"}>
      <Stat
        px={{ base: 2, md: 4 }}
        py={"5"}
        shadow={"xl"}
        border={"1px solid"}
        borderColor={useColorModeValue("gray.800", "gray.500")}
        rounded={"lg"}
        maxWidth={"480px"}
        maxHeight={"180px"}
      >
        <Flex align={"center"} paddingBottom={"1"}>
          <Image
            boxSize="54px"
            src={profilePicture}
            rounded={"lg"}
          />
          <Box pl={{ base: 2, md: 4 }} align={"left"}>
            <StatLabel fontWeight={"medium"} isTruncated>
              {online}
            </StatLabel>
            <StatNumber fontSize={"2xl"} fontWeight={"medium"} pr={"2"}>
              {username}
            </StatNumber>
          </Box>
          <Spacer />
          <Box pr={"4"} pl={{ base: 2, md: 4 }} align={"left"}>
            <StatLabel fontWeight={"medium"} isTruncated>
              Votes
            </StatLabel>
            <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
              {123}
            </StatNumber>
          </Box>
          {isWideVersion && (
            <ButtonGroup size="md" variant="ghost" colorScheme="teal">
              <IconButton icon={<Icon as={FaRegArrowAltCircleUp} />} />
            </ButtonGroup>
          )}
        </Flex>
      </Stat>
    </Container>
  );
}
