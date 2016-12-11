import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import JobsView from 'components/JobsView'


export default class Index extends React.Component {
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

        <JobsView/> 
      </div>
    )
  }
}
