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

const Card = styled.div`
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CardTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
`;

const CardContent = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
`;

const Tutorials = () => {
  const tutorials = [
    {
      title: "Getting Started with Fitness Tracking",
      content: "Learn how to set up your fitness goals and start tracking your workouts effectively. This tutorial covers the basics of using the fitness tracker application."
    },
    {
      title: "Understanding Workout Categories",
      content: "Explore different workout categories like cardio, strength training, flexibility, and how to organize your fitness routine for maximum results."
    },
    {
      title: "Tracking Your Progress",
      content: "Discover how to monitor your fitness progress using charts, statistics, and workout history to stay motivated and achieve your goals."
    },
    {
      title: "Setting Realistic Fitness Goals",
      content: "Learn how to set achievable fitness goals and create a sustainable workout routine that fits your lifestyle and schedule."
    }
  ];

  return (
    <Container>
      <Wrapper>
        <Title>Fitness Tutorials</Title>
        <Content>
          {tutorials.map((tutorial, index) => (
            <Card key={index}>
              <CardTitle>{tutorial.title}</CardTitle>
              <CardContent>{tutorial.content}</CardContent>
            </Card>
          ))}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Tutorials;
