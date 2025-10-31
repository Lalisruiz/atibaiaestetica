# Atibaia Estética

Site institucional e sistema de gerenciamento para clínica de estética, desenvolvido com React, TypeScript e Tailwind CSS.

## Sobre o Projeto

O projeto foi desenvolvido para uma clínica de estética localizada em Atibaia, oferecendo uma plataforma moderna, intuitiva e responsiva para gerenciamento de produtos e categorias de tratamentos estéticos.

A aplicação permite visualizar, cadastrar, editar e excluir produtos e categorias, proporcionando uma experiência completa de administração e apresentação dos serviços da clínica, além de destacar o trabalho dos profissionais.

## Desenvolvedores

- **Larissa Ruiz** - Desenvolvimento Frontend
- **Matheus Pereira** - Desenvolvimento Frontend

## Tecnologias Utilizadas

- **React** 19.2.0 - Biblioteca para construção de interfaces
- **TypeScript** 5.9.3 - Superset do JavaScript com tipagem estática
- **Vite** 7.1.14 - Build tool e servidor de desenvolvimento
- **Tailwind CSS** 4.1.16 - Framework CSS utilitário
- **React Router DOM** 7.9.5 - Roteamento para aplicações React
- **Axios** 1.13.1 - Cliente HTTP para comunicação com APIs
- **React Spinners** 0.17.0 - Componentes de loading
- **Phosphor Icons** 2.1.10 - Biblioteca de ícones
- **React Toastify** 11.0.5 - Notificações toast

## Funcionalidades

### Produtos
- Listagem de produtos com cards informativos
- Cadastro de novos produtos
- Edição de produtos existentes
- Exclusão de produtos com confirmação
- Modal para visualização detalhada
- Associação com categorias

### Categorias
- Gerenciamento completo de categorias
- CRUD completo (Create, Read, Update, Delete)
- Interface intuitiva para organização

### Interface
- Design responsivo e moderno
- Navegação intuitiva
- Feedback visual para ações do usuário
- Componentes reutilizáveis

## Estrutura do Projeto

```
src/
├── components/
│   ├── footer/           # Rodapé da aplicação
│   ├── navbar/           # Barra de navegação
│   ├── produto/          # Componentes relacionados a produtos
│   │   ├── cardproduto/
│   │   ├── deletarproduto/
│   │   ├── formproduto/
│   │   ├── listaproduto/
│   │   └── modalproduto/
│   └── categoria/        # Componentes relacionados a categorias
│       ├── cardcategoria/
│       ├── deletarcategoria/
│       ├── formcategoria/
│       └── listacategoria/
├── models/               # Interfaces TypeScript
│   ├── Produto.ts
│   └── Categoria.ts
├── pages/                # Páginas da aplicação
│   └── home/
├── services/             # Serviços de API
│   └── Service.ts
└── assets/               # Recursos estáticos
```

Acesse a aplicação em: 
(em breve)

## API Integration

O projeto está configurado para se comunicar com uma API REST. As principais rotas esperadas são:

- `GET /api/produtos` - Listar produtos
- `POST /api/produtos` - Criar produto
- `PUT /api/produtos/:id` - Atualizar produto
- `DELETE /api/produtos/:id` - Excluir produto
- `GET /api/categorias` - Listar categorias
- `POST /api/categorias` - Criar categoria
- `PUT /api/categorias/:id` - Atualizar categoria
- `DELETE /api/categorias/:id` - Excluir categoria

## Objetivo Técnico 

Aplicar conceitos de componentização, tipagem estática, rotas dinâmicas e integração com APIs REST, utilizando boas práticas de clean code, UI/UX e responsividade, com foco na experiência do usuário e eficiência do gerenciamento interno.

## Contribuição 

Este projeto foi desenvolvido especificamente para a clínica de estética em Atibaia. Para modificações ou melhorias, entre em contato com os desenvolvedores.

## Suporte

Para dúvidas ou suporte técnico, entre em contato com a equipe de desenvolvimento:
- Larissa Ruiz
- Matheus Pereira
