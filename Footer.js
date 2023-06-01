import React from "react";

function Footer(){
    const year= new Date().getFullyear();
    console.log(year);
  return(<Footer>
    <p>Copyright © {year}</p>

    </Footer>);
} 
export default Footer;