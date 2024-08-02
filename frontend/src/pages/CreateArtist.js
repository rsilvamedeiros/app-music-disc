import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";

const CreateArtist = () => {
  const [artist, setArtist] = useState({
    name: "",
    bio: "",
    photo: "",
    socialLinks: "",
  });

  const handleChange = (e) => {
    setArtist({ ...artist, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/artists/create", artist);
      alert("Artista criado com sucesso!");
    } catch (error) {
      alert("Erro ao criar artista");
    }
  };

  return (
    <Container>
      <h1>Cadastrar Artista</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={artist.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="bio">
          <Form.Label>Biografia</Form.Label>
          <Form.Control
            type="text"
            name="bio"
            value={artist.bio}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="photo">
          <Form.Label>Foto</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            value={artist.photo}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="socialLinks">
          <Form.Label>Links Sociais</Form.Label>
          <Form.Control
            type="text"
            name="socialLinks"
            value={artist.socialLinks}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Criar Artista
        </Button>
      </Form>
    </Container>
  );
};

export default CreateArtist;
