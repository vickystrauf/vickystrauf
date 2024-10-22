import React from "react";
import { Link } from "gatsby";
import { Box, Flex } from "../elements";
import { readableColor } from "polished";
import styled from "styled-components";

const SideBarInner = styled(Box)<{ bg: string }>`
  position: fixed;
  height: 100%;
  width: ${props => props.theme.sidebarWidth.big};
  display: flex;
  flex-direction: column;
  background: ${props => props.bg};
  @media (max-width: ${props => props.theme.breakpoints[4]}) {
    width: ${props => props.theme.sidebarWidth.normal};
  }
  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    position: relative;
    width: 100%;
  }

  svg {
    fill: ${props => readableColor(`${props.bg}`)};
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-block-end: 0;
  display: flex;
  margin-block-end: 0.2em;
  color: #f87d7e;
  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    font-size: 4rem;
    line-height: 0.7;
    display: block;
  }
`;

const Subtitle = styled.div`
  text-align: center;
  font-size: 20px;
  letter-spacing: 1px;
`;

const Love = styled.p`
  font-size: 14px;
  color: #f87d7e;
  display: flex;
  justify-content: center;
  margin-block-start: 0;
  padding-block-end: 4rem;
  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    padding-block-end: 1rem;
  }
`;

const Nav = styled(Flex)<{ color: string }>`
  align-items: center;
  a {
    text-decoration: none;
    color: ${props => readableColor(`${props.color}`)};
    font-size: ${props => props.theme.fontSizes[3]};
    line-height: 1.5;
    &:hover,
    &:focus,
    &.navlink-active {
      color: ${props => props.theme.colors.primary};
    }

    @media (max-width: ${props => props.theme.breakpoints[2]}) {
      font-size: ${props => props.theme.fontSizes[2]};
      margin-left: ${props => props.theme.space[4]};
      justify-content: space-between;
    }

    @media (max-width: ${props => props.theme.breakpoints[1]}) {
      font-size: ${props => props.theme.fontSizes[1]};
      margin-left: ${props => props.theme.space[3]};
    }

    @media (max-width: ${props => props.theme.breakpoints[0]}) {
      font-size: ${props => props.theme.fontSizes[0]};
      margin-left: ${props => props.theme.space[2]};
    }
  }
`;

const PartialNavLink = ({
  children,
  to,
  ...rest
}: {
  children: React.ReactNode;
  to: string;
}) => (
  <Link activeStyle={{color: '#f87d7e'}} to={to} {...rest}>
    {children}
  </Link>
);

const Sidebar = ({ color, data }) => {
  return (
    <SideBarInner bg={color} as="aside" p={[6, 6, 8]}>
      <Flex
        flexWrap="nowrap"
        flexDirection={["column"]}
        justifyContent="space-between"
      >
        <Link
          style={{ color: "black" }}
          to="/"
          aria-label="VickyStrauf, Back to Home"
        >
          <Title>Viktoria Strauf</Title>
          <Subtitle>graphic & webdesign</Subtitle>
          <Love>made with love &hearts;</Love>
        </Link>
      </Flex>
      <Nav
        color={color}
        mt={[0, 0, 0, 10]}
        as="nav"
        flexWrap="nowrap"
        flexDirection={["row", "row", "row", "column"]}
        alignItems="flex-start"
      >
        {data.navigation.nodes.map(item => (
          <PartialNavLink to={item.link} key={item.name}>
            {item.name}
          </PartialNavLink>
        ))}
      </Nav>
    </SideBarInner>
  );
};

export default Sidebar;
