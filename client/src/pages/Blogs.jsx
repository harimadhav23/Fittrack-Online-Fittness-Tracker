import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Title = styled.div`
  padding: 0px 16px;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;

const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const BlogCard = styled.div`
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const BlogTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
`;

const BlogMeta = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
  display: flex;
  gap: 16px;
`;

const BlogContent = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
`;

const ReadMore = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

const Blogs = () => {
  const blogs = [
    {
      title: "10 Essential Tips for Building a Sustainable Fitness Routine",
      author: "Fitness Team",
      date: "March 15, 2024",
      content: "Creating a fitness routine that you can stick to long-term is crucial for achieving your health goals. Here are ten proven strategies to help you build habits that last..."
    },
    {
      title: "The Science Behind Calorie Tracking and Weight Management",
      author: "Dr. Sarah Johnson",
      date: "March 12, 2024",
      content: "Understanding how calories work in your body is fundamental to effective weight management. This comprehensive guide explains the science behind calorie tracking..."
    },
    {
      title: "Strength Training vs Cardio: Finding the Right Balance",
      author: "Mike Thompson",
      date: "March 10, 2024",
      content: "Both strength training and cardiovascular exercise are important for overall health, but finding the right balance depends on your specific goals..."
    },
    {
      title: "Nutrition Timing: When to Eat for Optimal Workout Performance",
      author: "Lisa Chen",
      date: "March 8, 2024",
      content: "The timing of your meals can significantly impact your workout performance and recovery. Learn when and what to eat for maximum results..."
    },
    {
      title: "Mental Health Benefits of Regular Exercise",
      author: "Dr. James Wilson",
      date: "March 5, 2024",
      content: "Exercise isn't just good for your physical health - it has profound effects on mental wellbeing too. Discover how regular physical activity can improve your mood..."
    }
  ];

  return (
    <Container>
      <Wrapper>
        <Title>Fitness Blogs</Title>
        <Content>
          {blogs.map((blog, index) => (
            <BlogCard key={index}>
              <BlogTitle>{blog.title}</BlogTitle>
              <BlogMeta>
                <span>By {blog.author}</span>
                <span>•</span>
                <span>{blog.date}</span>
              </BlogMeta>
              <BlogContent>
                {blog.content} <ReadMore>Read more</ReadMore>
              </BlogContent>
            </BlogCard>
          ))}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Blogs;
