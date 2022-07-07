import { Box, Button, CircularProgress, Input, Text, Square, Heading } from '@chakra-ui/react';
import { useState } from 'react'
import { HandleLogin } from '../utils/api';


export default function Login() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = async(email: string, password: string) => {
    if(!email || !password)
      return
    setLoading(true)
    await HandleLogin(email, password)
    setLoading(false)
  }
  return (
    <>
      <Box marginBottom='1.4rem' display='flex' justifyContent='center'>
        <Heading size='md' as='h1'>MLT - Sign in</Heading>
      </Box>
      <Box margin='0 auto'
        bg='#21262d' 
        maxW='md'
        padding='1.2rem'
        borderWidth='1px' 
        borderRadius='lg' 
        overflow='hidden'
        >
        <Text marginBottom='.4rem'>Phone number or email address</Text>
        <Input
          className="inputField"
          type="email"
          variant='outline' 
          bg='gray.800'
          colorScheme='telegram'
          marginBottom='.8rem'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Text marginBottom='.4rem'>Password</Text>
        <Input
          className="inputField"
          type="password"
          variant='outline' 
          marginBottom='.8rem'
          bg='gray.800'
          colorScheme='telegram'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          isLoading={loading}
          variant='outline'
          marginTop='.3rem'
          width='100%'
          colorScheme='telegram'
          border='1px'
          onClick={(e) => {
            e.preventDefault()
            handleLogin(email, password)
          }}
          className="button block"
          disabled={loading}
        >
          <span>Sign in</span>
        </Button>
      </Box>

    </>
  )
}