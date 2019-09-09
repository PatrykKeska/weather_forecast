import React from 'react';
import Section from '../components/atoms/Section/Section';
import styled,{css} from 'styled-components' ; 
import Heading from '../components/atoms/Heading/Heading';
import Input from '../components/atoms/Input/Input';
import MainBackground from '../assets/backgrounds/mainBackground.jpg'; 
import Button from '../components/atoms/Button/Button';


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
max-width : 500px; 
${({theme})=> theme.flexCenter} 
`

class MainPage extends React.Component { 

    state={
      value : '', 
      isModalOpen : false, 
    }

    handleInputChange = (e)=> ( 
        this.setState({ 
            value : e.target.value
        })
    )

    handleSearchCity = (e)=>{ 
        console.log(this.state.value)
        e.preventDefault()
    }

    render(){
        return(
            <Section>
        <StyledWrapper>
        <Heading>Weather Forecast</Heading>
        <StyledForm>
        <Input onChange={this.handleInputChange} value={this.state.value} placeholder="Type a city name"cf/>
        <Button onClick={this.handleSearchCity} type="submit">Search</Button>
        </StyledForm>
        </StyledWrapper>
        </Section>
        )
    }


}



export default MainPage;