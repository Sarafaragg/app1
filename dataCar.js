const fs = require("fs")
const addCar = (Top ,car , color , year) => {
    const Cars = loadinfo()
    const dublicatedData = Cars.filter((obj)=>{
        return obj.Top === Top 
    })
    // console.log(dublicatedData)
    if (dublicatedData.length == 0){
    Cars.push ({
        Top : Top ,
        car : car ,
        color : color ,
        year : year ,
    })
    saveallData(Cars)
    } else{
        console.log("ERROR")
    }
}
///----///
const loadinfo = () => {
    try{ 
        const dataJsonn = fs.readFileSync("dataCar.json").toString()
    return JSON.parse(dataJsonn)
    }
    catch{
        return []
    }
}
///---///
const saveallData = (Cars) => {
    const saveallJson = JSON.stringify(Cars)
    fs.writeFileSync("dataCar.json" , saveallJson)
}
///----///
// delete //
const deleteData = (Top)=>{
    const Cars = loadinfo()
    const dataTokeep = Cars.filter((obj) =>{
        return obj.Top !== Top
    })
    // console.log(dataTokeep)
    // console.log("you have successfully deleted an item")
    saveallData(dataTokeep)
}
// read //
const readData =(Top) =>{
    const Cars = loadinfo()
    const itemNeeded = Cars.find((obj) =>{
        return obj.Top == Top 
    })
    if (itemNeeded){
        console.log(itemNeeded)
    } else {
        console.log("NOT FOUND")
    }

}
// list //
const listData = () => {
    const Cars = loadinfo()
    Cars.forEach((obj) => {
        console.log(obj.car , obj.color)
        
    });
}
module.exports = {
    addCar,
    deleteData,
    readData,
    listData
}