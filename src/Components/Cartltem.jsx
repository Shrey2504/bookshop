import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";

const Cartltem = ( listing, id, onEdit, onDelete ) => {
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  



  return (
    <>
    
    <Link className="contents" to={`${id}`}>
      {listing.id}
      
      <br />
      </Link>
    </>
  )
}

export default Cartltem
