const baseURL = "https://jsonplaceholder.typicode.com/users/";
const headers = {
  "Content-type": "application/json; charset=UTF-8",
};

const getUsers = () => {
  return fetch(baseURL)
    .then(response => response.json());
}
  
const createUser = (user) => {
  return fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify(user),
    headers,
  })
    .then((response) => response.json());
}

const updateUser = (user) => {
  return fetch(`${baseURL}${user.id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers,
  })
    .then((response) => response.json());
}

const deleteUser = (id) => {
  return fetch(`${baseURL}${id}`, {
    method: 'DELETE',
  });
}


export default {
  getUsers,
  createUser,
  updateUser,
  deleteUser
}
  