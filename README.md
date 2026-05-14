# 🛍️ EcommercePrototype

Uma plataforma de e-commerce completa e escalável com autenticação de usuários, gerenciamento de múltiplas lojas, catálogo de produtos com upload de imagens e integração com sistemas de pagamento PIX. Desenvolvido com React 18+ no frontend e Node.js/Express no backend, com cobertura completa de testes unitários.

> ⚠️ **Status**: Em desenvolvimento ativo — Novas funcionalidades sendo adicionadas regularmente
>
> 🎯 **Última atualização**: 2026 | Todas as rotas funcionais implementadas

---

## 📋 Índice

- [🎯 Visão Geral](#-visão-geral)
- [✨ Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias](#️-tecnologias)
- [📦 Pré-requisitos](#-pré-requisitos)
- [🚀 Instalação](#-instalação)
- [⚙️ Configuração](#️-configuração)
- [🏗️ Estrutura do Projeto](#️-estrutura-do-projeto)
- [🔌 API Reference](#-api-reference)
- [🔐 Autenticação](#-autenticação)
- [🏪 Lojas (Shops)](#-lojas-shops)
- [📦 Produtos](#-produtos)
- [💳 Pagamentos](#-pagamentos)
- [🚀 Iniciando o Projeto](#-iniciando-o-projeto)
- [📱 Rotas Frontend](#-rotas-frontend)
- [🧪 Testes Automatizados](#-testes-automatizados)
- [🔒 Autenticação & Segurança](#-autenticação--segurança)
- [📊 Modelos de Dados](#-modelos-de-dados)
- [🎨 Stack UI/UX](#-stack-uiux)
- [🔗 Fluxo da Aplicação](#-fluxo-da-aplicação)
- [🐛 Issues Conhecidas](#-issues-conhecidas)
- [💡 Melhorias Planejadas](#-melhorias-planejadas)
- [🤝 Contribuindo](#-contribuindo)
- [🔗 Links Úteis](#-links-úteis)
- [📞 Suporte](#-suporte)
- [📄 Licença](#-licença)

---

## 🎯 Visão Geral

**EcommercePrototype** é uma solução completa de e-commerce que permite:

- ✅ **Autenticação de Usuários** - Registro, login e gerenciamento de contas com JWT
- ✅ **Múltiplas Lojas** - Cada usuário pode criar e gerenciar várias lojas
- ✅ **Catálogo de Produtos** - Upload de imagens, descrições e precificação
- ✅ **Dashboard Intuitivo** - Interface moderna para vendedores gerenciarem suas lojas
- ✅ **Navegação Responsiva** - Design mobile-first com Tailwind CSS
- ✅ **Upload de Imagens** - Integração com ImgBB para hospedagem de mídia
- ✅ **Sistema de Pagamentos** - Integração Woovi PIX para processamento de transações
- ✅ **Testes Automatizados** - Cobertura completa com Jest para controllers

### Fluxo Principal do Usuário

```
Visitante
    ↓
[Registro/Login] → Criar Conta
    ↓
Usuário Autenticado
    ↓
[Dashboard] → Gerenciar Lojas
    ↓
[Loja] → Adicionar Produtos → Gerenciar Estoque
    ↓
[Vitrine Pública] → Clientes Visualizam Produtos
```

---

## ✨ Funcionalidades

### 🔐 Autenticação & Segurança
- [x] Registro de novos usuários com validação
- [x] Login com JWT (JSON Web Tokens)
- [x] Hash de senhas com bcryptjs
- [x] Middleware de autenticação em rotas protegidas
- [x] Validação de dados com Zod

### 🏪 Gerenciamento de Lojas
- [x] Criar novas lojas
- [x] Listar todas as lojas (admin)
- [x] Obter detalhes de loja específica
- [x] Atualizar informações da loja
- [x] Deletar loja
- [x] Listar lojas por proprietário

### 📦 Gerenciamento de Produtos
- [x] Criar produtos com múltiplas imagens
- [x] Upload automático para ImgBB
- [x] Listar todos os produtos (pública)
- [x] Obter detalhes de produto específico
- [x] Listar produtos por loja
- [x] Atualizar produto e suas imagens
- [x] Deletar produtos
- [x] Galeria de imagens com navegação

### 💳 Pagamentos
- [x] Integração Woovi PIX
- [x] Geração de QR Code PIX
- [x] Sistema de split de pagamentos

### 🎨 Frontend
- [x] Página inicial com catálogo público
- [x] Autenticação (Login/Register)
- [x] Dashboard de loja
- [x] Gerenciamento de lojas
- [x] Gerenciamento de produtos com modal
- [x] Formulário de produtos com preview de imagens
- [x] Componentes responsivos e reutilizáveis
- [x] Design moderno com Tailwind CSS

---

## 🛠️ Tecnologias

### Frontend
- **React 18+** - Biblioteca UI moderna
- **React Router DOM v6** - Navegação e rotas client-side
- **React Hook Form** - Gerenciamento eficiente de formulários
- **Axios** - Cliente HTTP para requisições
- **Tailwind CSS** - Framework de estilos utilitários
- **Vite** - Build tool rápido e moderno (recomendado)

### Backend
- **Node.js** v18.0.0+ - Runtime JavaScript
- **Express 5.2+** - Framework web robusto
- **MongoDB** v6.0.0+ - Banco de dados NoSQL
- **Mongoose** - ODM (Object Document Mapper) para MongoDB
- **JWT (jsonwebtoken)** - Autenticação com tokens
- **Bcryptjs** - Hashing seguro de senhas
- **Multer** - Middleware para upload de arquivos
- **FormData** - Construção de multipart/form-data
- **Axios** - Cliente HTTP para chamadas externas
- **Zod** - Validação e schema de dados
- **CORS** - Controle de acesso entre origens
- **dotenv** - Gerenciamento de variáveis de ambiente

### Testes
- **Jest** - Framework de testes JavaScript
- **Supertest** - Biblioteca para testes de HTTP

### Ferramentas & Infraestrutura
- **ImgBB** - Hospedagem de imagens na nuvem
- **Woovi** - Processamento de pagamentos PIX
- **MongoDB Atlas** - Banco de dados em nuvem (opcional)

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** v18.0.0 ou superior
- **npm** v9.0.0 ou superior (ou yarn/pnpm)
- **MongoDB** v6.0.0 ou superior (local ou Atlas Cloud)
- **Git** para controle de versão
- **Conta ImgBB** para upload de imagens (gratuita)
- **Conta Woovi** para pagamentos PIX (opcional, em desenvolvimento)

### Verificar Versões Instaladas

```bash
node --version    # Esperado: v18.x.x ou superior
npm --version     # Esperado: v9.x.x ou superior
mongod --version  # Esperado: v6.0.0 ou superior
```

---

## 🚀 Instalação

### 1. Clonar Repositório

```bash
git clone https://github.com/seu-usuario/ecommerce-prototype.git
cd ecommerce-prototype
```

### 2. Instalar Dependências Backend

```bash
cd backend
npm install
```

### 3. Instalar Dependências Frontend

```bash
cd ../frontend
npm install
```

---

## ⚙️ Configuração

### Backend

#### Variáveis de Ambiente

Crie um arquivo `.env` na pasta `backend/`:

```env
# MongoDB Connection
MONGODB_URL=mongodb://localhost:27017/ecommerce
# Para MongoDB Atlas (recomendado):
# MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/ecommerce

# JWT Configuration
JWT_SECRET=sua_chave_secreta_super_segura_aqui_com_32_caracteres_minimo

# ImgBB API (Upload de Imagens)
IMGBB_API_KEY=sua_chave_api_imgbb_aqui

# Woovi API (Pagamentos PIX) - Em desenvolvimento
WOOVI_API_URL=https://api.woovi.com/v1/charges
WOOVI_API_KEY=sua_chave_api_woovi_aqui

# Server Configuration
PORT=3000
NODE_ENV=development
```

#### Gerar JWT_SECRET Seguro

```bash
# No terminal Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Copie a saída (string hexadecimal) e adicione ao `.env`

#### Configurar MongoDB

**Opção 1: MongoDB Local (Desenvolvimento)**
```bash
# Windows
mongod

# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

**Opção 2: MongoDB Atlas (Cloud - Recomendado)**
1. Acesse [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Crie uma conta gratuita
3. Crie um cluster M0 (gratuito)
4. Clique em "Connect" e copie a connection string
5. Substitua `<username>` e `<password>` com suas credenciais
6. Adicione a string no arquivo `.env` como `MONGODB_URL`

#### Obter API Keys

**ImgBB (Gratuito)**
1. Acesse [imgbb.com](https://imgbb.com/)
2. Crie uma conta ou faça login
3. Vá para a seção de API
4. Copie sua API Key e adicione ao `.env`

**Woovi (Em desenvolvimento)**
1. Acesse [woovi.com](https://woovi.com/)
2. Crie uma conta de desenvolvedor
3. Gere suas chaves de API
4. Adicione ao `.env` (funcionalidade ainda em desenvolvimento)

### Frontend

Crie um arquivo `.env.local` na pasta `frontend/`:

```env
VITE_API_URL=http://localhost:3000
```

Ou use `.env` dependendo da configuração do Vite:

```env
VITE_APP_API_URL=http://localhost:3000
```

---

## 🏗️ Estrutura do Projeto

```
ecommerce-prototype/
│
├── backend/
│   ├── __tests__/
│   │   └── controllers/
│   │       ├── LoginController.spec.js
│   │       ├── RegisterController.spec.js
│   │       ├── ShopController.spec.js
│   │       └── ProductsController.spec.js
│   │
│   ├── controllers/
│   │   ├── LoginController.js          # Autenticação
│   │   ├── RegisterController.js       # Registro de usuários
│   │   ├── ShopController.js           # CRUD de lojas
│   │   ├── ProductsController.js       # CRUD de produtos
│   │   └── PaymentsController.js       # Integração PIX
│   │
│   ├── models/
│   │   ├── User.js                     # Schema de usuários
│   │   ├── Shop.js                     # Schema de lojas
│   │   └── Product.js                  # Schema de produtos
│   │
│   ├── routes/
│   │   ├── AuthRoutes.js               # Rotas de autenticação
│   │   ├── ShopRoutes.js               # Rotas de lojas
│   │   ├── ProductsRoutes.js           # Rotas de produtos
│   │   └── PaymentRoutes.js            # Rotas de pagamentos
│   │
│   ├── middlewares/
│   │   └── authMiddleware.js           # Validação de JWT
│   │
│   ├── db/
│   │   └── ConnectToDB.js              # Conexão MongoDB
│   │
│   ├── index.js                        # Servidor Express
│   ├── package.json
│   ├── jest.config.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx                # Vitrine pública
│   │   │   ├── Login.jsx               # Página de login
│   │   │   ├── Register.jsx            # Página de registro
│   │   │   ├── RegisterShop.jsx        # Criar nova loja
│   │   │   ├── ManageShops.jsx         # Listar lojas do usuário
│   │   │   ├── DashboardStore.jsx      # Dashboard da loja
│   │   │   └── ManageProducts.jsx      # Gerenciar produtos
│   │   │
│   │   ├── components/
│   │   │   ├── Header.jsx              # Cabeçalho com navegação
│   │   │   ├── ProductCard.jsx         # Card de produto
│   │   │   ├── ProductForm.jsx         # Formulário para CRUD de produtos
│   │   │   └── ProtectedRoutes.jsx     # Wrapper de rotas protegidas
│   │   │
│   │   ├── App.jsx                     # Componente raiz com rotas
│   │   └── main.jsx                    # Entry point
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── .env.local
│
└── README.md                            # Este arquivo
```

---

## 🔌 API Reference

### Base URL

```
http://localhost:3000
```

### Headers Obrigatórios

```json
{
  "Content-Type": "application/json",
  "Authorization": "Bearer {token_jwt}"
}
```

> ⚠️ **Nota importante**: Rotas de autenticação (`/auth/register` e `/auth/login`) **NÃO requerem** token JWT

### Response Status

- `200` - Sucesso (GET, PUT)
- `201` - Recurso criado (POST)
- `400` - Requisição inválida
- `401` - Não autenticado (token ausente/inválido)
- `404` - Recurso não encontrado
- `500` - Erro interno do servidor

---

## 🔐 Autenticação

### POST /auth/register

Registrar nova conta de usuário.

**Request:**
```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "email": "joao@exemplo.com",
    "password": "senha123456"
  }'
```

**Body:**
```json
{
  "name": "string (obrigatório)",
  "email": "string (obrigatório, único)",
  "password": "string (mínimo 8 caracteres)"
}
```

**Response (201):**
```json
{
  "message": "User registered successfully"
}
```

**Erros:**
- `400` - Email já cadastrado ou validação falhou
- `500` - Erro interno do servidor

---

### POST /auth/login

Autenticar usuário e obter token JWT.

**Request:**
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "joao@exemplo.com",
    "password": "senha123456"
  }'
```

**Body:**
```json
{
  "email": "string (obrigatório)",
  "password": "string (mínimo 8 caracteres)"
}
```

**Response (200):**
```json
{
  "userID": "507f1f77bcf86cd799439011",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1MDdmMWY3N2JjZjg2Y2Q3OTk0MzkwMTEiLCJpYXQiOjE2MzI0NTY3ODUsImV4cCI6MTYzMjQ2MDM4NX0.abcdefghijk..."
}
```

**Campos da resposta:**
- `userID` - ID único do usuário (ObjectId MongoDB)
- `token` - JWT com expiração de 1 hora (3600 segundos)

**Erros:**
- `400` - Email ou senha inválidos
- `500` - Erro interno do servidor

**Nota sobre o Token:**
O token JWT deve ser armazenado no cliente e enviado em requisições subsequentes:
```
Authorization: Bearer {token}
```

---

## 🏪 Lojas (Shops)

### POST /api/shops

Criar nova loja.

**Headers Obrigatórios:**
```
Authorization: Bearer {token}
Content-Type: application/json
```

**Request:**
```bash
curl -X POST http://localhost:3000/api/shops \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer {token}" \
  -d '{
    "name": "Minha Loja Fashion",
    "description": "Roupas e acessórios de moda premium",
    "category": "moda",
    "ownerID": "507f1f77bcf86cd799439011"
  }'
```

**Body:**
```json
{
  "name": "string (obrigatório)",
  "description": "string (obrigatório)",
  "category": "string (obrigatório)",
  "ownerID": "string (ObjectId do proprietário)"
}
```

**Response (201):**
```json
{
  "_id": "507f1f77bcf86cd799439012",
  "name": "Minha Loja Fashion",
  "description": "Roupas e acessórios de moda premium",
  "category": "moda",
  "owner": "507f1f77bcf86cd799439011",
  "createdAt": "2024-05-11T10:30:00Z",
  "updatedAt": "2024-05-11T10:30:00Z"
}
```

---

### GET /api/shops

Listar todas as lojas (apenas admin).

**Request:**
```bash
curl -X GET http://localhost:3000/api/shops \
  -H "Authorization: Bearer {token}"
```

**Response (200):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439012",
    "name": "Minha Loja Fashion",
    "description": "Roupas e acessórios de moda premium",
    "category": "moda",
    "owner": {
      "_id": "507f1f77bcf86cd799439011",
      "name": "João Silva",
      "email": "joao@exemplo.com"
    },
    "createdAt": "2024-05-11T10:30:00Z"
  }
]
```

---

### GET /api/shops/:id

Obter detalhes de uma loja específica.

**Request:**
```bash
curl -X GET http://localhost:3000/api/shops/507f1f77bcf86cd799439012 \
  -H "Authorization: Bearer {token}"
```

**Response (200):**
```json
{
  "_id": "507f1f77bcf86cd799439012",
  "name": "Minha Loja Fashion",
  "description": "Roupas e acessórios de moda premium",
  "category": "moda",
  "owner": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "João Silva"
  },
  "createdAt": "2024-05-11T10:30:00Z"
}
```

**Erros:**
- `404` - Loja não encontrada

---

### GET /api/shops/owner/:ownerID

Listar todas as lojas de um proprietário específico.

**Request:**
```bash
curl -X GET http://localhost:3000/api/shops/owner/507f1f77bcf86cd799439011 \
  -H "Authorization: Bearer {token}"
```

**Response (200):**
```json
[
  { "name": "Loja Fashion", ... },
  { "name": "Loja Eletrônicos", ... }
]
```

---

### PUT /api/shops/:id

Atualizar informações da loja.

**Request:**
```bash
curl -X PUT http://localhost:3000/api/shops/507f1f77bcf86cd799439012 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer {token}" \
  -d '{
    "name": "Loja Fashion Premium",
    "description": "Roupas de qualidade superior",
    "category": "moda"
  }'
```

**Response (200):**
```json
{
  "_id": "507f1f77bcf86cd799439012",
  "name": "Loja Fashion Premium",
  "description": "Roupas de qualidade superior",
  "category": "moda",
  "updatedAt": "2024-05-11T11:45:00Z"
}
```

---

### DELETE /api/shops/:id

Deletar uma loja.

**Request:**
```bash
curl -X DELETE http://localhost:3000/api/shops/507f1f77bcf86cd799439012 \
  -H "Authorization: Bearer {token}"
```

**Response (200):**
```json
{
  "message": "Shop deleted successfully"
}
```

---

## 📦 Produtos

### POST /api/products

Criar novo produto com upload de múltiplas imagens.

**Headers Obrigatórios:**
```
Authorization: Bearer {token}
Content-Type: multipart/form-data
```

**Request (FormData):**
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Authorization: Bearer {token}" \
  -F "name=Camiseta Minimalista" \
  -F "price=89.90" \
  -F "description=Camiseta 100% algodão com design minimalista" \
  -F "shopID=507f1f77bcf86cd799439012" \
  -F "images=@/path/to/image1.jpg" \
  -F "images=@/path/to/image2.jpg"
```

**Body (FormData):**
- `name` - string (obrigatório)
- `price` - number (obrigatório)
- `description` - string (obrigatório)
- `shopID` - string (ObjectId da loja)
- `images` - file[] (máximo 5 arquivos)

**Response (201):**
```json
{
  "_id": "507f1f77bcf86cd799439013",
  "name": "Camiseta Minimalista",
  "price": 89.90,
  "description": "Camiseta 100% algodão com design minimalista",
  "idShop": "507f1f77bcf86cd799439012",
  "imagesUrls": [
    "https://i.ibb.co/image1.jpg",
    "https://i.ibb.co/image2.jpg"
  ]
}
```

**Erros:**
- `400` - Nenhum arquivo foi enviado
- `500` - Erro ao salvar no banco de dados

---

### GET /api/products/all

Listar todos os produtos (pública, sem autenticação).

**Request:**
```bash
curl -X GET http://localhost:3000/api/products/all
```

**Response (200):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439013",
    "name": "Camiseta Minimalista",
    "price": 89.90,
    "description": "Descrição",
    "idShop": "507f1f77bcf86cd799439012",
    "imagesUrls": ["https://i.ibb.co/image1.jpg"]
  }
]
```

---

### GET /api/products?shopID=:shopID

Listar produtos por loja específica (autenticado).

**Request:**
```bash
curl -X GET "http://localhost:3000/api/products?shopID=507f1f77bcf86cd799439012" \
  -H "Authorization: Bearer {token}"
```

**Response (200):**
```json
[
  { "name": "Produto 1", ... },
  { "name": "Produto 2", ... }
]
```

---

### GET /api/products/:id

Obter detalhes de um produto específico.

**Request:**
```bash
curl -X GET http://localhost:3000/api/products/507f1f77bcf86cd799439013 \
  -H "Authorization: Bearer {token}"
```

**Response (200):**
```json
{
  "_id": "507f1f77bcf86cd799439013",
  "name": "Camiseta Minimalista",
  "price": 89.90,
  "description": "Camiseta 100% algodão",
  "idShop": "507f1f77bcf86cd799439012",
  "imagesUrls": ["https://i.ibb.co/image1.jpg"]
}
```

**Erros:**
- `404` - Produto não encontrado

---

### GET /api/products/shop/:shopID

Listar produtos de uma loja específica.

**Request:**
```bash
curl -X GET http://localhost:3000/api/products/shop/507f1f77bcf86cd799439012 \
  -H "Authorization: Bearer {token}"
```

**Response (200):**
```json
[
  { "name": "Produto 1", ... },
  { "name": "Produto 2", ... }
]
```

---

### PUT /api/products/:id

Atualizar produto e suas imagens.

**Headers:**
```
Authorization: Bearer {token}
Content-Type: multipart/form-data
```

**Request (FormData):**
```bash
curl -X PUT http://localhost:3000/api/products/507f1f77bcf86cd799439013 \
  -H "Authorization: Bearer {token}" \
  -F "name=Camiseta Premium" \
  -F "price=129.90" \
  -F "description=Nova descrição" \
  -F "images=@/path/to/newimage.jpg"
```

**Response (200):**
```json
{
  "_id": "507f1f77bcf86cd799439013",
  "name": "Camiseta Premium",
  "price": 129.90,
  "imagesUrls": ["https://i.ibb.co/newimage.jpg"]
}
```

**Erros:**
- `400` - Nenhum arquivo foi enviado
- `404` - Produto não encontrado

---

### DELETE /api/products/:id

Deletar produto.

**Request:**
```bash
curl -X DELETE http://localhost:3000/api/products/507f1f77bcf86cd799439013 \
  -H "Authorization: Bearer {token}"
```

**Response (200):**
```json
{
  "message": "Product deleted successfully"
}
```

**Erros:**
- `404` - Produto não encontrado

---

## 💳 Pagamentos

### POST /api/payments

Gerar QR Code PIX para pagamento (integração Woovi).

**Headers Obrigatórios:**
```
Authorization: Bearer {token}
Content-Type: application/json
```

**Status:** 🔄 Em desenvolvimento

**Request (futuro):**
```bash
curl -X POST http://localhost:3000/api/payments \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer {token}" \
  -d '{
    "product": { "idShop": "...", "price": 89.90 },
    "client": { "name": "Cliente", "email": "cliente@email.com" }
  }'
```

**Response esperada:**
```json
{
  "qrCodeImage": "https://woovi.com/qr-code-image.jpg",
  "brCode": "00020126...",
  "expiresAt": "2024-05-11T11:30:00Z"
}
```

**Nota:** A funcionalidade está implementada no backend mas ainda em testes de integração. Requer chaves Woovi válidas no `.env`.

---

## 🚀 Iniciando o Projeto

### Pré-requisitos antes de iniciar

1. ✅ Node.js v18+ instalado
2. ✅ MongoDB rodando (local ou Atlas)
3. ✅ Arquivo `.env` configurado no backend
4. ✅ Arquivo `.env.local` ou `.env` configurado no frontend

### Terminal 1 - Backend

```bash
cd backend
npm install          # Apenas na primeira vez
npm start            # ou npm run dev para nodemon
```

**Saída esperada:**
```
Connected to MongoDB
Server running on port 3000
```

**Comandos disponíveis:**
```bash
npm start            # Inicia servidor (production-ready)
npm run dev          # Inicia com nodemon (recarrega automático)
npm test             # Executa testes unitários
npm test -- --watch # Executa testes em modo watch
npm test -- --coverage # Relatório de cobertura de testes
```

### Terminal 2 - Frontend

```bash
cd frontend
npm install          # Apenas na primeira vez
npm run dev          # Inicia com Vite
```

**Saída esperada:**
```
  VITE v4.x.x  ready in 234ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

**Comandos disponíveis:**
```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Pré-visualizar build de produção
npm run lint         # Verificar linting (se configurado)
```

### Acessar a Aplicação

Abra seu navegador e acesse:

```
http://localhost:5173
```

**Fluxo recomendado para teste:**
1. Acesse Home (vitrine pública)
2. Clique em "Login" → "Cadastre-se" para criar conta
3. Após login, acesse gerenciamento de lojas
4. Crie uma nova loja
5. Adicione produtos com imagens
6. Visualize produtos na Home

---

## 📱 Rotas Frontend

| Rota | Componente | Autenticação | Status | Descrição |
|------|-----------|--------------|--------|-----------|
| `/` | Home.jsx | ❌ Opcional | ✅ | Vitrine pública com catálogo |
| `/login` | Login.jsx | ❌ Não | ✅ | Autenticação de usuários |
| `/register` | Register.jsx | ❌ Não | ✅ | Criar nova conta |
| `/register-shop` | RegisterShop.jsx | ✅ Sim | ✅ | Criar nova loja |
| `/manage-shops` | ManageShops.jsx | ✅ Sim | ✅ | Listar lojas do usuário |
| `/dashboard-store` | DashboardStore.jsx | ✅ Sim | ✅ | Dashboard da loja |
| `/manage-products` | ManageProducts.jsx | ✅ Sim | ✅ | CRUD de produtos |

### Componentes Reutilizáveis

| Componente | Localização | Descrição |
|-----------|------------|-----------|
| Header | components/Header.jsx | Navegação principal com menu |
| ProductCard | components/ProductCard.jsx | Card de produto (vitrine) |
| ProductForm | components/ProductForm.jsx | Formulário CRUD de produtos |
| ProtectedRoute | components/ProtectedRoutes.jsx | Wrapper para rotas privadas |

---

## 🧪 Testes Automatizados

### Visão Geral

O projeto inclui uma suite completa de **testes unitários** para todos os controllers utilizando **Jest**. Os testes cobrem casos de sucesso, validação e tratamento de erros.

**Cobertura atual:**
- ✅ LoginController - Autenticação
- ✅ RegisterController - Registro
- ✅ ShopController - Gerenciamento de lojas
- ✅ ProductsController - Gerenciamento de produtos

### Estrutura de Testes

```
backend/
├── __tests__/
│   └── controllers/
│       ├── LoginController.spec.js
│       ├── RegisterController.spec.js
│       ├── ShopController.spec.js
│       └── ProductsController.spec.js
```

### Executar Testes

```bash
cd backend

# Executar todos os testes
npm test

# Executar com cobertura detalhada
npm test -- --coverage

# Executar arquivo específico
npm test LoginController.spec.js

# Modo watch (reexecuta ao detectar mudanças)
npm test -- --watch

# Modo watch com cobertura
npm test -- --watch --coverage
```

### Detalhes dos Testes

#### **LoginController.spec.js**
- ✅ Login bem-sucedido com credenciais válidas
- ✅ Retorna erro 400 se usuário não existe
- ✅ Retorna erro 400 se senha está incorreta
- ✅ Gera JWT token com expiração correta
- ✅ Retorna userID e token na resposta

**Casos de teste:** 3
**Mocks:** User model, JWT

---

#### **RegisterController.spec.js**
- ✅ Registra novo usuário com sucesso
- ✅ Retorna erro 400 se email já cadastrado
- ✅ Valida campos obrigatórios (name, email, password)
- ✅ Hash de senha é aplicado automaticamente

**Casos de teste:** 2
**Mocks:** User model

---

#### **ShopController.spec.js**
- ✅ Criar loja com sucesso
- ✅ Listar lojas com populate do owner
- ✅ Obter loja por ID
- ✅ Retorna 404 se loja não encontrada
- ✅ Atualizar loja
- ✅ Deletar loja
- ✅ Listar lojas por proprietário
- ✅ Tratamento de erros no banco de dados

**Casos de teste:** 8
**Mocks:** Shop model

---

#### **ProductsController.spec.js**
- ✅ Criar produto com upload de múltiplas imagens
- ✅ Retorna erro 400 se nenhum arquivo enviado
- ✅ Tratamento de erros de salvamento no banco
- ✅ Buscar produtos por shopID
- ✅ Obter produto por ID
- ✅ Retorna 404 se produto não encontrado
- ✅ Atualizar produto com novas imagens
- ✅ Deletar produto
- ✅ Listar todos os produtos

**Casos de teste:** 10+
**Mocks:** Product model, axios (ImgBB), multer

### Configuração Jest

```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.spec.js'],
  collectCoverageFrom: [
    'controllers/**/*.js',
    '!node_modules/**'
  ],
  coveragePathIgnorePatterns: ['/node_modules/'],
  verbose: true
};
```

### Boas Práticas nos Testes

✅ Testes independentes e isolados
✅ Mocks resetados entre testes
✅ Cobertura de casos de sucesso e erro
✅ Nomes descritivos em português
✅ Assertions claras e específicas
✅ Setup/teardown com beforeEach/afterEach

---

## 🔒 Autenticação & Segurança

### Como Funciona o Sistema de Autenticação

**Fluxo de Login:**
```
1. Usuário submete email + senha
   ↓
2. Servidor valida com Zod
   ↓
3. Procura usuário no MongoDB
   ↓
4. Compara senha com bcrypt.compare()
   ↓
5. Se válido: gera JWT com userId
   ↓
6. Retorna userID + token
   ↓
7. Cliente armazena em localStorage
   ↓
8. Token é enviado em cada requisição
```

### Middleware de Autenticação

Todas as rotas `/api` requerem:

```javascript
// Header obrigatório
Authorization: Bearer {jwt_token}
```

**Como funciona:**
```javascript
// authMiddleware.js
- Extrai token do header Authorization
- Valida assinatura do JWT
- Extrai userId do payload
- Verifica expiração (1 hora)
- Passa userId para req.userId
```

### Variáveis de Ambiente Críticas

```env
JWT_SECRET=sua_chave_secreta_com_minimo_32_caracteres
NODE_ENV=development  # ou production
```

### Senhas

- ✅ Hashing com bcryptjs (salt rounds: 10)
- ✅ Nunca armazenadas em plain text
- ✅ Comparação segura com comparePassword()
- ✅ Validação de tamanho mínimo (8 caracteres)

### Melhorias de Segurança Planejadas

- [ ] Refresh tokens para renovação automática
- [ ] Rate limiting em rotas de autenticação
- [ ] HTTPS obrigatório em produção
- [ ] Two-factor authentication (2FA)
- [ ] Verificação de email
- [ ] Recuperação de senha via email
- [ ] CORS mais restritivo por domínio
- [ ] Helmet.js para headers de segurança
- [ ] SQL/NoSQL injection prevention
- [ ] CSRF token protection

---

## 📊 Modelos de Dados

### User (Usuários)

```javascript
{
  _id: ObjectId,                    // ID único (gerado MongoDB)
  name: String,                     // Nome completo
  email: String,                    // Email único
  password: String,                 // Hash bcrypt (nunca plain text)
  createdAt: Date,                  // Data de criação (automático)
  updatedAt: Date                   // Última atualização (automático)
}
```

**Validações:**
- Email: único, válido
- Password: mínimo 8 caracteres, hash com salt 10
- Name: obrigatório, mínimo 1 caractere

---

### Shop (Lojas)

```javascript
{
  _id: ObjectId,                    // ID único
  name: String,                     // Nome da loja
  description: String,              // Descrição
  category: String,                 // Categoria
  pixKey: String,                   // Chave PIX para pagamentos
  owner: ObjectId,                  // Referência para User (ref: 'User')
  createdAt: Date,                  // Data de criação (automático)
  updatedAt: Date                   // Última atualização (automático)
}
```

**Relacionamentos:**
- `owner` → referencia `User._id`

**Validações:**
- name: obrigatório
- description: obrigatório
- category: obrigatório
- owner: obrigatório, deve existir

---

### Product (Produtos)

```javascript
{
  _id: ObjectId,                    // ID único
  name: String,                     // Nome do produto
  price: Number,                    // Preço em reais
  description: String,              // Descrição detalhada
  idShop: ObjectId,                 // Referência para Shop (ref: 'Shop')
  imagesUrls: [String],             // Array de URLs de imagens (ImgBB)
  createdAt: Date,                  // Data de criação (automático)
  updatedAt: Date                   // Última atualização (automático)
}
```

**Relacionamentos:**
- `idShop` → referencia `Shop._id`

**Validações:**
- name: obrigatório, string
- price: obrigatório, number > 0
- description: obrigatório
- idShop: obrigatório, deve existir
- imagesUrls: array, máximo 5 URLs

**Upload de Imagens:**
- Localidade: ImgBB (hospedagem externa)
- Formato: JPG, PNG, WebP
- Tamanho máximo: 5MB por imagem
- Quantidade: até 5 imagens por produto

---

## 🎨 Stack UI/UX

### Design System

**Filosofia:** Minimalismo moderno com foco em usabilidade

### Cores
- **Primária:** Black (#000000)
- **Secundária:** White (#FFFFFF)
- **Neutros:** Gray Scale (#F3F4F6 a #1F2937)
- **Destaque:** Red (#EF4444) para erros/ações destrutivas

### Tipografia
- **Font:** System fonts (SF Pro Display, Helvetica, sans-serif)
- **Tamanhos:** 10px, 12px, 14px, 16px, 18px, 20px, 24px, 32px
- **Weights:** Light (300), Regular (400), Semibold (600), Bold (700)

### Componentes

**Header:**
- Responsivo (hamburger menu em mobile)
- Barra de busca
- Navegação intuitiva
- Menu de usuário com dropdown

**Formulários:**
- Validação real-time com React Hook Form
- Labels descritivos
- Estados de focus/error
- Placeholder helper text

**Cards:**
- Sombras sutis
- Border de 1px cinza
- Hover effects
- Espaçamento consistente

**Modais:**
- Backdrop com blur
- Centro da tela
- Dimensões responsivas
- Botões de ação claros

### Responsividade

```
Mobile:    < 640px  (sm)
Tablet:    640px-1024px (md-lg)
Desktop:   > 1024px (xl)
```

### Animações

- Transições suaves (200-300ms)
- Hover effects em elementos interativos
- Loading spinners
- Slide-in/fade animations

---

## 🔗 Fluxo da Aplicação

### Para Visitantes (Sem Autenticação)

```
Home (Vitrine Pública)
    ↓
[Visualiza catálogo de produtos]
    ↓
[Clica em produto] → Detalhes (futuro)
    ↓
[Clica em Login] → Login/Register
    ↓
Autenticação
```

### Para Usuários Autenticados

```
Home
    ↓
[Menu → Gerenciar Lojas]
    ↓
ManageShops (Lista de lojas do usuário)
    ↓
[Clica em loja] → DashboardStore
    ↓
[Dashboard → Produtos Cadastrados]
    ↓
ManageProducts (CRUD de produtos)
    ↓
[Adicionar/Editar/Deletar produtos]
    ↓
[Produtos aparecem na Home pública]
```

### Fluxo de Dados (API)

```
Frontend (React)
    ↓ (axios)
Backend (Express)
    ↓ (middlewares de validação)
Controllers
    ↓ (operações)
Models/Database (MongoDB)
    ↓ (dados)
Response JSON
    ↓ (axios)
Frontend (estado React)
    ↓ (render)
UI atualizada
```

---

## 🐛 Issues Conhecidas

### Alta Prioridade

- ❌ **Logout não implementado** - Botão "Desconectar Conta" não limpa localStorage
  - Status: 🔴 Crítico
  - Impacto: Segurança
  - Workaround: Limpar manualmente localStorage

- ⚠️ **Token perdido ao recarregar página** - Sessão não persiste
  - Status: 🟠 Alto
  - Causa: Token armazenado em memory, não em localStorage
  - Impacto: Experiência do usuário
  - Solução: Implementar persistência em localStorage com encriptação

### Média Prioridade

- ❌ **Validação de dados no frontend incompleta** - Alguns campos não validam erro
  - Status: 🟠 Médio
  - Impacto: UX

- ⚠️ **Mensagens de erro genéricas** - Não diferencia tipos de erro
  - Status: 🟠 Médio
  - Impacto: Debugagem

### Baixa Prioridade

- ⚠️ **Função de busca não implementada** - Input no header não funciona
  - Status: 🟡 Baixo
  - Impacto: Feature (não é MVP)

- ⚠️ **Responsividade em telas muito pequenas** - < 320px pode ter problemas
  - Status: 🟡 Baixo
  - Impacto: Raríssimos usuários

- ⚠️ **Animações podem ser lentes em dispositivos antigos**
  - Status: 🟡 Baixo
  - Impacto: Performance em mobile antigos

---

## 💡 Melhorias Planejadas

### Fase 1 - Segurança & Sessão (Próximo)
- [ ] Implementar logout funcional
- [ ] Persistência de token em localStorage com encriptação
- [ ] Refresh tokens para renovação automática
- [ ] Rate limiting em autenticação
- [ ] Verificação de email no registro
- [ ] Recuperação de senha via email

### Fase 2 - Features Core
- [ ] Detalhes de produto (página dedicada)
- [ ] Carrinho de compras
- [ ] Favoritos/Wishlist
- [ ] Avaliações e comentários de produtos
- [ ] Sistema de filtros e busca avançada
- [ ] Categorias de produtos

### Fase 3 - Checkout & Pagamentos
- [ ] Integração Woovi PIX completa e testada
- [ ] Suporte a múltiplos métodos de pagamento
- [ ] Carrinho persistente
- [ ] Processo de checkout completo
- [ ] Confirmação de pedido por email
- [ ] Histórico de pedidos do usuário

### Fase 4 - Vendedor & Análise
- [ ] Dashboard com análises de vendas
- [ ] Gráficos de performance
- [ ] Relatório de produtos mais vendidos
- [ ] Gestão de estoque
- [ ] Notificações de pedidos
- [ ] Sistema de cupons/promocões

### Fase 5 - Admin & Moderação
- [ ] Painel administrativo
- [ ] Gerenciamento de usuários
- [ ] Moderação de reviews
- [ ] Estatísticas globais
- [ ] Suporte ao cliente integrado
- [ ] Logs de auditoria

### Fase 6 - Mobile & PWA
- [ ] Aplicativo móvel (React Native)
- [ ] PWA com offline support
- [ ] Push notifications
- [ ] Mobile-first optimization
- [ ] App store distribution

### Fase 7 - Produção & Scale
- [ ] Deploy em produção
- [ ] CDN para imagens
- [ ] Cache com Redis
- [ ] CI/CD pipeline (GitHub Actions)
- [ ] Monitoring & logging (Sentry, DataDog)
- [ ] Performance optimization
- [ ] Load testing & scaling

### Fase 8 - Expansão
- [ ] Marketplace features
- [ ] Sistema de afiliados
- [ ] Programa de parceiros
- [ ] API pública para integrações
- [ ] Webhooks para eventos
- [ ] GraphQL API alternativa

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para participar do desenvolvimento:

### Como Contribuir

1. **Fork** o repositório
2. **Clone** sua cópia
```bash
git clone https://github.com/seu-usuario/ecommerce-prototype.git
```

3. **Crie uma branch** para sua feature
```bash
git checkout -b feature/AmazingFeature
```

4. **Faça suas mudanças** e adicione testes
5. **Commit** suas mudanças
```bash
git commit -m 'Add: AmazingFeature description'
```

6. **Push** para sua branch
```bash
git push origin feature/AmazingFeature
```

7. **Abra um Pull Request**

### Padrões de Código

- ✅ Use ES6+ (arrow functions, destructuring, async/await)
- ✅ Siga convenções de nomenclatura camelCase
- ✅ Adicione comentários para lógica complexa
- ✅ Mantenha cobertura de testes acima de 80%
- ✅ Use async/await em vez de callbacks
- ✅ Valide inputs com Zod no backend
- ✅ Trate erros explicitamente

### Padrão de Commits

```
Type: Descrição breve

Descrição detalhada se necessário

Closes #123 (se fecha uma issue)
```

**Types:**
- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Atualização de documentação
- `test:` Testes novos ou atualizados
- `refactor:` Refatoração de código
- `chore:` Mudanças de dependências, configuração
- `perf:` Otimizações de performance

### Checklist antes de submeter PR

- [ ] Código segue padrões do projeto
- [ ] Testes adicionados/atualizados
- [ ] Documentação atualizada
- [ ] Sem console.log ou debug code
- [ ] Sem trailing whitespace
- [ ] Commits com mensagens claras

---

## 🔗 Links Úteis

### Documentação Oficial

- [React Documentation](https://react.dev/) - Guia oficial React
- [Express Documentation](https://expressjs.com/) - Framework Express
- [Mongoose Documentation](https://mongoosejs.com/) - ODM MongoDB
- [MongoDB Documentation](https://docs.mongodb.com/) - Banco de dados
- [Jest Testing](https://jestjs.io/) - Framework de testes
- [JWT.io](https://jwt.io/) - JSON Web Tokens

### Ferramentas & Serviços

- [ImgBB API](https://api.imgbb.com/) - Upload de imagens
- [Woovi Documentation](https://woovi.com/docs) - Pagamentos PIX
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Banco cloud
- [Tailwind CSS](https://tailwindcss.com/) - Estilos
- [Vite Guide](https://vitejs.dev/) - Build tool
- [React Router](https://reactrouter.com/) - Navegação

### Leitura Complementar

- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [JavaScript Design Patterns](https://www.patterns.dev/)
- [RESTful API Design](https://restfulapi.net/)
- [Clean Code in JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)

---

## 📞 Suporte

### Encontrou um Bug?

1. **Verifique** se o bug já foi reportado em [Issues](https://github.com/seu-usuario/ecommerce-prototype/issues)
2. **Descreva** o problema com detalhes:
   - Steps para reproduzir
   - Comportamento esperado vs. atual
   - Screenshots se relevante
   - Versão do Node.js/npm
   - Seu sistema operacional
3. **Adicione labels** apropriadas (bug, critical, etc)
4. **Inclua logs** de erro se disponíveis

### Sugerir Melhorias

1. Abra uma [Discussion](https://github.com/seu-usuario/ecommerce-prototype/discussions)
2. Descreva a feature com casos de uso
3. Explique por que seria benéfica
4. Se possível, proponha uma implementação

### Dúvidas?

- Verifique a [documentação completa](#)
- Procure por issues similares
- Crie uma [Discussion](https://github.com/seu-usuario/ecommerce-prototype/discussions/new)

---

## 📄 Licença

Este projeto está sob a licença **ISC**.

```
ISC License

Copyright (c) 2024-2026

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND.
```

Consulte o arquivo [LICENSE](LICENSE) para detalhes completos.

---

<div align="center">

**Dúvidas?** [Abra uma issue](https://github.com/seu-usuario/ecommerce-prototype/issues)
**Sugestões?** [Participe de uma discussão](https://github.com/seu-usuario/ecommerce-prototype/discussions)

</div>
