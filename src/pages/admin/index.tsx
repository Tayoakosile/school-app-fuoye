
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import useLogin from 'hooks/useLogin'
import ACFormInput from '../../reusables/ACFormInput';
import AcButton from 'reusables/ACButton';

export default function SimpleCard() {
    const {control}= useLogin()
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} w='100%' maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Admin Login</Heading>
          
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <ACFormInput control={control} name="email" label='Email Address' autoComplete='email' />
            <ACFormInput control={control} name="password" label='Password' autoComplete='current-password' />
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'brand.400'}>Forgot password?</Text>
              </Stack>
              <AcButton>
                Sign in
              </AcButton>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}