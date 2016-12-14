import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import Profile from 'components/Profile'
import SkillsView from 'components/SkillsView'

export default class Skills extends React.Component {
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
        <SkillsView/>
      </div>
    )
  }
}
