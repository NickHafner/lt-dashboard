import supabase from '../supabaseClient'
import { handleSupabaseErrors } from './common';

export async function handleLogin(email: string, password: string, secret: string) {
    if(secret !== 's1' || !email || !password)
        return
    return supabase.auth.signIn({ email, password })
        .then(handleSupabaseErrors)
  }