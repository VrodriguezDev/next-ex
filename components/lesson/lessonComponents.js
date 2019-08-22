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
  Container,
  Menu,
  Dropdown
} from 'semantic-ui-react';

const getNavigationParams = (direction) => {
  // Right by default
  let dirText = 'Next Lesson';
  let labelPos = 'right';
  let icon = 'angle right';
  let iconMargin = { paddingRight: '0.5em' };
  let moveDir = 'move right';
  if (direction === 'left') {
    dirText = 'Previous Lesson';
    labelPos = 'left';
    icon = 'angle left';
    iconMargin = { paddingRight: '0.5em' };
    moveDir = 'move';
  }
  const res = {};
  res.dirText = dirText;
  res.labelPos = labelPos;
  res.icon = icon;
  res.iconMargin = iconMargin;
  res.moveDir = moveDir;
  return res;
};

export const LessonNavigationButton = ({ dirParams, navFunc }) => (
  <Button
    fluid
    color="black"
    icon
    labelPosition={dirParams.labelPos}
    attached={dirParams.labelPos}
    onClick={navFunc}
    style={{ paddingTop: '1em', paddingBottom: '1em' }}
  >
    {dirParams.dirText}
    <Icon name={dirParams.icon} style={dirParams.iconMargin} />
  </Button>
);

const options = [
  {
    key: 'home',
    value: 'home',
    content:
  <Header as="h4">
    <Icon name="home" />
    <Header.Content>Home</Header.Content>
  </Header>
  }
];

export const LessonMenuButton = () => (
  <Button.Group color="black">
    <Dropdown
      className="button icon"
      icon={<Icon fluid inverted bordered name="list ul" />}
      options={options}
      trigger={<React.Fragment />}
    />
  </Button.Group>
  // <Dropdown icon={<Icon fluid inverted bordered name="list ul" />}>
  //   <Dropdown.Menu>
  //     <Dropdown.Item text={<Header as="h4" icon="home" content="Home" />} />
  //   </Dropdown.Menu>
  // </Dropdown>
);

export const RegularLessonNav = ({ direction, navFunc }) => {
  const dirParams = getNavigationParams(direction);
  return (
    <Card>
      <Button fluid onClick={navFunc} style={{ backgroundColor: '#1b1c1d' }}>
        <Icon fluid inverted bordered name={dirParams.icon} size="big" style={{ marginLeft: '1em' }} />
      </Button>
    </Card>
  );
};

export const LessonNavReveal = ({ direction, navFunc }) => {
  const dirParams = getNavigationParams(direction);
  return (
    <Reveal animated={dirParams.moveDir} style={{ borderRadius: 5 }}>
      <Reveal.Content visible>
        <Card>
          <Image fluid style={{ backgroundColor: '#1b1c1d' }}>
            <Icon fluid inverted bordered name={dirParams.icon} size="big" style={{ marginLeft: '1em' }} />
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
  <Tab menu={{ secondary: true, pointing: true }} panes={lesson.panes} style={{ paddingLeft: '5em', paddingRight: '5em' }} />
);

const LessonTabPane = props => (
  // eslint-disable-next-line react/destructuring-assignment
  <Tab.Pane style={{ border: 0 }}>{props.children}</Tab.Pane>
);

const TextLessonTabPane = ({ content }) => (
  <LessonTabPane>{content}</LessonTabPane>
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
        <Tab.Pane>Tab Content</Tab.Pane>
      );
  }
};
