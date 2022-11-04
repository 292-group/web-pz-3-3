import "./scss/reset.scss"
import "./scss/variables.scss"
import "./scss/app.scss"

const actions = ['+', '-', '*', '/', '.', '%']

for (let i = 0; i<10; i++) {
  document.getElementById(i.toString()).addEventListener('click', function () {
    prnt(i)
  } );
}
document.getElementById("clr").addEventListener('click', function () {
  clr()
} );
document.getElementById("pm").addEventListener('click', function () {
  prntAction('+/-')
} );
document.getElementById("perc").addEventListener('click', function () {
  prntAction('%')
} );
document.getElementById("/").addEventListener('click', function () {
  prntAction('/')
} );
document.getElementById("*").addEventListener('click', function () {
  prntAction('*')
} );
document.getElementById("-").addEventListener('click', function () {
  prntAction('-')
} );
document.getElementById("+").addEventListener('click', function () {
  prntAction('+')
} );
document.getElementById(".").addEventListener('click', function () {
  prntAction('.')
} );
document.getElementById("slv").addEventListener('click', function () {
  solve()
} );
document.getElementById("theme").addEventListener('click', function () {
  toggleTheme()
} );
document.getElementById("get").addEventListener('click', function () {
  getCookie()
} );
document.getElementById("set").addEventListener('click', function () {
  setCookie()
} );



function prntAction(val) {
  if (val === '+/-') {
    let firstDigit = (<HTMLInputElement>document.getElementById("result")).value[0]
    if (firstDigit === '-'){
      (<HTMLInputElement>document.getElementById("result")).value = (<HTMLInputElement>document.getElementById("result")).value.slice(1, (<HTMLInputElement>document.getElementById("result")).value.length)
    }
    else {
      (<HTMLInputElement>document.getElementById("result")).value = '-' + (<HTMLInputElement>document.getElementById("result")).value
    }
  }

  else if (actions.includes((<HTMLInputElement>document.getElementById("result")).value[(<HTMLInputElement>document.getElementById("result")).value.length-1])
    || (<HTMLInputElement>document.getElementById("result")).value.length === 0) {
  }
  else {
    (<HTMLInputElement>document.getElementById("result")).value += val
  }
}

function prnt(val) {
  (<HTMLInputElement>document.getElementById("result")).value += val
}

function solve() {
  if ((<HTMLInputElement>document.getElementById("result")).value.length !== 0)
    {
      let x = (<HTMLInputElement>document.getElementById("result")).value;
      let y = eval(x);
      (<HTMLInputElement>document.getElementById("result")).value = y;
    }
}

function clr() {
  (<HTMLInputElement>document.getElementById("result")).value = ""
}

function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-light');
  } else {
    setTheme('theme-dark');
  }
}

(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-dark');
  } else {
    setTheme('theme-light');
  }
})();

function setCookie() {
  document.cookie = "result="+(<HTMLInputElement>document.getElementById("result")).value;
}

function getCookie() {
  var name_cook = "result=";
  var spl = document.cookie.split(";");
  for(var i=0; i<spl.length; i++) {
    var c = spl[i];
    while(c.charAt(0) == " ") {
      c = c.substring(1, c.length);
    }
    if(c.indexOf(name_cook) == 0) {
      let val = c.substring(name_cook.length, c.length);
      (<HTMLInputElement>document.getElementById("result")).value = val
    }
  }
  return null;
}
