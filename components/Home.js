/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Responsive,
  Segment
} from 'semantic-ui-react';
import DesktopContainer from './containers/DesktopContainer';
import MobileContainer from './containers/MobileContainer';

const getWidth = () => {
  const isSSR = typeof window === 'undefined';
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer getWidth={getWidth}>{children}</DesktopContainer>
    <MobileContainer getWidth={getWidth}>{children}</MobileContainer>
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
            <Image rounded size="large" src="https://browardcollegeblog.com/wp-content/uploads/2015/10/ETS_TOEFL_Authorized_Test_Center.jpg" />
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
            <Image avatar src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png" style={{ fontSize: '2em' }} />
            <p style={{ fontSize: '1.33em' }}>Lorena</p>
            <Header as="h5" style={{ fontSize: '2em' }}>
                "With MisterToefl I have learned a lot for the test. I have increased my score by 8 points"
            </Header>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as="h5" style={{ fontSize: '2em' }}>
                "MisterToefl has plenty of material available. I have improved my score by 5 points"
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src="https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg" />
            </p>
            <p style={{ fontSize: '1.33em' }}>Mark</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em', paddingLeft: '15em', paddingRight: '15em' }}>
            <Header as="h5" style={{ fontSize: '2em' }}>
                "I really like MisterToefl’s TEST PREPARATION MODE. It is so realistic. I have boosted my score by 12 points"
            </Header>
            <Image avatar src="https://png.pngtree.com/svg/20161217/43a873f79c.svg" style={{ fontSize: '2em' }} />
            <p style={{ fontSize: '1.33em' }}>Sergio</p>
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
                <List.Item as="a">Acerca del Toefl</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={6}>
              <Header inverted as="h4" content="Contactos" />
              <List link inverted>
                <List.Item as="a">
                  <b>Correo electrónico:</b>
                  <p>info@mrtoefl.com</p>
                </List.Item>
                <List.Item as="a">
                  <b>Headquarters Cochabamba, Bolivia:</b>
                  <p>+000 000-0000</p>
                </List.Item>
                <List.Item as="a">
                  <b>Headquarters Miami, Florida:</b>
                  <p>+000 000-0000</p>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
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
