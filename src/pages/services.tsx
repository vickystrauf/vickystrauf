import React from "react";
import { config, useSpring } from "react-spring";
import Layout from "../components/layout";
import { AnimatedBox, Button } from "../elements";
import SEO from "../components/SEO";
import styled from "styled-components";
import logo from "../images/logo.jpg";
import business from "../images/business.jpg";
import platform from "../images/platform.jpg";
import custom from "../images/custom.jpg";

const Services = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 }
  });

  const CustomHeader = styled.h1`
    ::after {
      content: "";
      display: block;
      width: 3rem;
      margin-top: 2rem;
      border-bottom: 2px solid #f87d7e;
    }
  `;
  const PBox = styled(AnimatedBox)`
    max-width: 1400px;
    margin: 0 auto;
  `;

  const PButton = styled(Button)`
    background: #f87d7e;
    color: #ffffff;
  `;

  const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 290px 290px;
    grid-gap: 50px;
    grid-template-rows: 2;
    justify-content: center;

    @media (max-width: ${props => props.theme.breakpoints[2]}) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  `;
  const LogoBox = styled.div`
    width: 290px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${logo});
    background-size: cover;

    @media (max-width: ${props => props.theme.breakpoints[2]}) {
      margin-block-end: 2rem;
    }
  `;
  const BusinessBox = styled.div`
    width: 290px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${business});
    background-size: cover;

    @media (max-width: ${props => props.theme.breakpoints[2]}) {
      margin-block-end: 2rem;
    }
  `;
  const PlatformBox = styled.div`
    width: 290px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${platform});
    background-size: cover;

    @media (max-width: ${props => props.theme.breakpoints[2]}) {
      margin-block-end: 2rem;
    }
  `;
  const CustomBox = styled.div`
    width: 290px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${custom});
    background-size: cover;

    @media (max-width: ${props => props.theme.breakpoints[2]}) {
      margin-block-end: 2rem;
    }
  `;
  const TitleBox = styled.div`
    width: 180px;
    height: 80px;
    opacity: 0.9;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.05em;
    font-size: 1.2rem;
  `;

  const Circle = styled.div`
    display: flex;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: #f87d7e;
    align-self: center;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 2rem;
    font-weight: 300;
    @media (max-width: ${props => props.theme.breakpoints[2]}) {
      width: 50px;
      height: 50px;
      font-size: 1.5rem;
    }
  `;

  const Steps = styled.p`
    text-align: center;
    margin-block-end: 5rem;
  `;

  const WrapperWork = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: 5rem;
    padding-right: 5rem;
    flex-direction: column;
    @media (max-width: ${props => props.theme.breakpoints[2]}) {
      padding-left: 0rem;
      padding-right: 0rem;
    }
  `;

  return (
    <Layout color="#f2f0ed">
      <SEO
        title="Services | Viktoria Strauf"
        desc="Hi. I'm Vicky, a self taught Graphic and Web Designer."
      />
      <AnimatedBox
        style={pageAnimation}
        py={[6, 6, 6, 8]}
        px={[6, 6, 8, 6, 8, 13]}
        left-padding={10}
      >
        <CustomHeader>Services</CustomHeader>
        <p>
          You are an entrepreneur, owner of a small business or start-up and
          looking for beautiful designs for your visual front door? Don't waste
          your time on UpWork or fiverr, just send me a message and meet me in
          person so we can discuss your needs face to face. Let's design a
          beautiful logo, business card or/and website together and get one step
          further with your business. For Logo and Business Card Design I will
          work with the Adobe Cloud to provide professional designs. Platform
          based websites will be build within Squarespace, WIX or Wordpress.com.
          To make your website even faster and more unique, I also provide
          custom web designs, where I build a website from scratch. This
          approach will reduce your hosting fees and create a fast and
          responsive website based on the latest web technologies.
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
          <TitleBox>Platform Web Design</TitleBox>
        </PlatformBox>
        <CustomBox alt="Custom Webdesign">
          <TitleBox>Custom Web Design</TitleBox>
        </CustomBox>
      </Wrapper>
      <AnimatedBox
        style={pageAnimation}
        py={[6, 6, 6, 8]}
        px={[6, 6, 8, 6, 8, 13]}
        left-padding={10}
      >
        <CustomHeader>How it all works?</CustomHeader>
        <WrapperWork>
          <Circle>1</Circle>
          <Steps>
            First of all we schedule a Skype or face-to-face meeting, I want to
            know more about your business, products and services. Tell me about
            your target audience and how you differentiate yourself from
            competition. We cover pricing, time frames, questions you may have
            and all I need from you to start working.
          </Steps>
          <Circle>2</Circle>
          <Steps>
            Based on the information provided, visions and goals, I start to
            work on your individual project - either Graphic or Web Design. I
            will deliver the first design draft within the discussed time frame.
          </Steps>
          <Circle>3</Circle>
          <Steps>
            Now it's your turn, we will be doing a round of initial feedback and
            will define action items for further changes on the site. Minor
            changes are included in the package, for mayor changes I will charge
            my hourly rate (only with your agreement).
          </Steps>
          <Circle>4</Circle>
          <Steps>
            After going through the last couple of changes, I will deliver the
            final designs in the file formats required. For every website
            project, I provide a walk through of your website. From here on all
            major changes will be charged at my hourly rate.
          </Steps>
        </WrapperWork>
        <PBox style={{ textAlign: "center" }} py={10} px={[6, 6, 8, 10]}>
          <h2>Book your free consultation today!</h2>
          <PButton py={4} px={8}>
            Contact Me
          </PButton>
        </PBox>
      </AnimatedBox>
    </Layout>
  );
};

export default Services;
