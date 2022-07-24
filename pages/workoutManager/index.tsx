import {
  Box,
  Button,
  Input,
  Text,
  Heading,
  AlertIcon,
  Alert
} from '@chakra-ui/react';
import Head from 'next/head';
import { ReactElement } from 'react';
import Layout from '../../components/Layout';
import { NextPageWithLayout } from '../../types';

const WorkoutManager: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Workouts</title>
      </Head>
      <Text>example</Text>
    </>
  );
};

WorkoutManager.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default WorkoutManager;
