import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack spacing={2} backgroundColor="#ffffff" borderRadius=".5rem">
      <Image boxSize="100%" borderRadius=".5rem" src={imageSrc} />
      <VStack p=".8rem" alignItems="flex-start" color="black">
        <Heading size="md">{title}</Heading>
        <Text color="#666666">{description}</Text>
        <Box width="fit-content">
          <a href="" onClick={(e) => e.preventDefault()}>
            <HStack spacing={2} alignItems="center">
              <Text>See more</Text>
              <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </HStack>
          </a>
        </Box>
      </VStack>
    </VStack>
  );
};

export default Card;
