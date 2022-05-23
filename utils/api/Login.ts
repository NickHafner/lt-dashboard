import { supabase } from './supabaseClient'

export async function HandleLogin(email: string, password: string) {
    try {
        const resp = await supabase.auth.signIn({ email, password })
        const { error } = resp
        if (error)
            return {
                status: error.status,
                msg: error.message
            }
        else
            return {
                isSuccess: true,
                user: resp.user
            }
    } catch (error: any) {
        return {
            status: 500,
            msg: null
        }
    }
  }