# <p align="center">MyMoney - Ciclos de Pagamento</p>
<p align="center">
    <img src="https://github.com/GabrielLima5/imagens-projetos/blob/main/images/MyMoney.png?raw=true">
</p>
O projeto MyMoney foi desenvolvido durante o <a href="https://github.com/GabrielLima5/curso-redux">Curso de Redux</a> da <a href="https://www.cod3r.com.br/">Cod3r Treinamentos</a>. Ele é totalmente responsivo e permite aos usuários gerenciar seus ciclos de pagamento, incluindo o cadastro de ganhos e despesas mensais, para ter total controle de sua vida financeira. 

O desenvolvimento desse projeto proporcionou uma compreensão prática e aprofundada do Redux. Alguns dos recursos utilizados e habilidades aprimoradas se encontram listadas a seguir:

## Recursos Utilizados

### Backend
* **Mongoose e MongoDB:** Utilizei o Mongoose para se conectar ao banco de dados MongoDB e criar schemas eficientes para representar os ciclos de pagamento.

* **Express:**
O framework Express foi empregado para modelar a API, facilitando a criação de rotas e a manipulação das requisições HTTP.

* **Middlewares Importantes:** Fiz uso de alguns middlewares importantes para satisfazer algumas necessidades que a aplicação possui. Dentre os middlewares utilizados, se encontram o BodyParser (responsável por interpretar o corpo das requisições) e o CORS (para permitir requisições diferentes origens)

### Frontend
* **Action Creators e Reducers:** Implementei action creators e reducers para gerar o ciclo de alteração do estado, refletindo assim nos valores do dashboard, na visibilidade das abas e nos ciclos de pagamento. Isso proporciona um controle eficaz do estado da aplicação.

* **Middlewares:** Assim como no backend, fiz uso de alguns middlewares importantes, mas dessa vez com relação ao Redux. Dentre os middlewares utilizados, estão: **Redux Promise** (para aguardar a resolução de promises), **Redux Thunk** (para utilzar o dispatch de maneira assíncrona) e **Redux Multi** (para fazer o dispatch de múltiplas actions).

* **Redux Form:** Integrei a biblioteca Redux Form para gerenciar de forma eficiente os campos de formulário, simplificando a interação com o estado global.

* **React Toastify:** Utilizei a biblioteca React Toastify para exibir notificações (toasts) intuitivas de erro ou sucesso, proporcionando uma experiência do usuário mais amigável.

* **Axios:** Empreguei o Axios para realizar requisições assíncronas ao backend, possibilitando a obtenção de dados de forma eficiente.

* **React Router Dom:** Implementei o React Router Dom para criar e gerenciar as rotas da aplicação, permitindo a navegação fluida entre diferentes partes do projeto.

* **Bootstrap**: Usei o sistema Grid de 12 colunas do Bootstrap e também algumas de suas classes para deixar o projeto responsivo.

## Como usar
Para usar o MyMoney, você deve ter o Node.js instalado em sua máquina. Caso ainda não possua o Node instalado, instale-o pelo <a href="https://nodejs.org/en">site oficial</a>. Com o Node em sua máquina, execute os seguintes passos:

### Backend

* 1. Abra o terminal, selecione a pasta "backend" localizada dentro do projeto e digite o código: 
```
npm install
``` 
* 2. Após instaladas as dependências, digite o código:
```
npm run dev
```

* 3. Pronto! O Backend da aplicação já foi ativado, mas ainda não acabou. Siga os passos do Frontend.

<hr />

### Frontend

* 1. Abra um novo terminal, seleciona a pasta "frontend" localizada dentro do projeto e digite o código
```
npm install
```

* 2. Após instaladas as dependências, digite o código:
```
npm start
```

* 3. Pronto! Agora tanto o Frontend como o Backend da aplicação estão ativos e ela está pronta.