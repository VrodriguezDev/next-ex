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
                <Menu.Item as="a" active>
                      Inicio
                </Menu.Item>
                <Menu.Item as="a">Lecciones</Menu.Item>
                <Menu.Item as="a">Prácticas</Menu.Item>
                <Menu.Item as="a">Planes</Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted={fixed} color="blue">
                        Ingresa
                  </Button>
                  <Button as="a" inverted={fixed} style={{ marginLeft: '0.5em' }}>
                        Regístrate
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
