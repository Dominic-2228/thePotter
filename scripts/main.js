import { firePottery } from "./Kiln.js";
import { makePottery } from "./PotteryWheel.js";

const potter = makePottery("circle", 3, 3)
const potter2 = makePottery("mud", 3, 3)
const potter3 = makePottery("round", 3, 3)
const potter4 = makePottery("triangle", 3, 3)
const potter5 = makePottery("hour glass", 3, 3)
const potter6 = makePottery("platter", 3, 3)
// console.log(potter)

const fire = firePottery(potter, 2230)
const fire2 = firePottery(potter2, 3000)
const fire3 = firePottery(potter3, 1540)
const fire4 = firePottery(potter4, 2240)
const fire5 = firePottery(potter5, 1840)
const fire6 = firePottery(potter6, 1920)
console.log(fire)
console.log(fire2)
console.log(fire3)
console.log(fire4)
console.log(fire5)
console.log(fire6)
