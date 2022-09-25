import { createTheme } from "@mui/material";


export const lightTheme = createTheme({
    palette:{
        mode:'light',
        primary: {
            main: '#000000'
        }, 
        secondary:{
            main:'#2046CC'
        },
        info:{
            main: '#AEAC19'
        },
        warning: {
            main:'#B00A37'
        },
    },
    components: {
        MuiAppBar: {
            defaultProps: {
              elevation: 0,
              position: 'fixed',
            },
            styleOverrides: {
              root: {
                backgroundColor: 'white',
                height: 60
              },
            }
          },
          MuiTypography: {
            styleOverrides: {
              h1: {
                fontSize: 40,
                fontWeight: 650
              },
              h2: {
                fontSize: 20,
                fontWeight: 400
              },
              h6: {
                fontSize: 17,
                fontWeight: 400
              },
              subtitle1: {
                fontSize: 15,
                fontWeight: 600
              },
              subtitle2: {
                fontSize: 12,
                fontWeight: 600
              },
              body1: {
                fontSize:12,
                fontWeight:500
              },
              body2:{
                fontSize:10,
                fontWeight:400,
              }
            }
          },
          MuiCardHeader:{
            styleOverrides:{
              title:{
                fontSize:12,
                fontWeight:500,
              }
            }
          }
          
    }
})
