import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox, Button } from '../elements'
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
  padding-left: 10rem;
`

  return (
    <Layout color="#f2f0ed">
      <SEO title="Services | Viktoria Strauf" desc="Hi. I'm Vicky, a self taught Graphic and Web Designer." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]} left-padding={10}>
        <h1>Work with me!</h1> 
        <p>
       You would like to have a fast running and unique website? You are just starting your business and 
       don't want to spend a lot of money on Squarespace or Wix? Hit me a message and we can discuss
       your needs and I will tell your what I can do better than Squarespace and Wix.
        </p>
      </AnimatedBox>
      <Topic>Graphic Design</Topic>

      <Container>
        <Row>
          <h2>LOGO</h2>
          <ul>
            <li>Face-to-face or Skype meeting to discuss your needs</li>
            <li>3 drafts</li>
            <li>up to two changes</li>
            <li>Delivery final design files</li>
          </ul>
        </Row>
        <Row>
          <h2>BUSINESS CARD</h2>
          <ul>
            <li>Face-to-face or Skype meeting to discuss your needs</li>
            <li>3 drafts</li>
            <li>up to two changes</li>
            <li>Delivery final design files</li>
        </ul>
        </Row>
      </Container>
      <Topic>Webdesign</Topic>
      <Container>
        <Row>
          <h2>PLATFORM</h2>
          <ul>
            <li>Face-to-face or Skype meeting to discuss your needs</li>
            <li>Design & Layout of up to 7 pages - responsive Mobile design</li>
            <li>Final Consultation - Walk through</li>
          </ul>
        </Row>
        <Row>
          <h2>CUSTOM</h2>
          <ul>
            <li>Face-to-face or Skype meeting to discuss your needs</li>
            <li>Design & Layout of up to 7 pages - responsive Mobile design</li>
            <li>Final Consultation - Walk through</li>
        </ul>
        </Row>
      </Container>
      <PBox style={{ textAlign: 'center' }} py={10} px={[6, 6, 8, 10]}>
        <h2>Do you want to work with me?</h2>
        <PButton py={4} px={8}>
          Contact Me
        </PButton>
      </PBox>
    </Layout>
  )
}

export default Services