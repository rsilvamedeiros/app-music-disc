import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";

const CreateUser = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/users/register", user);
      alert("Usuário criado com sucesso!");
    } catch (error) {
      alert("Erro ao criar usuário");
    }
  };

  return (
    <Container>
      <h1>Cadastrar Usuário</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Nome de Usuário</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="role">
          <Form.Label>Função</Form.Label>
          <Form.Control
            type="text"
            name="role"
            value={user.role}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Criar Usuário
        </Button>
      </Form>
    </Container>
  );
};

export default CreateUser;
