import {
  Box,
  chakra,
  SimpleGrid,
  Container,
  Text,
  Icon,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { BsPerson } from "react-icons/bs";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { StreamerCard } from "../StreamerCard";

export function StreamerList() {
  const fetchChannels = async () => {
    try {
      const path = "http://localhost:3000";

      const response = await fetch(`${path}/api/twitch`, {
        method: "POST",
        body: JSON.stringify({
          action: "GET_CHANNELS",
          key: "CHANNELS",
        }),
      });

      if (response.status === 404) {
        console.log("Channels key could not be found");
      }

      const json = await response.json();

      if (json.data) {
        const channelNames = json.data.split(",");

        console.log("Channel Names:", channelNames);

        const channelData = [];

        for await (const channelName of channelNames) {
          console.log("Getting twitch data for", channelName);

          const channelResp = await fetch(`${path}/api/twitch`, {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ data: channelName }),
          });

          const json = await channelResp.json();

          if (json.data) {
            channelData.push(json.data);
            console.log(channelData);
          }
        }

        setFavouriteChannels(channelData);
      }
    } catch (error) {
      console.warn(error.message);
    }
  };

  useEffect(() => {
    console.log("Fetching Channels...");
    fetchChannels();
  }, []);

  return (
    <Container centerContent>
      <Box
        alignItems={"center"}
        pt={4}
        justifyContent={"center"}
        direction={"column"}
        width={"full"}
      >
        <chakra.h1
          textAlign={"center"}
          fontSize={"4xl"}
          paddingTop={10}
          paddingBottom={2}
          fontWeight={"bold"}
        >
          List of streamers.
        </chakra.h1>
        <Text textAlign={"center"} paddingBottom={3}>
          Vote on your favorite streamer on the arrow{" "}
          <span>{<Icon as={FaRegArrowAltCircleUp} />}</span> below.
        </Text>
        <SimpleGrid
          columns={{ base: 1, md: 1 }}
          spacing={{ base: 5, lg: 8 }}
          mx={"auto"}
        >
          <StreamerCard
            online={"Online"}
            username={"Shroud"}
            profilePicture={"https://bit.ly/sage-adebayo"}
          />
        </SimpleGrid>
      </Box>
    </Container>
  );
}
