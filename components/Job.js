import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'


class Job extends React.Component {
	constructor(props) {
        super(props);

  }
  render () {
    return (
        <div style = {{marginTop: "8%",}} > 
        <a href={this.props.url} style={{textDecoration:'none', color:"#4A4A4A"}} target="_blank">
        <img src={this.props.img_url} style={{width:"15%", marginBottom:0}}/>
        <div style ={{fontWeight:"bold", fontSize:"1.75vw", marginTop:"1.5vw"}}>{this.props.name}</div> 
        <div style ={{fontSize:"1.4vw"}}> {this.props.position} </div> 
        </a> 
        <div style = {{width:"80%", marginTop:"3%", lineHeight:"3", marginLeft:"auto", marginRight:"auto", textAlign:"left", fontSize:"1.25vw"}} 
        > {this.props.desc} </div> 
    
        </div> 
   )
  }
}

export default Job