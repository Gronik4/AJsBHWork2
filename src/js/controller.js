import App from './app';

export default class Controller {
  constructor(object) {
    this.obj = object;
    this.result = document.getElementById('res');
    this.interval = 0;
    this.nGame = document.getElementById('btn');
    this.handler();
  }

  handler() {
    this.nGame.addEventListener('click', () => {
      this.obj.hit.innerHTML = 0;
      this.obj.miss.innerHTML = 0;
      this.result.innerHTML = 'Новая игра';
      this.interval = setInterval(() => {
        const hits = Number(this.obj.hit.innerHTML);
        const miss1 = Number(this.obj.miss.innerHTML);
        if (Math.abs(hits - miss1) < 5) {
          this.obj.showGoblin();
        } else {
          clearInterval(this.interval);
          if (hits > miss1) {
            this.result.innerHTML = 'Ура! Победа!!';
          } else {
            this.result.innerHTML = 'Увы... Вы проиграли..';
          }
        }
      }, 800);
    });
  }
}

const appG = new App();
const cnt = new Controller(appG);
