import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Section, Title, Box, Text } from "../../components/Core";

const Tag = styled.span`
  display: inline-block;
  padding: 0.35rem 0.85rem;
  border-radius: 500px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  margin: 0.2rem;
  background: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const skills = [
  {
    category: ".NET & Backend",
    tags: ["C#", ".NET 8", ".NET 9", ".NET Core", ".NET Framework", "REST APIs", "Web Services", "PHP", "Laravel", "Node.js"],
  },
  {
    category: "Frontend",
    tags: ["React", "Vue.js", "Angular", "Blazor", "Razor", "TypeScript"],
  },
  {
    category: "Mobile",
    tags: ["React Native", ".NET MAUI", "MAUI Blazor", "iOS", "Android"],
  },
  {
    category: "Cloud & DevOps",
    tags: ["Azure DevOps", "Pipelines CI/CD", "Docker", "Kubernetes", "Cloud Run", "Cloud Tasks", "VM", "Google Cloud"],
  },
  {
    category: "Artificial Intelligence",
    tags: ["Claude API", "Gemini API", "AI Integration"],
  },
  {
    category: "Data & Reporting",
    tags: ["BigQuery", "Power BI", "Looker Studio"],
  },
  {
    category: "Engineering & Collaboration",
    tags: ["Jira", "Kanban", "Scrum", "Code Review", "Pull Requests", "Git"],
  },
];

const Skills = () => (
  <Section>
    <Container>
      <Title variant="secSm" className="mb-5" data-aos="fade-up">
        Tech stack
      </Title>
      <Row>
        {skills.map(({ category, tags }, index) => (
          <Col lg="4" md="6" className="mb-5" key={category} data-aos="fade-up" data-aos-delay={`${(index % 3) * 100 + 100}`}>
            <Text
              variant="tag"
              color="primary"
              className="mb-3"
              css={`display: block;`}
            >
              {category}
            </Text>
            <Box>
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Box>
          </Col>
        ))}
      </Row>
    </Container>
  </Section>
);

export default Skills;
