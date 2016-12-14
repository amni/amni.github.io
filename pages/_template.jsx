import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'

import { rhythm } from '../utils/typography'
import Profile from 'components/Profile'
import Navbar from 'components/Navbar'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
        <div
        >
        <script src={prefixLink(`/bundle.js`)} />
          {this.props.children}
        </div>
    )
  },
})