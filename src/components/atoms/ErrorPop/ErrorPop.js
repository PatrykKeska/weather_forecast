import React from 'react';
import styled,{css} from 'styled-components';
import Button from '../Button/Button';
import Description from '../Description/Description';
import Title from '../Title/Title';
import errorImg from '../../../assets/backgrounds/errorImg.jpg'


const StyledWrapper = styled.div`
width : 95vw; 
height : 50vh; 
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
${({theme})=>theme.flexCenter}; 


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
background-color : rgba(0,0,0,.95); 
padding : 20px; 
margin : 0 auto;
${({theme})=>theme.flexCenter}; 

`






class ErrorPop extends React.Component{ 



    render(){ 
        const {closeErrorPop} = this.props
       
        return( 
            <StyledWrapper>
                <StyledInnerWrapper>
            <Title>City : Not Found </Title>
            <Description>Please make sure the city name is correct and try again </Description>
            <Button onClick={closeErrorPop}>Close</Button>
            </StyledInnerWrapper>
            </StyledWrapper>

        )
    }

}


export default ErrorPop