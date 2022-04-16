import { Box, Heading, HStack, Image, Stack, Text, useBreakpointValue, VStack } from '@chakra-ui/react'


export default function Header(){
  const isWideVersion = useBreakpointValue({
    base: false,
    md:true,
  })

  return(
    <>
      <Box bg='gray.50' p='4' d='flex' justifyContent='center'>
        <Image src='/logo.png'></Image>
      </Box>
      <Box 
        bgImage='/background.png' 
        bgRepeat="no-repeat" 
        h="64"
        d="flex"
        p="16"
        justifyContent="space-between"
        alignItems='center'
      >
        <Box 
          width="65"
          color='gray.50'
        >
          <Stack gap="2">
            <Heading 
              size='lg' 
              fontWeight="400"
            >
              5 Continentes, 
            </Heading>

            <Heading 
              size='lg' 
              fontWeight="400"
            >
              infinitas possibilidades
            </Heading>

            <Text>Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
          </Stack>
          
        </Box>

        {isWideVersion && (
          <Box>
            <Image src='/airplane.png' mt="16"/>
          </Box>
        )}

      </Box>

    </>
  )
}