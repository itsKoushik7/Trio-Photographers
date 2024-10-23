import React from 'react'
import AboutHeading from '../components/AboutHeading/AboutHeading'
import AboutContent from '../components/AboutContent/AboutContent'
import AboutLinks from '../components/AboutLinks/AboutLinks'
import { Stack, styled } from '@mui/material'

export const About = () => {
  const StyledStack = styled(Stack)({
    display:'flex',
    flexDirection:'column',
    gap :'20px',
  })
  return (
    <>
    <StyledStack>
      <AboutHeading/>
      <AboutContent/>
      <AboutLinks/>
    </StyledStack>
      
    </>
  )
}
