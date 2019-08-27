import React from "react";
// import { Link } from "gatsby";
import { Box } from "../elements";
import { readableColor } from "polished";
import styled from "styled-components";
import Mail from "../icons/Mail";

const SocialIcon = styled.svg`
  vertical-align: middle;
  display: block;
  margin: auto;
  width: 7rem;
  fill: #f88379;
  :hover {
    transform: scale(1);
    transition: background-color 0.5s, transform 0.5s ease-out;
    fill: #f88379;
  }
  :focus {
    transform: scale(1.25);
    transition: background-color 0.5s, transform 0.5s ease-out;
    fill: #f88379;
  }
  // @media screen and (max-width: 1000px) {
  //     width: 2rem;
  // }
`;

const Wrapper = styled.footer<{ color: string }>`
  position: fixed;
  width: ${props => props.theme.sidebarWidth.big};
  bottom: 0;

  background: ${props => props.color};

  color: ${props =>
    readableColor(`${props.color}`, `${props.theme.colors.grey}`, "#000000")};

  a {
    color: ${props => readableColor(`${props.color}`)};
    text-decoration: none;
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }

  @media (max-width: ${props => props.theme.breakpoints[4]}) {
    width: ${props => props.theme.sidebarWidth.normal};
  }

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    position: relative;
    width: 100%;
  }
`;

const Footer = ({ color }) => {
  return (
    <Wrapper color={color}>
      <Box p={[6, 6, 8]} fontSize={0}>
        <div>
          <a href={`mailto:roadvagabonds@gmail.com`}>
            <SocialIcon
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 512 512"
              role="img"
              aria-hidden="true"
              focusable="false"
            >
              <Mail />
            </SocialIcon>
          </a>
        </div>
        <div>Viktoria Strauf, Manly</div>
        <div>ABN: 99 769 826 112</div>
      </Box>
    </Wrapper>
  );
};

export default Footer;
