import { Stack, styled } from '@mui/material';
import React from 'react'
import ContactForm from '../components/ContactForm/ContactForm';
import SocialMedia from '../components/SocialMedia/SocialMedia';

const Back = `${process.env.PUBLIC_URL}/assets/images/Tri.jpg`;
const StyledStack = styled(Stack)({
    // width: '30%',
    // margin : 'auto',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    flexWrap:'wrap',
})

// const MainContainer = styled(Stack)({
//   display : 'flex',
//   flexDirection : 'row',
//   flexWrap:'wrap',
//   justifyContent:'space-evenly',
//   width : '100%',
//   height:'100%',
// })

const Contact = () => {
  return (
    <Stack>
      <img src={Back} alt="Background" style={{  position:'fixed',
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          height: '100vh', 
          width: '100vw',  
          filter: 'blur(5px)', }} />
      
        <StyledStack>
            <ContactForm/>
            <SocialMedia/>
        </StyledStack>
      
    </Stack>
    
   
  )
}


export default  Contact;



// import React, { useState, useRef } from 'react';
// import { Box, Button, TextField, Typography } from '@mui/material';
// import EmailIcon from '@mui/icons-material/Email';
// import PhoneIcon from '@mui/icons-material/Phone';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

// const ContactPage = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const formRef = useRef<HTMLFormElement>(null);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!name || !email || !message) {
//       setErrorMessage('Please fill in all required fields.');
//       return;
//     }

//     try {
//       // Replace with your actual email sending logic (e.g., using a backend API)
//       const response = await fetch('/api/send-email', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, email, message }),
//       });

//       if (response.ok) {
//         setSuccessMessage('Your message has been sent successfully!');
//         formRef.current?.reset();
//       } else {
//         setErrorMessage('An error occurred while sending your message.');
//       }
//     } catch (error) {
//       console.error('Error sending message:', error);
//       setErrorMessage('An error occurred while sending your message.');
//     }
//   };

//   return (
//     <Box component="section" id="contact" className="contact-section">
//       <Typography variant="h3" align="center" gutterBottom>
//         Contact Us
//       </Typography>
//       <Typography variant="body1" align="center" marginBottom={4}>
//         Have a question or want to book a session? Feel free to reach out!
//       </Typography>
//       <Box component="form" onSubmit={handleSubmit} ref={formRef}>
//         <TextField
//           label="Name"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <TextField
//           label="Email"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <TextField
//           label="Message"
//           variant="outlined"
//           fullWidth
//           multiline
//           rows={4}
//           margin="normal"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//         />
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           size="large"
//           fullWidth
//         >
//           Send Message
//         </Button>
//         {successMessage && (
//           <Typography variant="body1" color="success" align="center">
//             {successMessage}
//           </Typography>
//         )}
//         {errorMessage && (
//           <Typography variant="body1" color="error" align="center">
//             {errorMessage}
//           </Typography>
//         )}
//       </Box>
//       <Box component="div" className="contact-info">
//         <Typography variant="h6">Contact Information</Typography>
//         <Box component="ul">
//           <li>
//             <EmailIcon />
//             <a href="mailto:your_email@example.com">your_email@example.com</a>
//           </li>
//           <li>
//             <PhoneIcon />
//             +123 456 7890
//           </li>
//           <li>
//             <LocationOnIcon />
//             Your Address
//           </li>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ContactPage;





// import  React from 'react';
// import { Stack } from '@mui/material';
// import { Typography } from '@mui/material';

// const Contact: React.FC = () => {
//   const 
//   return(

//   )
// }

// export default  Contact;;
