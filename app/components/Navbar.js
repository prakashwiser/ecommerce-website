"use client";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Searchbar from "./Searchbar";
import { FiShoppingCart } from "react-icons/fi";
import { TbSkateboard } from "react-icons/tb";
import Link from "next/link";
function DropdownContent({ items }) {
  return (
    <div className="d-flex">
      {items.map((section, index) => (
        <div key={index} className="me-3">
          {section.map((item, idx) => (
            <NavDropdown.Item
              href={item.href}
              key={idx}
              className="nav-dropdown-item"
            >
              <div>{item.title}</div>
              <p>{item.description}</p>
            </NavDropdown.Item>
          ))}
          {index < items.length - 1 && (
            <NavDropdown.Divider className="nav-dropdown-divider" />
          )}
        </div>
      ))}
    </div>
  );
}

function Navbars() {
  const dropdownItems = [
    [
      {
        href: "#action3",
        title: "Products",
        description: "All the products we have to offer",
      },
      {
        href: "#action4",
        title: "About Us",
        description: "Learn more about us",
      },
    ],
    [
      {
        href: "#action5",
        title: "Create Store",
        description: "Start selling products",
      },
    ],
  ];

  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar sticky-top">
      <Container>
        <Navbar.Brand className="fw600 d-flex gap-2" href="#">
          <span>
            <TbSkateboard />
          </span>
          Skaters
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <DropdownContent items={dropdownItems} />
            </NavDropdown>
          </Nav>
          <Form className="d-flex align-items-center gap-3">
            <Searchbar />
            <FiShoppingCart />
            <Link
              href="./signin"
              className="btn rounded-pill bg_green text-white"
            >
              Sign in
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
