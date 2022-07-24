import Head from 'next/head';
import { ReactElement } from 'react';
import Layout from '../../components/Layout';
import { NextPageWithLayout } from '../../types';

const Users: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
    </>
  );
};

Users.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Users;
