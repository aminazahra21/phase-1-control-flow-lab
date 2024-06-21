
  function scuberGreetingForFeet(distance) {
    if (distance <= 400) {
      return 'This one is on me!';
    } else if (distance > 2500) {
      return 'No can do.';
    } else if (distance > 2000) {
      return 'I will gladly take your thirty bucks.';
    }
  }
  
  // Function to check city using ternary operator
  function ternaryCheckCity(city) {
    return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  }
  
  // Function to return response based on tip
  function switchOnCharmFromTip(tip) {
    switch (tip) {
      case 'generous':
        return 'Thank you so much.';
      case 'not as generous':
        return 'Thank you.';
      default:
        return 'Bye.';
    }
  }
  
  // Testing the functions
  console.log(scuberGreetingForFeet(350)); // "This one is on me!"
  console.log(scuberGreetingForFeet(2100)); // "I will gladly take your thirty bucks."
  console.log(scuberGreetingForFeet(2600)); // "No can do."
  
  console.log(ternaryCheckCity('NYC')); // "Ok, sounds good."
  console.log(ternaryCheckCity('LA')); // "No go."
  
  console.log(switchOnCharmFromTip('generous')); // "Thank you so much."
  console.log(switchOnCharmFromTip('not as generous')); // "Thank you."
  console.log(switchOnCharmFromTip('none')); // "Bye."
