import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'
import me from 'components/me.png'

class Profile extends React.Component {
  render () {
    return (
    <div style={{marginLeft:"auto", marginRight:"auto",marginBottom:"3vw",}}>
      <img style= {{marginLeft: 'auto', marginRight:'auto', width:"15.2%", marginBottom:"1vw", display:"block"}} src={prefixLink(me)}/>
      <div style= {{display:"inline-block", marginTop:"auto", marginBottom:"auto", width:'68%',}}>
        <div style = {{color:"#023D6C", fontSize:"2.5vw", fontWeight:"bold", marginBottom:"1.5vw", marginTop:"1vw", padding:0}}> Hey!  I'm Alan Ni. </div> 
        <div style= {{color:"#023D6C", lineHeight:2.11, fontSize:"1.25vw", maxHeight:"20%"}}> I love every part of building: ideating, designing, engineering, then iterating. <br/> 
        <b>Currently PM @ Google. &nbsp; Formerly Eng @ KPCB, Coursera, Redfin.</b></div> 
      </div> 
      
    </div>
    )
  }
}

export default Profile