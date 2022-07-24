import {
  Box,
  Button,
  Input,
  Text,
  Heading,
  AlertIcon,
  useColorModeValue,
  Alert
} from '@chakra-ui/react';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { handleLogin } from '../../utils/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secretValue, setSecretValue] = useState('s1');
  const loginMutation = useMutation('login', () =>
    handleLogin(email, password, secretValue)
  );
  const { isLoading, isError } = loginMutation;

  return (
    <>
      <Box marginBottom="1.4rem" display="flex" justifyContent="center">
        <Heading size="md" as="h1">
          MLT - Sign in
        </Heading>
      </Box>
      <Box
        margin="0 auto"
        bg={useColorModeValue('brand.gray.400', 'brand.gray.700')}
        maxW="md"
        padding="1.2rem"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Text marginBottom=".4rem">Phone number or email address</Text>
        <Input
          className="inputField"
          type="email"
          variant="outline"
          bg="gray.800"
          marginBottom=".8rem"
          onKeyDown={(e) => {
            if (e.key === 'Enter') loginMutation.mutate();
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Text marginBottom=".4rem">Password</Text>
        <Input
          className="inputField"
          type="password"
          variant="outline"
          marginBottom=".8rem"
          bg="gray.800"
          onKeyDown={(e) => {
            if (e.key === 'Enter') loginMutation.mutate();
          }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          style={{ display: 'none' }}
          type="password"
          value={secretValue}
          name="secret"
          onChange={(e) => setSecretValue(e.target.value)}
        />
        {isError && (
          <Alert
            status="error"
            marginBottom=".4rem"
            borderRadius={'.375rem'}
            outline={'2px solid transparent'}
          >
            <AlertIcon />
            The email/password you entered are incorrect
          </Alert>
        )}
        <Button
          isLoading={isLoading}
          variant="outline"
          marginTop=".3rem"
          width="100%"
          colorScheme="telegram"
          border="1px"
          onClick={(e) => {
            e.preventDefault();
            loginMutation.mutate();
          }}
          className="button block"
          disabled={isLoading}
        >
          <span>Sign in</span>
        </Button>
      </Box>
    </>
  );
}
