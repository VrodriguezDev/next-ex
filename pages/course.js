/* eslint-disable react/prop-types */
import React from 'react';
import {
  Container,
  Header,
  Accordion
} from 'semantic-ui-react';
import ResponsiveContainer from '../components/containers/ResponsiveContainer';

const SubListForDisplay = () => (
  <div></div>
);

const lessons = [
  {
    key: 'lessonOne',
    title: 'Lesson One',
    content: 'Lesson One overview and description',
    sublist: SubListForDisplay()
  }
];

const lessonPanels = [
  { key: 'panel-1', title: 'Level 1', content: { content: LessonItemContent(lesson.content, lesson.sublist) } },
  { key: 'panel-2', title: 'Level 2', content: { content: Level2Content } },
]

const LessonItemContent = ({ lessonContent, lessonSublist }) => (
  <div>
    {lessonContent}
    <Accordion.Accordion panels={lessonSublist} />
  </div>
);

const LessonsList = () => (
  <Accordion defaultActiveIndex={0} panels={lessonPanels} styled />
);

export default function Course() {
  return (
    <ResponsiveContainer renderHeading={false}>
      <Container style={{ paddingTop: '1em' }}>
        <Header as="h2" floating inverted attached="top">Course Overview</Header>
        <LessonsList />
      </Container>
    </ResponsiveContainer>
  );
}
