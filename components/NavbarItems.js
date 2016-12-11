

import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'

class Navbar extends React.Component {
   constructor(props) {
        super(props);

  }
  render () {

    return (
      <li style = {{float:'left', width:"20%"}}><a style = {{display:"block", textAlign:"center",   textDecoration:"none", color:"#9B9B9B"}} href={this.props.url}>{this.props.name}</a></li>
    )
  }
}

export default Navbar