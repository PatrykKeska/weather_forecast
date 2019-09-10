import {createGlobalStyle} from 'styled-components'; 


const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Signika&display=swap');


*,*::before , *::after{ 
    box-sizing : border-box; 
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html{ 
font-size: calc(1em + 1vw) 
}

body { 
  font-family: 'Signika', sans-serif;
   overflow-x: hidden ; 
   margin : 0 auto;
   font-size: 1em; 
}


`




export default GlobalStyle; 