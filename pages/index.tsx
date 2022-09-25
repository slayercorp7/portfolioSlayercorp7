import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import { HomeLayout,HomePage } from '../components'

const Home: NextPage = () => {
  return (
    <HomeLayout title={'Página Principal'} name={'Slayercorp7'} description={'Página principal-Portafolio'} >
      <Typography variant='h2' component={'h1'} sx={{ mb:2}}>Bienvenido</Typography>
      
      <HomePage/>

    </HomeLayout>
  )
}

export default Home
