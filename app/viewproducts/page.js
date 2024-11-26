"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Table } from "semantic-ui-react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

const ViewProducts = () => {
  const [APIData, setAPIData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://67446e69b4e2e04abea22dd9.mockapi.io/wiser-products`
      );
      setAPIData(response.data);
      setError("");
    } catch (err) {
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://67446e69b4e2e04abea22dd9.mockapi.io/wiser-products/${id}`
      );
      setAPIData((prevData) => prevData.filter((product) => product.id !== id));
      setError("");
    } catch {
      setError("Failed to delete product. Please try again later.");
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center bg-secondary text-white p-3">
        <h2 className="m-0">Product Page</h2>
        <Link href="/AddProducts">
          <button className="btn btn-success">Add New Products</button>
        </Link>
      </div>

      <div className="container mt-4">
        {loading && (
          <div className="text-center my-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {error && (
          <div className="alert alert-danger d-flex justify-content-between align-items-center">
            {error}
            <button className="btn btn-primary btn-sm" onClick={fetchData}>
              Retry
            </button>
          </div>
        )}

        {!loading && APIData.length > 0 && (
          <div className="table-responsive">
            <Table singleLine>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>S.No</Table.HeaderCell>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Price</Table.HeaderCell>
                  <Table.HeaderCell>Description</Table.HeaderCell>
                  <Table.HeaderCell>Image</Table.HeaderCell>
                  <Table.HeaderCell>Category</Table.HeaderCell>
                  <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {APIData.map((data, index) => (
                  <Table.Row key={data.id}>
                    <Table.Cell>{index + 1}</Table.Cell>
                    <Table.Cell>{data.name}</Table.Cell>
                    <Table.Cell>${data.price}</Table.Cell>
                    <Table.Cell>{data.description}</Table.Cell>
                    <Table.Cell>
                      <img
                        style={{ width: "60px" }}
                        src={`https://raw.githubusercontent.com/prakashwiser/ecommerce-website/refs/heads/main/app/assets/images/${data.image}`}
                        alt={data.name || "Product image"}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://via.placeholder.com/60?text=No+Image";
                        }}
                      />
                    </Table.Cell>
                    <Table.Cell>{data.listingType || "N/A"}</Table.Cell>
                    <Table.Cell>
                      <Button
                        color="red"
                        size="small"
                        onClick={() => handleDelete(data.id)}
                      >
                        Delete
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        )}

        {!loading && APIData.length === 0 && !error && (
          <div className="text-center mt-4">No data available</div>
        )}
      </div>
    </div>
  );
};

export default ViewProducts;
