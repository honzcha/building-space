import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      //using different font sizes based on chakra ui responsiveness settings
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      TwitchDashboard
      <Text as="span" ml="1" color="teal">
        .
      </Text>
    </Text>
  );
}
