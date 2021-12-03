import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/react";
import React from "react";
import { Container } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Input } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";

const SignUp = () => {
  return (
    <Container maxWidth="container.sm" mt="100px">
      <Heading my="20px">Register to start Trading</Heading>

      <Stack spacing="30px">
        <FormControl>
          <FormLabel htmlFor="firstName">First Name</FormLabel>
          <Input id="firstName" type="FirstName" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="lastName">Last Name</FormLabel>
          <Input id="lastName" type="lastName" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="dob">Date Of Birth</FormLabel>
          <Input id="dob" type="dob" Input />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" type="email" />
        </FormControl>
        <FormControl>
          <FormControl htmlFor="password">Password</FormControl>
          <Input id="password" type="String" />
        </FormControl>
      </Stack>

      <Button mt="40px" colorScheme="blue">
        Register
      </Button>

      <Text mt="10px">
        Don't have an account yet? <Link to="/signup">Sign up</Link>
      </Text>
    </Container>
  );
};

export default SignUp;
