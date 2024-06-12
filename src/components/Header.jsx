import { Box, Flex, Heading, Spacer, IconButton } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <Box bg="brand.800" color="white" px={4} py={2}>
      <Flex align="center">
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <Spacer />
        <IconButton
          aria-label="User profile"
          icon={<FaUserCircle />}
          size="lg"
          variant="ghost"
          color="white"
        />
      </Flex>
    </Box>
  );
};

export default Header;