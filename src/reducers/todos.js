const todos = (state = [], action) => {
  switch (action.type) {
    case 'TODO_CREATE':
      return [
        {
          title: action.todo.title,
          desc: action.todo.desc,
          createdAt: action.todo.createdAt,
          status: 'todo'
        },
        ...state
      ];
    case 'TODO_UPDATE':
      return state.map(todo =>
        todo.createdAt === action.createdAt ? {...todo, status: action.status} : todo
      );
    case 'TODO_DELETE':
      return state.filter(todo =>
        todo.createdAt !== action.createdAt
      );
    default:
      return state;
  }
};

export default todos;