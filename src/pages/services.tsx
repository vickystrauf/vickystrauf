import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox, Button, Box } from '../elements'
import SEO from '../components/SEO'
import styled from 'styled-components'

const Services = () => {

  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding-left: 10rem;
    padding-right: 5rem;
    padding-block-end: 3rem;
    @media screen and (max-width: 1000px) {
      flex-wrap: wrap;
      justify-content: space-between;
  }
`

const Row =styled.div`
    display: block;
    flex-flow: row wrap;
    flex-basis: 0;
    flex-grow: 1;
  `
  const PBox = styled(AnimatedBox)`
  max-width: 1400px;
  margin: 0 auto;
`

const PButton = styled(Button)`
  background: #f88379;
  color: #ffffff;
`

const Topic = styled.h1`
  // padding-left: 10rem;
  font-size: 2rem;
  letter-spacing: 0.05em;
  font-weight: 350;
  margin-block-end: 4rem;
  font-family: 'Open Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';;
  `

  const Fancy = styled(Box)<{ color: string }>`
    text-align : center;
    width  : 2em;
    height : 2em;
    margin: auto;
    border-radius: 100%;
    font-size: 2.488rem;
    font-family: Times New Roman;
    color: #ffffff;
    background:  ${props => props.color};
  }
  `
const ServiceTitle = styled (Box)`
    background: #f2f0ed;
    margin-right: 6rem;
    padding: 1rem;
    color: black;
    font-family: 'Open Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';;
    // font-size: 2rem;
    font-size: ${props => props.theme.fontSizes[1]};
    text-align: center;
    letter-spacing: 0.05em;
    // margin-left: 3rem;
    border-bottom: 0.5px solid black;
    `
    const Service = styled (Box)`
    background: #f2f0ed;
    color: black;
    margin-right: 6rem;
    padding: 1rem;
    // margin-left: 3rem;
    `   

  return (
    <Layout color="#f2f0ed">
      <SEO title="Services | Viktoria Strauf" desc="Hi. I'm Vicky, a self taught Graphic and Web Designer." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]} left-padding={10}>
        <h1>Services</h1> 
        <p>
       You would like to have a fast running and unique website? You are just starting your business and 
       don't want to spend a lot of money on Squarespace or Wix? Hit me a message and we can discuss
       your needs and I will tell your what I can do better than Squarespace and Wix.
        </p>
      </AnimatedBox>
      <Topic>GRAPHIC DESIGN</Topic>
      <Container>
        <Row>
          <ServiceTitle>
          LOGO 
          </ServiceTitle>
          <Service>
          I will design a beautiful Logo to give your business a remorable frontdoor.
          </Service>
          </Row>
          <Row>
        <ServiceTitle>
          BUSINESS CARD
        </ServiceTitle>
          <Service>Get known by people and leave them your details with a beautiful business card.
        </Service>
        </Row>
      </Container>
      <Topic>HOW IT ALL WORKS?</Topic>
      <Container>
      <Row>
      <Fancy color="#fde74c">1</Fancy>
      Face-to-face or Skype meeting to discuss your needs
      </Row>  
      <Row>
      <Fancy color="#ff1654">2</Fancy>
            3 drafts
        </Row>  
        <Row>
        <Fancy color="#ff9f1c">3</Fancy>
            With your feedback I will make up to two changes
        </Row> 
        <Row>
        <Fancy color="#4ecdc4">4</Fancy>
            Delivery of the final design files
        </Row> 
      </Container>
      <Topic>WEBDESIGN</Topic>
      <Container>
        <Row>
          <ServiceTitle>
            PLATFORM
          </ServiceTitle>
          <Service>
          I will design a beautiful Logo to give your business a remorable frontdoor.
          </Service>
          </Row>
          <Row>
        <ServiceTitle>
          CUSTOM
        </ServiceTitle>
          <Service>Get known by people and leave them your details with a beautiful business card.
        </Service>
        </Row>
      </Container>
      <Container></Container>
      <Topic>HOW IT ALL WORKS?</Topic>
      <Container>
        <Row>
      <Fancy color="#fde74c">1</Fancy>
      Face-to-face or Skype meeting to discuss your needs
      </Row>  
      <Row>
      <Fancy color="#ff1654">2</Fancy>
      Design & Layout of up to 7 pages - responsive Mobile design
        </Row>  
        <Row>
        <Fancy color="#ff9f1c">3</Fancy>
            Minor changes
        </Row> 
        <Row>
        <Fancy color="#4ecdc4">4</Fancy>
        Final Consultation - Walk through
        </Row>
      </Container>
      <PBox style={{ textAlign: 'center' }} py={10} px={[6, 6, 8, 10]}>
        <h2>Book your free consultation today!</h2>
        <PButton py={4} px={8}>
          Contact Me
        </PButton>
      </PBox>
  </Layout>
  )
}

export default Services