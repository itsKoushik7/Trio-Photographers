// import { Box, styled } from '@mui/material';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import React, { useState, useEffect } from 'react';
// import '../App.css';
// import { IMAGES_DATA } from '../constants';

// const Home = () => {
//     const [tagText, setTagText] = useState(''); 
//   const tag = ' Here Images Speak...';
//   const [displayedText, setDisplayedText] = useState('');
//   const text = 'Weelcome to Trio Photographers...';
//   const speed = 100; // Adjust the speed as needed (milliseconds)

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       if (index < text.length) {
//         setDisplayedText((prev) => prev + text.charAt(index));
//         index++;
//       } else {
//         clearInterval(interval);
//       }
//     }, speed);
//     return () => clearInterval(interval);
//   }, []);


//   // --------- tag text

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       if (index < tag.length) {
//         setTagText((prev) => prev + tag.charAt(index));
//         index++;
//       } else {
//         clearInterval(interval);
//       }
//     }, speed);
//     return () => clearInterval(interval);
//   }, []);

//   const StyledText = styled(Box)({
//     fontSize: '70px',
//     color: 'white',
//     marginTop: '50px',
//     marginLeft: '50px',
//     width: '60%',
//     // fontFamily: 'Playwrite England SemiJoined',
//     whiteSpace: 'pre-wrap',
//   });

//   const StyledTag = styled(Box)({
//     fontFamily: 'Playwrite England SemiJoined',
//     fontSize: '40px',
//     color: 'powderblue',
//     marginTop: '50px',
//     marginLeft: '50px',
//   });

//   // Slider settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrows: true,
    
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
//       <div>
//         <StyledText>{displayedText}</StyledText>
//         <StyledTag>{tagText}</StyledTag>
//       </div>

//       <Box sx={{ width: '40%', margin: '50px', borderRadius: '10px' }}>
//         <Slider {...settings}>
//           {IMAGES_DATA.map((image, index) => (
//             <div key={index}>
//               <img src={image.path} alt={image.description} style={{ borderRadius: '10px', width: '100%', height: '400px' }} />
//             </div>
//           ))}
//         </Slider>
//       </Box>
//     </div>
//   );
// };

// export default Home;




import {ReactTyped} from 'react-typed';
import { Box, styled } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css';
import { IMAGES_DATA } from '../constants';

const Home = () => {

  const StyledText = styled(Box)({
    fontSize: '60px',
    color: 'white',
    marginTop: '50px',
    marginLeft: '50px',
    fontFamily: 'Playwrite England SemiJoined',
    width: '60%',
  });

  const StyledTag = styled(Box)({
    fontFamily: 'Playwrite England SemiJoined',
    fontSize: '40px',
    color: 'powderblue',
    marginTop: '50px',
    marginLeft: '50px',
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  const StyledBox = styled(Box)({
     width: '40%', margin: '50px', borderRadius: '10px'

  })

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' ,flexWrap:'wrap',}}>
      <StyledBox>
        <StyledText>
          <ReactTyped
            strings={['Welcome to Trio Photographers...']}
            typeSpeed={80}
            backSpeed={50}
            loop={false}
          />
        </StyledText>
        <StyledTag>
          <ReactTyped
            strings={['Here Images Speak...']}
            typeSpeed={80}
            backSpeed={50}
            loop={false}
          />
        </StyledTag>
      </StyledBox>

      <Box sx={{ width: '40%', margin: '50px', borderRadius: '10px' }}>
        <Slider {...settings}>
          {IMAGES_DATA.map((image, index) => (
            <div key={index}>
              <img src={image.path} alt={image.description} style={{ borderRadius: '10px', width: '100%', height: '400px' }} />
            </div>
          ))}
        </Slider>
      </Box>
    </div>
  );
};

export default Home;
