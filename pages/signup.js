/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import {
  Message,
  Header,
  Segment,
  Form,
  Button,
  Grid,
  Image
} from 'semantic-ui-react';

const SignUpLayout = () => (
  <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="blue" textAlign="center">
        <Image src="../static/img/logo-small.png" style={{ padding: '5px' }} /> Create an account
      </Header>
      <Form size="large">
        <Segment stacked>
          <Form.Input fluid icon="user" iconPosition="left" placeholder="E-mail address" />
          <Form.Input fluid placeholder="First name" />
          <Form.Input fluid placeholder="Last name" />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Confirm password"
            type="password"
          />
          <Button color="red" fluid size="large">Login</Button>
        </Segment>
      </Form>
      <Message>
        Already have an account?
        <a href="/signin"> Sign In</a>
      </Message>
    </Grid.Column>
  </Grid>
);

export default function SignUp() {
  return (
    <SignUpLayout />
  );
}