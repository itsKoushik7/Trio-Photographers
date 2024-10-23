import { Stack,styled, Typography, TextField, Button } from '@mui/material';
import React from 'react'

const ContactForm = () => {
    const StyledStack = styled(Stack)({
        marginTop : '0px',
        width : '50%',
        backgroundColor: 'rgba(120, 120, 120,0.6)',
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingLeft: '20px',
        paddingRight: '10px',
        borderRadius: '10px',
        display : 'flex',
        flexDirection : 'column',
        gap : '0.6em',
        scale:0.8,
        fontFamily:'monospace',
    })

    const StyledTextField = styled(TextField)({
       
        input: {
          backgroundColor: 'rgba(255, 255, 255, 0.1)', // Set the background color of the input
          color: 'white', // Text color
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white', // Border color
          },
          '&:hover fieldset': {
            borderColor: 'lightblue', // Border color on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: 'powderblue', // Border color when focused
          },
          '& .MuiInputBase-root': {
            height: '30px', // Control the height of the input
            },
        },
      });

      const StyledButton = styled(Button)({
        width:'100%',
        height:'50px',
        marginTop: '10px',
        backgroundColor: '#fc0', // Custom button background color
        color: 'Black', // Custom text color
        fontWeight :'700',
        '&:hover': {
          backgroundColor: '', // Change background color on hover
        },
      });

      const StyledAnchor = styled('a')({
        width:'100%',
      })

  return (
    <StyledStack>
        <Typography variant='h4' color='White' sx={{fontFamily:'monospace' , textAlign:'center'}}>
            Newsletter
        </Typography>
        <Typography variant='h6'  color='White' sx={{fontFamily:'monospace'}}>First Name</Typography>
        <StyledTextField variant="outlined"  />
        <Typography variant='h6'  color='White' sx={{fontFamily:'monospace'}}>Last Name</Typography>
        <StyledTextField variant="outlined" />
        <Typography variant='h6'  color='White' sx={{fontFamily:'monospace'}}>Enter Mail</Typography>
        <StyledTextField variant="outlined" />
        <StyledAnchor href='mailto:itskoushik007@gmail.com'><StyledButton variant='contained' sx={{}}>Get Access</StyledButton></StyledAnchor>
        
    </StyledStack>
  )
}

export default  ContactForm;