const monday = [
    {
      name: 'Write a summary HTML/CSS',
      duration: 180
    },
    {
      name: 'Some web development',
      duration: 120
    },
    {
      name: 'Fix homework for class10',
      duration: 20
    },
    {
      name: 'Talk to a lot of people',
      duration: 200
    }
  ];
  
  const tuesday = [
    {
      name: 'Keep writing summary',
      duration: 240
    },
    {
      name: 'Some more web development',
      duration: 180
    },
    {
      name: 'Staring out the window',
      duration: 10
    },
    {
      name: 'Talk to a lot of people',
      duration: 200
    },
    {
      name: 'Look at application assignments new students',
      duration: 40
    }
  ];
  
  const tasks = monday.concat(tuesday);
  //--------------
  let workingTime = 0;
  for (i = 0; i < tasks.length; i++) {
      if (tasks[i].duration >= 120) {
        workingTime += tasks[i].duration;
      }
  }
  let hoursWorked = workingTime / 60;
  let hourWages = 10;
  let earnings = hoursWorked * hourWages;
  console.log("Hours paid= ", hoursWorked, "hour");
  console.log(Math.floor(hoursWorked));
  console.log("Maatrje`s wages will be hourWages multiplied by  workingTime per hour");
  console.log("Maatrje has earned €:", earnings.toFixed(0));