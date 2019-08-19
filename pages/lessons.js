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
  Grid
} from 'semantic-ui-react';
import ResponsiveContainer from '../components/containers/ResponsiveContainer';
import { LessonNavReveal, LessonTabs, LessonTab } from '../components/lesson/lessonComponents';

const textTabMenuItem = value => (
  {
    key: value,
    icon: 'file text',
    content: value
  }
);

const videoTabMenuItem = value => (
  {
    key: value,
    icon: 'film',
    content: value
  }
);

const lesson1Text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nasceturridiculus mus.';

const lesson1 = {
  title: 'Lesson One',
  description: 'In this lesson you will learn the basics',
  panes: [
    {
      menuItem: textTabMenuItem('Lesson Overview'),
      render: () =>
        <LessonTab tabType="text" content={<Container text style={{ height: '600px' }}><Header as="h2">Lesson 1 Overview</Header><p>{lesson1Text}</p></Container>} />
    },
    {
      menuItem: videoTabMenuItem('Video Lesson'),
      render: () =>
        <LessonTab tabType="video" content={{ title: 'Video Lesson 1:', videoId: '188171839' }} />
    }
  ]
};

const Lesson = ({ lessonContent }) => (
  <Container style={{ paddingTop: '1em' }}>
    <Segment.Group raised>
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
      <Segment vertical style={{ border: '0' }}>
        <LessonTabs lesson={lessonContent} />
      </Segment>
    </Segment.Group>
  </Container>
);

export default function Lessons() {
  return (
    <ResponsiveContainer renderHeading={false}>
      <Lesson lessonContent={lesson1} />
    </ResponsiveContainer>
  );
}
