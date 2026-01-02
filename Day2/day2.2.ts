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
    let value = e[0] * e[1] * e[2]
    let biggestNumber = Math.max(...e)
    let indexOfBiggest = e.indexOf(biggestNumber)
    e.splice(indexOfBiggest, 1)
    finalSum+= (e[0]*2) + (e[1]*2) + value

})

console.log(finalSum) 