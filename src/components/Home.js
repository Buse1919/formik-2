import React from 'react';
import {useNavigate} from "react-router-dom"

const Home = () => {
const navigate = useNavigate();
	
return (
	<>
		<h1 style={{color:"green"}}>Sayfa2</h1>
		<button onClick={()=>navigate("/about")}>Birinci sayfaya geri dön</button>
	</>
)
};

export default Home;
