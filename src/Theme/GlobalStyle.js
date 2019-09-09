import {createGlobalStyle} from 'styled-components'; 


const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap&subset=latin-ext');


*,*::before , *::after{ 
    box-sizing : border-box; 
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html{ 
    html { font-size: calc(1em + 1vw) }
}

body { 
    font-family : "Montserrat", sans-serif; 
    font-size : 1em; 
}


`




export default GlobalStyle; 