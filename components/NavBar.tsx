import { PropsNavBar } from '@/interfaces/interfaces';
import { AppBar, Typography } from '@mui/material';
import React, { FC } from 'react'


export const NavBar:FC<PropsNavBar>  = ( { title, parrafo } ) => {
  return (
    <AppBar sx={{p: 4, background: '#414141'}} >
      <Typography variant='h1'  >
          {title}
      </Typography>
      <Typography variant='h6' sx={{ fontWeight: 200 }}  >
          {parrafo}
      </Typography>
    </AppBar>
  )
}

export default NavBar
