import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import TimeLineElement from '../components/TimelineElement';
import { Progress } from 'reactstrap'
import '../styles/vertical-timeline.css'
import { MdWork, MdSchool, MdStar, MdAssignmentReturned } from 'react-icons/md'
import { Container } from 'reactstrap'
import { graphql } from 'gatsby';
import sortByDate from '../helpers/sortByDate';

const ResumePage = ({ data }) => {

  const educations = data.educations.edges;
  const experiences = data.experiences.edges;
  // sort by date desc
  sortByDate(experiences);
  sortByDate(educations);
  const skills = data.skills.edges;

  const skillsLanguages = skills.filter(skill => {
    return skill.node.childMarkdownRemark.frontmatter.category === 'LANGUAGE'
  });
  const skillsFramework = skills.filter(skill => {
    return skill.node.childMarkdownRemark.frontmatter.category === 'FRAMEWORK'
  });

  const skillsTools = skills.filter(skill => {
    return skill.node.childMarkdownRemark.frontmatter.category === 'TOOLS'
  });

  console.log('data', data)
  return (
    <Layout>
      <SEO
        title="CV"
        keywords={[
          `portoflio`,
          `experience`,
          `cv`,
          `formation`,
          `it-akademy`,
          `react`,
          `gatsby`,
          `yohann`,
          `goutaret`,
          `resume`,
          `full-stack`,
          `Full-Stack`,
          `FullStack`,
        ]}
      />
      <Container className="mt-5">
        <h1 className="text-center page-title">
          Mes expériences professionnelles et formations
        </h1>
        <div className="container mt-5">
          <section>
            <VerticalTimeline>
              {experiences.map((experience, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="vertical-ti+meline-element--work"
                  date={experience.node.childMarkdownRemark.frontmatter.startDate + "-" + experience.node.childMarkdownRemark.frontmatter.endDate}
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<MdWork />}
                >
                  <TimeLineElement experience={experience} ></TimeLineElement>
                </VerticalTimelineElement>

              ))}
            </VerticalTimeline>
          </section>
          <section>
            <h1 className="text-center">
              <span className="glyphicon glyphicon-cog" /> Compétences
            </h1>

            <div>
              <div>
                <div id="languages" className="mt-5">
                  {skillsLanguages.map((skill, i) => (
                    <div key={i} className="mt-2">
                      <strong>{skill.node.childMarkdownRemark.frontmatter.name}</strong>
                      <Progress color="info" value={skill.node.childMarkdownRemark.frontmatter.value}>
                        {skill.node.childMarkdownRemark.frontmatter.value + "%"}
                      </Progress>
                    </div>
                  ))}
                </div>
                <div id="frameworks" className="mt-5">
                  {skillsFramework.map((skill, i) => (
                    <div key={i} className="mt-2">
                      <strong>{skill.node.childMarkdownRemark.frontmatter.name}</strong>
                      <Progress color="success" value={skill.node.childMarkdownRemark.frontmatter.value}>
                        {skill.node.childMarkdownRemark.frontmatter.value + "%"}
                      </Progress>
                    </div>
                  ))}
                </div>

                <div id="tools" className="mt-5">
                  {skillsTools.map((skill, i) => (
                    <div key={i} className="mt-2">
                      <strong>{skill.node.childMarkdownRemark.frontmatter.name}</strong>
                      <Progress color="warning" value={skill.node.childMarkdownRemark.frontmatter.value}>
                        {skill.node.childMarkdownRemark.frontmatter.value + "%"}
                      </Progress>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="mt-5">
            <h1 className="text-center mb-4">Formations</h1>
            <table className="table">
              <tbody>
                {educations.map((education, i) => (
                  <>
                    <tr>
                      <td rowSpan="3">{education.node.childMarkdownRemark.frontmatter.startDate + " - " + education.node.childMarkdownRemark.frontmatter.endDate}</td>
                      <td>{education.node.childMarkdownRemark.frontmatter.title}</td>
                    </tr>
                    {education.node.childMarkdownRemark.frontmatter.speciality != " " ? (

                      <tr>
                        <td>
                          {"- " + education.node.childMarkdownRemark.frontmatter.speciality}
                        </td>
                      </tr>

                    ) : (
                        <>
                          <tr />
                        </>
                      )}
                    <tr>
                      <td>{"- " + education.node.childMarkdownRemark.frontmatter.school + " - " + education.node.childMarkdownRemark.frontmatter.place}</td>
                    </tr>
                    <tr>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </Container>
    </Layout>
  )
}

export default ResumePage

export const ResumePagequery = graphql`
query ResumePagequery {
  experiences: allFile(filter: {sourceInstanceName: {eq: "experiences"}}) {
    edges {
      node {
        sourceInstanceName
        childMarkdownRemark {
          frontmatter {
            startDate
            endDate
            job
            company
            place
            description
            category
          }
        }
      }
    }
  }
  educations: allFile(filter: {sourceInstanceName: {eq: "educations"}}) {
    edges {
      node {
        sourceInstanceName
        childMarkdownRemark {
          frontmatter {
            startDate
            endDate
            school
            place
            speciality
            title
          }
        }
      }
    }
  }
  skills: allFile(filter: {sourceInstanceName: {eq: "skills"}}) {
    edges {
      node {
        sourceInstanceName
        childMarkdownRemark {
          frontmatter {
            value
            name
            category
          }
        }
      }
    }
  }
}
`
