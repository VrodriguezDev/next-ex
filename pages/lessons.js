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
  Grid
} from 'semantic-ui-react';
import ResponsiveContainer from '../components/containers/ResponsiveContainer';
import { LessonNavReveal } from '../components/lesson/lessonComponents';

const lesson1 = {
  title: 'Mrtoefl Lesson One',
  description: 'In this lesson you will learn the basics'
};

const Lesson = ({ lessonContent }) => (
  <Container>
    <Segment vertical>
      <Segment vertical padded>
        <Grid container columns={3}>
          <Grid.Row stretched>
            <Grid.Column width={3} stretched>
              <LessonNavReveal direction="left" />
            </Grid.Column>
            <Grid.Column width={10} inverted color="red" verticalAlign="middle" style={{ 'border-radius': '5px' }}>
              <Header inverted as="h2">
                <b>{lessonContent.title}</b>
                <Header.Subheader>{lessonContent.description}</Header.Subheader>
              </Header>
            </Grid.Column>
            <Grid.Column width={3} stretched>
              <LessonNavReveal direction="right" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
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
  </Container>
);

export default function Lessons() {
  return (
    <ResponsiveContainer renderHeading={false}>
      <Lesson lessonContent={lesson1} />
    </ResponsiveContainer>
  );
}
