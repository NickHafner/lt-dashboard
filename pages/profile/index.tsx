import { useState, useEffect } from 'react';
import SupabaseClient from '../../utils/supabaseClient';
import { NextPage } from 'next';
import Router from 'next/router';
import Head from 'next/head';
import { Session } from '@supabase/supabase-js';
import Account from '../../components/Account';

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
    </>
  );
};

export default Profile;
