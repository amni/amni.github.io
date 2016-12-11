import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import Profile from 'components/Profile'
import Navbar from 'components/Navbar'

export default class Contact extends React.Component {
  render () {
    return (
      <div style= {{textAlign:"center", marginTop:"10%"}}>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Alan Ni."},
            {"name": "keywords", "content": "Alan Ni, Portfolio, Personal Site"},
          ]}
        /> 
        Always happy to chat virtually or over tea, feel free to  <a href="mailto:amni2015@gmail.com" target="_top"> shoot me an email</a>. 
      </div>
    )
  }
}
