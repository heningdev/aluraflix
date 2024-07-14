# AluraFlix

AluraFlix é uma plataforma de vídeos educacionais inspirada no Netflix, onde é possível visualizar, adicionar, editar e remover vídeos categorizados em Front-end, Back-end, Inovação, Gestão e Podcast.

## Índice

- [AluraFlix](#aluraflix)
  - [Índice](#índice)
  - [Sobre o Projeto](#sobre-o-projeto)
  - [Funcionalidades](#funcionalidades)
  - [Instalação](#instalação)
  - [Uso](#uso)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Contato](#contato)

## Sobre o Projeto

AluraFlix é uma aplicação web desenvolvida com React, onde os usuários podem visualizar uma coleção de vídeos educacionais organizados por categorias. Os usuários podem adicionar novos vídeos, editar informações de vídeos existentes e remover vídeos que não são mais necessários.

## Funcionalidades

- Visualizar vídeos categorizados.
- Adicionar novos vídeos.
- Editar informações dos vídeos existentes.
- Remover vídeos.
- Visualizar um vídeo em destaque de forma aleatória no banner da página inicial.

## Instalação

Siga os passos abaixo para instalar e executar o projeto localmente:

1. Clone o repositório:

   ```sh
   git clone https://github.com/heningdev/aluraflix.git

2. Navegue até o diretório do projeto:

   ```sh
   cd aluraflix

3. Instale as dependências:

   ```sh
   npm install
   
4. Inicie o servidor JSON:

   ```sh
   npx json-server --watch src/db.json --port 3000

5. Em uma nova aba do terminal, inicie a aplicação React:

   ```sh
   npm start

   Obs: Será necessário concordar em mudar a porta padrão React no console

   A aplicação estará disponível em http://localhost:3001

## Uso

- Navegue pela página inicial para visualizar os vídeos categorizados.
- Clique em "Novo Vídeo" para adicionar um novo vídeo.
- Use os botões de editar e excluir nos cards de vídeo para gerenciar os vídeos existentes.
- Clique nas miniaturas dos vídeos para assistir ao vídeo no link associado.
- Para obter as imagens de Thumb para novos videos utilize: [Obter Thumbnail  Youtube](https://www.get-youtube-thumbnail.com/)

## Tecnologias Utilizadas

- React
- React Router DOM
- JSON Server
- HTML5
- CSS3
- JavaScript (ES6+)

## Contato

- Hening Pereira
- hening.dev@gmail.com