import  Axios  from 'axios';
import React, { Fragment, useState } from 'react'
import CelebritiesList from './CelebritiesList';
import Home from '../pages/Home'

const SearchBar = () => {

const [celData, setCelData] = useState();
const [celebrity, setCelebrity] = useState();
   
function handleChange(e){
        e.preventDefault();
        setCelebrity(e.target.value);
    }
  
 function getCelData(){
    const key = process.env.REACT_APP_KEY;
    const headers = {'X-Api-Key': key }
    const url = `${process.env.REACT_APP_URL_NAME}=${celebrity}`; 
    Axios.get(url, {headers})
    .then(res=>{
       setCelData(res.data);
    })
    
 }   
 return (
    <Fragment>
    <div>
        <nav>
            <div className="search">
                <input type="text" onChange={handleChange}></input>
                <button className="search-btn" onClick={getCelData}>Buscar</button>
            </div>
           
        </nav>
        {celData ?( <CelebritiesList celebrities={celData}/>): (<Home/>)}
        
    </div>
</Fragment>
  )
}

export default SearchBar
