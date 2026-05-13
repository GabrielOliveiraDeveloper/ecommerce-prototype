# 🛍️ EcommercePrototype

Um protótipo completo de plataforma de e-commerce com autenticação de usuários, gerenciamento de lojas e catálogo de produtos. Desenvolvido com React no frontend e Node.js/Express no backend.

> ⚠️ **Status**: Em desenvolvimento ativa - Novas funcionalidades sendo adicionadas regularmente

---

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Tecnologias](#-tecnologias)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Configuração](#️-configuração)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [API Reference](#-api-reference)
- [Autenticação](#-autenticação)
- [Lojas (Shops)](#-lojas-shops)
- [Produtos](#-produtos)
- [Iniciando o Projeto](#-iniciando-o-projeto)
- [Rotas Frontend](#-rotas-frontend)
- [Testes Automatizados](#-testes-automatizados)
- [Autenticação & Segurança](#-autenticação--segurança)
- [Roadmap](#-roadmap)
- [Issues Conhecidas](#-conhecidos-issues)
- [Melhorias Planejadas](#-melhorias-planejadas)
- [Contribuindo](#-contribuindo)
- [Documentação Adicional](#-documentação-adicional)
- [Links Úteis](#-links-úteis)
- [Suporte](#-suporte)
- [Licença](#-licença)
- [Autor](#️-autor)
- [Agradecimentos](#-agradecimentos)

---

## 🎯 Visão Geral

**EcommercePrototype** é uma plataforma que permite:

- ✅ Registro e autenticação de usuários
- ✅ Criação e gerenciamento de múltiplas lojas
- ✅ Catálogo de produtos com preços e descrições
- ✅ Dashboard intuitivo para vendedores
- ✅ Navegação responsiva (mobile-first design)
- ✅ Testes automatizados para Controllers

### Fluxo Principal

```
Usuário → Registro/Login → Dashboard → Criar Loja → Adicionar Produtos
```

---

## 🛠️ Tecnologias

### Frontend
- **React 18+** - Biblioteca UI
- **React Router DOM** - Navegação e rotas
- **React Hook Form** - Gerenciamento de formulários
- **Axios** - Cliente HTTP
- **Tailwind CSS** - Estilos utilitários
- **Vite** - Build tool (recomendado)

### Backend
- **Node.js** - Runtime JavaScript
- **Express 5.2+** - Framework web
- **MongoDB** - Banco de dados NoSQL
- **Mongoose** - ODM para MongoDB
- **JWT (jsonwebtoken)** - Autenticação
- **Bcryptjs** - Hashing de senhas
- **Multer** - Upload de arquivos
- **Zod** - Validação de dados
- **CORS** - Controle de acesso

### Testes
- **Jest** - Framework de testes
- **Supertest** - Testes de HTTP

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** v18.0.0 ou superior
- **npm** v9.0.0 ou superior (ou yarn)
- **MongoDB** v6.0.0 ou superior (local ou Atlas)
- **Git** para controle de versão

### Verificar versões instaladas

```bash
node --version    # v18.x.x
npm --version     # v9.x.x
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
# Para MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/ecommerce

# JWT Configuration
JWT_SECRET=sua_chave_secreta_super_segura_aqui

# Image Upload API (ImgBB)
IMGBB_API_KEY=sua_chave_api_imgbb_aqui

# Server Port (opcional)
PORT=3000

# Node Environment
NODE_ENV=development
```

#### Gerar JWT_SECRET Seguro

```bash
# No terminal Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

#### Conectar ao MongoDB

**Opção 1: MongoDB Local**
```bash
# Windows
mongod

# macOS/Linux
brew services start mongodb-community
```

**Opção 2: MongoDB Atlas (Cloud)**
1. Criar conta em [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Criar cluster gratuito
3. Copiar connection string
4. Atualizar `MONGODB_URL` no `.env`

### Frontend

Crie um arquivo `.env` ou `.env.local` na pasta `frontend/`:

```env
VITE_API_URL=http://localhost:3000
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
│   ├── controllers/
│   │   ├── LoginController.js
│   │   ├── RegisterController.js
│   │   ├── ShopController.js
│   │   └── ProductsController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Shop.js
│   │   └── Product.js
│   ├── routes/
│   │   ├── AuthRoutes.js
│   │   ├── ShopRoutes.js
│   │   └── ProductsRoutes.js
│   ├── middlewares/
│   │   └── authMiddleware.js
│   ├── db/
│   │   └── ConnectToDB.js
│   ├── index.js
│   ├── package.json
│   ├── jest.config.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── RegisterShop.jsx
│   │   │   ├── DashboardStore.jsx
│   │   │   ├── ManageShops.jsx
│   │   │   └── ManageProducts.jsx
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   └── ProductForm.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── .env
│
└── README.md
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
  "Authorization": "Bearer {token}"
}
```

> ⚠️ **Nota**: Rotas de autenticação não requerem token

---

## 🔐 Autenticação

### POST /auth/register

Criar nova conta de usuário.

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

**Response (201):**
```json
{
  "message": "User registered successfully"
}
```

**Erros:**
- `400` - Validação falhou ou usuário já existe
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

**Response (200):**
```json
{
  "userID": "507f1f77bcf86cd799439011",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Erros:**
- `400` - Email ou senha inválidos
- `500` - Erro interno

---

## 🏪 Lojas (Shops)

### POST /api/shops

Criar nova loja.

**Headers:**
```
Authorization: Bearer {token}
```

**Request:**
```bash
curl -X POST http://localhost:3000/api/shops \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer {token}" \
  -d '{
    "name": "Minha Loja Fashion",
    "description": "Roupas e acessórios de moda",
    "category": "moda",
    "ownerID": "507f1f77bcf86cd799439011"
  }'
```

**Response (201):**
```json
{
  "_id": "507f1f77bcf86cd799439012",
  "name": "Minha Loja Fashion",
  "description": "Roupas e acessórios de moda",
  "category": "moda",
  "owner": "507f1f77bcf86cd799439011",
  "createdAt": "2024-05-11T10:30:00Z",
  "updatedAt": "2024-05-11T10:30:00Z"
}
```

---

### GET /api/shops

Listar todas as lojas (admin).

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
    "description": "Roupas e acessórios de moda",
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
  "description": "Roupas e acessórios de moda",
  "category": "moda",
  "owner": { ... },
  "createdAt": "2024-05-11T10:30:00Z"
}
```

**Erros:**
- `404` - Loja não encontrada

---

### GET /api/shops/owner/:ownerID

Listar lojas de um proprietário.

**Request:**
```bash
curl -X GET http://localhost:3000/api/shops/owner/507f1f77bcf86cd799439011 \
  -H "Authorization: Bearer {token}"
```

**Response (200):**
```json
[
  { /* loja 1 */ },
  { /* loja 2 */ }
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
  "category": "moda"
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

Criar novo produto.

**Headers:**
```
Authorization: Bearer {token}
Content-Type: application/json
```

**Request:**
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer {token}" \
  -d '{
    "name": "Camiseta Minimalista",
    "price": 89.90,
    "description": "Camiseta 100% algodão com design minimalista",
    "shopID": "507f1f77bcf86cd799439012"
  }'
```

**Response (201):**
```json
{
  "_id": "507f1f77bcf86cd799439013",
  "name": "Camiseta Minimalista",
  "price": 89.90,
  "description": "Camiseta 100% algodão com design minimalista",
  "idShop": "507f1f77bcf86cd799439012",
  "imagesUrls": [],
  "__v": 0
}
```

---

### GET /api/products

Listar todos os produtos.

**Request:**
```bash
curl -X GET http://localhost:3000/api/products \
  -H "Authorization: Bearer {token}"
```

**Response (200):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439013",
    "name": "Camiseta Minimalista",
    "price": 89.90,
    "description": "Camiseta 100% algodão com design minimalista",
    "idShop": "507f1f77bcf86cd799439012",
    "imagesUrls": []
  }
]
```

---

### GET /api/products/:id

Obter detalhes de um produto.

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
  "description": "Camiseta 100% algodão com design minimalista",
  "idShop": "507f1f77bcf86cd799439012",
  "imagesUrls": []
}
```

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
  {
    "_id": "507f1f77bcf86cd799439013",
    "name": "Camiseta Minimalista",
    "price": 89.90,
    "description": "Camiseta 100% algodão com design minimalista",
    "idShop": "507f1f77bcf86cd799439012"
  },
  { /* produto 2 */ }
]
```

---

### PUT /api/products/:id

Atualizar produto (em desenvolvimento).

**Status:** 🔄 Em implementação

---

### DELETE /api/products/:id

Deletar produto (em desenvolvimento).

**Status:** 🔄 Em implementação

---

## 🚀 Iniciando o Projeto

### Terminal 1 - Backend

```bash
cd backend
npm start
```

Saída esperada:
```
Server running on port 3000
Connected to MongoDB
```

### Terminal 2 - Frontend

```bash
cd frontend
npm run dev
```

Saída esperada:
```
  VITE v4.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
```

### Acessar a Aplicação

Abra seu navegador e acesse:
```
http://localhost:5173
```

---

## 📱 Rotas Frontend

| Rota | Descrição | Auth | Status |
|------|-----------|------|--------|
| `/` | Home | Opcional | ✅ |
| `/login` | Login de usuário | ❌ | ✅ |
| `/register` | Registro de usuário | ❌ | ✅ |
| `/register-shop` | Criar nova loja | ✅ | ✅ |
| `/manage-shops` | Gerenciar lojas | ✅ | ✅ |
| `/dashboard-store` | Dashboard da loja | ✅ | ✅ |
| `/manage-products` | Gerenciar produtos | ✅ | ✅ |

---

## 🧪 Testes Automatizados

### Visão Geral dos Testes

O projeto inclui uma suite completa de testes unitários para os controllers utilizando **Jest**. Os testes cobrem:

- ✅ **LoginController** - Autenticação de usuários
- ✅ **RegisterController** - Registro de novos usuários
- ✅ **ShopController** - Gerenciamento de lojas
- ✅ **ProductsController** - Gerenciamento de produtos

### Estrutura dos Testes

```
backend/
├── __tests__/
│   └── controllers/
│       ├── LoginController.spec.js
│       ├── RegisterController.spec.js
│       ├── ShopController.spec.js
│       └── ProductsController.spec.js
```

### Executar os Testes

#### Executar todos os testes
```bash
cd backend
npm test
```

#### Executar com cobertura
```bash
npm test -- --coverage
```

#### Executar um arquivo de teste específico
```bash
npm test LoginController.spec.js
```

#### Executar em modo watch (reexecuta ao detectar mudanças)
```bash
npm test -- --watch
```

### Detalhes dos Testes

#### **LoginController.spec.js**
Testa a autenticação de usuários:

- ✅ Login bem-sucedido com email e senha válidos
- ✅ Retorna erro 400 se usuário não existe
- ✅ Retorna erro 400 se senha está incorreta
- ✅ Valida geração correta do JWT token
- ✅ Retorna userID e token na resposta

**Casos de teste:**
```javascript
✓ should log in a user successfully
✓ should return 400 if user does not exist
✓ should return 400 if password is incorrect
```

---

#### **RegisterController.spec.js**
Testa o registro de novos usuários:

- ✅ Registra novo usuário com sucesso
- ✅ Retorna erro 400 se usuário já existe
- ✅ Valida campos obrigatórios (name, email, password)
- ✅ Retorna mensagem de sucesso (201)

**Casos de teste:**
```javascript
✓ should register a new user successfully
✓ should return an error if user already exists
```

---

#### **ShopController.spec.js**
Testa o gerenciamento de lojas:

- ✅ Criar loja com sucesso
- ✅ Listar todas as lojas com populate do owner
- ✅ Obter loja específica por ID
- ✅ Atualizar informações da loja
- ✅ Deletar loja
- ✅ Listar lojas de um proprietário específico
- ✅ Retorna erro 404 se loja não encontrada
- ✅ Retorna erro 500 em caso de erro no banco

**Casos de teste:**
```javascript
✓ deve criar uma loja com sucesso
✓ deve retornar 500 em caso de erro no banco
✓ deve listar todas as lojas com populate
✓ deve retornar uma loja específica
✓ deve retornar 404 se a loja não existir
✓ deve atualizar a loja com sucesso
✓ deve deletar a loja com sucesso
✓ deve retornar lojas de um dono específico
```

---

#### **ProductsController.spec.js**
Testa o gerenciamento de produtos:

- ✅ Criar produto com upload de imagem
- ✅ Retorna erro 400 se nenhum arquivo foi enviado
- ✅ Retorna erro 500 em caso de erro no banco
- ✅ Buscar produtos por shopID
- ✅ Obter produto específico por ID
- ✅ Retorna erro 404 se produto não encontrado
- ✅ Listar produtos de uma loja específica

**Casos de teste:**
```javascript
✓ deve criar um produto com upload de imagem
✓ deve retornar 400 se nenhum arquivo for enviado
✓ deve retornar 500 em caso de erro no salvamento do banco
✓ deve falhar se o Axios falhar
✓ deve buscar produtos por shopID
✓ deve retornar um produto pelo ID
✓ deve retornar 404 se o produto não for encontrado
✓ deve listar produtos da loja
```

### Configuração do Jest

O arquivo `jest.config.js` no backend deve conter:

```javascript
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

### Mock de Dependências

Os testes utilizam mocks do Jest para isolar os controllers:

```javascript
jest.mock('../../models/User');
jest.mock('jsonwebtoken');
jest.mock('../../models/Product.js');
jest.mock('axios');
```

### Boas Práticas nos Testes

- ✅ Cada teste é independente (usa `beforeEach` para limpar)
- ✅ Mocks são resetados entre testes (`jest.clearAllMocks()`)
- ✅ Testes cobrem casos de sucesso e erro
- ✅ Nomes descritivos dos testes (português)
- ✅ Assertions claras e específicas

---

## 🔒 Autenticação & Segurança

### Como Funciona

1. Usuário faz login com email e senha
2. Backend valida credenciais com bcrypt
3. JWT token é gerado (válido por 1 hora)
4. Cliente armazena token no `location.state`
5. Token é enviado em cada requisição autenticada

### Middleware de Autenticação

```javascript
// Todas as rotas /api requerem token válido
Authorization: Bearer {token}
```

### Melhorias de Segurança Planejadas

- [ ] Armazenar token em localStorage com encriptação
- [ ] Refresh tokens para renovação automática
- [ ] Rate limiting em rotas de autenticação
- [ ] Validação de CORS mais restritiva
- [ ] HTTPS em produção

---

## 🚧 Roadmap

### Fase 1 - MVP (Atual)
- [x] Autenticação de usuários
- [x] Gerenciamento de lojas
- [x] Catálogo de produtos básico
- [x] Dashboard para vendedores
- [x] Testes automatizados (Controllers)

### Fase 2 - Melhorias
- [ ] Testes E2E com Cypress
- [ ] Testes de integração
- [ ] Upload de imagens para produtos
- [ ] Avaliações e comentários
- [ ] Carrinho de compras

### Fase 3 - Expansão
- [ ] Checkout e pagamento
- [ ] Pedidos e rastreamento
- [ ] Sistema de mensagens
- [ ] Relatórios e analytics
- [ ] App mobile (React Native)

### Fase 4 - Produção
- [ ] Deploy em servidor de produção
- [ ] CDN para imagens
- [ ] Cache com Redis
- [ ] CI/CD pipeline
- [ ] Monitoring e logging

---

## 🐛 Conhecidos Issues

### Em Desenvolvimento
- ❌ Funcionalidade de update/delete de produtos não implementada
- ❌ Upload de imagens para produtos não funciona ainda
- ❌ Validação completa de erros no frontend
- ❌ Logout não implementado
- ⚠️ Token armazenado em memory (perdido ao recarregar página)

---

## 💡 Melhorias Planejadas

```
[ ] Implementar update e delete de produtos
[ ] Sistema de upload de imagens integrado
[ ] Validação robusta de formulários
[ ] Tratamento de erros melhorado
[ ] Persistência de sessão
[ ] Testes E2E com Cypress
[ ] Testes de integração
[ ] Documentação de API com Swagger
[ ] Performance optimization
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para começar:

1. **Fork** o repositório
2. **Crie uma branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra um Pull Request**

### Padrões de Código

- Use ES6+ modules
- Siga convenções de nomenclatura camelCase
- Adicione comentários para código complexo
- Teste suas mudanças antes de submeter
- Mantenha a cobertura de testes acima de 80%

---

## 📚 Documentação Adicional

### Modelos de Dados

#### User
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (bcrypt hashed),
  createdAt: Date,
  updatedAt: Date
}
```

#### Shop
```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  category: String,
  owner: ObjectId (ref: User),
  createdAt: Date,
  updatedAt: Date
}
```

#### Product
```javascript
{
  _id: ObjectId,
  name: String,
  price: Number,
  description: String,
  idShop: ObjectId (ref: Shop),
  imagesUrls: [String],
  createdAt: Date (implicit),
  updatedAt: Date (implicit)
}
```

---

## 🔗 Links Úteis

- [Documentação Express](https://expressjs.com/)
- [Documentação Mongoose](https://mongoosejs.com/)
- [Documentação React](https://react.dev/)
- [Jest Testing Framework](https://jestjs.io/)
- [JWT.io](https://jwt.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Vite Guide](https://vitejs.dev/)

---

## 📞 Suporte

Se encontrou um bug ou tem uma sugestão:

1. Abra uma [Issue](https://github.com/seu-usuario/ecommerce-prototype/issues)
2. Descreva o problema com detalhes
3. Inclua screenshots se relevante
4. Mencione sua versão do Node.js/npm

---

## 📄 Licença

Este projeto está sob a licença **ISC**. Veja [LICENSE](LICENSE) para detalhes.

---

## 👨‍💻 Autor

**Seu Nome**
- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- Email: seu.email@exemplo.com

---

## 🙏 Agradecimentos

- [Vercel](https://vercel.com/) - Deploy recomendado
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Banco de dados
- [ImgBB](https://imgbb.com/) - Hospedagem de imagens
- [Jest](https://jestjs.io/) - Framework de testes

---

<div align="center">

**⭐ Se este projeto foi útil, deixe uma star no repositório!**

Feito com ❤️ em desenvolvimento

v2.0.0 - 2026

</div>
