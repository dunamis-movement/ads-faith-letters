# 📮 Faith Letters

> **Conectando corações através da fé** - Uma plataforma para enviar cartas de encorajamento e apoio a missionários ao redor do mundo.

## 🌟 Sobre o Projeto

Faith Letters é uma aplicação web desenvolvida para fortalecer os laços entre a comunidade cristã e missionários que trabalham em diferentes países. A plataforma permite que usuários enviem cartas personalizadas de encorajamento, incluindo versículos bíblicos inspiradores, para apoiar aqueles que dedicam suas vidas ao serviço missionário.

### ✨ Funcionalidades Principais

- 📋 **Visualização de Missionários**: Explore perfis detalhados de missionários ativos
- ✍️ **Criação de Cartas**: Escreva cartas personalizadas de encorajamento
- 📖 **Versículos Inspiradores**: Inclua versículos bíblicos em suas mensagens
- 💌 **Gerenciamento de Correspondências**: Acompanhe cartas enviadas e recebidas
- 🌍 **Alcance Global**: Conecte-se com missionários em diferentes países

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19** - Biblioteca para construção da interface
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e dev server ultrarrápido
- **Lucide React** - Ícones modernos e elegantes

### Backend/API
- **JSON Server** - API REST simulada para desenvolvimento

### Ferramentas de Desenvolvimento
- **ESLint** - Linting e padronização de código
- **TypeScript ESLint** - Regras específicas para TypeScript

## 📁 Estrutura do Projeto

```
faith-letters/
├── mobile/                 # Aplicação mobile (futuro)
└── web/                   # Aplicação web
    ├── public/            # Arquivos estáticos
    ├── src/
    │   ├── api/           # Configurações de API
    │   ├── assets/        # Recursos estáticos
    │   ├── contexts/      # Contextos React (AppContext)
    │   ├── hooks/         # Hooks customizados
    │   ├── types.ts       # Definições de tipos TypeScript
    │   ├── App.tsx        # Componente principal
    │   └── main.tsx       # Ponto de entrada
    ├── db.json           # Base de dados simulada
    └── package.json      # Dependências e scripts
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**

### Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd ads-faith-letters
   ```

2. **Navegue para o diretório web**
   ```bash
   cd web
   ```

3. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

### Executando a Aplicação

1. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```
   A aplicação estará disponível em `http://localhost:5173`

2. **Em outro terminal, inicie o JSON Server (API)**
   ```bash
   npm run server
   ```
   A API estará disponível em `http://localhost:3000`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter
- `npm run server` - Inicia o JSON Server

## 📊 Dados da Aplicação

A aplicação utiliza um arquivo `db.json` que contém:

- **Missionários**: Perfis com informações pessoais, campo de atuação e país
- **Versículos**: Coleção de versículos bíblicos inspiradores
- **Cartas**: Correspondências enviadas entre usuários e missionários

## 🏗️ Arquitetura

### Gerenciamento de Estado
- **AppContext**: Context API para estado global da aplicação
- **Hooks Customizados**: 
  - `useMissionaries` - Gerencia dados dos missionários
  - `useLetters` - Gerencia cartas e correspondências
  - `useVerses` - Gerencia versículos bíblicos

### Tipagem TypeScript
- Interfaces bem definidas para `Missionary`, `Letter`, `Verse`
- Tipagem completa em toda a aplicação
- IntelliSense aprimorado para melhor experiência de desenvolvimento

## 🎯 Próximos Passos

- [ ] Interface de usuário completa
- [ ] Sistema de autenticação
- [ ] Notificações em tempo real
- [ ] Aplicação mobile (React Native)
- [ ] Integração com banco de dados real
- [ ] Sistema de moderação de conteúdo
- [ ] Suporte a múltiplos idiomas

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 💝 Apoio

Se este projeto te ajudou de alguma forma, considere dar uma ⭐ no repositório!

---

**Desenvolvido com ❤️ para fortalecer a comunidade cristã global**