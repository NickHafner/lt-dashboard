import Head from 'next/head';
import { ReactElement } from 'react';
import Layout from '../../components/Layout';
import { NextPageWithLayout } from '../../types';

const Dashboard: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
    </>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Dashboard;
