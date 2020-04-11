/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect }  from 'react';
import Router from 'next/router';
import { useUser } from '../lib/hooks';
import {
  Message,
  Header,
  Segment,
  Form,
  Button,
  Grid,
  Image
} from 'semantic-ui-react';

const SignUpLayout = () => {
  const [user, { mutate }] = useUser();
  const [, setErrorMsg] = useState('');

  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) Router.replace('/');
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handling submit");
    const body = {
      email: e.currentTarget.email.value,
      name: e.currentTarget.name.value,
      password: e.currentTarget.password.value,
    };
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.status === 201) {
      const userObj = await res.json();
      // writing our user object to the state
      console.log("overwriting user...");
      console.log("userObj");
      mutate(userObj);
    } else {
      setErrorMsg(await res.text());
    }
  };

  return (
  <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="blue" textAlign="center">
        <Image src="../img/logo-med.png" style={{ padding: '5px' }} /> Create an account
      </Header>
      <Form size="large" onSubmit={handleSubmit}>
        <Segment stacked>
          <Form.Input id="email" fluid icon="user" iconPosition="left" placeholder="E-mail address" />
          <Form.Input id="name" fluid placeholder="First name" />
          <Form.Input id="password" fluid placeholder="Last name" />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />
          {/* <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Confirm password"
            type="password"
          /> */}
          <Button type="submit" color="red" fluid size="large">Sign Up</Button>
        </Segment>
      </Form>
      <Message>
        Already have an account?
        <a href="/signin"> Sign In</a>
      </Message>
    </Grid.Column>
  </Grid>
  );
}

export default function SignUp() {
  return (
    <SignUpLayout />
  );
}
