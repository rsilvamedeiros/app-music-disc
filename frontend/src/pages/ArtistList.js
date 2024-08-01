// frontend/src/pages/ArtistList.js
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";

const ArtistList = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios.get("/api/artists").then((response) => {
      setArtists(response.data);
    });
  }, []);

  return (
    <Container>
      <Row>
        {artists.map((artist) => (
          <Col key={artist._id} md={4}>
            <Card>
              <Card.Img variant="top" src={artist.photo} />
              <Card.Body>
                <Card.Title>{artist.name}</Card.Title>
                <Card.Text>{artist.bio}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ArtistList;
