import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ContactPage = () => (
    <Layout>
        <SEO title="Accueil"
            keywords={[
                `portoflio`,
                `contact`,
                `react`,
                `gatsby`,
                `yohann`,
                `goutaret`,
                `me contacter`
            ]} />
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Creative Director</h3>
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2010 - 2011"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Art Director</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2008 - 2010"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                <p>
                    User Experience, Visual Design
    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2006 - 2008"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                    User Experience, Visual Design
    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="April 2013"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                <p>
                    Strategy, Social Media
    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="November 2012"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                <p>
                    Creative Direction, User Experience, Visual Design
    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2002 - 2006"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                <p>
                    Creative Direction, Visual Design
    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                // icon={<StarIcon />}
            />
        </VerticalTimeline>
        <div className="container mt-5">
            <div className="page-header text-center">
                <h1 id="timeline"><span className="glyphicon glyphicon-briefcase"></span> Expériences Professionnelles</h1>
            </div>
            <ul className="timeline">
                <li>
                    <div className="timeline-badge primary">
                        <a>
                            <i className="glyphicon glyphicon-record" rel="tooltip" title="" id="" data-original-title="20 Janvier 2014 - 7 Mars 2014" >
                            </i>
                        </a>
                    </div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <img className="img-responsive logoCv" src="images/logo-lyon2.jpg" />
                        </div>
                        <div className="timeline-body">
                            <p className="text-justify">
                                &nbsp; &nbsp; &nbsp;J'ai éffectué mon stage de 2e année de BTS SIO option SLAM d'une durée de 7semaines à la <a href="http://www.univ-lyon2.fr/" target="_blank">DSI université Lyon 2</a>
                                <br /> L'université lyon 2 souhaite moderniser sa gestion des processus (ex : demande de congés) pour cela la DSi de l'université à mis en place un outil de gestion de processus.
                                <br /> J'ai du améliorer l'interface utilisateur de cet outil: interface épurée et adaptative(utilisation du framework css bootstrap). Mise en place d'une base de données(SQLITE).
                            </p>
                        </div>
                        <div className="timeline-footer">
                            Développeur Web | Janvier 2014 - Mars 2014
                        </div>
                    </div>
                </li>
                <li className="timeline-inverted">
                    <div className="timeline-badge primary"><a><i className="glyphicon glyphicon-record invert" rel="tooltip" title="" id="" data-original-title="20 Mai 2013 - 21 Juin 2013" ></i></a></div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <img className="img-responsive logoCv" src="images/linkimedia.jpg" />
                        </div>
                        <div className="timeline-body">
                            <p className="text-justify">&nbsp; &nbsp; &nbsp;J'ai réaliser mon stage de 1ere année de BTS SIO option SLAM d'une durée de 5 semaines dans l'agence web <a href="http://www.linkimedia.fr/" target="_blank">Linkimedia</a> située à Vienne.
                                <br /> Suite à la volonté d'un client de présenter son site internet contenant des annimations flash sur ipad(flash et ipdad non compatible), j'ai du modifier celui-ci sans perdre le contenu qu'apportent ces annimations flash. Utilisation d'un script php et de librairies jQuery.
                            </p>
                        </div>
                        <div className="timeline-footer">
                            Développeur Web | Mai 2013 - Juin 2013
                         </div>
                    </div>
                </li>
                <li>
                    <div className="timeline-badge primary"><a><i className="glyphicon glyphicon-record" rel="tooltip" title="" id="" data-original-title="Fevrier 2013 - Mai 2013"></i></a></div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <img className="img-responsive logoCv" src="images/cinéma.jpg" />
                        </div>
                        <div className="timeline-body">
                            <p className="text-justify">&nbsp; &nbsp; &nbsp;Création d'un site e-commerce de vente de places de cinéma en groupe de deux durant ma formation.
                                <br /> Utilisation d'un framework MVC, PDO, POO et utilisation du framework bootstrap.
                            </p>
                        </div>
                        <div className="timeline-footer">
                            Développeur web| Fevrier 2013 - Mai 2013
                        </div>
                    </div>
                </li>
                <li className="clearfix"></li>
            </ul>
            <div className="page-header"></div>
            <div className="page-header text-center">
                <h1 id="timeline"><span className="glyphicon glyphicon-cog"></span> Compétences</h1>
            </div>
            <div className="span6">
                <strong>HTML</strong><span className="pull-right"></span>
                <div className="progress progress-html progress-striped active">
                    <div className="bar" ></div>
                </div>
                <strong>CSS</strong><span className="pull-right"></span>
                <div className="progress progress-css progress-striped active">
                    <div className="bar" ></div>
                </div>
                <strong>PHP</strong><span className="pull-right"></span>
                <div className="progress progress-striped active">
                    <div className="bar" ></div>
                </div>
                <strong>C#</strong><span className="pull-right"></span>
                <div className="progress progress-c progress-striped active">
                    <div className="bar" ></div>
                </div>
                <strong>Java</strong><span className="pull-right"></span>
                <div className="progress progress-java progress-striped active">
                    <div className="bar" ></div>
                </div>
                <strong>Android</strong><span className="pull-right"></span>
                <div className="progress progress-android progress-striped active">
                    <div className="bar" ></div>
                </div>
            </div>
            <div className="page-header"></div>
            <div className="page-header text-center">
                <h1 id="timeline"><span className="glyphicon glyphicon-book"></span> Formations</h1>
            </div>
            <div className="panel panel-default">
                <table className="table">
                    <tbody>
                        <tr>
                            <td rowSpan="3">
                                Septembre 2015 - Septembre 2017
                    </td>
                            <td>
                                Titre ASI - Administrateur du Système d'information, filière Développeur Web (bac+4) - IP FORMATION LYON
                    </td>
                        </tr>
                        <tr>
                            <td>
                                &nbsp;- Spécialité : Développeur PHP/MySQL
                    </td>
                        </tr>
                        <tr>
                            <td>
                                &nbsp;- Ip-formation - 69100 Villeurbanne
                    </td>
                        </tr>
                        <tr>
                            <td rowSpan="3">
                                Septembre 2012 - Juin 2014
                    </td>
                            <td>
                                Brevet Technicien Supérieur
                    </td>
                        </tr>
                        <tr>
                            <td>
                                &nbsp;- Service informatique aux organisations (option Solutions Logicielles et Applications Métiers)
                    </td>
                        </tr>
                        <tr>
                            <td>
                                &nbsp;- Lycée La Martinière-Duchère - 69338 Lyon
                    </td>
                        </tr>
                        <tr>
                            <td rowSpan="2">
                                Septembre 2011 - Juin 2012
                    </td>
                            <td>
                                1ère année licence mathématique-informatique
                    </td>
                        </tr>
                        <tr>
                            <td>
                                &nbsp;- Université Claude Bernard Lyon1 – 69100 Villeurbanne
                    </td>
                        </tr>
                        <tr>
                            <td rowSpan="3">
                                Septembre 2010 - Juin 2011
                    </td>
                            <td>
                                Baccalauréat Scientifique option SVT (science de la vie et de la terre)
                    </td>
                        </tr>
                        <tr>
                            <td>
                                &nbsp;-Spécialité : Physique-chimie
                    </td>
                        </tr>
                        <tr>
                            <td>
                                &nbsp;- Lycée Edouard Herriot – 69006 Lyon
                    </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </Layout>
)
export default ContactPage;
