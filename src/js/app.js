import goblin from '../img/goblin.png';

export default class App {
  constructor() {
    this.placeFl = document.getElementById('pubf');
    this.hit = document.getElementById('hit');
    this.miss = document.getElementById('miss');
    this.goblin = `<img class="goblin-img" src="${goblin}">`;

    this.drowFields(4);

    this.fieldsNumb = document.querySelectorAll('.field');
    this.arrField = Array.from(this.fieldsNumb);
  }

  drowFields(max) {
    for (let i = 0; i < max ** 2; i += 1) {
      this.placeFl.innerHTML += `<div class="field" data-id="${i}"></div>`;
    }
  }

  showGoblin() {
    const random = Math.floor(Math.random() * 16);
    if (document.querySelector('.goblin-img')) {
      document.querySelector('.goblin-img').remove();
      this.miss.innerHTML = Number(this.miss.innerHTML) + 1;
    }
    this.arrField[random].insertAdjacentHTML('afterbegin', this.goblin);
    document.querySelector('.goblin-img').addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('.goblin-img').remove();
      this.hit.innerHTML = Number(this.hit.innerHTML) + 1;
    });
  }
}
