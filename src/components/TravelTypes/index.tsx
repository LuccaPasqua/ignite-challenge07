import { Box, Image, Text, useBreakpointValue } from "@chakra-ui/react";


export default function TravelTypes(){

  const isWideVersion = useBreakpointValue({
    base: false,
    md:true,
  })

  return(

    <Box
      width='80%'
      d='flex'
      my='8'
      mx='auto'
      justifyContent='space-around'
      flexWrap='wrap'
    >
      {isWideVersion && (
        <>
          <Box d='flex' flexDirection='column' alignItems='center'>
            <Image src='/cocktail.png'/>
            <Text fontWeight='700' color='gray.500' mt='4'>vida noturna</Text>
          </Box>

          <Box d='flex' flexDirection='column' alignItems='center'>
            <Image src='/surf.png' />
            <Text fontWeight='700' color='gray.500' mt='4'>praia</Text>
          </Box>

          <Box d='flex' flexDirection='column' alignItems='center'>
            <Image src='/building.png' />
            <Text fontWeight='700' color='gray.500' mt='4'>moderno</Text>
          </Box>

          <Box d='flex' flexDirection='column' alignItems='center'>
            <Image src='/museum.png' />
            <Text fontWeight='700' color='gray.500' mt='4'>clássico</Text>
          </Box>

          <Box d='flex' flexDirection='column' alignItems='center'>
            <Image src='/earth.png' />
            <Text fontWeight='700' color='gray.500' mt='4'>e mais...</Text>
          </Box>
        </>
        
      ) || (
        <>
          <Box display='flex' h='2' w='30' alignItems='center' mb='6'>
            <Image src='/ellipse.png' mr='2'/>
            <Text fontWeight='700' color='gray.500'>vida noturna</Text>
          </Box>

          <Box display='flex' h='2' w='30' alignItems='center' mb='6'>
            <Image src='/ellipse.png' mr='2'/>
            <Text fontWeight='700' color='gray.500'>praia</Text>
          </Box>

          <Box display='flex' h='2' w='30' alignItems='center' mb='6'>
            <Image src='/ellipse.png' mr='2'/>
            <Text fontWeight='700' color='gray.500'>moderno</Text>
          </Box>

          <Box display='flex' h='2' w='30' alignItems='center' mb='6'>
            <Image src='/ellipse.png' mr='2'/>
            <Text fontWeight='700' color='gray.500'>clássico</Text>
          </Box>

          <Box display='flex' h='2' w='30' alignItems='center' mb='6'>
            <Image src='/ellipse.png' mr='2'/>
            <Text fontWeight='700' color='gray.500'>e mais...</Text>
          </Box>
        </>
      )}
    </Box>
  )
}