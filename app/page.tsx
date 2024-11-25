"use client";
import { Container, Row, Col } from "react-bootstrap";
import MainLayouts from "./Layout/MainLayout";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "./components/Image";
import homebBanner from "./assets/images/home-banner.webp";
import MainLayout from "./Layout/MainLayout";
import { TbSkateboard } from "react-icons/tb";
import { PiTShirtDuotone, PiShoppingCart } from "react-icons/pi";
import { GiConverseShoe, GiHeadphones } from "react-icons/gi";
import Card from "react-bootstrap/Card";
export default function Home() {
  return (
    <>
      <MainLayouts>
        <div className="home_sec_one mb-5 postion-relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="position_tybe"
          >
            <path
              fill="#10b981"
              fillOpacity="1"
              d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,122.7C672,96,768,96,864,122.7C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
          <div className="ecommerce">
            <Container>
              <Row className=" align-items-center">
                <Col md={7}>
                  <span className=" bg-white  fw600 p-1 rounded px-2">
                    <span>
                      <FaGithub />
                    </span>
                    <span className="ps-2">Start on Github</span>
                  </span>
                  <h1>
                    An open source e-commerce project built by{" "}
                    <span>inifarhan</span>
                  </h1>
                  <p>
                    Buy and sell skateboarding gears from independent brands and
                    stores around the world with ease
                  </p>
                  <div className="d-flex gap-3">
                    <Link
                      className="rounded-pill fw600 bg_green py-2 px-3 text-white"
                      href="#"
                    >
                      Buy Now
                    </Link>
                    <Link
                      className="rounded-pill fw600  py-2 px-3 border boder-gray"
                      href="#"
                    >
                      Sell Now
                    </Link>
                  </div>
                </Col>
                <Col md={5}>
                  <Image
                    link={homebBanner}
                    styles="img-fluid rounded-pill"
                    alt="home-banner-img"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </MainLayouts>
      <MainLayout>
        <div className="home_sec_two ">
          <Container>
            <h2 className="primary_color">Featured Categories</h2>
            <ul className="d-lg-flex justify-content-between ">
              <li>
                <p>
                  Find the best skateboarding gears from stores around the world
                </p>
              </li>
              <li>
                Shop the Collection <FaArrowRight className="svg_frist" />
              </li>
            </ul>
            <Row>
              <Col xs={6} md={3}>
                <div className="shadow p-4 rounded">
                  <TbSkateboard />
                  <h4>Skateboards</h4>
                  <span>14 products</span>
                </div>
              </Col>
              <Col xs={6} md={3}>
                <div className="shadow p-4 rounded">
                  <PiTShirtDuotone />
                  <h4>Clothing</h4>
                  <span>41 products</span>
                </div>
              </Col>{" "}
              <Col xs={6} md={3}>
                <div className="shadow p-4 rounded">
                  <GiConverseShoe />
                  <h4>Shoe</h4>
                  <span>23 products</span>
                </div>
              </Col>{" "}
              <Col xs={6} md={3}>
                <div className="shadow p-4 rounded">
                  <GiHeadphones />
                  <h4>Accessories</h4>
                  <span>16 products</span>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </MainLayout>
      <MainLayout>
        <Container>
          <div className="home_sec_three my-5">
            <h2 className="primary_color">Popular Products</h2>
            <ul className="d-lg-flex justify-content-between ">
              <li>
                <p>Explore all products we offer from around the world</p>
              </li>
              <li>
                Shop the Collection <FaArrowRight />
              </li>
            </ul>
            <div>
              <Row>
                <Col md={3}>
                  <Card className="mb-3">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="border-0 d-flex justify-content-between">
                      <small className="text-muted">2,000</small>
                      <small>
                        <PiShoppingCart />
                      </small>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
            </div>
            <div className="d-flex justify-content-center">
              <Link
                className="rounded-pill  bg_green py-2 px-3 text-white"
                href="#"
              >
                View all products
                <FaArrowRight className="ms-2"/>
              </Link>
            </div>
          </div>
        </Container>
      </MainLayout>
    </>
  );
}
