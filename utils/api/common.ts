import { ApiError, PostgrestError } from "@supabase/supabase-js"

export function handleSupabaseErrors<T extends unknown[]>({ error } 
    : { error?: ApiError | PostgrestError | null }, ...rest: T) {
    if(error)
        throw new Error("API request failed")
    
    return {...rest}
}