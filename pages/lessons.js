/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import {
  Container,
  Header,
  Segment,
  Embed,
  Form,
  TextArea,
  Button,
  Grid
} from 'semantic-ui-react';
import ResponsiveContainer from '../components/containers/ResponsiveContainer';

const LessonLayout = () => (
  <Container>
    <Segment vertical>
      <Segment inverted color="red" padded>
        <Grid columns={2}>
          <Grid.Row fluid>
            <Grid.Column>
              <Header inverted as="h2">
                <b>Lesson 1:</b> Video Example Breakdown
                <Header.Subheader>In this lesson you will learn the basics of lesson one</Header.Subheader>
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Segment floated="right" basic style={{ padding: '0em' }}>
                <Button grey content="Previous Lesson" icon="left arrow" labelPosition="left" attached="left" style={{ padding: '1.5em' }} />
                <Button grey content="Next Lesson" icon="right arrow" labelPosition="right" attached="right" style={{ padding: '1.5em' }} />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Container text>
        <Segment secondary>
          <Header as="h3">Lesson Content</Header>
          <ol>
            <li>Lesson content one</li>
            <li>Lesson content two</li>
            <li>Lesson content listed</li>
            <ul>
              <li>Subcontent one</li>
              <li>Subcontent two</li>
            </ul>
            <li>Lesson content three</li>
          </ol>
        </Segment>
      </Container>
    </Segment>
    <Segment vertical padded>
      <Header as="h2">
        <b>Lesson 1:</b> Video Example
        <Header.Subheader>Pay attention to the video and take notes if you want</Header.Subheader>
      </Header>
      <Embed id="188171839" placeholder="../static/img/logo-med.png" source="vimeo" defaultActive="true" />
    </Segment>
    <Segment vertical>
      <Header as="h2">Notes</Header>
      <Form>
        <TextArea placeholder="Take your notes here" style={{ minHeight: 150 }} />
      </Form>
    </Segment>
  </Container>
);

const Lessons = () => (
  <ResponsiveContainer renderHeading={false}>
    <LessonLayout />
  </ResponsiveContainer>
);

export default Lessons;
