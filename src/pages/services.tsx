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
    to: { opacity: 1 }
  });

  const CustomHeader = styled.h1`
  ::after{
    content: '';
    display: block;
    width: 3rem;
    margin-top: 2rem;
    border-bottom: 2px solid #f87d7e;
  }
`
  const PBox = styled(AnimatedBox)`
    max-width: 1400px;
    margin: 0 auto;
  `;

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

const TextBox = styled.h1`
  font-size: 3rem;
  margin-left: 10rem;
  letter-spacing: -1;
`

const Circle = styled.div`
display: flex;
width: 84px;
height: 84px;
border-radius: 50%;
background: #f87d7e;
justify-content: center;
align-items: center;
color: #ffffff;
font-size: 2rem;
font-weight:300;`

const Steps = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

  return (
    <Layout color="#f2f0ed">
      <SEO title="Services | Viktoria Strauf" desc="Hi. I'm Vicky, a self taught Graphic and Web Designer." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]} left-padding={10}>
        <CustomHeader>Services</CustomHeader> 
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
      <TextBox>How it all works?</TextBox>
      <Wrapper>
        <Steps>
        <Circle>1</Circle>
        <p>First of all we schedule a Skype or face-to-face meeting where you will tell me more about your business and your needs</p>
        </Steps>
        <Steps>
        <Circle>2</Circle>
        <p>Lets's have some fun! I will start to work on your design abnd update you with drafts.</p>
        </Steps>
        <Steps>
        <Circle>3</Circle>
        <p>After I have done my job, I need you to give me an honest feedback on my work. I will do minor changes, so you are happy.</p>
        </Steps>
        <Steps>
        <Circle>4</Circle>
        <p>After going through the last couple of changes, I will deliver the final designs/walk you through your website.</p>
        </Steps>
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

export default Services;
