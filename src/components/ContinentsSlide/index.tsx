import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Box, color, Heading, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export default function ContinentSlide(){

  return(
    <Box
      width='80%'
      margin='auto'
    >
      <Box
        color='gray.500'
        fontSize='24px'
        d='flex'
        flexDirection='column'
        alignItems='center'
        mb='8'
      >
        <Text>Vamos nessa?</Text>
        <Text>Escolha seu continente</Text>
      </Box>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <Box
            bgImage='/continents/europe.png'
            w='100%'
            h='100%'
            display='flex'
            flexDirection='column'
            alignItems='center'
            p='20'
          >
            <Heading>Europa</Heading>
            <Text fontWeight='700'>O continente mais antigo</Text> 
          </Box>
        </SwiperSlide>


        <SwiperSlide>
          <Box
            bgImage='/continents/africa.jpg'
            backgroundSize='cover'
            w='100%'
            h='100%'
            display='flex'
            flexDirection='column'
            alignItems='center'
            p='20'
            color='gray.600'
          >
            <Heading>África</Heading>
            <Text fontWeight='700'>O continente das belas savanas</Text> 
          </Box>
        </SwiperSlide>


        <SwiperSlide>
          <Box
            bgImage='/continents/asia.jpg'
            
            backgroundSize='cover'
            w='100%'
            h='100%'
            display='flex'
            flexDirection='column'
            alignItems='center'
            p='20'
          >
            <Heading>Ásia</Heading>
            <Text fontWeight='700'>O ar do oriente</Text> 
          </Box>
        </SwiperSlide>


        <SwiperSlide>
          <Box
            bgImage='/continents/north-america.jpg'
            bgPosition='0 '
            backgroundSize='cover'
            w='100%'
            h='100%'
            display='flex'
            flexDirection='column'
            alignItems='center'
            p='20'
            color='gray.900'
          >
            <Heading>América do Norte</Heading>
            <Text fontWeight='700'>O novo mundo</Text> 
          </Box>
        </SwiperSlide>


        <SwiperSlide>
          <Box
            bgImage='/continents/south-america.jpg'
            bgPosition='0 '
            backgroundSize='cover'
            w='100%'
            h='100%'
            display='flex'
            flexDirection='column'
            alignItems='center'
            p='20'
            color='telegram.600'
          >
            <Heading>América do Sul</Heading>
            <Text fontWeight='700'>O novo mundo</Text> 
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}