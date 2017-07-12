export const addTodo = todo => {
  return {
    type: 'TODO_CREATE',
    todo
  }
};

export const updateTodo = todo => {
  return {
    type: 'TODO_UPDATE',
    todo
  }
};

export const deleteTodo = createdAt => {
  return {
    type: 'TODO_DELETE',
    createdAt
  }
};