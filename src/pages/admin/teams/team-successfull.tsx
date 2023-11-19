
import { Box, Heading, Text } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

export default function Success() {

  return (
    <>
    <Box textAlign="center" py={32} px={6}>
        
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Team member added successfully.
      </Heading>
      <Text color={'gray.500'} w='50%' mx='auto'>  
        User credentials have been to sent successfully to his/her email address
      </Text>
    </Box>
    </>
  )
}