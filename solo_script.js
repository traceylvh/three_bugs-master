// ! ! !
// Three Bugs

//var arrayAtticus = ["Atticus", "2405", "47000", 3];
//var arrayJem = ["Jem", "62347", "63500", 4];
// var arrayBoo = ["Boo", "11435", "54000", 3];
// var arrayScout = ["Scout", "6243", "74750", 5];


//this is after I built object manually. Using Scott's code...

var pfArray = [];

var pfAtticus = new PersonFinal("Atticus", "47000", "4230", "51230");
var pfJem = new PersonFinal("Jem", "63500", "3810", "67310");
var pfBoo = new PersonFinal("Boo", "54000", "2160", "56160");
var pfScout = new PersonFinal("Scout", "74750", "9718", "84467");

//var pfArray = [pfAtticus, pfJem, pfBoo, pfScout];

//console.log(pfArray);
//ok, well, that worked. I have something to work with...

$(document).ready(function(){

  //$('.container').append('<h1>2016 Employee Bonus Awards</h1>');
  titleMessage();

  for(var i = 0; i < pfArray.length; i++){
    appendDom(pfArray[i]);
  }
});

/*function Person(name, position, salary, rating){
  this.name = name;
  this.position = position;
  this.salary = salary;
  this.rating = rating;
  peopleArray.push(this);
}*/

//so lost :(  gonna just build object manually
function PersonFinal(pfName, pfSalary, pfBonus, pfTotalComp){
  this.pfName = pfName;
  this.pfSalary = pfSalary;
  this.pfBonus = pfBonus;
  this.pfTotalComp = pfTotalComp;
  pfArray.push(this);
}



function appendDom(object){

  $('.container').append('<ul class="person"></ul>');

  var $el = $('.container').children().last();

  $el.append('<li>Employee: ' + object.pfName + '</li>');
  $el.append('<li>Salary: $' + object.pfSalary + '</li>');
  $el.append('<li>Bonus: $' + object.pfBonus + '</li>');
  $el.append('<li>Total Compensation: $' + object.pfTotalComp + '</li>');
}

function titleMessage() {
  $('.container').append('<h1>2016 Employee Bonus Awards</h1>');
}






//old cold, good code

function Person(objName, objNumber, objSalary, objReview){
  this.objName = objName;
  this.objNumber = objNumber;
  this.objSalary = objSalary;
  this.objReview = objReview;
}

var objAtticus = new Person("Atticus", "2405", "47000", 3);
var objJem = new Person("Jem", "62347", "63500", 4);
var objBoo = new Person("Boo", "11435", "54000", 3);
var objScout = new Person("Scout", "6243", "74750", 5);

var array = [objAtticus, objJem, objBoo, objScout];

console.log(array);

//Create variables used to write to the DOM
//var newEl, newText, position;


//Capture the position of insertion into the DOM
//position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
  array[i] = calculateSTI(array[i]);
 	//newEl = document.createElement('li');
	/*newText = document.createTextNode(array[i]);
	newEl.appendChild(newText);
	position.appendChild(newEl);*/
}



function calculateSTI(person){
  var newArray = [];
  newArray[0] = person.objName;

  var employeeNumber = person.objNumber;
  var baseSalary = person.objSalary;
  var reviewScore = person.objReview;



  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newArray[1] = bonus;
  //3rd bug I found - needed to round salary and bonus
  newArray[2] = Math.round(baseSalary * (1.0 + bonus));
  newArray[3] = Math.round(baseSalary * bonus);
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent; 
  //second bug!! I actually noticed this first but testing was no good until finding 1st bug


}



function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}

