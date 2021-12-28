async function loadUsers(url) {
  const response = await fetch(url); //github api
  const users = await response.json(); //change it to json
  return users; //return the whole users
}
async function getAuthorData(users) {
  //console.log(users);
  let div = document.getElementById("AuthorDiv");
  for (i = 1; i <= 20; i++) {
    console.log(users[i]);
    div.innerHTML += `
          <tr>
            <th scope="row">${i}</th>
            <td>${users[i]["quote"]}</td>
            <td>${users[i]["author"]}</td>
        </tr>`;
  }
}
//to get the users data
document.addEventListener("DOMContentLoaded", async () => {
  try {
    Authors = await loadUsers(
      "https://api.collinsdictionary.com/api/v1/dictionaries"
    );
    getAuthorData(Authors);
  } catch (e) {
    console.log(e);
  }
});
