import { Card, CardHeader, Divider, CardContent, Box, Typography } from '@mui/material'
import React from 'react'

export const CardStudio = () => {
  return (
    <Card sx={{ maxWidth: 400, my: 1, minWidth: 200 }}>
          <CardHeader title="Estudios" sx={{ textAlign: "center" }} />
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
              - Tecnólogia en Sistemas(Desarrollo de Software)
              </Typography>
              <Typography
                variant="subtitle2"
                color="red"
                textAlign="left"
                sx={{ mt: 1, ml: 2 }}
              >
                Marzo 2019 - Marzo 2022
              </Typography>
              <Typography
                variant="subtitle2"
                color="InfoText"
                textAlign="left"
                sx={{ mt: 1, ml: 3 }}
              >
                Estudios superiores en sistemas, mención en desarrollo de
                software y tecnologías de la información
              </Typography>
            </Box>
          </CardContent>
        </Card>
  )
}
