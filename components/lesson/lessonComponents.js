/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  Button,
  Reveal,
  Icon,
  Header,
  Segment
} from 'semantic-ui-react';

const getNavigationParams = (direction) => {
  // Right by default
  let dirTextStr = 'Next Lesson';
  let labelPosStr = 'right';
  let iconClsStr = 'angle right';
  let padding = { left: '2px', right: '0px' };
  let moveDir = 'move right';
  if (direction === 'left') {
    dirTextStr = 'Previous Lesson';
    labelPosStr = 'left';
    iconClsStr = 'angle left';
    padding = { left: '0px', right: '2px' };
    moveDir = 'move';
  }
  return {
    dirText: dirTextStr,
    labelPos: labelPosStr,
    iconCls: iconClsStr,
    pad: padding,
    move: moveDir
  };
};

export const NavigationComp = ({ direction }) => {
  const dirParams = getNavigationParams(direction);
  return (
    <Button
      fluid
      color="red"
      content={dirParams.dirText}
      icon={dirParams.iconCls}
      labelPosition={dirParams.labelPos}
      verticalAlign={dirParams.labelPos}
      style={{ 'padding-top': '2em', 'padding-bottom': '2em' }}
    />
  );
};

export const NavigationCompWithReveal = ({ direction }) => {
  const dirParams = getNavigationParams(direction);
  return (
    <Reveal animated={dirParams.move} instant>
      <Reveal.Content as="Segment" visible>
        <div style={{}}>
          <Icon name={dirParams.iconCls} size="huge" />
        </div>
      </Reveal.Content>
      <Reveal.Content as="Segment" hidden>
        <Button
          fluid
          color="red"
          content={dirParams.dirText}
          icon={dirParams.iconCls}
          labelPosition={dirParams.labelPos}
          verticalAlign={dirParams.labelPos}
          style={{ 'padding-top': '2em', 'padding-bottom': '2em' }}
        />
      </Reveal.Content>
    </Reveal>
  );
};
