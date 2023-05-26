# Documentação da API RESTful para Organização de Festas e Serviços

A API RESTful foi desenvolvida para facilitar a organização de festas e serviços relacionados. Através dessa API, é possível criar, visualizar, atualizar e excluir informações sobre festas e serviços disponíveis. As tecnologias utilizadas no desenvolvimento da API são Node.js, Mongoose, MongoDB e Express.

## Recursos da API

### Recurso: Festas

O recurso "Festas" representa as festas organizadas. Cada festa possui os seguintes campos:

- `id` (gerado automaticamente): identificador único da festa.
- `titulo`: o título da festa.
- `autor`: o nome do organizador da festa.
- `descricao`: uma descrição detalhada da festa.
- `budget`: o orçamento disponível para a festa.
- `imagem`: URL da imagem relacionada à festa.
- `servicos`: uma lista de serviços associados à festa.

#### Endpoints do Recurso Festas

- `GET /festas`: Retorna todas as festas disponíveis.
- `GET /festas/{id}`: Retorna os detalhes de uma festa específica com o ID fornecido.
- `POST /festas`: Cria uma nova festa com os dados fornecidos.
- `PUT /festas/{id}`: Atualiza os dados de uma festa específica com o ID fornecido.
- `DELETE /festas/{id}`: Exclui uma festa específica com o ID fornecido.

### Recurso: Serviços

O recurso "Serviços" representa os serviços disponíveis para as festas. Cada serviço possui os seguintes campos:

- `id` (gerado automaticamente): identificador único do serviço.
- `nome`: o nome do serviço.
- `descricao`: uma descrição detalhada do serviço.
- `preco`: o preço do serviço.
- `imagem`: URL da imagem relacionada ao serviço.

#### Endpoints do Recurso Serviços

- `GET /servicos`: Retorna todos os serviços disponíveis.
- `GET /servicos/{id}`: Retorna os detalhes de um serviço específico com o ID fornecido.
- `POST /servicos`: Cria um novo serviço com os dados fornecidos.
- `PUT /servicos/{id}`: Atualiza os dados de um serviço específico com o ID fornecido.
- `DELETE /servicos/{id}`: Exclui um serviço específico com o ID fornecido.

## Autenticação e Autorização

A API não possui autenticação e autorização implementadas. Isso significa que qualquer solicitação pode ser feita sem autenticação prévia.

## Formato de Respostas

Todas as respostas da API seguem o formato JSON. Os campos de data e hora são retornados no formato ISO 8601.

### Exemplo de Resposta:

```json
{
  "id": "1",
  "titulo": "Festa de Aniversário",
  "autor": "João",
  "descricao": "Uma festa para comemorar meu aniversário.",
  "budget": 500,
  "imagem": "https://exemplo.com/imagem.jpg",
  "servicos": [
    {
      "id": "1",
      "nome": "DJ",
      "descricao": "Serviço de DJ para animar a festa.",
      "pre

co": 200,
      "imagem": "https://exemplo.com/dj.jpg"
    },
    {
      "id": "2",
      "nome": "Buffet",
      "descricao": "Serviço de buffet com opções variadas.",
      "preco": 300,
      "imagem": "https://exemplo.com/buffet.jpg"
    }
  ]
}
```

## Códigos de Resposta

A API utiliza os seguintes códigos de resposta HTTP:

- `200 OK`: A solicitação foi bem-sucedida.
- `201 Created`: A solicitação foi bem-sucedida e um novo recurso foi criado.
- `204 No Content`: A solicitação foi bem-sucedida, mas não há conteúdo para retornar.
- `400 Bad Request`: A solicitação foi malformada ou inválida.
- `404 Not Found`: O recurso solicitado não foi encontrado.
- `500 Internal Server Error`: Ocorreu um erro interno no servidor.

## Exemplos de Uso

### Listar todas as festas

**Requisição:**

```
GET /festas
```

**Resposta:**

```
Status: 200 OK
```

```json
[
  {
    "id": "1",
    "titulo": "Festa de Aniversário",
    "autor": "João",
    "descricao": "Uma festa para comemorar meu aniversário.",
    "budget": 500,
    "imagem": "https://exemplo.com/imagem.jpg",
    "servicos": [
      {
        "id": "1",
        "nome": "DJ",
        "descricao": "Serviço de DJ para animar a festa.",
        "preco": 200,
        "imagem": "https://exemplo.com/dj.jpg"
      },
      {
        "id": "2",
        "nome": "Buffet",
        "descricao": "Serviço de buffet com opções variadas.",
        "preco": 300,
        "imagem": "https://exemplo.com/buffet.jpg"
      }
    ]
  },
  // ...
]
```

### Obter detalhes de uma festa específica

**Requisição:**

```
GET /festas/1
```

**Resposta:**

```
Status: 200 OK
```

```json
{
  "id": "1",
  "titulo": "Festa de Aniversário",
  "autor": "João",
  "descricao": "Uma festa para comemorar meu aniversário.",
  "budget": 500,
  "imagem": "https://exemplo.com/imagem.jpg",
  "servicos": [
    {
      "id": "1",
      "nome": "DJ",
      "descricao": "Serviço de DJ para animar a festa.",
      "preco": 200,
      "imagem": "https://exemplo.com/dj.jpg"
    },
    {
      "id": "2",
      "nome": "Buffet",
      "descricao": "Serviço de buffet com opções variadas.",
      "preco": 300,
      "imagem": "https://exemplo.com/buffet.jpg"
    }
  ]
}
```

## Considerações Finais

Esta é apenas uma documentação básica da API RESTful para Organização de Festas e Serviços. É recomendado realizar testes e fornecer mais detalhes sobre os parâmetros e formatos de entrada/saída, além de

 considerar a implementação de autenticação e autorização para proteger os recursos da API, conforme necessário.
