import { Card, CardHeader, Divider, CardContent, Box, Typography } from '@mui/material'
import React from 'react'

export const CardCourse = () => {
  return (
    <Card sx={{ maxWidth: 400, my: 1, minWidth: 200, }}>
    <CardHeader title="Cursos" sx={{ textAlign: "center" }} />
    <Divider orientation="horizontal" />
    <CardContent>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        sx={{ mt: 2 }}
      >
        <Typography
          variant="subtitle1"
          color="InfoText"
          textAlign="left"
          sx={{ mt: 1, mr: 1 }}
        >
          - React de cero a Experto
        </Typography>
        <Typography
          variant="subtitle2"
          color="red"
          textAlign="left"
          sx={{ mt: 1, ml: 2 }}
        >
          Diciembre 2021 - Marzo 2022
        </Typography>
        <Typography
          variant="subtitle2"
          color="InfoText"
          textAlign="left"
          sx={{ mt: 1, ml: 3 }}
        >
          Curso basado en ReactJs desde cero, implementando el Stack MERN
        </Typography>
        <Divider orientation="horizontal" sx={{ mt: 2 }} />
        <Typography
          variant="subtitle1"
          color="InfoText"
          textAlign="left"
          sx={{ mt: 1, mr: 1 }}
        >
          - React PRO
        </Typography>
        <Typography
          variant="subtitle2"
          color="red"
          textAlign="left"
          sx={{ mt: 1, ml: 2 }}
        >
          Abril 2022 - Junio 2022
        </Typography>
        <Typography
          variant="subtitle2"
          color="InfoText"
          textAlign="left"
          sx={{ mt: 1, ml: 3 }}
        >
          Curso basado en ReactJs a un nivel avanzado implementando buenas
          prácticas y patrones de diseño
        </Typography>
        <Divider orientation="horizontal" sx={{ mt: 2 }} />
        <Typography
          variant="subtitle1"
          color="InfoText"
          textAlign="left"
          sx={{ mt: 1, mr: 1 }}
        >
          - NextJs el framework de React para Producción
        </Typography>
        <Typography
          variant="subtitle2"
          color="red"
          textAlign="left"
          sx={{ mt: 1, ml: 2 }}
        >
          Junio 2022 - Septiembre 2022
        </Typography>
        <Typography
          variant="subtitle2"
          color="InfoText"
          textAlign="left"
          sx={{ mt: 1, ml: 3 }}
        >
          Curso basado en el Framework de React para producción con su
          version 12.2.3
        </Typography>
      </Box>
    </CardContent>
  </Card>
  )
}
