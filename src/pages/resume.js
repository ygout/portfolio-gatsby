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
import { MdWork, MdSchool, MdStar, MdSettings } from 'react-icons/md'
import { FaBook } from 'react-icons/fa'
import { Container } from 'reactstrap'
import { graphql } from 'gatsby';
import sortByDate from '../helpers/sortByDate';
import StarRatingComponent from 'react-star-rating-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'

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

  return (
    <Layout>
      <SEO
        title="resume"
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
          `developper`,
          `developpeur`,
          `ygout`,
          `full-stack`,
          `fullstack`,
          `full stack`,
          `Full Stack`,
          `fullStack`,
          `back-end`,
          `developper`,
          `developpeur`,
          `france`,
          `lyon`,
          `react`,
          `gatsby`,
          `yohann`,
          `goutaret`,
          `ygout`,
          `Yohann`,
          `Goutaret`,
          `FullStack`,
        ]}
      />
      <Container className="mt-5">
        <h1 className="text-center page-title">
          <MdWork />  Mes expériences professionnelles et formations
        </h1>
        <div className="container mt-5">
          <section>
            <VerticalTimeline>
              {experiences.map((experience, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="vertical-ti+meline-element--work"
                  date={experience.node.childMarkdownRemark.frontmatter.startDate + "-" + experience.node.childMarkdownRemark.frontmatter.endDate}
                  iconStyle={experience.node.childMarkdownRemark.frontmatter.category === 'PRO' ? ({ background: 'rgb(33, 150, 243)', color: '#fff' }) : ({ background: 'rgb(233, 30, 99)', color: '#fff' })}

                  icon={experience.node.childMarkdownRemark.frontmatter.category === 'PRO' ? (<MdWork />) : (<MdSchool />)}
                >
                  <TimeLineElement experience={experience} ></TimeLineElement>
                </VerticalTimelineElement>

              ))}
              <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<MdStar />}
              />
            </VerticalTimeline>
          </section>
          <section>   
          <div class="container">
            <h1 className="text-center">
              <MdSettings />  Compétences
            </h1>

              <div className="row mt-5" >
                <div id="languages" className="col-md-6">
                  {skillsLanguages.map((skill, i) => (
                    <div key={i} className="mt-2 d-flex">
                      <div className="col-md-6"><h5>{skill.node.childMarkdownRemark.frontmatter.name}</h5></div>
                      <StarRatingComponent
                      name={skill.node.childMarkdownRemark.frontmatter.name}
                      value={skill.node.childMarkdownRemark.frontmatter.valueSkill}
                      editing={false}
                      renderStarIcon={() =>  <FontAwesomeIcon icon={faStar} size="2x" />}
                      renderStarIconHalf={() => {
                        return (
                          <span>
                            <FontAwesomeIcon style={{position: 'absolute'}} icon={faStar} size="2x" />
                            <FontAwesomeIcon icon={faStarHalf} size="2x" />
                          </span>
                        );
                      }}
                      ></StarRatingComponent>
                    </div>
                  ))}
                </div>
                <div id="frameworks" className="col-md-6">
                  {skillsFramework.map((skill, i) => (
                    <div key={i} className="mt-2 d-flex">
                      <div className="col-md-6"><h5>{skill.node.childMarkdownRemark.frontmatter.name}</h5></div>
                      <StarRatingComponent
                      name={skill.node.childMarkdownRemark.frontmatter.name}
                      value={skill.node.childMarkdownRemark.frontmatter.valueSkill}
                      editing={false}
                      renderStarIcon={() =>  <FontAwesomeIcon icon={faStar} size="2x" />}
                      renderStarIconHalf={() => {
                        return (
                          <span>
                            <FontAwesomeIcon style={{position: 'absolute'}} icon={faStar} size="2x" />
                            <FontAwesomeIcon icon={faStarHalf} size="2x" />
                          </span>
                        );
                      }}
                      ></StarRatingComponent>
                    </div>
                  ))}
                </div>

                <div id="tools" className="col-md-12">
                  {skillsTools.map((skill, i) => (
                    <div key={i} className="mt-2 d-flex">
                    <div className="col-md-6"><h5>{skill.node.childMarkdownRemark.frontmatter.name}</h5></div>
                    <StarRatingComponent
                    name={skill.node.childMarkdownRemark.frontmatter.name}
                    value={skill.node.childMarkdownRemark.frontmatter.valueSkill}
                    editing={false}
                    renderStarIcon={() =>  <FontAwesomeIcon icon={faStar} size="2x" />}
                    renderStarIconHalf={() => {
                      return (
                        <span>
                          <FontAwesomeIcon style={{position: 'absolute'}} icon={faStar} size="2x" />
                          <FontAwesomeIcon icon={faStarHalf} size="2x" />
                        </span>
                      );
                    }}
                    ></StarRatingComponent>
                  </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="mt-5">
            <h1 className="text-center mb-4"><FaBook />  Formations</h1>
            <table className="table">
              <tbody>
                {educations.map((education, i) => (
                  <>
                    <tr>
                      <td rowSpan="3">{education.node.childMarkdownRemark.frontmatter.startDate + " - " + education.node.childMarkdownRemark.frontmatter.endDate}</td>
                      <td>{education.node.childMarkdownRemark.frontmatter.title}</td>
                    </tr>
                    {education.node.childMarkdownRemark.frontmatter.speciality !== " " ? (

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
            name
            valueSkill
            category
          }
        }
      }
    }
  }
}
`
