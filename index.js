// Write your solution in this file
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
const newObj = Object.assign({},driver);
newObj[key]=value;
return newObj
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key]=value;
    return driver
}
function deleteFromDriverByKey(driver, key){
    let driver2 = {...driver}
    delete driver2[key];
    return driver2
}
function destructivelyDeleteFromDriverByKey(driver, key, value){
    delete driver[key];
    return driver

}



