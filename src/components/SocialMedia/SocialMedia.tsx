import { Stack, styled, Typography } from '@mui/material'
import React from 'react';
import { SOCIAL_MEDIA } from '../../constants';

const SocialMedia = () => {
    const StyledStack = styled(Stack)({
        width : '40%',
        backgroundColor: 'rgba(120, 120, 120,0.6)',
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingLeft: '20px',
        paddingRight: '10px',
        borderRadius: '10px',
        display : 'flex',
        flexDirection : 'column',
        justifyContent:'center',
        gap : '3em',
        scale:0.8,
    })

    const StyledTypo =  styled(Typography)({
        textAlign:'center',
        fontFamily:'monospace',
        color:'white',
        
    })

    const IconStack = styled(Stack)({
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        gap:'20px',
    })

    const StyledImage = styled('img')({
        boxShadow: '2px 2px 5px black',
        transition: 'all 0.3s ease-in-out', // Add transition for smooth scaling
        ':hover': {
            boxShadow: '5px 5px 10px black',
            transform: 'scale(1.5)', // Use transform for scaling instead of 'scale' property
        }
    })
    


  return (
    <>
        <StyledStack>
            <StyledTypo variant='h4'>Follow </StyledTypo>
            <IconStack>
            {SOCIAL_MEDIA.map((image, index) => (
            <div key={index}>
              <a href={image.link}>
              <StyledImage src={image.path} alt={image.alt} style={{ borderRadius: '10px', width: '40px', height: '40px' }} />
              </a>
              
            </div>
          ))}

            </IconStack>
        </StyledStack>
    </>
    
    
  )
}

export default SocialMedia;




