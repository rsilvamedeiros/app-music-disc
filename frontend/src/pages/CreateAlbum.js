import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";

const CreateAlbum = () => {
  const [album, setAlbum] = useState({
    title: "",
    releaseYear: "",
    genre: "",
    artist: "",
    cover: "",
    tracks: "",
  });

  const handleChange = (e) => {
    setAlbum({ ...album, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/albums/create", album);
      alert("Álbum criado com sucesso!");
    } catch (error) {
      alert("Erro ao criar álbum");
    }
  };

  return (
    <Container>
      <h1>Cadastrar Álbum</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={album.title}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="releaseYear">
          <Form.Label>Ano de Lançamento</Form.Label>
          <Form.Control
            type="number"
            name="releaseYear"
            value={album.releaseYear}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="genre">
          <Form.Label>Gênero</Form.Label>
          <Form.Control
            type="text"
            name="genre"
            value={album.genre}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="artist">
          <Form.Label>Artista (ID)</Form.Label>
          <Form.Control
            type="text"
            name="artist"
            value={album.artist}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="cover">
          <Form.Label>Capa</Form.Label>
          <Form.Control
            type="text"
            name="cover"
            value={album.cover}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="tracks">
          <Form.Label>Músicas</Form.Label>
          <Form.Control
            type="text"
            name="tracks"
            value={album.tracks}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Criar Álbum
        </Button>
      </Form>
    </Container>
  );
};

export default CreateAlbum;
