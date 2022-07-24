import {
  Box,
  Flex,
  useColorMode,
  useColorModeValue,
  Link,
  HStack
} from '@chakra-ui/react';
import type { ReactElement } from 'react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import Router from 'next/router';

const Links = [
  { title: 'Dashboard', route: '/dashboard', index: 1 },
  { title: 'Users', route: '/users', index: 2 },
  { title: 'Graphs', route: '/graph', index: 3 },
  { title: 'Workouts', route: '/workoutManager', index: 4 }
];

const NavLink: React.FC<{
  link: { title: string; route: string; index: number };
}> = ({ link }) => {
  return (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('facebook.400', 'facebook.400')
      }}
      _focus={{
        textDecoration: 'none',
        bg: useColorModeValue('facebook.400', 'facebook.400')
      }}
      onKeyDown={(e) => e.key === 'Enter' && Router.push(link.route)}
      tabIndex={link.index}
      onClick={() => Router.push(link.route)}
    >
      {link.title}
    </Link>
  );
};

export default function Layout({ children }: { children: ReactElement }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        color="facebook.100"
        bg={useColorModeValue('brand.gray.400', 'brand.gray.700')}
        px={4}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.title} link={link} />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            {useColorModeValue(
              <MoonIcon onClick={toggleColorMode} />,
              <SunIcon onClick={toggleColorMode} />
            )}
          </Flex>
        </Flex>
      </Box>

      <Box p={4}>{children}</Box>
    </>
  );
}
