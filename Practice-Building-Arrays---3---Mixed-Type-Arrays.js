//Practice: Building Arrays - 3 - Mixed-Type Arrays

let user = {
  userName: "Mutz",
  age: 56,
  isSubscribed: true,
  location: "Illinois",
  hobbies: ["drinking", "fighting"]
};

// Display the profile
console.log(user);

// Display individual details
console.log("Name:", user.userName);
console.log("Age:", user.age);
console.log("Subscribed:", user.isSubscribed);
console.log("Location:", user.location);
console.log("Hobbies:", user.hobbies);

console.log(user.userName);  
console.log(user.hobbies[1]);   // hobby #2

user.age = 35;                  // update age
user.hobbies.push("breaking things");   // add new hobby

console.log(user);

