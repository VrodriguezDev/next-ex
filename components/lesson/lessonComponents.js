/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  Button,
  Reveal,
  Icon,
  Card,
  Image,
  Tab,
  Segment,
  Header,
  Embed,
  Form,
  TextArea,
  Container
} from 'semantic-ui-react';

const getNavigationParams = (direction) => {
  // Right by default
  let dirText = 'Next Lesson';
  let labelPos = 'right';
  let icon = 'angle right';
  let margin = { 'margin-left': '2em' };
  let moveDir = 'move right';
  if (direction === 'left') {
    dirText = 'Previous Lesson';
    labelPos = 'left';
    icon = 'angle left';
    margin = { 'margin-left': '2em' };
    moveDir = 'move';
  }
  const res = {};
  res.dirText = dirText;
  res.labelPos = labelPos;
  res.icon = icon;
  res.margin = margin;
  res.moveDir = moveDir;
  return res;
};

export const LessonNavigationButton = ({ dirParams, navFunc }) => (
  <Button
    fluid
    color="red"
    content={dirParams.dirText}
    icon={dirParams.icon}
    labelPosition={dirParams.labelPos}
    style={{ paddingTop: '1.8em', paddingBottom: '1.8em' }}
    onClick={navFunc}
  />
);

export const LessonNavReveal = ({ direction, navFunc }) => {
  const dirParams = getNavigationParams(direction);
  return (
    <Reveal animated={dirParams.moveDir} style={{ 'border-radius': '5px' }}>
      <Reveal.Content visible>
        <Card>
          <Image fluid centered style={{ 'background-color': '#1b1c1d!important' }}>
            <Icon fluid inverted bordered name={dirParams.icon} size="big" style={dirParams.margin} />
          </Image>
        </Card>
      </Reveal.Content>
      <Reveal.Content hidden>
        <LessonNavigationButton dirParams={dirParams} navFunc={navFunc} />
      </Reveal.Content>
    </Reveal>
  );
};

export const LessonTabs = ({ lesson }) => (
  <Tab menu={{ secondary: true, pointing: true }} panes={lesson.panes} />
);

const LessonTabPane = props => (
  // eslint-disable-next-line react/destructuring-assignment
  <Tab.Pane attached="false" style={{ border: '0' }}>{props.children}</Tab.Pane>
);

const TextLessonTabPane = ({ content }) => (
  <LessonTabPane style={{ height: '600px' }}>{content}</LessonTabPane>
);

const VideoLessonTabPane = ({ content }) => (
  <LessonTabPane>
    <Container text>
      <Segment vertical padded>
        <Header as="h2">
          {content.title}
          <Header.Subheader>Pay attention to the video and take notes if you want</Header.Subheader>
        </Header>
        <Embed id={content.videoId} placeholder="../../static/img/logo-med.png" source="vimeo" defaultActive="true" />
      </Segment>
      <Segment vertical>
        <Header as="h2">Notes</Header>
        <Form>
          <TextArea placeholder="Take your notes here" style={{ minHeight: 150 }} />
        </Form>
      </Segment>
    </Container>
  </LessonTabPane>
);

export const LessonTab = ({ tabType, content }) => {
  switch (tabType) {
    case 'text':
      return (
        <TextLessonTabPane content={content} />
      );
    case 'video':
      return (
        <VideoLessonTabPane content={content} />
      );
    default:
      return (
        <Tab.Pane attached="false">Tab Content</Tab.Pane>
      );
  }
};
