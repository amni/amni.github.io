import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'
import NavbarItems from 'components/NavbarItems'


class Navbar extends React.Component {
  render () {
    return (
    <div style = {{textAlign:"left",backgroundColor:"white", paddingTop:"2%"}}>
    <ul style = {{fontSize:"1.75vw", listStyleType:"none", overflow: "hidden", marginBottom:"0.5%"}}>
      <li style = {{float:'left',  width:"20%"}}><span style ={{textAlign:"center", color:"#023D6C"}}> What I've...</span></li>
      <NavbarItems name="PMed" url="/"/> 
      <NavbarItems name="Engineered" url="/eng/"/> 
      <NavbarItems name="Learned" url="/learned/"/> 
      <NavbarItems name="Read" url="/read/" /> 
    </ul>
    <hr style ={{width:"100%", height:2}}/>   
    </div>
    )
  }
}

export default Navbar