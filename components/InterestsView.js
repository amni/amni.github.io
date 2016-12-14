import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import Job from 'components/Job'
import TeamOfRivals from "components/teamofrivals.jpg"
import YCombinator from "components/ycombinator.jpg"
import Alchemist from "components/thealchemist.jpeg"
import WBW from "components/wbw.png"
import DoingGood from "components/doinggoodbetter.jpg"
import SelfReliance from "components/selfreliance.jpg"


import Divider from 'components/Divider'


export default class InterestsView extends React.Component {
  render () {
    return (
        <div> 

        <Job img_url={prefixLink(YCombinator)} url="http://paulgraham.com/articles.html" name="Essays on Startups" position= "Paul Graham" desc ="Some of the best writing in the world on how to create great companies and 
        products. &nbsp; Concise communication style and covers everything from leadership to ideation to iterating. &nbsp;First and foremost create something that people want." />
        <Divider/> 

        <Job img_url={prefixLink(TeamOfRivals)} url="https://www.amazon.com/dp/B000N2HBSO/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1" name="Team of Rivals" position= "Doris Kearns Goodwin" desc ="Best book on leadership I've ever read, as taught through the biography
        of one of the greatest and most unlikely leaders in history.  &nbsp; Lincoln had a rare combination of traits that allowed him to weather one of the most trying times in 
        American history.  &nbsp;
        Be introspective, determined, humble, and most importantly compassionate." />
        <Divider/> 

        <Job img_url={prefixLink(SelfReliance)} url="http://www.emersoncentral.com/selfreliance.htm" name="Self-Reliance" position= "Ralph Waldo Emerson" desc ="Life-altering essays about non-conformity and one's inner voice. &nbsp; 
        Inspired me to embrace my more introspective side and to listen closely to my own convictions and values.  &nbsp; 'Be yourself; no base imitator of another, but your best self.'" />
        <Divider/> 

        <Job img_url={prefixLink(DoingGood)} url="https://www.amazon.com/dp/B00OYXWL4W/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1" name="Doing Good Better" position ="William McCaskill" desc ="An economic take on what how we can make the most difference in our lives. &nbsp;Analyzes philanthropy
        through the lenses of expected value, net utility, and opportunity cost. &nbsp; The onus is on us to make sure we do as much good as we can with the resources we have."  />
        <Divider/> 
 
        <Job img_url={prefixLink(WBW)} url="http://www.waitbutwhy.com" name="Wait, But Why" position= "Tim Urban" desc ="Introspective and often hilarious takes on problems that most human beings face and the ephemereality of life.  
        &nbsp;Metaphorical representations of life issues that are both poignant and clear.  &nbsp;Every day is just a dot in the 
        painting of our life, but all we have is that dot so we better make it count. 
        "/>
        <Divider/> 

        <Job img_url={prefixLink(Alchemist)} url="https://www.amazon.com/dp/B00U6SFUSS/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1" name="The Alchemist" position= "Paul Coelho" desc ="A short fable about a shepherd boy chasing his dreams.  &nbsp; 
        The boy overcomes challenge afer challenge in finally reaching his destination &nbsp; 'When you want something, all the universe conspires in helping you to achieve it.'" />


        </div>
    )
  }
}
