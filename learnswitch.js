const color = 'red';
switch(color) {
    case 'red':
    console.log('color is red');
    break;
    case'blue':
    console.log('color is blue')
    break;
    case 'green':
    console.log('color is green')
    break;
    default:
    console.log('color is not red, blue or green');

}

const score = 90
switch(true) {
case score>=90:
console.log('Execellent')
  break;
  case ((score>=80) && (score<70)): 
  console.log('very good')
  break; 
  case ((score>=50) && (score<60)):
  console.log('average')
  break;
  case((score>=40) && (score<50)):
  console.log('pass')
  break;
  case((score>30) && (40)):
  console.log('fail')
  break;
  default:
  console.log('failed');
    break;
}
