const usersEl = document.querySelector('.users');
fetch('/users')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    for (let user of data.items) {
      const userEl = document.createElement('div')
      userEl.classList.add('user')
      userEl.innerHTML = `
      <h3>${user.name}</h3>
      <p>${user.email}</p>
      `
      usersEl.append(userEl);
    }
  })