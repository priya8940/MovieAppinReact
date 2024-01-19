import React from "react";
import styled from "styled-components";

const Nav=styled.div``
class NavBar extends React.Component{
  render(){
    return(<>
        
        <div style={styles.nav}>
          <div style={styles.title}>MOVIE-APP</div>
          <div className="cart-container">
            <img alt="cart-icon" src=""/>
              <span>3</span>
          </div>
        </div>
        
        </>)
}
}
export default NavBar;
const styles={
  nav:{
    width:"100%",
    height:70,
    background:"cadetblue",
    display:"flex",
    justifyContent:"space-betweeen"
  },
  title:{
     fontSize:30,
     color:"#fff",
     fontWeight:600,
     fontFamily:'"Montserrat",sen-serif',
     textTransform:"uppercase",
     marginLeft:20
  }
}