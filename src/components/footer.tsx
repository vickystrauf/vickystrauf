import React from "react";
import { Box } from "../elements";
import { readableColor } from "polished";
import styled from "styled-components";
import Mail from "../icons/Mail";
// import Phone from "../icons/Phone";


const SocialWrapper = styled.div`
display: grid;
grid-template-columns: 10px 10px;
grid-gap: 50px;
grid-template-rows: 1;
justify-content: center;
height: 50px;
`

const SocialIcon = styled.svg`
vertical-align: middle;
  width: 8rem;
  fill: #f87d7e;
  :hover {
    transform: scale(1);
    transition: background-color 0.5s, transform 0.5s ease-out;
    fill: #f87d7e;
  }
  :focus {
    transform: scale(1.25);
    transition: background-color 0.5s, transform 0.5s ease-out;
    fill: #f87d7e;
  }
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

const CenterText = styled.div`
  text-align: center;
`

const Footer = ({ color }) => {
  return (
    <Wrapper color={color}>
      <Box p={[6, 6, 8]} fontSize={0}>
        <SocialWrapper>
        <CenterText>
          <a href={`mailto:viktoria.strauf@gmail.com`}>
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
        </CenterText>
        {/* <CenterText>
          <a href={`tel:+61-422-097-053"`}>
            <SocialIcon
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 512 512"
              role="img"
              aria-hidden="true"
              focusable="false"
            >
              <Phone />
            </SocialIcon>
          </a>
        </CenterText> */}
        </SocialWrapper>
        <CenterText>Viktoria Strauf, Manly</CenterText>
        <CenterText>ABN: 99 769 826 112</CenterText>
      </Box>
    </Wrapper>
  );
};

export default Footer;
