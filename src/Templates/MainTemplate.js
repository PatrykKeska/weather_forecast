import React from 'react'
import {ThemeProvider} from 'styled-components'; 
import GlobalStyle from '../Theme/GlobalStyle';
import {theme} from '../Theme/theme'; 


const MainTemplate = ({children})=> ( 
<>
<GlobalStyle/>
<ThemeProvider theme={theme}>
{children}
 </ThemeProvider>

</>


); 








export default MainTemplate; 