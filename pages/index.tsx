import { useState, useEffect } from 'react'
import { supabase } from '../utils/api/supabaseClient'
import Login from '../components/Login'
import { NextPage } from 'next'


const Home: NextPage = () => {
  const [session, setSession]: any = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? <Login /> : <>test</>}
    </div>
  )
}

export default Home
