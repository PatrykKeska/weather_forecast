import styled, {css} from 'styled-components'; 


const Heading = styled.h1`
font-size :2em ; 
color : white;  
width : 50%; 
margin : 0 auto; 
text-align : center ; 
text-transform : uppercase; 
padding : 10px 20px; 
border-radius : 20px; 
text-shadow : 2px 5px black; 



${({blue})=> blue && css `
color : ${({theme})=> theme.colors.blue}; 
` }
`




export default Heading ; 