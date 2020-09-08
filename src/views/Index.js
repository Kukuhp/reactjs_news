import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import "assets/css/centerdiv.css";

// sections for this page
import Images from "./index-sections/Images.js";
import BasicElements from "./index-sections/BasicElements.js";
import Navbars from "./index-sections/Navbars.js";
import Tabs from "./index-sections/Tabs.js";
import Pagination from "./index-sections/Pagination.js";
import Notifications from "./index-sections/Notifications.js";
import Typography from "./index-sections/Typography.js";
import Javascript from "./index-sections/Javascript.js";
import NucleoIcons from "./index-sections/NucleoIcons.js";
import CompleteExamples from "./index-sections/CompleteExamples.js";
import SignUp from "./index-sections/SignUp.js";
import Examples from "./index-sections/Examples.js";
import Download from "./index-sections/Download.js";
import CarouselSection from "./index-sections/CarouselSelection.js";
import LatestPost from "./index-sections/LatestPost.js";
import { Container, Row, Col } from 'reactstrap';
import Badge from "./index-sections/Badge.js";
import { blue, black } from "color-name";
import TopNews from "./index-sections/TopNews.js";
import SlickSlider from "./index-sections/SlickSlider.js";
import { HomeWrapper } from "style.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
    <Container>
      <IndexNavbar />
      <div>
      <Row>
      <Col lg="4">
              <Badge judul = "Top Sports"/>
              <LatestPost />
            </Col>
            <Col lg="8">
            <CarouselSection />
            </Col>
          </Row>
        

          <div className = "paddingTop">
          <Badge judul = "Top News"/>
          <Row className = "paddingTop">
          <Col lg = "3">
          <Badge judul = "Technology"/>
          <TopNews view = "technology"/>
            </Col>
            
            <Col lg = "3">
            <Badge judul = "Science"/>
            <TopNews view = "science"/>
            </Col >
            <Col lg = "3">
            <Badge judul = "Health"/>
            <TopNews view = "health"/>
            </Col>
            <Col lg = "3">
            <Badge judul = "Entertainment"/>
            <TopNews view = "entertainment"/>
            </Col>
          </Row>
          </div>
          
          <div className = "paddingTop">
          <Badge judul = "Now Playing Film"/>
          <HomeWrapper className = "paddingTop">
          <SlickSlider/>
          </HomeWrapper>
          </div>
          <div className="main">
          </div>
        <DefaultFooter className = "paddingTop"/>
      </div>
      </Container>
    </>
  );
}

export default Index;
