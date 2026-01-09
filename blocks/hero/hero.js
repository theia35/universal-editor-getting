export default function decorate(block) {
  const rows = [...block.querySelectorAll(':scope > div')];

  const title = rows[0]?.textContent || '';
  const subtitle = rows[1]?.textContent || '';
  const cta = rows[2]?.textContent || '';

  block.innerHTML = `
    <h1>${title}</h1>
    <p>${subtitle}</p>
    <a class="btn">${cta}</a>
  `;
}