import { useState, useEffect } from 'react'
import SupabaseClient from '../utils/supabaseClient'
import Login from '../components/Login'
import { NextPage } from 'next'
import Router from 'next/router'
import Head from 'next/head'
import { Session } from '@supabase/supabase-js'
import { Box } from '@chakra-ui/react'


const LoginIn: NextPage = () => {
  useEffect(() => {
    if(SupabaseClient.auth.session())
      Router.push('/profile')

    SupabaseClient.auth.onAuthStateChange((_event, session) => {
      Router.push('/profile')
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
