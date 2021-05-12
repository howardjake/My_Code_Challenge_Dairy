// 100 doors
// There are 100 doors in a row that are all initially closed. You make 100 passes by the doors. The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it). The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.

// Implement a function to determine the state of the doors after the last pass. Return the final result in an array, with only the door number included in the array if it is open.

function getFinalOpenedDoors(numDoors) {

    let doors = [];
    
    for (let i = 1; i <= numDoors; i++) {
      doors.push(true);
    } 

    for (let i = 1; i < doors.length; i++) {
      doors.map((element, idx) => {
        if ((idx + 1) % (i + 1) == 0) {
          if (element == true) {
            doors.splice(idx, 1, false);
          } else if (element == false) {
            doors.splice(idx, 1, true);
          }
        }
  })};
    let openDoors = []
    doors.forEach((e, idx) => {
      if (e == true) {
        openDoors.push(idx + 1);
      }
    })
    return openDoors;

  }
  
  console.log(getFinalOpenedDoors(100));