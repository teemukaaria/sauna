
export default function handle(input) {
  const bodyString = `username=${input.name}&password=${input.pwd}`;
  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: bodyString,
  }).then((response) => { response.json(); })
    .then(responseJson => responseJson.status)
    .catch(error => console.error(error));
}
