import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox, Button, Box } from '../elements'
import SEO from '../components/SEO'
import styled from 'styled-components'
import logo from '../images/logo.jpg'
import business from '../images/business.jpg'
import platform from '../images/platform.jpg'
import custom from '../images/custom.jpg'

const Services = () => {

  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })


  const PBox = styled(AnimatedBox)`
  max-width: 1400px;
  margin: 0 auto;
`

const PButton = styled(Button)`
  background: #f87d7e;
  color: #ffffff;
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 5rem;
  padding-right: 5rem;
`
const LogoBox = styled.div`
width: 210px;
height: 210px;
display: flex;
justify-content: center;
align-items: center;
background-image: url(${logo});
background-size: cover;
`
const BusinessBox = styled.div`
width: 210px;
height: 210px;
display: flex;
justify-content: center;
align-items: center;
background-image: url(${business});
background-size: cover;
`
const PlatformBox = styled.div`
width: 210px;
height: 210px;
display: flex;
justify-content: center;
align-items: center;
background-image: url(${platform});
background-size: cover;
`
const CustomBox = styled.div`
width: 210px;
height: 210px;
display: flex;
justify-content: center;
align-items: center;
background-image: url(${custom});
background-size: cover;
`
const TitleBox = styled.div`
width: 180px;
height: 80px;
opacity: 0.9;
background: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
text-transform: uppercase;
text-align: center;
letter-spacing: 0.05em;
font-size: 1.2rem;`

// const TextBox = styled.p`
//   margin: 0;
//   text-transform: uppercase;
// `


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
      <Wrapper>
        <LogoBox alt="Logo Design">
          <TitleBox>Logo</TitleBox>
          </LogoBox> 
        <BusinessBox alt="Business Card Design">
        <TitleBox>Business Card</TitleBox>
        </BusinessBox>
        <PlatformBox alt="Platform based Webdesign">
        <TitleBox>Platform Webdesign</TitleBox>
        </PlatformBox>
        <CustomBox alt="Custom Webdesign">
        <TitleBox>Custom Webdesign</TitleBox>
        </CustomBox>
      </Wrapper>
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