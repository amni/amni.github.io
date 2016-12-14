import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import Job from 'components/Job'
import Product from "components/pm.png"
import Python from "components/python.png"
import WebDev from "components/webdev.png"
import Sketch from "components/sketch.png"


import Divider from 'components/Divider'


export default class SkillsView extends React.Component {
  render () {
    return (
        <div> 
        <Job img_url={prefixLink(Product)} name="Product Management" position = "2.5 Years Experience" desc ="I've helped create products from scratch and worked with teams both small and large. 
         &nbsp;I focus on both strategy and execution and love working with scrappy teams. &nbsp; I'm able to communicate clearly with business, design, and engineering."/>
        <Divider/> 
 
        <Job img_url={prefixLink(Python)} name="Python" position = "4+ Years Experience" desc ="l've written countless apps in Python. &nbsp; Experienced using Flask and Django.  
         &nbsp;Experienced creating API endpoints and restful applications with Flask and SQL."/>
        <Divider/> 

        <Job img_url={prefixLink(WebDev)} name="Frontend Web Development" position = "3 Years Experience" desc ="I am constantly creating web apps, including this website. &nbsp; I've worked in industry
        doing frontend engineering work at both Coursera and Redfin.   &nbsp;I enjoy creating beautiful UI's and UX."/>
        <Divider/>  

        <Job img_url={prefixLink(Sketch)} name="Design" position = "1 Year Experience" desc ="l interact with designers frequently at work and am constantly learning from them. &nbsp; I create many of 
        the wireframes for my team using Sketch and love designing my own personal projects, including this website."/> 
        </div>
    )
  }
}
