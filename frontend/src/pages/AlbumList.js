// frontend/src/pages/AlbumList.js
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios.get("/api/albums").then((response) => {
      setAlbums(response.data);
    });
  }, []);

  return (
    <Container>
      <Row>
        <h1>Albuns</h1>
      </Row>
      <Row>
        {albums.map((album) => (
          <Col key={album._id} md={4}>
            <Card>
              <Card.Img variant="top" src={album.cover} />
              <Card.Body>
                <Card.Title>{album.title}</Card.Title>
                <Card.Text>{album.genre}</Card.Text>
                <Card.Text>{album.releaseYear}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AlbumList;
