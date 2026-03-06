# URL Shortener API

Este é um projeto de backend robusto desenvolvido para o encurtamento de URLs, facilitando o compartilhamento de links e permitindo o rastreamento de acessos em tempo real. O sistema foi construído utilizando uma arquitetura de API REST, garantindo escalabilidade e organização.



## Funcionalidades

* **Encurtamento de URLs**: Transforma links extensos em códigos alfanuméricos curtos e únicos.
* **Redirecionamento Inteligente**: Encaminha o usuário automaticamente para a URL original ao acessar o link curto.
* **Rastreamento de Cliques (Analytics)**: Incrementa automaticamente um contador no banco de dados a cada acesso realizado ao link encurtado.
* **Persistência Relacional**: Armazenamento seguro de todos os dados em um banco de dados PostgreSQL.
* **Segurança de Configuração**: Uso de variáveis de ambiente para proteção de credenciais sensíveis.

## Tecnologias Utilizadas

* **Runtime**: Node.js
* **Framework**: Express
* **Banco de Dados**: PostgreSQL
* **Bibliotecas**:
    * pg: Driver para integração e execução de queries no PostgreSQL.
    * nanoid: Geração de identificadores únicos e seguros.
    * dotenv: Gerenciamento de variáveis de ambiente (.env).
    * nodemon: Ferramenta para reinicialização automática do servidor em desenvolvimento.

## Instalação e Configuração

### 1. Clonar o Repositório
Para começar, clone este repositório para sua máquina local:
git clone https://github.com/seu-usuario/url-shortener.git
cd url-shortener

### 2. Instalar Dependências
Instale todos os pacotes necessários listados no package.json:
npm install

### 3. Configurar o Banco de Dados
No seu terminal PostgreSQL ou ferramenta de gestão (como pgAdmin), execute o seguinte script SQL para criar a tabela:

CREATE TABLE urls (
  id SERIAL PRIMARY KEY,
  original_url TEXT NOT NULL,
  short_code VARCHAR(10) UNIQUE NOT NULL,
  clicks INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

### 4. Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto e configure suas credenciais seguindo este modelo:

PORT=3000
DATABASE_URL=postgres://seu_usuario:sua_senha@localhost:5432/nome_do_banco

### 5. Executar o Projeto
Inicie o servidor em modo de desenvolvimento:
npm run dev

## Endpoints da API

| Metodo | Endpoint | Descricao |
| :--- | :--- | :--- |
| POST | /shorten | Recebe uma originalUrl no corpo (JSON) e retorna o link encurtado. |
| GET | /:code | Redireciona para o link original e incrementa o contador de cliques. |

## Autor

Gustavo Cardoso
* Estudante de Análise e Desenvolvimento de Sistemas.
* Técnico em Desenvolvimento de Sistemas.
* Desenvolvedor focado em Backend.
