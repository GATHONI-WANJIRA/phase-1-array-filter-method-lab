// Code your solution here


function findMatching (driversArray, name) {
    const matchingDrivers = driversArray.filter((oneDriver) => {
        return oneDriver.toLowerCase() === name.toLowerCase()
    })
 return matchingDrivers;   
}


function fuzzyMatch(arrayDrivers, name) {
    const lettersMatching = arrayDrivers.filter((matchyDriver) => {
        return matchyDriver.slice(0, name.length) === name;
    })
    return lettersMatching;

}





const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];



function matchName (drivers, name){
    const filteredDrivers = drivers.filter((driver) => {
          return driver.name === 'Bobby'})
          return filteredDrivers;
}