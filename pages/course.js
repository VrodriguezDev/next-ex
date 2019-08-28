/* eslint-disable react/no-multi-comp */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  Container,
  Header,
  Accordion,
  Icon
} from 'semantic-ui-react';
import ResponsiveContainer from '../components/containers/ResponsiveContainer';

const lessonsArray = [
  {
    key: 'lessonOne',
    title: 'Lesson One',
    content: 'Lesson One overview and description',
    subLesson: ''
  },
  {
    key: 'lessonTwo',
    title: 'Lesson Two',
    content: 'Lesson Two overview and description',
    subLesson: ''
  },
  {
    key: 'lessonThree',
    title: 'Lesson Three',
    content: 'Lesson Three overview and description',
    subLesson: ''
  }
];

const LessonComp = ({ lesson, activeLessonKey, updateActiveKeyFunc }) => (
  <div>
    <Accordion.Title active={lesson.key === activeLessonKey} onClick={() => updateActiveKeyFunc(lesson.key)}>
      <Icon name="dropdown" />
      {lesson.title}
    </Accordion.Title>
    <Accordion.Content active={lesson.key === activeLessonKey}>
      <p>{lesson.content}</p>
    </Accordion.Content>
  </div>
);

const generateLessons = (lessons, activeLessonKey, handleClickFunc) => {
  const lessonComps = [];
  lessons.forEach((lesson) => {
    lessonComps.push(
      <LessonComp lesson={lesson} activeLessonKey={activeLessonKey} updateActiveKeyFunc={handleClickFunc} />
    );
  });
  return (
    <div>
      {lessonComps}
    </div>
  );
};

class LessonsList extends Component {
  constructor(props) {
    super(props);
    this.state = { activeLessonKey: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    const { lessons } = this.props;
    this.setActiveLesson(lessons);
  }

  setActiveLesson(lessons) {
    lessons.forEach((l) => {
      if (l.active) {
        this.setState({ activeLessonKey: l.key });
      }
    });
  }

  handleClick(lessonKey) {
    const { activeLessonKey } = this.state;
    const newLessonKey = activeLessonKey === lessonKey ? -1 : lessonKey;

    this.setState({ activeLessonKey: newLessonKey });
  }

  render() {
    const { lessons } = this.props;
    const { activeLessonKey } = this.state;
    return (
      <Accordion styled fluid>
        {generateLessons(lessons, activeLessonKey, this.handleClick)}
      </Accordion>
    );
  }
}

export default function Course() {
  return (
    <ResponsiveContainer renderHeading={false}>
      <Container style={{ paddingTop: '1em' }}>
        <Header as="h2" floating inverted attached="top">Course Overview</Header>
        <LessonsList lessons={lessonsArray} />
      </Container>
    </ResponsiveContainer>
  );
}
