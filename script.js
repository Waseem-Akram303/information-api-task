document.getElementById("fetchButton").addEventListener("click", fetchData);

function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      const userData = document.getElementById("userData");
      userData.innerHTML = ""; // Clear previous data

      data.forEach((user) => {
        const userInfo = document.createElement("div");
        userInfo.classList.add("user-info");
        userInfo.innerHTML = `
                    <h3>${user.name}</h3>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <hr>
                `;
        userData.appendChild(userInfo);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
