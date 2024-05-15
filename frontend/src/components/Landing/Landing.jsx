import React from 'react'
import './Landing.css'
import { Link, useNavigate } from 'react-router-dom'
function Landing() {

  const navigate = useNavigate()
  const redirectToPredict =()=>{
    navigate('/signup')
  }

  return (
    <div className='container'>
    <h1>Landing</h1> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium officiis 
    cupiditate neque enim ipsum, ipsa dolorum reiciendis aliquam atque. Labore
     modi cum odit veniam sunt maiores rerum eum corrupti 
     autem harum blanditiis unde, illo 
     tempore quasi nobis mollitia 
     recusandae iusto 
     eaque? <br /><br />
     
     <button className='btn' onClick={()=>{redirectToPredict()}}>Try Now</button>

     </div>
  )
}

export default Landing