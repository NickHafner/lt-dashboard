import { Session } from '@supabase/supabase-js'
import { useState, useEffect } from 'react'
import { ErrorResponse, Profile } from '../types/api'
import { getProfile, updateProfile } from '../utils/api/Profile'
import { supabase } from '../utils/api/supabaseClient'

interface AccountProps {
  session: Session | null
}

export default function Account({ session }: AccountProps) {
  const [loading, setLoading] = useState(false)
  const [hasError, setError] = useState(false)
  const [username, setUsername] = useState('')
  // const [website, setWebsite] = useState(null)
  // const [avatar_url, setAvatarUrl] = useState(null)

  useEffect(() => {
    const fetch = async() => {
      const data = await getProfile()
      const error = data as ErrorResponse
      const success = data as Profile
      if(error.errorCode)
        setError(true)
      else
        setUsername(success.username)
    }
    fetch()
  }, [session])

  const update = async(username: string) => {
    setLoading(true)
    const response = await updateProfile(username)
    setLoading(false)
  };

  if(!session?.user)
    return <div>You have been invalided</div>

  if(hasError)
    return <div>Sorry</div>

  return (
    <div className="form-widget">
      <div>
        <label htmlFor="email">Email: </label>
        <input id="email" type="text" value={session.user.email} disabled />
      </div>
      <div>
        <label htmlFor="username">Name: </label>
        <input
          id="username"
          type="text"
          value={username || ''}
          onChange={(e: any) => setUsername(e.target.value)}
        />
      </div>
      {/* <div>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="website"
          value={website || ''}
          onChange={(e: any) => setWebsite(e.target.value)}
        />
      </div> */}

      <div>
        <button
          className="button block primary"
          onClick={() => update(username)}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>

      <div>
        <button className="button block" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
      </div>
    </div>
  )
}
