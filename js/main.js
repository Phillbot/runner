class RunnerGameConstructor {

  constructor(vInner, btn, easy, medium, hard, counter, begin, again, reload, timerDiv, timerSec, sec, game, container, exit, logo) {

    this.ver = "1.3";
    this.vInner = document.querySelector(vInner);
    this.btn = document.querySelector(btn);
    this.easy = document.querySelector(easy);
    this.medium = document.querySelector(medium);
    this.hard = document.querySelector(hard);
    this.counter = document.querySelector(counter);
    this.begin = document.querySelector(begin);
    this.again = document.querySelector(again);
    this.reload = document.querySelector(reload);
    this.timerDiv = document.querySelector(timerDiv);
    this.timerSec = document.querySelector(timerSec);
    this.sec = document.querySelector(sec);
    this.game = document.querySelector(game);
    this.container = document.querySelector(container);
    this.exit = document.querySelector(exit);
    this.logo = document.querySelector(logo);
  }

  easyGame() {

    this.vInner.style.display = "block";
    this.vInner.innerHTML = this.ver;
    this.sec.innerHTML = 60;

    this.disable = document.oncontextmenu = new Function("return false");
    this.exit.onclick = () => {
      location.reload();
    };

    this.logo.onclick = () => {
      this.logo.classList.toggle("fst_bg");
      this.logo.classList.toggle("scnd_bg");
    };

    let i = 0;
    let _this = this;

    this.easy.onclick = () => {
      this.btn.classList.add("anime_easy");

      (function timer() {
        _this.timerSec.innerHTML = "Осталось секунд: ";
        _this.timerDiv.style.display = "block";
        _this.sec.innerHTML--;
        if (_this.sec.innerHTML < 10) {
          _this.sec.classList.add("warning");
        }
        if (_this.sec.innerHTML < 12) {
          _this.exit.style.visibility = "hidden";
        }
        if (_this.sec.innerHTML == 0) {
          _this.sec.classList.remove("warning");
          _this.sec.style.color = "red";
          setTimeout(() => {
            _this.timerSec.innerHTML = "Время вышло";
            _this.timerSec.style.color = "red";
            _this.sec.innerHTML = "";
          }, 1000);
        } else {
          setTimeout(timer, 1000);
        }
      })();

      this.easy.style.display = "none";
      this.medium.style.display = "none";
      this.hard.style.display = "none";
      this.btn.style.display = "block";
      this.begin.style.display = "none";
      new Audio("./mp3/ost.mp3").play();
      this.counter.innerHTML = "Количество попаданий:" + " " + 0;

      setInterval(function rndGo() {
        function firstRnd(min, max) {
          return Math.random() * (max - min) + min;
        }

        function secondRnd(min, max) {
          return Math.random() * (max - min) + min;
        }
        let fst = firstRnd(100, 2);
        let scnd = secondRnd(85, 3);

        _this.btn.style.left = fst + "%";
        _this.btn.style.top = scnd + "%";
        _this.btn.style.right = fst + "%";
        _this.btn.style.bottom = scnd + "%";
      }, 1000);

      setTimeout(() => {

        _this.btn.style.display = "none";
        _this.btn.style.display = "none";
        _this.game.style.height = "100px";
        _this.counter.style.color = "rgb(157, 46, 221);";
        _this.counter.innerHTML =
          "Тебе удалось словить бегуна: " + i + " " + "раз(а) за 1 минуту";
        _this.counter.style.fontSize = "18pt";

        setInterval(function btnNew() {
          _this.again.style.display = "block";
        }, 2000);
        _this.reload.onclick = function () {
          location.reload();
        };
      }, 60000);

      _this.btn.onclick = function playerGoClick() {
        i++;
        _this.btn.classList.add("do_");

        setTimeout(() => {
          _this.btn.classList.remove("do_");
        }, 200);
        _this.counter.innerHTML = "Количество попаданий:" + " " + i;
        console.log(i);
        new Audio("./mp3/click.mp3").play();
        if (i % 50 === 0) {
          new Audio("./mp3/wow.mp3").play();
        }
      };
    };
  }

  mediumGame() {

    this.vInner.style.display = "block";
    this.vInner.innerHTML = this.ver;
    this.sec.innerHTML = 60;

    this.disable = document.oncontextmenu = new Function("return false");
    this.exit.onclick = () => {
      location.reload();
    };

    this.logo.onclick = () => {
      this.logo.classList.toggle("fst_bg");
      this.logo.classList.toggle("scnd_bg");
    };

    let i = 0;
    let _this = this;

    this.medium.onclick = () => {
      this.btn.classList.add("anime_medium");

      (function timer() {
        _this.timerSec.innerHTML = "Осталось секунд: ";
        _this.timerDiv.style.display = "block";
        _this.sec.innerHTML--;
        if (_this.sec.innerHTML < 10) {
          _this.sec.classList.add("warning");
        }
        if (_this.sec.innerHTML < 12) {
          _this.exit.style.visibility = "hidden";
        }
        if (_this.sec.innerHTML == 0) {
          _this.sec.classList.remove("warning");
          _this.sec.style.color = "red";
          setTimeout(() => {
            _this.timerSec.innerHTML = "Время вышло";
            _this.timerSec.style.color = "red";
            _this.sec.innerHTML = "";
          }, 1000);
        } else {
          setTimeout(timer, 1000);
        }
      })();

      this.easy.style.display = "none";
      this.medium.style.display = "none";
      this.hard.style.display = "none";
      this.btn.style.display = "block";
      this.begin.style.display = "none";
      new Audio("./mp3/ost.mp3").play();
      this.counter.innerHTML = "Количество попаданий:" + " " + 0;

      setInterval(function rndGo() {
        function firstRnd(min, max) {
          return Math.random() * (max - min) + min;
        }

        function secondRnd(min, max) {
          return Math.random() * (max - min) + min;
        }
        let fst = firstRnd(100, 2);
        let scnd = secondRnd(85, 3);

        _this.btn.style.left = fst + "%";
        _this.btn.style.top = scnd + "%";
        _this.btn.style.right = fst + "%";
        _this.btn.style.bottom = scnd + "%";
      }, 660);

      setTimeout(() => {

        _this.btn.style.display = "none";
        _this.btn.style.display = "none";
        _this.game.style.height = "100px";
        _this.counter.style.color = "rgb(157, 46, 221);";
        _this.counter.innerHTML =
          "Тебе удалось словить бегуна: " + i + " " + "раз(а) за 1 минуту";
        _this.counter.style.fontSize = "18pt";

        setInterval(function btnNew() {
          _this.again.style.display = "block";
        }, 2000);
        _this.reload.onclick = function () {
          location.reload();
        };
      }, 60000);

      _this.btn.onclick = function playerGoClick() {
        i++;
        _this.btn.classList.add("do_");

        setTimeout(() => {
          _this.btn.classList.remove("do_");
        }, 200);
        _this.counter.innerHTML = "Количество попаданий:" + " " + i;
        console.log(i);
        new Audio("./mp3/click.mp3").play();
        if (i % 50 === 0) {
          new Audio("./mp3/wow.mp3").play();
        }
      };
    };
  }


  hardGame() {

    this.vInner.style.display = "block";
    this.vInner.innerHTML = this.ver;
    this.sec.innerHTML = 60;

    this.disable = document.oncontextmenu = new Function("return false");
    this.exit.onclick = () => {
      location.reload();
    };

    this.logo.onclick = () => {
      this.logo.classList.toggle("fst_bg");
      this.logo.classList.toggle("scnd_bg");
    };

    let i = 0;
    let _this = this;

    this.hard.onclick = () => {
      this.container.classList.add("hard_move");
      this.btn.classList.add("anime_hard");

      (function timer() {
        _this.timerSec.innerHTML = "Осталось секунд: ";
        _this.timerDiv.style.display = "block";
        _this.sec.innerHTML--;
        if (_this.sec.innerHTML < 10) {
          _this.sec.classList.add("warning");
        }
        if (_this.sec.innerHTML < 12) {
          _this.exit.style.visibility = "hidden";
        }
        if (_this.sec.innerHTML == 0) {
          _this.sec.classList.remove("warning");
          _this.sec.style.color = "red";
          setTimeout(() => {
            _this.timerSec.innerHTML = "Время вышло";
            _this.timerSec.style.color = "red";
            _this.sec.innerHTML = "";
          }, 1000);
        } else {
          setTimeout(timer, 1000);
        }
      })();

      this.easy.style.display = "none";
      this.medium.style.display = "none";
      this.hard.style.display = "none";
      this.btn.style.display = "block";
      this.begin.style.display = "none";
      new Audio("./mp3/ost.mp3").play();
      this.counter.innerHTML = "Количество попаданий:" + " " + 0;

      setInterval(function rndGo() {
        function firstRnd(min, max) {
          return Math.random() * (max - min) + min;
        }

        function secondRnd(min, max) {
          return Math.random() * (max - min) + min;
        }
        let fst = firstRnd(100, 2);
        let scnd = secondRnd(85, 3);

        _this.btn.style.left = fst + "%";
        _this.btn.style.top = scnd + "%";
        _this.btn.style.right = fst + "%";
        _this.btn.style.bottom = scnd + "%";
      }, 440);

      setTimeout(() => {

        _this.btn.style.display = "none";
        _this.btn.style.display = "none";
        _this.game.style.height = "100px";
        _this.counter.style.color = "rgb(157, 46, 221);";
        _this.counter.innerHTML =
          "Тебе удалось словить бегуна: " + i + " " + "раз(а) за 1 минуту";
        _this.counter.style.fontSize = "18pt";

        setInterval(function btnNew() {
          _this.again.style.display = "block";
        }, 2000);
        _this.reload.onclick = function () {
          location.reload();
        };
      }, 60000);

      _this.btn.onclick = function playerGoClick() {
        i++;
        _this.btn.classList.add("do_");

        setTimeout(() => {
          _this.btn.classList.remove("do_");
        }, 200);
        _this.counter.innerHTML = "Количество попаданий:" + " " + i;
        console.log(i);
        new Audio("./mp3/click.mp3").play();
        if (i % 50 === 0) {
          new Audio("./mp3/wow.mp3").play();
        }
      };
    };
  }

}



let newGame = new RunnerGameConstructor("#v", ".click", ".easy", ".medium", ".hard", "#counter", ".begin", ".again", ".reload", "#timerDiv", "#timer", "#sec", ".game", ".container", ".exit", ".logo");

newGame.easyGame();
newGame.mediumGame();
newGame.hardGame();