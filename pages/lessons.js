/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
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
  Grid,
  Reveal,
  Icon,
  Button
} from 'semantic-ui-react';
import ResponsiveContainer from '../components/containers/ResponsiveContainer';
import { NavigationComp, NavigationCompWithReveal } from '../components/lesson/lessonComponents';

const lesson1 = {
  title: 'Mrtoefl Lesson One',
  description: 'In this lesson you will learn the basics'
};

const NavReveal = ({ direction }) => {
  const move = direction === 'left' ? 'move' : 'move right';
  return (
    <Reveal animated={move} instant>
      <Reveal.Content as="Segment" visible>
        <Container fluid textAlign="center">
          <Icon inverted bordered color="white" name="angle right" size="big" />
        </Container>
      </Reveal.Content>
      <Reveal.Content as="Segment" hidden>
        <NavigationComp direction={direction} />
      </Reveal.Content>
    </Reveal>
  );
};

const Lesson = ({ lessonContent }) => (
  <Container>
    <Segment vertical>
      <div>
        <Segment vertical padded>
          <Grid container columns={3}>
            <Grid.Row stretched>
              <Grid.Column width={3} stretched style={{ 'padding-right': '2px' }}>
                <NavReveal direction="left" />
              </Grid.Column>
              <Grid.Column width={10} inverted color="red" verticalAlign="middle" style={{ 'border-radius': '5px' }}>
                <Header inverted as="h2">
                  <b>{lessonContent.title}</b>
                  <Header.Subheader>{lessonContent.description}</Header.Subheader>
                </Header>
              </Grid.Column>
              <Grid.Column width={3} stretched style={{ 'padding-right': '0px', 'padding-left': '2px' }}>
                <NavReveal direction="right" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
      <Container text>
        <Segment secondary padded>
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

export default function Lessons() {
  return (
    <ResponsiveContainer renderHeading={false}>
      <Lesson lessonContent={lesson1} />
    </ResponsiveContainer>
  );
}
