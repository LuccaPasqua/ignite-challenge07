import { Box } from '@chakra-ui/react'
import ContinentSlide from '../components/ContinentsSlide'
import Header from '../components/Header'
import TravelTypes from '../components/TravelTypes'



export default function Home() {
  return (
    <Box>
      <Header/>
      <TravelTypes/>
      <ContinentSlide />
    </Box>
  )
}
