export const addTodo = todo => {
  return {
    type: 'TODO_CREATE',
    todo
  }
};

export const updateTodo = modifiedTodo => {
  return {
    type: 'TODO_UPDATE',
    modifiedTodo
  }
};

export const deleteTodo = createdAt => {
  return {
    type: 'TODO_DELETE',
    createdAt
  }
};