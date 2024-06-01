import { Container, Text, VStack, Heading, Box, Button, Image } from "@chakra-ui/react";
import { FaNewspaper, FaChartLine, FaMoneyBillWave } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Financial Times
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Stay updated with the latest financial news, market trends, and investment insights.
        </Text>
        <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap" gap={6}>
          <Box textAlign="center">
            <FaNewspaper size="3em" />
            <Text mt={2}>Latest News</Text>
          </Box>
          <Box textAlign="center">
            <FaChartLine size="3em" />
            <Text mt={2}>Market Trends</Text>
          </Box>
          <Box textAlign="center">
            <FaMoneyBillWave size="3em" />
            <Text mt={2}>Investment Tips</Text>
          </Box>
        </Box>
        <Button colorScheme="teal" size="lg">
          Subscribe Now
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;