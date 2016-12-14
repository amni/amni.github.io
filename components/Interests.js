import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import Profile from 'components/Profile'
import Navbar from 'components/Navbar'
import InterestsView from 'components/InterestsView'

export default class Interests extends React.Component {
  render () {
    return (
      <div style= {{textAlign:"center"}}>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Alan Ni."},
            {"name": "keywords", "content": "Alan Ni, Portfolio, Personal Site"},
          ]}
        /> 
        <InterestsView /> 
      </div>
    )
  }
}
