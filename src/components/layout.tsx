import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { readableColor } from 'polished'
import 'typeface-work-sans'
import { Box, Flex } from '../elements'
import theme from '../../config/theme'
import reset from '../styles/reset'
import Mail from '../icons/Mail'


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
      // font-size: ${theme.fontSizes[5]};
      font-size: 4.5rem;
      letter-spacing: -3px;
      color: #f88379;
      font-weight: 400;
      line-height: 0.7;
    }
    h2 {
      // font-size: ${theme.fontSizes[2]};
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
      }
      h2 {
        font-size: ${theme.fontSizes[3]};
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
`

const isPartiallyActive = ({ isPartiallyCurrent }: { isPartiallyCurrent: boolean }) =>
  isPartiallyCurrent ? { className: 'navlink-active navlink' } : { className: 'navlink' }

const PartialNavLink = ({ children, to, ...rest }: { children: React.ReactNode; to: string }) => (
  <Link getProps={isPartiallyActive} to={to} {...rest}>
    {children}
  </Link>
)

const SocialIcon = styled.svg`
    vertical-align: middle;
    display: block; 
    margin: auto; 
    width: 7rem;
    fill: #f88379;
    :hover{
        transform: scale(1);
        transition: background-color .5s, transform .5s ease-out;
        fill: #f88379;
    }
    :focus{
        transform: scale(1.25);
        transition: background-color .5s, transform .5s ease-out;
        fill: #f88379;
    }
    // @media screen and (max-width: 1000px) {
    //     width: 2rem;
    // }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${props => props.theme.sidebarWidth.big} 1fr;
  @media (max-width: ${props => props.theme.breakpoints[4]}) {
    grid-template-columns: ${props => props.theme.sidebarWidth.normal} 1fr;
  }

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    grid-template-columns: 1fr;
  }
`

const SideBarInner = styled(Box)<{ bg: string }>`
  position: fixed;
  height: 100%;
  width: ${props => props.theme.sidebarWidth.big};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

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
`

const Nav = styled(Flex)<{ color: string }>`
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
`

const Main = styled.main`
  @media (min-width: calc(${props => props.theme.breakpoints[2]} + 1px)) {
    grid-column-start: 2;
  }
`

const Footer = styled.footer<{ color: string }>`
  position: fixed;
  width: ${props => props.theme.sidebarWidth.big};
  bottom: 0;

  background: ${props => props.color};

  color: ${props => readableColor(`${props.color}`, `${props.theme.colors.grey}`, '#000000')};

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
`

const Logo = styled.div`
 display: flex;
 text-align: center;`

 const Title = styled.h1`
//  display: block-inline;
 text-align: center;
 margin-block-end: 0;
 display: flex;
 margin-block-end: 0.2em;`

 const Subtitle = styled.div`
//  display: block-inline;
 text-align: center;
 font-size: 20px;
 letter-spacing: 1px;
 `
const Love = styled.p`
 font-size: 14px;
 color: #f88379;`

type LayoutProps = { children: React.ReactNode } & typeof defaultProps

const defaultProps = {
  color: 'white',
}

interface QueryResult {
  navigation: {
    nodes: {
      name: string
      link: string
    }[]
  }
}

const Layout = ({ children, color }: LayoutProps) => {
  const data: QueryResult = useStaticQuery(query)

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Wrapper>
          <SideBarInner bg={color} as="aside" p={[6, 6, 8]}>
            <Flex
              flexWrap="nowrap"
              flexDirection={['row', 'row', 'row', 'column']}
              alignItems={['center', 'center', 'center', 'flex-start']}
              justifyContent="space-between"
            >
              <Logo>
              <Box width={['3rem', '4rem', '5rem', '6rem']} color="black">
                <Link style={{color:'black'}} to="/" aria-label="VickyStrauf, Back to Home">
                 <Title>Viktoria Strauf</Title>
                 <Subtitle>graphic & webdesign</Subtitle>
                  <Love>made with love &hearts;</Love>
                  
                </Link>
              </Box>
              </Logo>
              <Nav
                color={color}
                mt={[0, 0, 0, 10]}
                as="nav"
                flexWrap="nowrap"
                flexDirection={['row', 'row', 'row', 'column']}
                alignItems="flex-start"
              >
                {data.navigation.nodes.map(item => (
                  <PartialNavLink to={item.link} key={item.name}>
                    {item.name}
                  </PartialNavLink>
                ))}
              </Nav>
            </Flex>
          </SideBarInner>
          <Main>{children}</Main>
          <Footer color={color}>
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
          </Footer>
        </Wrapper>
      </>
    </ThemeProvider>
  )
}

export default Layout

Layout.defaultProps = defaultProps

const query = graphql`
  query Layout {
    navigation: allNavigationYaml {
      nodes {
        name
        link
      }
    }
  }
`
