This project was given me as an interview assignment.

# Development notes:
1. I created this project using [Create React App](https://github.com/facebookincubator/create-react-app). It automatically set webpack and babel configurations.
2. I use [prettier](https://prettier.io/docs/en/) to enforce consistent code style. And increase productivity by auto formting indents, long lines, and more evey time file saved.
3. I created REST API. REST API is about resources, In this project there is one resource "books". So I named the path for all requests '/rest/book/'

| Action      | Http method | Path          | Response status code | Request body                                                                    |
|-------------|-------------|---------------|----------------------|---------------------------------------------------------------------------------|
| Fetch books | GET         | '/rest/book/' | 200                  |                                                                                 |
| Add book    | PUT         | '/rest/book/' | 201 CREATED          | ```{"title": [string], "author": [string], "date": [number]}```                 |
| Update book | POST        | '/rest/book/' | 204 No Content       | ```{"id": [string], "title": [string], "author": [string], "date": [number]}``` |
| Delete book | DELETE      | '/rest/book/' | 204 No Content       | ```{"id": [string]}```                                                          |

* HTTP 204 No Content: The server successfully processed the request, but is not returning any content
* On wrong client request such as missing body or wrong body, HTTP 400 Bad Request. Full error reason description is in http body.
* On server error, 500 status code.

4. By running `node rest.js`, the REST API Server will run on port 3001. 
5. In package.json configuration, I added `"proxy": "http://localhost:3001"`, this will automatically redirect all requests in ajax requests.
6. I use Redux for state management. I wrote async actions to access the REST API as written in Redux documentation. [https://redux.js.org/docs/advanced/AsyncActions.html](https://redux.js.org/docs/advanced/AsyncActions.html)
* I created directories:

| Directory path      | What is inside? |
|---------------------|-----------------|
| `src/actions`       | Action creators |
| `src/actions/types` | Action types    |
| `src/actions/ajax`  | Ajax requests   |
| `src/reducers`      | Reducers, store |

