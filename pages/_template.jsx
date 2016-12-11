import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/markdown-styles'

import { rhythm } from '../utils/typography'
import Profile from 'components/Profile'
import Navbar from 'components/Navbar'
import { StickyContainer, Sticky } from 'react-sticky';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import NavbarItems from 'components/NavbarItems'
import Index from './Index'
import Skills from './Skills'
import Interests from './Interests'
import Contact from './Contact'






module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  handleSelect(index, last) {
    console.log('Selected tab: ' + index + ', Last tab: ' + last);
  },
  render () {

    return (

        <StickyContainer> 
          <div style = {{marginBottom: '5%'}}
          >

          <div style = {{marginTop: '3vw', width: '71.875%', marginLeft:"auto", marginRight:"auto", textAlign:"center", }}>
            <Profile /> 
                <div style = {{textAlign:"left",backgroundColor:"white"}}>
                  <Tabs
                  onSelect={this.handleSelect}
                  selectedIndex={0} style={{fontSize:"1.5vw", listStyleType:"none", overflow: "hidden", marginBottom:"0.5%"}}
                  >
                  <TabList>    
                  <Tab style={{width:"25%", textAlign:"center"}}> Experience </Tab>
                  <Tab style={{width:"25%", textAlign:"center"}}> Skills</Tab> 
                  <Tab style={{width:"25%", textAlign:"center"}}> Influences</Tab>
                  <Tab style={{width:"25%", textAlign:"center"}}> Contact</Tab>
                  </TabList>  
                  <TabPanel>
                    <Index/> 
                  </TabPanel>
                  <TabPanel>
                    <Skills/> 
                  </TabPanel>
                  <TabPanel>
                    <Interests/> 
                  </TabPanel>
                  <TabPanel>
                    <Contact/> 
                  </TabPanel>
                  </Tabs>
                </div>
          </div>
          </div>
        </StickyContainer>
    )
  },
})