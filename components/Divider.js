import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'


export default class Divider extends React.Component {
  render () {
    return (
        <hr style= {{marginTop:"8%", width:"10%", marginLeft:"auto", "marginRight":"auto"}}/>  
    )
  }
}
