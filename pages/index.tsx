import { useEffect } from 'react'
import SupabaseClient from '../utils/supabaseClient'
import Login from '../components/Login'
import { NextPage } from 'next'
import Router from 'next/router'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'


const LoginIn: NextPage = () => {
  useEffect(() => {
    const session = SupabaseClient.auth.session()
    if(session !== null){
      const now = Math.round(Date.now() / 1000)
      if(session.expires_at && session.expires_at > now) 
        Router.push('/home')
    }

    SupabaseClient.auth.onAuthStateChange((_event, session) => {
      if(_event === 'SIGNED_IN')
        Router.push('/home')
    })
  }, [])

  return (<>
    <Head>
      <title>Login</title>
    </Head>
    <Box className="container" style={{ padding: '50px 0 100px 0' }}>
      <Login />
    </Box>
  </>
  )
}

export default LoginIn
