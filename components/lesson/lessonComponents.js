/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  Button,
  Reveal,
  Icon,
  Card,
  Image
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

export const LessonNavigationButton = ({ dirParams }) => (
  <Button
    fluid
    color="red"
    content={dirParams.dirText}
    icon={dirParams.icon}
    labelPosition={dirParams.labelPos}
    style={{ paddingTop: '1.8em', paddingBottom: '1.8em' }}
  />
);

export const LessonNavReveal = ({ direction }) => {
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
        <LessonNavigationButton dirParams={dirParams} />
      </Reveal.Content>
    </Reveal>
  );
};
