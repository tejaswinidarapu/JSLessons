// Variables and Scopes
// var, let and const used to declare variables
// global, function, block scopes

var x = 10; // global scope;

function add() {
  var y = x + 10; // function scope;
  if (y == 20) {
    var z = y + 10; // function scope;
    let s = z + 10; // block scope;
    window.alert(
      "Inside the function" + "value of z " + z + " vlaue of s " + s
    );
  }

  window.alert("Outside the function" + "value of z " + z + " vlaue of s " + s);
}

add();
