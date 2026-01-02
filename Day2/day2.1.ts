import { readData } from "../utils";

const data: string = readData('./Day2/data/data.txt', './Day2/data/data.test.txt')

const partiallyFormattedData = data.split('\n')

let formattedData:any = []

partiallyFormattedData.forEach((measureGroup)=>{
    const splitedMeasure = measureGroup.split('x')
    let numberArray= splitedMeasure.map((e)=> Number(e))
    formattedData.push(numberArray)
})


let finalSum:number = 0

formattedData.forEach((e:any)=>{

    let side1 = 2*e[0]*e[1]
    let side2 = 2*e[1]*e[2]
    let side3 = 2*e[0]*e[2]
    let allSides = [side1/2, side2/2, side3/2]
    const smallestSide = Math.min(...allSides)

    finalSum+=(side1+side2+side3+smallestSide)
})

console.log(finalSum)