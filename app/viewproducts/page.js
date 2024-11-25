import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Table } from "semantic-ui-react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
const ViewProducts = () => {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    GetData();
  }, []);

  const GetData = () => {
    axios
      .get(`https://67446e69b4e2e04abea22dd9.mockapi.io/wiser-products`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };
  const handleDelete = (id) => {
    axios
      .delete(
        `https://67446e69b4e2e04abea22dd9.mockapi.io/wiser-products/${id}`
      )
      .then(() => {
        getData();
      });
  };
  console.log(APIData);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "grey",
          padding: "10px",
        }}
      >
        <div>Product Page</div>
        <Link className="btn btn-success" href="AddProducts">
          Add New Products
        </Link>
      </div>
      <div className="container">
        <div>
          {APIData.length !== 0 ? (
            <Table singleLine>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>S.No</Table.HeaderCell>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Price</Table.HeaderCell>
                  <Table.HeaderCell>Description</Table.HeaderCell>
                  <Table.HeaderCell>Image</Table.HeaderCell>
                  <Table.HeaderCell>Category</Table.HeaderCell>
                  <Table.HeaderCell>Delete</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {APIData.map((data, index) => {
                  return (
                    <Table.Row>
                      <Table.Cell>{index + 1}</Table.Cell>
                      <Table.Cell>{data.name}</Table.Cell>
                      <Table.Cell>{data.price}</Table.Cell>
                      <Table.Cell>{data.description}</Table.Cell>
                      <Table.Cell>
                        <img
                          style={{ width: "60px" }}
                          src={
                            "https://raw.githubusercontent.com/prakashwiser/assets/main/crackers_wiser/" +
                            data.image
                          }
                          alt="images"
                        />
                      </Table.Cell>
                      <Table.Cell>{data.listingType}</Table.Cell>
                      <Table.Cell>
                        <Button
                          className="ui red button"
                          onClick={() => handleDelete(data.id)}
                        >
                          Delete
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          ) : (
            <>No data</>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewProducts;
