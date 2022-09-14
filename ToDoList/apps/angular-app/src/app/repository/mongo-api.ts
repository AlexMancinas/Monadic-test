
const LOCAL_BASE_ENDPOINT_API = "http://localhost:5001/nestjs-361723/us-central1/api" as const;
const PRODUCTION_BASE_ENDPOINT_APIT = "https://us-central1-nestjs-361723.cloudfunctions.net/api" as const;
export const ENDPOINTS_TREE = {
    PRODUCTION: {
        GET_ALL_TODOS: PRODUCTION_BASE_ENDPOINT_APIT + '/all',
        CREATE_NEW_TODO: PRODUCTION_BASE_ENDPOINT_APIT + '/create',
        DELETE_TODO_BY_ID: PRODUCTION_BASE_ENDPOINT_APIT + '/delete/',
        UPDATE_TODO_BY_ID: PRODUCTION_BASE_ENDPOINT_APIT + '/updateToDoItem/',
        GET_TODO_BY_ID: PRODUCTION_BASE_ENDPOINT_APIT + '/getTodoById/',
    },
    DEVELOPMENT: {
        GET_ALL_TODOS: LOCAL_BASE_ENDPOINT_API + '/all',
        CREATE_NEW_TODO: LOCAL_BASE_ENDPOINT_API + '/create',
        DELETE_TODO_BY_ID: LOCAL_BASE_ENDPOINT_API + '/delete/',
        UPDATE_TODO_BY_ID: LOCAL_BASE_ENDPOINT_API + '/updateToDoItem/',
        GET_TODO_BY_ID: LOCAL_BASE_ENDPOINT_API + '/getTodoById/',
    }
} as const;