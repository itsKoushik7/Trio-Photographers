import React from 'react'
import { Stack, styled, Typography } from '@mui/material';
import  '../../App.css';

const AboutHeading = () => {
    const StyledStack = styled(Stack)({
        // backgroundColor : '#4A628A ',
        backgroundColor: 'rgba(74, 98, 138, 0.8)',
        height:'4em',
        color: 'white',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        flexWrap:'wrap',
    })

    const StyleddTypo =  styled(Typography)({
        marginTop: '',
        fontFamily: 'Playwrite England SemiJoined',
    })

  return (
    <>
    <StyledStack>
      <StyleddTypo variant='h2' >About Us</StyleddTypo>
    </StyledStack>
    </>
  )
}

export default  AboutHeading;