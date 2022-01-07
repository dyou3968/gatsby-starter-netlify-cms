import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FadeIn from "react-fade-in";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import { Helmet } from "react-helmet";
import BTGCover from "../../images/btg-cover.png";

class Alumni extends React.Component {
  render() {

    return (
      <FadeIn>
        <Navigation />

        <Helmet>
          <title>Contact | CMUBTG</title>
        < meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:image" content={BTGCover}></meta>
      </Helmet>

        <Container className="mt-md-1 pt-md-4">
        <Row className="pt-1 mt-5">
          <Col>
            <h1 className="display-3 text-black font-weight-boldest">Contact</h1>
          </Col>
        </Row>
      </Container>

        <Footer />
      </FadeIn>
      
    );
  }
}

export default Alumni