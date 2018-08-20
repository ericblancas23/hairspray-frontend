import React, { Component } from "react";
// import { Button, Grid, Row, Col, Image } from "react-bootstrap";
import Header from "./Header";
import { Link } from "react-router-dom";
import { getAllStylists } from "../actions";
import { connect } from "react-redux";
import LazyHero from 'react-lazy-hero';


import { UncontrolledCarousel, Button } from "reactstrap";

class LandPage extends Component {
  constructor(props) {
    super(props);
    super(props);
    this.stylists = [];
  }

  componentDidMount() {
    this.props.getAllStylists();
  }

  render() {
    if (this.props.gettingStylists) {
    } else {
      this.props.stylists.forEach((stylist, i) => {
        this.stylists.push({
          src: stylist.image
        });
      });
    }
    return (
      <div className="landing-page">

        <div className="main">
        <div >
          <Header />
        </div>
        <center>
        <LazyHero 
          imageSrc="http://nebula.wsimg.com/b4adf88019b6ce878f4a0f548e153091?AccessKeyId=1AEB153493F70C64C02E&disposition=0&alloworigin=1"
          parallaxOffset={150}
          style={{height: "600px"}}
          color="brown"
          opacity={0.2}
        >
        </LazyHero>
        </center>
        </div>
        
        <div className="About">

        <center>
        {this.props.gettingStylists ? null : (
          <UncontrolledCarousel
            className="landing__carousel"
            items={this.stylists}
          />
        )}
        </center>
          <p style={{ marginTop: "2cm" }}>We at hairspray provide top quality customer service and presentable haircuts to please customer needs</p>
          <center>
        <Link to="/signin">
          <Button className="landing__button">Schedule Now!</Button>
        </Link>
        </center>
        </div>


      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gettingStylists: state.stylist.gettingStylists,
    stylists: state.stylist.stylists
  };
};

export default connect(
  mapStateToProps,
  {
    getAllStylists
  }
)(LandPage);
