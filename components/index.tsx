/** @jsx jsx */
import { jsx } from "@emotion/react";
import { css, Global } from "@emotion/react";
import React from "react";
import { Normalize } from "styled-normalize";
import Page from "./page";
import Box from "./box";
import Social, { SocialIcon } from "./social";
import Job, {
  JobCompany,
  JobDescription,
  JobHeader,
  JobSecondary,
  JobTitle,
} from "./job";
import Footer from "./footer";
import BlackTitle from "./black-title";
import { ImGithub, ImLocation } from "react-icons/im";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaLinkedin, FaStackOverflow } from "react-icons/fa";
import Skill, { SkillGroup } from "./skill";

const globalStyle = css`
  @page {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
  }

  body,
  html {
    @media not print {
      width: 100%;
      height: 100%;
    }
    min-width: calc(21cm - 5px);
    min-height: calc(29.7cm - 5px);
    box-sizing: border-box;
    margin: 0;
    line-height: 1.5;
  }

  body {
    font-family: "Rubik", sans-serif;
  }

  @media not print {
    body {
      background: rgb(246, 246, 246);
      background: linear-gradient(
        114deg,
        rgba(246, 246, 246, 1) 0%,
        rgba(231, 231, 231, 1) 77%,
        rgba(255, 255, 255, 1) 100%
      );
      background: rgb(82, 86, 89);
    }
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  ul {
    margin-block: 0;
    padding-inline: 0;
    padding-inline-start: 6px;
    margin-inline-start: 20px;
  }

  h1,
  h2,
  h3 {
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 1.2;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
`;

const CurriculumVitae = () => (
  <React.Fragment>
    <Global styles={globalStyle} />
    <Normalize />
    <Page display="flex" flexDirection="column">
      <Box mb="4px">
        <Box
          as="h1"
          fontWeight={400}
          m={0}
          textAlign="center"
          fontSize="1.4rem"
        >
          Radosław Grochowski
        </Box>
        <Box
          as="h2"
          fontWeight={400}
          m={0}
          textAlign="center"
          color="#616161"
          fontSize="1.2rem"
        >
          Web Developer
        </Box>
      </Box>
      <Box as="main" flex={1}>
        <Box display="flex" flexWrap="wrap" m="-4px" mb="4px">
          <Social href="mailto:rg@fard.pl">
            <SocialIcon icon={HiOutlineMail} />
            rg@fard.pl
          </Social>
          <Social href="tel:+48605400704">
            <SocialIcon icon={HiOutlinePhone} />
            (+48) 605 400 704
          </Social>
          <Social href="https://www.google.com/maps/search/?api=1&query=Warsaw,%20PL">
            <SocialIcon icon={ImLocation} />
            Warsaw, PL
          </Social>
          <Social href="https://github.com/radoslawgrochowski">
            <SocialIcon icon={ImGithub} />
            radoslawgrochowski
          </Social>
          <Social href="https://linkedin.com/in/radoslawgrochowski">
            <SocialIcon icon={FaLinkedin} />
            /in/radoslawgrochowski
          </Social>
          <Social href="https://stackoverflow.com/u/10995369">
            <SocialIcon icon={FaStackOverflow} />
            /u/10995369
          </Social>
        </Box>
        <Box display="flex">
          <Box flex={1.5} flexDirection="column" pr="8px">
            <BlackTitle mb="4px">Work experience</BlackTitle>
            <Box display="flex" flexDirection="column">
              <Job>
                <JobHeader>
                  <JobCompany>
                    <span>Wirtualna</span>
                    <span>Polska</span>
                  </JobCompany>
                  <JobTitle>Frontend Developer/Lead</JobTitle>
                </JobHeader>
                <JobSecondary>07.2019 - present, Warsaw</JobSecondary>
                <JobDescription>
                  Building <b>1login od WP</b> web application - sign-on and
                  user profile provider for many WP Holding services.
                  Maintenance and development of&nbsp;<b>WP&nbsp;Poczta</b> and{" "}
                  <b>Poczta&nbsp;o2</b> email web applications:
                  <ul>
                    <li>
                      transitioning technology stack into React with TypeScript
                      and CSS&nbsp;in&nbsp;JS
                    </li>
                    <li>implementing the features and user interfaces</li>
                    <li>being active Scrum team member and embracing Agile</li>
                    <li>
                      collaborating with UI/UX Designers, Testers, Product
                      Managers and Software Engineers to deliver compelling
                      user-facing products
                    </li>
                    <li>
                      propagating test first development by&nbsp;creating and
                      maintaining system tests at various layers
                      of&nbsp;integration
                    </li>
                    <li>
                      researching, refining, prototyping and providing estimates
                      for future solutions
                    </li>
                    <li>
                      adjusting various development tools for the productive
                      workflow of the team (linters, bots, dashboards, scripts)
                    </li>
                    <li>
                      identifying and resolving performance, accessibility and
                      scalability issues basing on diverse reporting tools like
                      lighthouse, sentry or kibana
                    </li>
                    <li>
                      maintaining products' CI/CD, ensuring quality
                      of&nbsp;product at every step of software development
                    </li>
                    <li>supporting the QA team on test automation topics</li>
                    <li>writing and maintaining technical documentation</li>
                    <li>performing technical interview with job candidates</li>
                    <li>
                      maintenance and refactor of existing codebase, ensuring up
                      to date best practices
                    </li>
                  </ul>
                </JobDescription>
              </Job>
              <Job>
                <JobHeader>
                  <JobCompany>
                    <span>ING</span>
                    <span>Bank</span>
                    <span>Polski</span>
                  </JobCompany>
                  <JobTitle>Frontend Developer</JobTitle>
                </JobHeader>
                <JobSecondary>02.2019 - 06.2019, Warsaw</JobSecondary>
                <JobDescription>
                  Expanding <b>ING Business</b> web application as a sign-on
                  provider to external accounting application.
                </JobDescription>
              </Job>
              <Job>
                <JobHeader>
                  <JobCompany>
                    <span>Idea</span>
                    <span>Bank</span>
                  </JobCompany>
                  <JobTitle>Web Developer</JobTitle>
                </JobHeader>
                <JobSecondary>06.2017 - 02.2019, Warsaw</JobSecondary>
                <JobDescription>
                  Work on sales and CRM internal web application for consultants
                  and managers:
                  <ul>
                    <li>
                      Expanding front-end technology stack (Backbone.js and Less
                      global styles) with React, Redux, Sass and FlowType.
                    </li>
                    <li>
                      Creating and maintaining continuous deployment projects
                      using Atlassian Bamboo.
                    </li>
                  </ul>
                </JobDescription>
              </Job>
            </Box>
          </Box>
          <Box flex={1} pl="8px">
            <Box flex={1} flexDirection="column">
              <BlackTitle mb="4px">Skills</BlackTitle>
              <Box fontSize="0.75rem">proficient with:</Box>
              <Box mb="16px">
                <SkillGroup category="frontend" mb="8px">
                  <Skill href="https://tc39.es/">JavaScript (esnext)</Skill>
                  <Skill href="https://https://www.typescriptlang.org/">
                    TypeScript
                  </Skill>
                  <Skill href="https://reactjs.org/">React</Skill>
                  <Skill href="https://nextjs.org/">Next.js</Skill>
                  <Skill href="https://redux.js.org/">Redux</Skill>
                  <Skill href="https://nodejs.org/en/">Node.js</Skill>
                  <Skill href="https://www.cypress.io/">cypress</Skill>
                  <Skill href="https://jestjs.io/">jest</Skill>
                  <Skill href="https://www.w3.org/Style/CSS">css</Skill>
                  <Skill href="https://en.wikipedia.org/wiki/CSS-in-JS">
                    css in js
                  </Skill>
                  <Skill href="https://styled-system.com/">styled-system</Skill>
                </SkillGroup>
                <SkillGroup category="workflow" mb="8px">
                  <Skill href="https://git-scm.com/">git</Skill>
                  <Skill href="https://docs.gitlab.com/ee/ci/">gitlab-ci</Skill>
                  <Skill href="https://circleci.com/">CircleCi</Skill>
                  <Skill href="https://agilemanifesto.org/">
                    Agile / Scrum
                  </Skill>
                  <Skill href="https://semver.org/">semver</Skill>
                  <Skill href="https://www.atlassian.com/software/jira">
                    Jira
                  </Skill>
                  <Skill href="https://www.microsoft.com/en-us/windows">
                    Windows
                  </Skill>
                  <Skill href="https://en.wikipedia.org/wiki/Unix">Unix</Skill>
                  <Skill href="https://www.docker.com/">Docker</Skill>
                  <Skill href="https://www.agilealliance.org/glossary/tdd">
                    TDD
                  </Skill>
                </SkillGroup>
                <SkillGroup category="languages" mb="8px">
                  <Skill>polish</Skill>
                  <Skill>english</Skill>
                </SkillGroup>
              </Box>
            </Box>
            <Box flex={1} flexDirection="column">
              <BlackTitle mb="4px">Education</BlackTitle>
              <Box display="flex" flexDirection="column">
                <Job>
                  <JobHeader>
                    <JobCompany>
                      <span>Master</span>
                    </JobCompany>
                  </JobHeader>
                  <JobTitle fontSize="0.875rem">
                    CYBERSECURITY AND CRYPTOLOGY
                  </JobTitle>
                  <JobSecondary>Military University of Technology</JobSecondary>
                  <JobSecondary>03.2018 - 02.2020, Warsaw</JobSecondary>
                  <JobDescription>
                    Studies at Institute of Computer and Information Systems
                    (ISI) <br />
                    Thesis:{" "}
                    <i>
                      Analysis of the possibilities of using Blockchain
                      technology to control the processing of classied
                      documents.
                    </i>
                  </JobDescription>
                </Job>
                <Job>
                  <JobHeader>
                    <JobCompany>
                      <span>Bachelor</span>
                    </JobCompany>
                  </JobHeader>
                  <JobTitle fontSize="0.875rem">
                    CYBERSECURITY AND CRYPTOLOGY
                  </JobTitle>
                  <JobSecondary>Military University of Technology</JobSecondary>
                  <JobSecondary>09.2014 - 02.2018, Warsaw</JobSecondary>
                  <JobDescription>
                    Studies at Institute of Teleinformatics and Automation (ITA)
                    <br />
                    Thesis:{" "}
                    <i>
                      The project of academic node to electronic identication.
                    </i>
                  </JobDescription>
                </Job>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Page>
  </React.Fragment>
);

export default CurriculumVitae;
