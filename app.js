

const fs = require("fs")
// console.log(fs.writeFileSync("typesCars" , "Jeep"))
// console.log(fs.readFileSync("typesCars").toString())
// fs.appendFileSync("typesCars"," is perfct")
// console.log(fs.readFileSync("typesCars").toString())
///-----///
// const x = require("./Cars")
// console.log(x.Jeep)
// console.log(x.black)
// console.log(x.yr)
// console.log(x.fun(5,5))
///-----///
// const validator = require("validator")
// console.log(validator.isEmail("jeep@gmail.com"))
///-----///
// const ar = process.argv[2]
// if ( ar === "yes"){
//     console.log("Thank you sweet")
// } else if ( ar === ("No")){
//     console.log("No problem")
// } else {
//     console.log("ERROR")
// }
// console.log(process.argv)
///----///
const yargs = require("yargs")
const dataCar =require("./dataCar")
const { type } = require("os")
yargs.command({
    command : "add" ,
    describe : "to add an item" ,
    bulider : {
        car :{
            describe : "a jeep is durable and suitable for off-road driving combining practicality with a sense of adventure." ,
            demandOption : true ,
            typeof : "string" ,
        } ,
        color :{
            describe : " toyota vehicles are known for their reliability ,comfort , and high fuel efficiency." ,
            demandOption : true ,
            typeof : "string"
        }
    },
    handler : (x)=> {
        dataCar.addCar(x.Top ,x.car , x.color , x.year)
    }
})
// yargs.parse()
///----///
// delete //
yargs.command({
    command : "delete" ,
    describe : "to delete an item" ,
    handler : (x)=> {
        dataCar.deleteData(x.Top)
    }
})
///----///
//read //
yargs.command ({
    command : "read" ,
    describe :  "to read an item",
bulider : {
    Top : {
        describe : "this is desc in read command" ,
        ydemandOption : true ,
        type : "string"
    }
}, 
handler: (x) => {
    dataCar.readData(x.Top)
}
})
///----///
// list //
yargs.command ({
    command : "list" ,
    describe: " to list data" ,
    handler : () => {
        dataCar.listData()
    }
})
yargs.parse()


///----///
// const myCarf ={
//     car : "Jeep" ,
//     color : "black" ,
//     year : "2007"
// }
// const myCarJson =  JSON.stringify(myCarf)
// console.log(myCarJson)
// const myCarobjt = JSON.parse(myCarJson)
// console.log(myCarobjt)
// fs.writeFileSync("dataCars.json" , myCarJson)