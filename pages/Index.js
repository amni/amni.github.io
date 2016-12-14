import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import JobsView from 'components/JobsView'
import Skills from 'components/Skills'
import Interests from 'components/Interests'
import Profile from 'components/Profile'
import Contact from 'components/Contact'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


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
        <div style = {{marginTop: '3vw', width: '71.875%', marginLeft:"auto", marginRight:"auto", textAlign:"center", }}>
            <Profile /> 
                <div style = {{textAlign:"left",backgroundColor:"white"}}>
                  <Tabs
                  onSelect={this.handleSelect}
                  selectedIndex={0} style={{fontSize:"1.5vw", listStyleType:"none", overflow: "hidden", marginBottom:"0.5%"}}
                  >
                  <TabList style={{display: 'inline-block', border: '1px solid transparent',
                    'border-bottom': 'none',
                    bottom: '-1px',
                    position: 'relative',
                    'list-style': 'none',
                    padding: '6px 12px',
                    cursor: 'pointer',}}>    
                  <Tab style={{width:"25%", textAlign:"center"}}> Experience </Tab>
                  <Tab style={{width:"25%", textAlign:"center"}}> Skills</Tab> 
                  <Tab style={{width:"25%", textAlign:"center"}}> Influences</Tab>
                  <Tab style={{width:"25%", textAlign:"center"}}> Contact</Tab>
                  </TabList>  
                  <TabPanel>
                    <JobsView/> 
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
    )
  }
}
