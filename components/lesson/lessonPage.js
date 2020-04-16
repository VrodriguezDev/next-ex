import React, { useEffect, useState } from 'react';
import {
  Container,
  Header,
  Segment,
  Grid
} from 'semantic-ui-react';
import ResponsiveContainer from '../../components/containers/ResponsiveContainer';
import {
  RegularLessonNav,
  LessonMenuButton
} from './lessonComponents';
import { useLesson } from '../../lib/hooks';

const textTabMenuItem = value => ({ key: value, icon: 'file text', content: value });

const videoTabMenuItem = value => ({ key: value, icon: 'film', content: value });

const emptyLesson = {
  lessonId: 9999,
  title: "Emtpy title",
  description: "Empty description",

};

const LessonPage = ({ lessonId }) => {
  console.log("lessonId from route: " + lessonId);
  const [lessonData, { mutate }] = useLesson(lessonId);
  const [lesson, setLesson] = useState(emptyLesson);

  useEffect(()=>{
    if(lessonData) {
      console.log("loading lesson...");
      setLesson(lessonData);
      console.log("Got lesson: ");
      console.log(lesson);
    }
  }, [lessonData]);
  return(
    <LessonContent lesson={lesson}/>
  );
}

const LessonContent = ({ lesson }) => {
  const nextLesson = () => {}
  const prevLesson = () => {}
  return (
    <Container style={{ paddingTop: '1em' }}>
      <Segment.Group raised>
        <Segment vertical padded secondary>
          <Grid container columns={3}>
            <Grid.Row stretched>
              <Grid.Column width={1} style={{ paddingRight: 0 }}>
                <LessonMenuButton />
              </Grid.Column>
              <Grid.Column width={2}>
                <RegularLessonNav direction="left" navFunc={prevLesson} />
              </Grid.Column>
              <Grid.Column width={11} inverted color="red" verticalAlign="middle" style={{ borderRadius: 5 }}>
                <Header inverted as="h2">
                  <b>{lesson.title}</b>
                  <Header.Subheader>{lesson.description}</Header.Subheader>
                </Header>
              </Grid.Column>
              <Grid.Column width={2}>
                <RegularLessonNav direction="right" navFunc={nextLesson} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment vertical secondary style={{ border: 0 }}>
          {/* <LessonTabs lesson={lesson} /> */}
        </Segment>
      </Segment.Group>
    </Container>
  );
}
  
const Lesson = ({lessonId}) => (
  <ResponsiveContainer renderHeading={false}>
    <LessonPage lessonId={lessonId} />
  </ResponsiveContainer>
);

export default Lesson;
