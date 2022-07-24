import { User } from "@supabase/supabase-js";
import { User_Profile } from "../../types/api";
import supabase from "../supabaseClient"
import { handleSupabaseErrors } from "./common";

export async function getProfile(): Promise<User_Profile> {
    const user: User | null = supabase.auth.user()
    if(!user)
        throw new Error("User is null")

    const { data, error } = await supabase
        .from('user_profile')
        .select(`username`)
        .eq('user_id', user.id)
        .limit(1)
        .single()
    console.log(error)
    if(error)
        throw new Error("API request failed")

    return { username: data.username };
}

export function updateProfile({ username }: any) {
    const user: User | null = supabase.auth.user()
    if(!user)
        throw new Error("User is null")

    const updates = {
        user_id: user.id,
        username,
        updated_at: new Date(),
    }

    supabase.from('user_profile').upsert(updates, {
        returning: 'minimal', 
    }).then(handleSupabaseErrors)

    return 200;
}