# Store Admin

Deploy: https://triskinstore.vercel.app/

## Instruções de execução

1. Instalar dependências

```bash
npm install
#ou
yarn install
```

2. Executar projeto

```bash
npm run dev
#ou
yarn dev
```

3. Executar o JSON Server

```bash
npm run server
#ou
yarn server
```

## Tecnologias utilizadas

Ferramenta de build: Vite (React + Typescript)  
Estilização: Styled Components  
Design System: Radix UI  
HTTP Client: Axios  
Gerenciador de estado: Jotai  
Data-fetching: SWR  
Roteamento: React Router

## Estratégias de otimização e estado global

Para o gerenciamento do Carrinho, utilizei um cart atom persistente no localStorage. Trata-se de um array com o id do produto e a quantidade. Criei uma store para gerenciar a manipulação dos itens, onde possui controle de todas as ações. Por fim, na tela do carrinho, faço um get dos produtos que estão no Carrinho e associo as demais informações (nome, preço), podendo assim ser possível calcular os valores envolvidos.

No mais, criei um estado global para os produtos da listagem e do carrinho, para o termo pesquisado no SearchInput, e outro para identificar qual produto está sendo editado. Dessa forma, os dados estão bem integrados e otimizados em toda extensão da aplicação.
