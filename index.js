// Code your solution here


<<<<<<< HEAD
    function findMatching(drivers,name) {

       return drivers.filter(n => { return n.toUpperCase() === name.toUpperCase()})



    }



 fuzzyMatch = (drivers,letter) => {

    return drivers.filter(n => {return n.includes(letter) && n.charAt(0) === letter.charAt(0) })

 }

function matchName(drivers,name){
  return drivers.filter(n => { return n.name === name })


}
=======
    findMatching(drivers,name) {

       drivers.filter(n => return n === name)

    }
>>>>>>> 262f5bcb4e521f879acf1099c23f759580bc8718
