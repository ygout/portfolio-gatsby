import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import { Progress } from 'reactstrap';
import '../styles/vertical-timeline.css'
import { MdWork, MdSchool, MdStar } from 'react-icons/md'
import { Container } from 'reactstrap'

const ResumePage = () => (
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
      ]}
    />
    <Container className="mt-5">
      <h1 className="text-center page-title">Mes expériences professionnelles et formations</h1>
      <div className="container mt-5">
        <section>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Novembre 2017 - Ajourd'hui"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">Développeur FullStack Back-End</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Villeurbanne, oPhone
          </h4>
              <p>
                Maintenance d'une application de type TMS (transport Management System) suivi et gestion de flottes de transports sous <mark className="important">Oracle</mark>, Application Express5.
            <br />Optimisation de requêtes <mark className="important">SQL</mark>améliorations des performances.
            <br />Développement de nouveaux modules en <mark className="important">PL/SQL</mark>
                <br /> Développement actif sur l'API Rest pour permettre l'ouverture du Système d'informations :
            <ul>
                  <li><mark className="important">Framework Express JS / SwaggerUi</mark></li>
                  <li><mark className="important">Node JS (Typescript)</mark></li>
                  <li><mark className="important">Socket.io</mark></li>
                  <li>Driver Node Oracle DB</li>
                  <li>Jenkins</li>
                  <li>View Pug</li>
                  <li>GitLab</li>
                </ul>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Novembre 2015 - Novembre 2017"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">Développeur Back-end Junior (Alternance)</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Villeurbanne, oPhone
          </h4>
              <p>
                Développement d'une application TMS (Transport Managment system) suivi et gestion de flottes de transports:
            <br />Base de donées Oracle, développement <mark className="important">PL/SQL Orienté Objet</mark>, Framework Oracle Application Express 5, <mark className="important">jQuery/javascript</mark>.
            Développement en mode POC (proof of concept) d'une version mobile: <mark className="important">Framework Ionic 2 </mark>et <mark className="important">API Rest Express js / nodeJs/ Bitbucket.</mark>
                Développement d'un module de chat: Mise en place <mark className="important">d'API node js avec socket.io + Firbase (push notification)</mark> pour la communication en temps réel.
          </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Avril 2014 - Juin 2014"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">Développeur web (Projet personnel)</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Lyon
          </h4>
              <p>
                Développement d’un micro CMS pour administrer un portfolio.
            <br /><mark className="important">Framework PHP5.4 MVC: Silex, HTML/CSS, Framework Bootstrap, Base de données MySQL, GitHub.</mark>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Janvier 2014 - Mars 2014"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">Développeur Web</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bron, Université lyon 2
          </h4>
              <p>
                J'ai éffectué mon stage de 2e année de BTS SIO option SLAM d'une
            durée de 7semaines à la{' '}
                <a href="http://www.univ-lyon2.fr/" target="_blank" rel="noopener noreferrer">
                  DSI université Lyon 2
            </a>
                L'université lyon 2 souhaite moderniser sa gestion des processus (ex
                : demande de congés) pour cela la DSi de l'université à mis en place
                un outil de gestion de processus. J'ai du améliorer l'interface
                utilisateur de cet outil: interface épurée et adaptative(utilisation
            du framework <mark className="important">CSS3 Bootstrap3</mark>). Mise en place d'une base de
            données(<mark className="important">SQLITE</mark>), catalogue en <mark className="important">PHP5</mark>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Avril 2014 - Avril 2014"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">Développeur d'application (Projet étudiant)</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Lyon
          </h4>
              <p>
                Développement d’une application de gestion de bibliothèques.
            <br />Application Winforms développé en <mark className="important">C# sous le framework .NET 4.0</mark>
                <br />Outils : Base de données Oracle, Visual Studio 2010, SQL Developer
            <mark className="important">Architecture en couche (Métier, Présentation, Persistance)</mark>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Mai 2013 - Juin 2013"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">Développeur Web</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Vienne, Linkimedia
          </h4>
              <p>
                J'ai réaliser mon stage de 1ere année de BTS SIO option SLAM d'une
            durée de 5 semaines dans l'agence web{' '}
                <a href="http://www.linkimedia.fr/" target="_blank" rel="noopener noreferrer">
                  Linkimedia
            </a>{' '}
                située à Vienne.
            <br /> Suite à la volonté d'un client de présenter son site internet
                          contenant des annimations flash sur ipad(flash et ipdad non
                          compatible), j'ai du modifier celui-ci sans perdre le contenu
            qu'apportent ces annimations flash. Utilisation d'un script <mark className="important">PHP5</mark> et
            de librairies <mark className="important">jQuery/javascript</mark>.
          </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Fevrier 2013 - Mai 2013"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">Développeur Web</h3>
              <h4 className="vertical-timeline-element-subtitle">Lyon</h4>
              <p>
                Création d'un site e-commerce de vente de places de cinéma en groupe
                de deux durant ma formation.
            <br /> <mark className="important">Design pattern MVC, PDO, POO, PHP5.4 et utilisation du
            framework Bootstrap3.</mark>
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<MdStar />}
            />
          </VerticalTimeline>
        </section>
        <section>
          <h1 className="text-center">
            <span className="glyphicon glyphicon-cog" /> Compétences
      </h1>

          <div>
            <div>
              <strong>HTML5</strong>
              <Progress color="info" value={80} >80%</Progress>
            </div>
            <div className="mt-2">
              <strong>CSS3</strong>
              <Progress color="info" value={75} >75%</Progress>
            </div>
            <div className="mt-2">
              <strong>PHP 5/7</strong>
              <Progress color="info" value={60} >55%</Progress>
            </div>
            <div className="mt-2">
              <strong>C#</strong>
              <Progress color="info" value={50} >50%</Progress>
            </div>
            <div className="mt-2">
              <strong>NodeJs / Typescript</strong>
              <Progress color="info" value={60} >60%</Progress>
            </div>
            <div className="mt-2">
              <strong>PL/SQL</strong>
              <Progress color="info" value={70} >70%</Progress>
            </div>
            <div className="mt-2">
              <strong>SQL</strong>
              <Progress color="info" value={70} >70%</Progress>
            </div>
          </div>
        </section>
        <section className="mt-5">
          <h1 className="text-center mb-4">
            Formations
        </h1>
          <table className="table">
            <tbody>
              <tr>
                <td rowSpan="3">Septembre 2015 - Novembre 2017</td>
                <td>
                  Titre Développeur FullStack (bac+4) - IT AKADEMY
              </td>
              </tr>
              <tr>
              </tr>
              <tr>
                <td>&nbsp;- IT-Akademy - 69100 Villeurbanne</td>
              </tr>
              <tr>
                <td rowSpan="3">Septembre 2012 - Juin 2014</td>
                <td>Brevet Technicien Supérieur</td>
              </tr>
              <tr>
                <td>
                  &nbsp;- Service informatique aux organisations (option Solutions
                  Logicielles et Applications Métiers)
              </td>
              </tr>
              <tr>
                <td>&nbsp;- Lycée La Martinière-Duchère - 69338 Lyon</td>
              </tr>
              <tr>
                <td rowSpan="2">Septembre 2011 - Juin 2012</td>
                <td>1ère année licence mathématique-informatique</td>
              </tr>
              <tr>
                <td>
                  &nbsp;- Université Claude Bernard Lyon1 – 69100 Villeurbanne
              </td>
              </tr>
              <tr>
                <td rowSpan="3">Septembre 2010 - Juin 2011</td>
                <td>
                  Baccalauréat Scientifique option SVT (science de la vie et de la
                  terre)
              </td>
              </tr>
              <tr>
                <td>&nbsp;-Spécialité : Physique-chimie</td>
              </tr>
              <tr>
                <td>&nbsp;- Lycée Edouard Herriot – 69006 Lyon</td>
              </tr>
            </tbody>
          </table>
        </section>

      </div>
    </Container>

  </Layout >
)
export default ResumePage
