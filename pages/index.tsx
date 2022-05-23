import { useState, useEffect } from 'react'
import { supabase } from '../utils/api/supabaseClient'
import Login from '../components/Login'
import { NextPage } from 'next'
import Router from 'next/router'
import Head from 'next/head'
import Account from '../components/Account'
import { Session } from '@supabase/supabase-js'


const Home: NextPage = () => {
  const [session, setSession] = useState<Session | null>(null)
  useEffect(() => {
    setSession(supabase.auth.session())
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (<>
    <Head>
      <title>{!session ? 'Login' : 'Home'}</title>
    </Head>
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? <Login /> : <Account session={session} />}
    </div>
  </>
  )
}

export default Home
