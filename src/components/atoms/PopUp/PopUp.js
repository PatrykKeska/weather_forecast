import React from 'react';
import styled,{css} from 'styled-components';
import Button from '../Button/Button';
import Description from '../Description/Description';
import Title from '../Title/Title';





const StyledWrapper = styled.div`
width : 99vw; 
height : 99vh; 
overflow: hidden; 
text-align : center;  
position : absolute; 
box-shadow : 0 0 5px 2px white;
bottom : 50%; 
left : 50%;
transform: translate(-50%,50%);
z-index : 5; 
animation: appears both .4s ease-in-out;
will-change: transform;  
background-size : cover; 
background-position : center; 
background-repeat : no-repeat;
${({theme})=>theme.flexCenter}; 

${({background})=> background && css`
background-image: url(${({background})=> background});
`}

@keyframes appears {
    0%{ 
opacity : 0; 
transform: translate(-50%,50%)scale(0); 
    }

    100%{ 

    }
    
}
`

const StyledInnerWrapper = styled.div`
width : 100% ;
min-height : 100%;  
overflow: hidden; 
text-align : center;  
position : absolute; 
background-color : rgba(0,0,0,.5); 
margin : 0 auto;
${({theme})=>theme.flexCenter}; 
`






class PopUp extends React.Component{ 



    render(){ 
        const {closeModal, state} = this.props
       
        return( 
            <StyledWrapper background={state.background}>
                <StyledInnerWrapper>
            <Title>City : {state.city} </Title>
            <Description>Country: {state.country} </Description>
            <Description>Humidity: {state.humidity}</Description>
            <Description>Temperature: {state.temperature}</Description>
            <Description>Wind: {state.wind} m/s</Description>
            <Description>{state.description}</Description>
            <img alt={state.description} src={state.icon}/>
            <Button onClick={closeModal}>Close</Button>
            </StyledInnerWrapper>
            </StyledWrapper>

        )
    }

}


export default PopUp