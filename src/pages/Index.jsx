import { Container, VStack, SimpleGrid } from "@chakra-ui/react";
import Header from "../components/Header";
import ArticleCard from "../components/ArticleCard";
import "../styles/background.css";

const sampleArticles = [
  {
    title: "Economy on the Rise",
    summary: "The economy is showing signs of recovery as markets rebound.",
    imageUrl: "https://via.placeholder.com/300x200"
  },
  {
    title: "Tech Innovations",
    summary: "New technologies are emerging at a rapid pace, changing the landscape.",
    imageUrl: "https://via.placeholder.com/300x200"
  },
  {
    title: "Global Politics",
    summary: "Political shifts are happening across the world. Here's what you need to know.",
    imageUrl: "https://via.placeholder.com/300x200"
  }
];

const Index = () => {
  return (
    <Container className="ft-bg-color" maxW="container.xl" p={0}>
      <Header />
      <VStack spacing={8} py={8} px={4}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {sampleArticles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              summary={article.summary}
              imageUrl={article.imageUrl}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;