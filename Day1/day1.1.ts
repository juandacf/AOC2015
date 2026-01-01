import { readData } from "../utils";

const data: string = readData('./Day1/data1/data.txt', './Day1/data1/data.test.txt')

let currentFloor: number = 0

for (let index = 0; index < data.length; index++) {
    if(data[index]=== "("){
        currentFloor+=1
    }else {
        currentFloor-=1
    }
}

console.log(currentFloor)