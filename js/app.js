let demo = document.getElementsByTagName("email")
const gold = document.getElementsByClassName("snook")

console.log(demo)

demo.addEventListener( blur , (e) => {
  if(!e.target.value){
    demo.style.backgroundColor = 'red'
  }
  else demo.classList.add("gold")
} )

const userSubmit = document.getElementById('jult')

userSubmit.addEventListener( click , (e) => {

if(gold.value == false){
  alert("ok")
}
else{
  alert("wow")
}
})

const sold = document.getElementById("sold")
console.log(sold)
const toper = document.getElementById("toper")
function total() {

  if(sold.value != toper.value){
    sold&&toper.style.backgroundColor = 'red';
  }
  else{
    sold&&toper.style.backgroundColor = "green";
  }
}