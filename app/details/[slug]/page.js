"use client";
import React, { use, useState, useEffect } from "react";
import MainLayout from "@/app/Layout/MainLayout";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

function Blog({ params }) {
  const { slug: value } = use(params);

  const [APIData, setAPIData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  console.log(filterData);

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

  useEffect(() => {
    const filtered = APIData.filter((item) => item.id == value);
    setFilterData(filtered);
  }, [APIData, value]);

  return (
    <MainLayout>
      <Container>
        <Row className="vh-100 align-items-center justify-content-center prodcts_details">
          {filterData.map((item) => (
            <React.Fragment key={item.id}>
              <Col md={5}>
                <img
                  src={`${Giturl}${item.image}`}
                  alt={item.name}
                  className="img-fluid"
                />
              </Col>
              <Col md={7}>
                <h2>{item.name}</h2>
                <h5>Price: ${item.price}</h5>
                <p>Category: {item.listingType}</p>
                <p>Description: {item.discription}</p>
                {item.listingType == "sketeboard" && (
                  <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                    <li>
                      Skateboard Deck: This skateboard has length: 26 and
                      width:6.5. It is made up of fibre that will provide you
                      smooth and attractive rides.
                    </li>
                    <li>
                      Bearings & Wheels: It has high-precision ball bearings and
                      its wheels are made up of PVC material. Wheel hardness is
                      61mm that will give you smooth and comfortable rides.
                    </li>
                    <li>
                      Attractive designs: This skateboard has different and
                      attractive graphics that will attract you to take a ride.
                      You can also show off to your family and friends its
                      unique graphics.
                    </li>
                    <li>
                      Weight Handling Capacity: It can handle weight upto 75kg.
                      So people of all age can ride this skateboard.
                    </li>
                  </ul>
                )}
                {item.listingType == "clothing" && (
                  <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                    <li>
                      Shirts Fabric:- Soft Rayon || Color :- Multi || Sleeves :-
                      Short Sleeves || Sleeve Styling :- Preppy || Neck :
                      Stylish revere Collar
                    </li>
                    <li>
                      Short Fabric :- Rayon || Short Length:- Above Knee ||
                      Non-Stretch || Type: Night Dress For Man || Package
                      Content:- 1 Shirt * 1 Short Pattern:- Fancy Palm Tree
                      Printed Shirt & Shorts combo || Fit Type:- Regular Fit
                    </li>
                    <li>
                      Occasion:- Night Wear, Beach Wear, Summer Wear, Hangouts,
                      Picnic, Vacation Wear. Great sleep short set, men's pajama
                      shorts set, men's loungewear, men's short pajama set.
                    </li>
                    <li>
                      Size:- Select as per your body requirement, To ensure that
                      our garments fit you well, it is essential that you pick
                      the correct size.
                    </li>
                  </ul>
                )}
                {item.listingType == "shoe" && (
                  <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                    <li>
                      Lightweight & Breathable : Exclusive design and durable
                      materials every step feels light and breezy. Breathable,
                      free-moving fabrics which adjust according to your foot
                      and creates an astoundingly easy-going experience.
                    </li>
                    <li>
                      Non Slip & Shockproof : Great engineering strikes a
                      balance in style, made in the potent design and latest
                      fashion trends. Made for long-term wear, with extra
                      emphasis on providing cushion to the feet, removing heel
                      strain.
                    </li>
                    <li>
                      Comfort Sole & Flexible Walk : The outsoles are made by an
                      air cushion, doubling the effect of shock absorption.
                      Besides, these shoes perform excellent in durability and
                      are also slip resistant. It provides push cushioning
                      comfort for foot pain relief and helps relieve pressure
                      while conforming to your every step
                    </li>
                  </ul>
                )}
                {item.listingType == "headphone" && (
                  <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                    <li>
                      REBUILT FOR COMFORT — AirPods 4 have been redesigned for
                      exceptional all-day comfort and greater stability. With a
                      refined contour, shorter stem and quick-press controls for
                      music or calls. PERSONALISED SPATIAL AUDIO — Personalised
                      Spatial Audio with dynamic head tracking places sound all
                      around you, creating a theatre-like listening experience
                      for music, TV shows, movies, games and more.
                    </li>
                    <li>
                      IMPROVED SOUND AND CALL QUALITY — AirPods 4 feature the
                      Apple-designed H2 chip. Voice Isolation improves the
                      quality of phone calls in loud conditions. Using advanced
                      computational audio, it reduces background noise while
                      isolating and clarifying the sound of your voice for
                      whoever you’re speaking to.
                    </li>
                    <li>
                      LONG BATTERY LIFE — Get up to 5 hours of listening time on
                      a single charge. And get up to 30 hours of total listening
                      time using the case. REDESIGNED CASE — The Charging Case
                      comes with USB-C charging capabilities and is more than
                      10% smaller by volume than the previous generation.*
                    </li>
                  </ul>
                )}
                {item.listingType == "mobile" && (
                  <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                    <li>
                      POWERHOUSE A16 BIONIC CHIP — The superfast chip powers
                      advanced features like computational photography, fluid
                      Dynamic Island transitions, and Voice Isolation for phone
                      calls. And A16 Bionic is incredibly efficient to help
                      deliver great all-day battery life.
                    </li>
                    <li>
                      NEXT-GENERATION PORTRAITS — Capture portraits with
                      dramatically more detail and color. Just tap to shift the
                      focus between subjects — even after you take the shot.
                    </li>
                    <li>
                      POWERHOUSE A16 BIONIC CHIP — The superfast chip powers
                      advanced features like computational photography, fluid
                      Dynamic Island transitions, and Voice Isolation for phone
                      calls. And A16 Bionic is incredibly efficient to help
                      deliver great all-day battery life.
                    </li>
                  </ul>
                )}
              </Col>
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </MainLayout>
  );
}

export default Blog;
