import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Box, Title, Text } from "../Core";

const WorkBox = styled(Box)``;

const ImgWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: 12px;
  background: ${({ mobile }) => mobile ? "#12122a" : "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.35s ease, box-shadow 0.35s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: ${({ mobile }) => mobile ? "contain" : "cover"};
    display: block;
    padding: ${({ mobile }) => mobile ? "1rem 0" : "0"};
    transition: transform 0.35s ease;
  }

  ${WorkBox}:hover & {
    box-shadow: 0 20px 50px rgba(0,0,0,0.18);
  }

  ${WorkBox}:hover & img {
    transform: scale(1.04);
  }
`;

const CategoryBadge = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 2;
  background: rgba(0,0,0,0.55);
  color: #fff;
  font-size: 0.6rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 0.2rem 0.6rem;
  border-radius: 500px;
  backdrop-filter: blur(4px);
`;

const TextBox = styled(Box)`
  position: absolute;
  overflow: hidden;
  bottom: 0px;
  left: 20px;
  right: 20px;
  opacity: 0;
  border-radius: 8px;
  z-index: 1;
  padding: 1.25rem 1.875rem;
  transition: 0.4s;
  &::before {
    position: absolute;
    content: "";
    background: ${({ theme }) => theme.colors.bg};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.9;
  }
  ${WorkBox}:hover & {
    bottom: 20px;
    opacity: 1;
  }
`;

const WorkCard = ({ workItem, link, ...rest }) => (
  <WorkBox className="position-relative" {...rest}>
    <Link to={link} className="d-block">
      <ImgWrap mobile={workItem.categories[0] === "mobile" ? 1 : 0}>
        <CategoryBadge>{workItem.categories[0]}</CategoryBadge>
        <img src={workItem.thumbnail} alt={workItem.brand} />
      </ImgWrap>
    </Link>

    <TextBox>
      <Text variant="tag" mb={2}>
        {workItem.categories[0]}
      </Text>
      <Title variant="card">
        <Link to={link}>{workItem.brand} </Link>
      </Title>
    </TextBox>
  </WorkBox>
);

export default WorkCard;
