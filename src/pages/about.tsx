import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'


const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })


  return (
    <Layout color="#f2f1f0">
      <SEO title="About | Viktoria Strauf" desc="Hi. I'm Vicky, a self taught Graphic and Web Designer." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]} left-padding={10}>
        <h1>Hi. I'm Vicky,</h1> 

        <p>
        a self taught Graphic and Webdesigner living overseas. Creating beautiful designs with love is what I am passionate about.
        I’m super motivated for every new project and can’t wait to start working with you.
        <div>
        <p>Do you have the following problems?</p>
        <ul>
        <li>No logo, business card or website at all</li>
        <li>Visual recognition is missing</li>
        <li>Can’t afford highly paid design agencies and don’t want to waste time on fiverr as you prefer to meet someone in person</li>
        </ul>
        </div>
        Don’t know where to get started and what you need for your business
        Then make a difference and make your business your happy place. Get in touch with me and I will help you to create beautiful designs depending on your needs. 

        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default About