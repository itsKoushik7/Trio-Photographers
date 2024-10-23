import { Stack, styled, Typography } from '@mui/material';
import React from 'react';
import { ABOUT_DATA } from '../../constants';
import { IMAGES_DATA } from '../../constants';

const AboutContent = () => {
    const MainContainer = styled(Stack)({
        display:'flex',
        flexDirection:'column',
        overflow:'inherit',
    });

    const RowContainer = styled(Stack)({
        display :'flex',
        flexDirection: 'row',
        justifyContent:'center',
        marginTop :'5px',
        gap: '20px',
        flexWrap:'wrap',

    })
    const ItemContainer = styled(Stack)({
        fontSize:'13px',
        display :'flex',
        padding:'10px',
        flexDirection: 'row',
        justifyContent: 'center',
        width :'30%',
        // backgroundColor:'rgba(223, 242, 235, 0.4)',
        backgroundColor:'rgba(0, 0,0, 0.4)',
        color:'white',
        fontFamily: 'Playwrite England SemiJoined',
        borderRadius : '5px',
    })
  return (
    <>
    <MainContainer>
        <RowContainer sx={{justifyContent:'center',}}>
            <ItemContainer>
                <Stack>
                <Typography variant='h4' color='warning'>Our Journey</Typography>
                {ABOUT_DATA.ourjourney}
                </Stack>
            </ItemContainer>
            <ItemContainer>
                <Stack><img src={IMAGES_DATA[12].path} alt='flower'  style={{borderRadius:'10px',boxShadow:'2px 2px 10px white',  width: '80%',height:'300px'}}/></Stack>

            </ItemContainer>

        </RowContainer>

        

    </MainContainer>
    
    </>
  )
}

export default AboutContent;