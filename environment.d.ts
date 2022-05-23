declare namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_SUPABASE_ANON: string;
    NEXT_PUBLIC_SUPABASE_URL: string;
    NODE_ENV: 'development' | 'production';
    PORT?: string;
    PWD: string;
    }
}
