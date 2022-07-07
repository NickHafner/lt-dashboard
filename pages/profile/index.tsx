import { useState, useEffect } from 'react'
import SupabaseClient from '../../utils/supabaseClient'
import { NextPage } from 'next'
import Router from 'next/router'
import Head from 'next/head'
import { Session } from '@supabase/supabase-js'
import Account from '../../components/Account'

const Profile: NextPage = () => {
    return (<>
      <Head>
        <title>Login</title>
      </Head>
      <div className="container" style={{ padding: '50px 0 100px 0' }}>
        <Account session={SupabaseClient.auth.session()}/>
      </div>
    </>
    )
  }
  
export default Profile
  