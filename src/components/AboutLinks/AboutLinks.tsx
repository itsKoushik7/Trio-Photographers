import { Stack, styled, Typography } from '@mui/material';
import React from 'react';
import { ABOUT_LINKS } from '../../constants';

const AboutLinks = () => {
    const StyledStack = styled(Stack)({
        display: 'flex',
        flexDirection: 'row',
        justifyContent :'center',
        gap: '25px',
        flexWrap : 'wrap',
    })
    const EachStack = styled(Stack)({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent:'center',
        alignItems:'center',
        gap:'10px',
    })

    const STyledTypo = styled(Typography)({
        color : 'white',
        fontFamily: 'Playwrite England SemiJoined',

    })

    const StyledImage = styled('img')({
        boxShadow : '3px 3px 10px white',
        borderRadius : '52%',
    })

  return (
    <>
    <StyledStack>
        {
            ABOUT_LINKS.map((item) => (
                <EachStack key={item.id}> {/* Always include a key when rendering lists */}
                    <a href={item.link}><StyledImage src={item.path} alt={item.name} width={'100px'} height={'100px'} /></a>
                    <STyledTypo variant='body1'>{item.name}</STyledTypo>
                </EachStack>
            ))
        }
    </StyledStack>
</>

  )
}


export  default  AboutLinks;