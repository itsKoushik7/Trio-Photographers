import { Stack, styled, Typography } from '@mui/material'
import React from 'react';
import { IMAGES_DATA } from '../constants';

export const Gallery = () => {
    const StyledStack = styled(Stack)({
        marginTop:'2em',
        display :'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap:'wrap',
        alignItems:'center',
        backgroundColor : 'rgba(255,255,255,0.6)',
        gap:'2em',
        padding:'1em',
        borderRadius :'20px',
    })
    const ItemContainer = styled(Stack)({
        backgroundColor : 'rgba(0,0,0,0.3)',
        width: '20em',
        height :'30em',
        gap:'3px',
        borderRadius :'20px',
    })

    const StyledImage = styled('img')({
        width: '100%',
        height: '70%',
        borderTopLeftRadius :'20px',
        borderTopRightRadius :'20px',
    })

    const ContentStack = styled(Stack)({
        paddingLeft:'1em',
    })

    const AnchorLink = styled('a')({
        padding:'10px',
        textDecoration:'none',
        color:'rgba(255,255,255,0.5)',
    })
    const StyledTypo = styled(Typography)({
        color:'rgba(255,255,255,0.9)'
    })
  return (
  <>
  <Stack sx={{backgroundColor : 'rgba(255,255,255,0.6)',}}>
  <Typography variant='h2' sx={{color:'Highlight',  fontFamily: 'Playwrite England SemiJoined',textAlign:'center',}}>
    Our Work
  </Typography>

    <StyledStack>
        {
            IMAGES_DATA.map((image, index) => (
                <ItemContainer>
                    <StyledImage key={index} src={image.path} alt={image.description} />
                    <ContentStack>
                        <StyledTypo >
                           Description : {image.description}
                        </StyledTypo>
                        <StyledTypo>
                            Shot By : {image.admin}
                        </StyledTypo>
                        <StyledTypo >
                            Device : {image.device}
                        </StyledTypo>
                        <AnchorLink href='https://www.instagram.com/trio._photographers/'>For More</AnchorLink>

                    </ContentStack>
                   
                </ItemContainer>
                
)     )   }

    </StyledStack>
     
  </Stack>

  
  </>
  )
}
