console.log("hello")
var total = document.getElementById("total")
total.innerHTML = `Total Number of Countries: ${countries_data.length}`

var cname = []
countries_data.map((ele) => {
    cname.push(ele.name.toLowerCase())

})
console.log(cname)

var result = document.getElementById("result")
countries_data.map((ele)=>{
    result.innerHTML += ` <div class="resultdiv"> ${ele.name}</div>`

})





function startword() {
    var btnstart= document.getElementById("input")
    btnstart.setAttribute("onkeyup","startword()")


    var result = document.getElementById("result")
    result.innerHTML = ""
    console.log("startword")
    var input = document.getElementById("input").value
   
        console.log(input)
        var namearr = []
        cname.map((ele) => {
            var startwith = ele.startsWith(input.toLowerCase())
            console.log(startwith)


            if (startwith) {
                namearr.push(ele)
                result.innerHTML += ` <div class="resultdiv"> ${ele}</div>`

            }
        })
        console.log(namearr);

        var countiescount= document.getElementById("countiescount")
        countiescount.innerHTML=` Countries Start with "${input}" are "${namearr.length}" `
        countiescount.style.color="white"




    }


function searchanyword() {
    var btnstart= document.getElementById("input")
    btnstart.setAttribute("onkeyup","searchanyword()")
    var result = document.getElementById("result")
    result.innerHTML = ""
    console.log("startword")
    var input = document.getElementById("input").value
    if (input == "") {

        result.innerHTML += ` <div  class="alert"> Please Enter Country name </div> `


    }
    else {
        console.log(input)
        var namearr = []
        cname.map((ele) => {
            var startwith = ele.includes(input.toLowerCase())
            console.log(startwith)


            if (startwith) {
                namearr.push(ele)
                result.innerHTML += ` <div class="resultdiv"> ${ele}</div>`

            }
        })
        console.log(namearr);

        var countiescount= document.getElementById("countiescount")
        countiescount.innerHTML=` Countries Start with "${input}" are "${namearr.length}" `
        countiescount.style.color="white"



    }

}