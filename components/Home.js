/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="Mr. Toefl"
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as="h2"
      content="Educación en Inglés Especializada"
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button
      color="yellow"
      size="huge"
    >
        Comenzar
      <Icon name="right arrow" />
    </Button>
  </Container>
);

const getWidth = () => {
  const isSSR = typeof window === 'undefined';
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};
/* Heads up!
   * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however,
   it can be implemented easily.
   * It can be more complicated, but you can create really flexible markup.
   */
class DesktopContainer extends React.Component {
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
            style={{ minHeight: 700, padding: '1em 0em' }}
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
                  <Button as="a" inverted={fixed} color="blue" primary={fixed} style={{ marginLeft: '0.5em' }}>
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

class MobileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // handleSidebarHide = () => this.setState({ sidebarOpened: false })

  // handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" active>
              Inicio
          </Menu.Item>
          <Menu.Item as="a">Lecciones</Menu.Item>
          <Menu.Item as="a">Prácticas</Menu.Item>
          <Menu.Item as="a">Planes</Menu.Item>
          <Menu.Item as="a">Ingresa</Menu.Item>
          <Menu.Item as="a">Regístrate</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            color="blue"
            textAlign="center"
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" color="blue">
                      Ingresa
                  </Button>
                  <Button as="a" color="blue" style={{ marginLeft: '0.5em' }}>
                      Regístrate
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: '2em' }}>
                Garantiza tu buen desempeño en el Toefl
            </Header>
            <p style={{ fontSize: '1.33em' }}>
                Texto --- Sábete, Sancho, que no es un hombre más que otro si no hace más que otro.
                Todas estas borrascas que nos suceden son señales de que presto ha de
                serenar el tiempo y han de sucedernos bien las cosas.
            </p>
            <Header as="h3" style={{ fontSize: '2em' }}>
                Obtén planes a tu medida
            </Header>
            <p style={{ fontSize: '1.33em' }}>
                Texto --- Porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que,
                habiendo durado mucho el mal.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image bordered rounded size="large" src="https://browardcollegeblog.com/wp-content/uploads/2015/10/ETS_TOEFL_Authorized_Test_Center.jpg" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button size="huge">Revisa nuestros planes</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Image avatar src="https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg" />
            <Header as="h3" style={{ fontSize: '2em' }}>
                "Obtuve increíbles resultados"
            </Header>
            <p style={{ fontSize: '1.33em' }}>Álvaro Alvarez</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as="h3" style={{ fontSize: '2em' }}>
                "Excelente programa!"
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src="https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg" />
              <b>Ing.</b>
              {' '}
                Marco Marquez
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: '2em' }}>
            Más datos positivos, llamar la atención
        </Header>
        <p style={{ fontSize: '1.33em' }}>
            Texto de descripción --- Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo
            y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue
            que, habiendo durado mucho el mal, el bien está ya cerca.
        </p>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href="#">Más información</a>
        </Divider>
        <Header as="h3" style={{ fontSize: '2em' }}>
            ¿Por qué usar MrToefl?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
            Texto de descripción --- Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo:
            Sábete, Sancho, que no es un hombre más que otro si no hace más que otro.
        </p>
        <Button as="a" size="large">
            Ver los Planes
        </Button>
      </Container>
    </Segment>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Servicios" />
              <List link inverted>
                <List.Item as="a">FAQ</List.Item>
                <List.Item as="a">Contactos</List.Item>
                <List.Item as="a">Acerca del Toefl</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                  Desarrollo
              </Header>
              <p>
                  dev.vrodriguez@gmail.com
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);
export default HomepageLayout;
