import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import "typeface-work-sans";
import theme from "../../config/theme";
import reset from "../styles/reset";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";

const GlobalStyles = createGlobalStyle`
  *::before,
  *::after {
    box-sizing: border-box;
  }
  ::selection {
    color: white;
    background-color: #f88379 }
  html {
    box-sizing: border-box;
    border: 0;
    margin: 0;
    
    h1, h3, h4, h5, h6 {
      font-weight: ${theme.fontWeights.bold};
      font-family: 'Times New Roman';
    }

    
    h1 {
      font-size: 4.5rem;
      letter-spacing: -3px;
      color: black;
      font-weight: 400;
      line-height: 0.7;
    }
    h2 {
      font-weight: 300;
      font-size: 1.2rem;
    }

    h3 {
      font-size: ${theme.fontSizes[3]}
      ;
    }   
    h4 {
      font-size: ${theme.fontSizes[2]};
    }
    h5 {
      font-size: ${theme.fontSizes[1]};
    }
    h6 {
      font-size: ${theme.fontSizes[0]};
    }
    
    @media (max-width: 600px) {
      font-size: 16px;
      
      h1 {
        font-size: ${theme.fontSizes[4]};
        letter-spacing: -2px;
      }
      h2 {
        font-size: ${theme.fontSizes[1]};
      }
      h3 {
        font-size: ${theme.fontSizes[2]};
      }
      h4 {
        font-size: ${theme.fontSizes[1]};
      }
      h5 {
        font-size: ${theme.fontSizes[0]};
      }
      h6 {
        font-size: ${theme.fontSizes[0]};
      }
    }
  }
  body {
    border: 0;
    margin: 0;
    padding: 0;
    color: black;
    font-family:   'Open Sans',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol';
    background: white;
    font-size: 18px;
    font-weight: 350;
    line-height: 1.6;
  }
  a {
    transition: all 0.3s ease-in-out;
    color: black;
    font-weight: 300;
    text-decoration: none;
    &:hover,
    &:focus {
      color: ${theme.colors.primary};
    }
  }
  ${reset}
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: ${props => props.theme.breakpoints[2]}) {
  }
`;

const Main = styled.main`
  display: flex;
  margin-left: 22%;

  // @media (min-width: ${props => props.theme.breakpoints[2]}) {
  //   grid-column-start: 2;
  // }
`;

type LayoutProps = { children: React.ReactNode } & typeof defaultProps;

const defaultProps = {
  color: "white"
};

interface QueryResult {
  navigation: {
    nodes: {
      name: string;
      link: string;
    }[];
  };
}

const Layout = ({ children, color }: LayoutProps) => {
  const data: QueryResult = useStaticQuery(query);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Wrapper>
          <Sidebar color={color} data={data}></Sidebar>
          <Main>{children}</Main>
        </Wrapper>
        <Footer color={color}></Footer>
      </>
    </ThemeProvider>
  );
};

export default Layout;

Layout.defaultProps = defaultProps;

const query = graphql`
  query Layout {
    navigation: allNavigationYaml {
      nodes {
        name
        link
      }
    }
  }
`;
