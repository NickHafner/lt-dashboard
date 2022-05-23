import { User } from "@supabase/supabase-js";
import { ErrorResponse, Profile } from "../../types/api";
import { supabase } from "./supabaseClient"

export async function getProfile(): Promise<Profile | ErrorResponse> {
    try {
        const user: User | null = supabase.auth.user()
        if(!user)
            return {
                errorCode: 403,
                error: null
            }

        let { data, error, status } = await supabase
            .from('user_profile')
            .select(`username`)
            .eq('profile_id', user.id)
            .single()

        if (error && status !== 406) throw error

        return { username: data.username, email: data.email };
    } catch (error: any) {
        return {
            errorCode: 500,
            error: null
        }
    }
}

export async function updateProfile({ username }: any): Promise<number | ErrorResponse> {
    try {
        const user:any = supabase.auth.user()

        const updates = {
        id: user.id,
        username,
        updated_at: new Date(),
        }

        let { error } = await supabase.from('profiles').upsert(updates, {
            returning: 'minimal', 
        })

        if (error) 
            return {
                errorCode: Number(error.code),
                error: error.message
            }
        else
            return 200
    } catch (error: any) {
        return {
            errorCode: 500,
            error: null
        }
    }
}