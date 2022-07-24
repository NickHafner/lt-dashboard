import { Session } from '@supabase/supabase-js';
import { useState } from 'react';
import { User_Profile } from '../types/supabase/User_Profile';
import { updateProfile } from '../utils/api/Profile';
import SupabaseClient from '../utils/supabaseClient';

export default function Account({
  profile,
  loading,
  session
}: {
  profile: User_Profile;
  loading: boolean;
  session: Session | null;
}) {
  const [username, setUsername] = useState(profile.username);

  const update = async (username: string) => {
    await updateProfile(username);
  };

  if (!session?.user) return <div>You have been invalided</div>;

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
        <button
          className="button block"
          onClick={() => SupabaseClient.auth.signOut()}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
