import React from 'react';
import Section from '../components/atoms/Section/Section';
import styled from 'styled-components' ; 
import Heading from '../components/atoms/Heading/Heading';
import Input from '../components/atoms/Input/Input';
import MainBackground from '../assets/backgrounds/mainBackground.jpg'; 
import Button from '../components/atoms/Button/Button';
import PopUp from '../components/atoms/PopUp/PopUp';





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
      id:'', 
      error: false,
      isModalOpen : false, 
    }

    handleInputChange = (e)=> ( 
        this.setState({ 
            value : e.target.value
        })
    )

    handleSearchCity = (e)=>{ 
  
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
    id : data.weather[0].id,

        }, console.log(data))).catch(error=>{ 
            this.setState({error:true,})
        })

        e.preventDefault()
        this.setState({
            isModalOpen : true, 
            
        })
    }



    handleCloseModal = ()=>{ 
        this.setState({
            isModalOpen: false, 
            value : '', 
        })
    }
      

    render(){
        return(
            <Section>
        <StyledWrapper>
        <Heading>Weather Forecast</Heading>


        <StyledForm>
        <Input onChange={this.handleInputChange} value={this.state.value} placeholder="Type a city name"/>
        <Button onClick={this.handleSearchCity} type="submit">Search</Button>
        </StyledForm>

        {this.state.isModalOpen ? (<PopUp state={this.state} closeModal={this.handleCloseModal}/>) :(null)}
        </StyledWrapper>
        </Section>
        )
    }


}



export default MainPage;