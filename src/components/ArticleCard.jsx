import { Box, Heading, Text, Image, VStack } from "@chakra-ui/react";

const ArticleCard = ({ title, summary, imageUrl }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white">
      <Image src={imageUrl} alt={title} />
      <VStack align="start" p={4}>
        <Heading as="h2" size="md" mb={2}>
          {title}
        </Heading>
        <Text noOfLines={3}>{summary}</Text>
      </VStack>
    </Box>
  );
};

export default ArticleCard;