const form = document.getElementById('work-form');
const workList = document.getElementById('work-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('work-title').value;
  const link = document.getElementById('work-link').value;

  if (title.trim() && link.trim()) {
    const listItem = document.createElement('div');
    listItem.innerHTML = `
      <h3>${title}</h3>
      <p><a href="${link}" target="_blank">${link}</a></p>
    `;
    workList.appendChild(listItem);

    document.getElementById('work-title').value = '';
    document.getElementById('work-link').value = '';
  }
});
