'use strict';
const { categories, products } = window.catalog;
let active = 'all';
const tabs = document.querySelector('#tabs');
const search = document.querySelector('#search');
function element(tag, className, value) {
  const node = document.createElement(tag);
  node.className = className;
  if (value) node.textContent = value;
  return node;
}
function render() {
  tabs.replaceChildren();
  for (const category of [{ id: 'all', name: 'Alle deler' }, ...categories]) {
    const button = element('button', active === category.id ? 'tab active' : 'tab', category.name);
    button.type = 'button';
    button.setAttribute('aria-pressed', String(active === category.id));
    button.append(element('span', 'tab-count', String(products.filter(p => category.id === 'all' || p.category === category.id).length)));
    button.onclick = () => { active = category.id; render(); };
    tabs.append(button);
  }
  const query = search.value.trim().toLocaleLowerCase('nb');
  const filtered = products.filter(p => (active === 'all' || p.category === active) && [p.name, p.partNumber, p.description, p.fits].filter(Boolean).join(' ').toLocaleLowerCase('nb').includes(query));
  document.querySelector('#category-title').textContent = active === 'all' ? 'Alle deler' : categories.find(c => c.id === active).name;
  document.querySelector('#count').textContent = `${filtered.length} ${filtered.length === 1 ? 'produkt' : 'produkter'}`;
  const grid = document.querySelector('#products');
  grid.replaceChildren();
  for (const product of filtered) {
    const card = element('article', 'product');
    card.append(element('span', 'product-category', categories.find(c => c.id === product.category)?.name || 'Annet'), element('h3', '', product.name));
    if (product.partNumber) card.append(element('p', 'part-number', `Delenummer: ${product.partNumber}`));
    if (product.description) card.append(element('p', '', product.description));
    if (product.fits) card.append(element('p', 'fits', `Passer til: ${product.fits}`));
    if (product.availability) card.append(element('span', 'availability', product.availability));
    grid.append(card);
  }
  const empty = document.querySelector('#empty');
  empty.hidden = filtered.length > 0;
  empty.querySelector('h3').textContent = query ? 'Ingen treff' : products.length ? 'Ingen deler i denne kategorien ennå' : 'Katalogen er under oppbygging';
  empty.querySelector('p').textContent = query ? 'Prøv et annet søkeord eller velg en annen kategori.' : 'Her kommer tilgjengelige deler, produktinformasjon og hvilke biler de passer til.';
}
search.addEventListener('input', render);
render();
