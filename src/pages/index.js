import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Footer from '../components/Footer'
import OrganizerCard from '../components/OrganizerCard'
import Navbar from '../components/Navbar'

import '../styles/home.css'
import landingImage from '../images/landing-image.png'
import timelineImage from '../images/timeline.png'
import mobileTimelineImage from '../images/mobile-timeline.png'
import organizers from '../organizers.json'

export function Head() {
  return (
    <>
      <title>Tech CSSA - Georgia Tech's Official Chinese Student Association</title>
      <link rel="stylesheet" href="https://use.typekit.net/tri7gwo.css" />
    </>
  )
}

export default function Index() {
  const imageData = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "organizers" } }) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              width: 200
              height: 200
             )
          }
        }
      }
    }
  `)
  const organizerImages = Object.fromEntries(
    imageData.allFile.nodes.map(node => [node.name, node.childImageSharp.gatsbyImageData]),
  )

  return (
    <div className="landing" id="home">
      <Navbar />
      <div className="landing">
        <img className="landing-img" src={landingImage} alt="Landing Header" />
      </div>
      <div className="landing-page-container">
      <div style={{ height: "50px", marginTop: "-50px", visibility: "hidden" }} id="about"></div>
        <div className="about-pennapps"> d
          <h3>关于我们 About Us</h3>
          <div>
            Founded in the 1990s and well before the internet came to relevance, GT Chinese Students and Scholars Association, previously the GT Chinese Friends Association (GTCFA), is the premier and official home of Chinese students and scholars alike at the Georgia
            Institute of Technology. We service Chinese students and scholars on campus as well as the Chinese community in the metro-Atlanta area and plan events & activities in order to enrich our members' lives outside of their busy academic commitments.
            <br></br>
            <br></br>
            GTCSSA 拥有近三十年的历史，是佐治亚理工学院最大的华人学生学者团体，同时也是唯一获得中华人民共和国驻美大使馆官方认可并直接支持的学生会性质团体。我们和大家一样，都是纯粹的学生，独立的个体。 我们相信公平，公正，公开；我们有着自由的灵魂，开拓的精神，与进取的信念。多年以来，我们不断努力，目标只有一个：让本校乃至本地区的中国学生成为一个更优秀的群体。
            <br></br>
            <br></br>
                                                                                                                                             —— 2010年春季学生会章程

          </div>
        </div>

<div style={{ height: "50px", marginTop: "-50px", visibility: "hidden" }} id="board"></div>
        <div className="organizers">
          <h3>圆桌成员 Board of Directors</h3>
          <div className="organizers-grid">
            {organizers.map(organizer => (
              <OrganizerCard
                key={organizer.image}
                name={organizer.name}
                title={organizer.title}
                image={organizerImages[organizer.image]}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
