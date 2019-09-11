import React from 'react';
import Section from '../components/atoms/Section/Section';
import styled from 'styled-components' ; 
import Heading from '../components/atoms/Heading/Heading';
import Input from '../components/atoms/Input/Input';
import MainBackground from '../assets/backgrounds/mainBackground.jpg'; 
import Button from '../components/atoms/Button/Button';
import PopUp from '../components/atoms/PopUp/PopUp';

import fewClouds from '../assets/backgrounds/fewClouds.jpg'
import clearSky from '../assets/backgrounds/clearSky.jpg';
import brokenClouds from '../assets/backgrounds/brokenClouds.jpg';
import Drizzle from '../assets/backgrounds/Drizzle.jpg';
import heavyRain from '../assets/backgrounds/heavyRain.jpg';
import heavyStorm from '../assets/backgrounds/heavyStorm.jpg';
import lightRain from '../assets/backgrounds/lightRain.jpg';
import lightSnow from '../assets/backgrounds/lightSnow.jpg';
import heavySnow from '../assets/backgrounds/heavySnow.jpg';
import sleet from '../assets/backgrounds/sleet.jpg';
import fog from '../assets/backgrounds/fog.jpg';
import squalls from '../assets/backgrounds/squalls.jpg';
import tornado from '../assets/backgrounds/tornado.jpg';
import ErrorPop from '../components/atoms/ErrorPop/ErrorPop';






const StyledWrapper = styled.div`
width : 100% ; 
height : 100%; 
overflow: hidden; 
text-align : center;
background-image: url(${MainBackground});
  background-repeat: no-repeat;
  background-position: center; 
  background-size: cover;
position : relative;
${({theme})=> theme.flexCenter} 
`

const StyledForm = styled.form`
width : 100%;  
${({theme})=> theme.flexCenter};
 
`

const WeatherBackgrounds = {

    200: heavyStorm,      
    201: heavyStorm,      
    202: heavyStorm,      
    210: heavyStorm,      
    211: heavyStorm,      
    212: heavyStorm,      
    221: heavyStorm,      
    230: heavyStorm,      
    232: heavyStorm,
    
    300 : Drizzle, 
    301 : Drizzle, 
    302 : Drizzle, 
    310 : Drizzle, 
    311 : Drizzle, 
    312 : Drizzle, 
    313 : Drizzle, 
    314 : Drizzle, 
    321 : Drizzle, 

    500 : lightRain,
    501 : lightRain,
    502 : lightRain,
    503 : heavyRain,
    504 : heavyRain,
    511 : heavyRain,
    520 : heavyRain,
    521 : lightRain,
    522 : heavyRain,
    531 : heavyRain,

    600: lightSnow, 
    601: lightSnow, 
    602: heavySnow, 
    611: sleet, 
    612: sleet, 
    613: sleet, 
    615: lightSnow, 
    616: lightSnow, 
    620: lightSnow, 
    621: lightSnow, 
    622: heavySnow, 

    701: fog,
    711: fog,
    721: fog,
    731: fog,
    741: fog,
    751: fog,
    761: fog,
    762: fog,
    771: squalls,
    781: tornado,

    800 : clearSky,  
    801 : fewClouds, 
    802 : fewClouds,
    803 : brokenClouds,
    804 : brokenClouds, 

}

class MainPage extends React.Component { 

    state={
      value : '', 
      humidity:'',
      country:'',
      pressure:'',
      city : '',
      temperature :'',
      description : '',
      wind :'', 
      icon : '', 
      background :'',
      id:'', 
      error: false,
      isErrorPopOpen : false, 
      isModalOpen : false, 
    }
    

    handleInputChange = (e)=> ( 
        this.setState({ 
            value : e.target.value
        })
        )
        
        handleSearchCity = (e)=>{ 
            e.preventDefault()
  
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=d94d1a01b87d198b9b5a6ab577e78c45&units=metric`
        
        fetch(API).then(response=>{
            if(response.ok) {return response}
        
        throw console.error('Can not find this city');
        }).then(response=> response.json()).then(data=> this.setState({ 
    city : data.name,
    country:data.sys.country,
    temperature : data.main.temp.toFixed(0)+'°C',
    humidity:data.main.humidity+'%',
    pressure:data.main.pressure,
    description : data.weather[0].description,
    wind :data.wind.speed.toFixed(), 
    icon :`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    id :data.weather[0].id,
    background : WeatherBackgrounds[data.weather[0].id],
    isModalOpen : true, 
 

    
        },)).catch(error=>{ 
            this.setState({error:true,
                isErrorPopOpen : true, 
            })
        })

    
       
    
    }



    handleCloseModal = ()=>{ 
        this.setState({
            isModalOpen: false, 
            value : '', 
        })
    }

    handleCloseErrorPop = ()=>{ 
        this.setState({
        value : '', 
        error:false,
        isErrorPopOpen : false,  
            
        })
    }
   
    render(){
        const {isModalOpen, isErrorPopOpen} = this.state
      
        return(
            <Section>
        <StyledWrapper>
        <Heading>Weather Forecast</Heading>


        <StyledForm>
        <Input onChange={this.handleInputChange} value={this.state.value} placeholder="Type a city name"/>
        <Button onClick={this.handleSearchCity} type="submit">Search</Button>
        </StyledForm>

        {isModalOpen ? (<PopUp state={this.state} closeModal={this.handleCloseModal}/>) :(null)}
        {isErrorPopOpen ? (<ErrorPop state={this.state} closeErrorPop={this.handleCloseErrorPop}/>) :(null)}
        </StyledWrapper>
        </Section>
        )
    }


}



export default MainPage;