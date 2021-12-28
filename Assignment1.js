async function loadUsers(url) {
  const response = await fetch(url); //github api
  const users = await response.json(); //change it to json
  return users; //return the whole users
}

async function getData(users) {
  var data = users.data;
  var temp = "";
  data.forEach((u) => {
    temp += "<tr>";
    temp += "<td>" + u.id + "</td>";
    temp += "<td>" + u.title + "</td>";
    temp += "<td>" + u.date_start + "</td>";
    temp += "<td>" + u.date_end + "</td>";
    temp += "<td>" + u.artist_display + "</td>";
    temp += "<td>" + u.place_of_origin + "</td>";
  });
  document.getElementById("data").innerHTML = temp;
}
//to get the users data
document.addEventListener("DOMContentLoaded", async () => {
  try {
    users = await loadUsers("https://api.artic.edu/api/v1/artworks");
    getData(users);
  } catch (e) {
    console.log(e);
  }
});
