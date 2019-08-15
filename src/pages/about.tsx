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
    <Layout color="#f88379">
      <SEO title="About | Viktoria Strauf" desc="Hi. I'm Vicky, a self taught Graphic and Web Designer." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]} left-padding={10}>
        <h1>Hi. I'm Vicky!</h1> 

        <p>
        I'm a self taught Graphic and Web Designer. Check out my previous
        projects and message me to discuss your needs. I'm looking forward to work with you!
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default About