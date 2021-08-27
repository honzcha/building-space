import {
  Icon,
  Center,
  HStack,
  Button,
  FormControl,
  Input,
  FormLabel,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

export function ContentAdd() {
  const [value, setValue] = React.useState("");
  const handleChange = (event) => setValue(event.target.value);

  const [favouriteChannels, setFavouriteChannels] = useState([]);
  //actions
  const addStreamChannel = async (event) => {
    console.log("1");
    //prevent page from reloading while clicking the submit button
    event.preventDefault();

    if (value) {
      console.log("input: ", value);
      //calling Twitch's search API
      const path = "http://localhost:3000";

      const response = await fetch(`${path}/api/twitch`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: value }),
      });
      const json = await response.json();
      console.log("From the server: ", json.data);

      setFavouriteChannels((prevState) => [...prevState, json.data]);

      // await setChannel(value);

      // event.target.elements.name.value = "";
    }
  };

  return (
    <Center>
      <VStack>
        <FormLabel>Add your favorite streamer to the list.</FormLabel>
        <HStack spacing="12px">
          <Input
            value={value}
            onChange={handleChange}
            onSubmit={console.log("test")}
            placeholder="Twitch Channel Name"
            type="text"
            variant="filled"
          />
          <Button
            // isLoading
            onClick={addStreamChannel}
            leftIcon={<Icon as={FaPlusCircle} />}
            colorScheme="teal"
            variant="outline"
            type="submit"
          >
            Add
          </Button>

        </HStack>
      </VStack>
    </Center>
  );
}
