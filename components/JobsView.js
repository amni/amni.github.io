import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import Job from 'components/Job'
import Gboard from "components/gboard.png"
import AdMob from "components/admob.png"
import SMSmart from "components/smsmart.png"
import KPCB from "components/kpcb.png"
import Coursera from "components/coursera.png"
import Redfin from "components/redfin.jpeg"


import Divider from 'components/Divider'


export default class JobsView extends React.Component {
  render () {
    return (
        <div style={{textAlign:"center"}}> 
        <Job img_url={prefixLink(Gboard)} url="https://itunes.apple.com/us/app/gboard-new-keyboard-from-google/id1091700242?mt=8" name="Gboard - Google" position = "Associate Product Manager - Current" desc ="l am the product manager for Gboard, 
        the world’s best iOS keyboard. &nbsp;I set the roadmap and 
        collaborate with a team of brilliant engineers to move fast and build a beautiful product. &nbsp;We've been named one of Time's 50 Best of the Year.  "/>
        <Divider/> 
 
        <Job img_url={prefixLink(AdMob)} name="AdMob - Google" url ="https://www.admob.com" position = "Associate Product Manager" desc ="l lead Developer Experience for AdMob, Google's in-app mobile ads platform. &nbsp;I worked with a group of 15+ iOS 
        and Android engineers. &nbsp;Together we revamped the developer documentation for AdMob, significantly reduced SDK size, and launched the AdMob/Firebase Integration at Google I/O."/>
        <Divider/> 

        <Job img_url={prefixLink(SMSmart)} name="SMSmart" url="http://lifehacker.com/smsmart-simulates-useful-apps-using-sms-when-you-have-n-1688160346" position = "Co-founder, Technical Product Lead" desc ="I designed and lead growth for SMSmart, an app that allows 
        you to access your favorite apps without using data or wifi.&nbsp; I also wrote the entire backend infrastructure.  
        &nbsp;We achieved 10,000+ downloads with no paid marketing. We were featured in LifeHacker, Gizmodo, and Digital Spy. "/>
        <Divider/>  

        <Job img_url={prefixLink(KPCB)} name="KPCB Engineering Fellow" url="http://kpcbfellows.com/" position = "Fellow" desc ="The KPCB Fellows Program is a summer program that allows
        entrepreneurial fellows to meet with the brightest entrepreneurs in the world. &nbsp; l was lucky enough to spend a summer interacting with 
        executives from Twitter, Flipboard, Nest, etc.  &nbsp; The highlight of the summer was winning the pitch competition judged by KPCB partners."/>
        <Divider/>  
        <Job img_url={prefixLink(Coursera)} name="Coursera" url="http://coursera.com/" position = "Software Engineering Intern" desc ="Coursera is one of the most successful edTech companies.  l launched multiple features - the Course Stories Feature allowed users 
        to submit feedback about their learning experience and Quick Questions, a way to take short quizzes after a lesson.  I also launched 10+ A/B experiments, that resulted in drastically increased engagement and growth.
        Worked full-stack primarily with Backbone.js and Scala."/>
        <Divider/>  

        <Job img_url={prefixLink(Redfin)} name="Redfin" url="http://redfin.com/" position = "Software Engineering Intern" desc ="Redfin is the world's first online real estate brokerage.  l helped launch the new cities of Santa Barbara and San Antonio
        by writing data importers to render the data from the MLS database onto Redfin's site.  I created agent tool features that are used by all of Redfin's real estate agents.
        I decreased the loadtime for certain features by 5x by batching AJAX requests.  Worked as a full-stack developer."/>

        </div>
    )
  }
}
