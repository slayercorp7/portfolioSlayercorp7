import { Card, CardHeader, Divider, CardContent, Box, Typography, LinearProgress } from '@mui/material'
import React from 'react'

export const CardSkill = () => {
  return (
    <Card sx={{ maxWidth: 400, my: 1, minWidth: 200 }}>
    <CardHeader title="Habilidades" sx={{ textAlign: "center" }} />
    <Divider orientation="horizontal" />
    <CardContent>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        sx={{ mt: 1 }}
      >
        <Typography
          variant="subtitle2"
          color="InfoText"
          textAlign="left"
          sx={{ my: 2, ml: 3 }}
        >
          Habilidades obtenidas según porcentaje de conocimiento y experiencia en desarrollo de proyectos
        </Typography>
        <Typography variant='subtitle1' sx={{mb:1}}> - Frontend</Typography>
        <Box display='flex' alignItems='center'>
            <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant='determinate' value={70} color='secondary'/>
            </Box>
            <Box>
        <Typography>70%</Typography>
            </Box>
        </Box>
        <Divider orientation='horizontal'/>
        <Typography variant='subtitle1' sx={{mb:1}}> - Backend</Typography>
        <Box display='flex' alignItems='center'>
            <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant='determinate' value={75} color='secondary'/>
            </Box>
            <Box>
        <Typography>75%</Typography>
            </Box>
        </Box>
        <Divider orientation='horizontal'/>
        <Typography variant='subtitle1' sx={{mb:1}}> - HTML/CSS3</Typography>
        <Box display='flex' alignItems='center'>
            <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant='determinate' value={70} color='secondary'/>
            </Box>
            <Box>
        <Typography>70%</Typography>
            </Box>
        </Box>
        <Divider orientation='horizontal'/>
      </Box>
    </CardContent>
  </Card>
    )
}
