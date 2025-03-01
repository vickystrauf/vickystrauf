import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { transparentize } from 'polished'
import styled from 'styled-components'
import { config, useSpring, animated } from 'react-spring'
import Layout from '../components/layout'
import { Box, AnimatedBox, Button } from '../elements'
import SEO from '../components/SEO'

const PBox = styled(AnimatedBox)`
  max-width: 1400px;
  margin: 0 auto;
  @media (max-width: ${props => props.theme.breakpoints[2]}) {
  padding-bottom: 1rem;}
`

const Content = styled(Box)<{ bg: string }>`
  background-color: ${props => transparentize(0.9, props.bg)};
  padding-top: 1rem;

  .gatsby-image-wrapper:not(:last-child) {
    margin-bottom: ${props => props.theme.space[10]};

    @media (max-width: ${props => props.theme.breakpoints[3]}) {
      // margin-bottom: ${props => props.theme.space[8]};
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    }
  }
`

const Category = styled(AnimatedBox)`
  letter-spacing: 0.05em;
  font-size: ${props => props.theme.fontSizes[1]};
  text-transform: uppercase;
  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    font-size: 1rem;
  }
`

const Description = styled(animated.div)`
  max-width: 960px;
  --baseline-multiplier: 0.179;
  --x-height-multiplier: 0.35;
  line-height: 1.6;
`

const PButton = styled(Button)<{ color: string }>`
  background: #f87d7e;
  color: #ffffff;
  }
`

const CustomHeader = styled.h1`
  ::after{
    content: '';
    display: block;
    width: 3rem;
    margin-top: 2rem;
    border-bottom: 2px solid #f87d7e;
  }
`

type PageProps = {
  data: {
    project: {
      title_detail: string
      color: string
      category: string
      desc: string
      slug: string
      parent: {
        modifiedTime: string
        birthTime: string
      }
      cover: {
        childImageSharp: {
          resize: {
            src: string
          }
        }
      }
    }
    images: {
      nodes: {
        name: string
        childImageSharp: {
          fluid: {
            aspectRatio: number
            src: string
            srcSet: string
            sizes: string
            base64: string
            tracedSVG: string
            srcWebp: string
            srcSetWebp: string
          }
        }
      }[]
    }
  }
}

const Project: React.FunctionComponent<PageProps> = ({ data: { project, images } }) => {
  const categoryAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: 'translate3d(0, -30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })

  // const titleAnimation = useSpring({ config: config.slow, delay: 300, from: { opacity: 0 }, to: { opacity: 1 } })
  const descAnimation = useSpring({ config: config.slow, delay: 600, from: { opacity: 0 }, to: { opacity: 1 } })
  const imagesAnimation = useSpring({ config: config.slow, delay: 800, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <Layout color={project.color}>
      <SEO
        pathname={project.slug}
        title={`${project.title_detail} | Jodie`}
        desc={project.desc}
        node={project.parent}
        banner={project.cover.childImageSharp.resize.src}
        individual
      />
      <PBox py={10} px={[6, 6, 8, 10]}>
        <Category style={categoryAnimation}>{project.category}</Category>
        {/* <animated.h1 style={titleAnimation}>{project.title_detail}</animated.h1> */}
        <CustomHeader>{project.title_detail}</CustomHeader>
        <Description style={descAnimation}>
          <div dangerouslySetInnerHTML={{ __html: project.desc }} />
        </Description>
      </PBox>
      <Content bg='white' py={10}>
      {/* <Content bg={project.color} py={10}> */}
        <PBox style={imagesAnimation} px={[6, 6, 8, 10]}>
          {images.nodes.map(image => (
            <Img alt={image.name} key={image.childImageSharp.fluid.src} fluid={image.childImageSharp.fluid} />
          ))}
        </PBox>
      </Content>
      <PBox style={{ textAlign: 'center' }} py={10} px={[6, 6, 8, 10]}>
        <h2>Do you want to work with me?</h2>
        <PButton color={project.color} py={4} px={8}>
          Contact Me
        </PButton>
      </PBox>
    </Layout>
  )
}

export default Project

export const query = graphql`
  query ProjectTemplate($slug: String!, $images: String!) {
    project: projectsYaml,(slug: { eq: $slug }) {
      title_detail
      color
      category
      desc
      slug
      parent {
        ... on File {
          modifiedTime
          birthTime
        }
      }
      cover {
        childImageSharp {
          resize(width: 1200, height: 675, quality: 80) {
            src
          }
        }
      }
    }
    images: allFile(filter: { relativePath: { regex: $images } }) {
      nodes {
        name
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
