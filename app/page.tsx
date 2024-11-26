"use client"
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaArrowRight } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import axios from "axios";
import MainLayouts from "./Layout/MainLayout";
import { useRouter } from "next/navigation";
export default function Home() {
  const [APIData, setAPIData] = useState([]);
  const [showAllProducts, setShowAllProducts] = useState(false); 
  const router = useRouter();
  const Giturl =
    "https://raw.githubusercontent.com/prakashwiser/ecommerce-website/refs/heads/main/app/assets/images/";

  useEffect(() => {
    const GetData = async () => {
      try {
        const response = await axios.get(
          `https://67446e69b4e2e04abea22dd9.mockapi.io/wiser-products`
        );
        setAPIData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    GetData();
  }, []);

  const handleViewAll = () => {
    setShowAllProducts(true); 
  };
  const displayedProducts = showAllProducts ? APIData : APIData.slice(0, 8); 
  const handleclcik = (id) => {
    router.push(`/details/${id}`);
  };
  return (
    <MainLayouts>
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
              {displayedProducts.map((items, index) => (
                <Col md={6} lg={3} key={index} className="mb-3">
                  <Card
                    className="shadow"
                    onClick={() => handleclcik(items.id)}
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "box-shadow 0.3s ease",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={Giturl + items.image}
                      alt={items.name}
                      className="img_details"
                    />
                    <Card.Body style={{ flexGrow: 1 }}>
                      <Card.Title>{items.name}</Card.Title>
                      <Card.Text
                        style={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 3,
                        }}
                      >
                        {items.discription ? items.discription : ""}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer
                      className="border-0 d-flex justify-content-between align-items-center"
                      style={{ backgroundColor: "#fff" }}
                    >
                      <small className="text-muted">{items.price}</small>
                      <small>
                        <PiShoppingCart />
                      </small>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
          {!showAllProducts && (
            <div className="d-flex justify-content-center">
              <button
                className="rounded-pill bg_green py-2 px-3 text-white border-0"
                onClick={handleViewAll}
              >
                View all products
                <FaArrowRight className="ms-2" />
              </button>
            </div>
          )}
        </div>
      </Container>
    </MainLayouts>
  );
}
