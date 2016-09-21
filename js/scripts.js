// I will write a write a function that says hello.
// This function will take an argument,
// Called name, which is string.
function sayHello(name){

  //console.log('Hello!' + name);
}

// I will write some variables, which will be strings of my friend's names.
// Here I will call the function say Hello.

var friendName = 'Ieshan';
var classmateName = 'Ishtiaq';

//Here I call the function sayHello.
sayHello(friendName);
sayHello(classmateName);

//I will write a function wich will greet my friend.
//My friend will be passed to the function as an object.
// The function will parse that object and great my friend.

function greetFriend(Friend){
  //console.log('Hello,'+Friend.firstName+'You are'+Friend.age+'Years old');

}

// I will make an object that discribe my Friend.

var myObject = {
  firstName:'Ieshan',
  lastName: 'Wani',
  age: 25
}

//I will make another object, discribes my teacher.

var teacherObject = {
  firstName: 'Gowhar',
  lastName: 'Farooq',
  age: 28
}
// I will call greetFriend function, passing myObject as it's argument.
greetFriend(myObject);
greetFriend(teacherObject);


// I will make an array of objects, each array will discribe a friends of mine.

var friendslist = [
  {
    firstName:'Ieshan',
    lastName: 'Wani',
    age: 23
  },
  {
    firstName: 'Gowhar',
    lastName: 'Farooq',
    age: 28
  },
  {
    firstName: 'Ishtiaq',
    lastName: 'Wani',
    age: 22
  },
  {
    firstName: 'Sameer',
    lastName: 'Khan',
    age: 24
  },
];

// I will write a function that will great friends.
// It takes as its argument, an array, and each item in array is an object,
// that discribes a friend.

function greetFriend(list){


// I will loop through the items in my array with a for loop.
for (var i = 0;i<list.length;i++) {

  //This variable is the current item in the array that, the for loop is
  // iterating through
  var currentFriend = list[i];


//Greet each friend in turn.
//console.log('Hello!'+currentFriend.firstName+'. You are'+currentFriend.age+'years old');
}
}

// Call the greetFriend function and pass friendslist to it.

greetFriend(friendslist);

// I will make a function that sorts friends by age.
//This function takes an argument, called list,
//which is an array of my friends, where each one is an object.
function sortPeople(list){

  //Creat two array one for older people and for younger people.
  // These wiil be blank arrays, that we will populate with our forEach loop.
  var older = [];
  var younger = [];
//Loop through array.
  list.forEach(function(d,i){
  if (d.age < 25){
    younger.push(d);
  } else {
    older.push(d);
  }
  })

  // out side the loop, I am going to console the two "bukets"
  // or arrays.(whish I deleted)
  // after delating the above cosole loge buket I am writing a function.
  // and this function will return our our arrays as an object.
  var bukets = {
    youngerlist: younger,
    olderlist: older
  };

return bukets;


}

// Call sort friends and pass the friendslist to it.

sortPeople(friendslist);

// I will make another array, with more friends.

var moreFriends = [
  {
firstName: 'Netika',
lastName: 'Kakkar',
age: 24
  },
  {
firstName: 'Deblin',
lastName: 'Roy',
age: 26
  },
  {
friendName: 'Dawood',
lastName: 'Wardak',
age: 27
  },
];
// I am going to run the function again with the new array.

sortPeople(moreFriends);

// I created two variables, where sortFriends returns sorted lists of friends.

var moreFriendsSorted = sortPeople(moreFriends);
var friendslistsorted = sortPeople(friendslist);

// Isolate the younger list from the sorted friends list.
var friendslistYounger = friendslistsorted.youngerlist;

//console log the new list from and the original list to compare.
console.log(friendslistYounger);
console.log(friendslist);
