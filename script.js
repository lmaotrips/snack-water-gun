let user = prompt("Enter S, W or G")
let cpu1 = math.floor(math.random() * 3);
let cpu = ["S", "W", "G"][cpu1]

const match = (cpu, user)=>{
  if(cpu === user){
    return "nobody."
  }
  else if (cpu === "S" && user === "W"){
    return "cpu"
  }
  else if (cpu === "S" && user === "G"){
    return "user"
  }
  else if (cpu === "G" && user === "W"){
    return "user"
  }
  else if (cpu === "G" && user === "S"){
    return "user"
  }
  else if (cpu === "W" && user === "S"){
    return "user"
  }
  else if (cpu === "W" && user === "G"){
    return "cpu"
  }
}
let result = match(cpu, user)
document.write('cpu:${cpu} and <br> user:${user} <br> The winner is: ${result}') 