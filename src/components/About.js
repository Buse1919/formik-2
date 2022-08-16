import React from 'react';
import {useNavigate} from "react-router-dom"

const About = () => {
const navigate = useNavigate();

return (
<>
	<h1 style={{color:"red"}} >Giriş Sayfası</h1>
	<button onClick={()=>navigate(-1)}>Sayfa ikiye git</button>
    
</>
)
};

export default About;
