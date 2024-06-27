const fetchUserTodos = async (userUrl, todoUrl) => {
  try {
    const users = fetch(userUrl).then((data) => data.json());
    const todos = fetch(todoUrl).then((data) => data.json());

    const response = await Promise.all([users, todos]);

    if (!response) throw new Error("unable to retrieve data");

    const userTodos = [];
    response[0].map(({ id, name }) => {
      // const id = user.id;
      // const name = user.name;
      const todos = response[1].filter((todo) => todo.userId === id);
      const obj = {
        id,
        name,
        todos,
      };
      userTodos.push(obj);
    });
    return userTodos;
  } catch (error) {
    alert(error);
  }
};

fetchUserTodos(
  `https://jsonplaceholder.typicode.com/users`,
  `https://jsonplaceholder.typicode.com/todos`
)
  .then((data) => console.log(data))
  .catch((e) => console.log(e));
