import { User } from '@supabase/supabase-js'

export type LoginResponse = {
    isSuccess: boolean,
    user: User | null
  }