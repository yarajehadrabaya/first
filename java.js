//1:
const fruitEmojis = ["🍎", "🍌", "🍇", "🍊", "🍓", "🍍", "🍒", "🍉", "🥭", "🍑"];
console.log(fruitEmojis.length);
//2:
console.log(fruitEmojis[0],",",fruitEmojis[9]);
//3:
fruitEmojis[10]= "🥝" ;
console.log(fruitEmojis)
//4:
fruitEmojis.pop()
console.log(fruitEmojis)
//5:
if(fruitEmojis.includes("🍓"))
{console.log("yes")}
//6:

console.log(fruitEmojis.indexOf("🍓"))
//7:
const firstThreeFruits=[]
firstThreeFruits[0]=fruitEmojis[0];
firstThreeFruits[1]=fruitEmojis[1];
firstThreeFruits[2]=fruitEmojis[2];
//8:
const emojisString=fruitEmojis.toString();
console.log(emojisString )
//9:
const b=fruitEmojis.sort()
console.log(b)
//10:
const e=fruitEmojis.reverse()
console.log(e)
