// metode 1
function palindrome(str){

    if(str.split('').reverse().join('')===str){
        console.log(str,": est un palindrome");
    }
    else{
        console.log(str,": n'est pas un palindrome ");
    }
}
palindrome("RAdAr".toLocaleLowerCase());

// metode 2
function palindrome(str) { 

  var compt = 0;
  if (str.length % 2 === 0) {
    compt = compt + str.length / 2;
  } else {
    compt = compt + (str.length - 1) / 2;
  }
  var i = -1;
  var paland = true;
  do {
    i = i + 1;
    if (str[i] != str[str.length - (i + 1)]) {
      paland = false;
    }
  } while (i >= compt);
  if (paland === false) {
    console.log(str, "n'est pas palindrom");
  } else {
    console.log(str, ": est palindrome");
  }
}
// appeler la fonction palindrome et tester si la chaine est palindrome ou non
palindrome("RADar".toLowerCase());
