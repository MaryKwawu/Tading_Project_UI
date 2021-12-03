import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Heading,
  Container,
  Stack,
} from "@chakra-ui/react";
import React from "react";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container maxWidth="container.sm" mt="100px">
      <Heading my="20px">Login to start Trading</Heading>

      <Stack spacing="30px">
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" type="email" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input id="password" type="password" />
        </FormControl>
      </Stack>

      <Button mt="40px" colorScheme="blue">
        Login
      </Button>

      <Text mt="10px">
        Don't have an account yet? <Link to="/signup">Sign up</Link>
      </Text>
    </Container>
  );
};

export default Login;
