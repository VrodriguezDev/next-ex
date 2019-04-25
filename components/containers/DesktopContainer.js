/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react';
import Link from 'next/link';
import HomepageHeading from '../HomepageHeading';

class DesktopContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // // let hideFixedMenu = () => this.setState({ fixed: false });
  // function hideFixedMenu() {
  //     this.setState({ fixed: false });
  // }
  // let showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;
    const { getWidth } = this.props;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            color="blue"
            textAlign="center"
            style={{ minHeight: 550, padding: '1em 0em' }}
            vertical
          >
            <Menu
              inverted
              fixed={fixed ? 'top' : null}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item active>
                  <Link href="/index" as="a">
                    Home
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/lessons" as="a">
                    Lessons
                  </Link>
                </Menu.Item>
                <Menu.Item as="a">Practice</Menu.Item>
                <Menu.Item as="a">Plans</Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted={fixed} color="blue">
                        Sign in
                  </Button>
                  <Button as="a" inverted={fixed} style={{ marginLeft: '0.5em' }}>
                        Sign up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

export default DesktopContainer;
