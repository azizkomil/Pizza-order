
let size1 = document.querySelector("#sizes")
let size = document.querySelector("#size")
let kattaligi = document.querySelector("#kattaligi")
let name1 = document.querySelector("#name")
let number1 = document.querySelector("#number")
let addres1 = document.querySelector("#addres")
let ustuda = document.querySelector("#ustuda")
let ust  = document.querySelector("#ustuda1")
let pul  = document.querySelector("#pul")

function myfun(event){
    const ustida = []
    const add = []
    let sum = 0
    let name = document.querySelector("#username")
    let number = document.querySelector("#usernumber")
    let addres = document.querySelector("#useraddres")
    let pizzasize = document.querySelector("#pizzasize")
    let add1 = document.querySelector("#add")
    let qoshimcha = document.querySelector("#qoshimcha")

    name1.textContent = name.value
    number1.textContent = number.value
    addres1.textContent = addres.value
    size1.textContent = pizzasize.value

    if(pizzasize.value==="small"){
        sum = +10
    }
    if(pizzasize.value==="Medium"){
        sum = +12  
    }
    if(pizzasize.value==="Big"){
        sum = +15 
    }
    if(size.children[0].children[0].checked){
        kattaligi.textContent = "25 sm"
        sum =sum + 10
    }
    if(size.children[1].children[0].checked){
        kattaligi.textContent = "30 sm" 
         sum = sum+ 12
    }
    if(size.children[2].children[0].checked){
        kattaligi.textContent = "35 sm"
        sum = sum+ 15
    }
    if(ustuda.children[0].children[0].checked){
        ustida.push(ustuda.children[0].children[0].value)
    }
    if(ustuda.children[1].children[0].checked){
        ustida.push(ustuda.children[1].children[0].value)
    }
    if(ustuda.children[2].children[0].checked){
        ustida.push(ustuda.children[2].children[0].value)
    }
    if(ustuda.children[3].children[0].checked){
        ustida.push(ustuda.children[3].children[0].value)
    }
    if(ustuda.children[4].children[0].checked){
        ustida.push(ustuda.children[4].children[0].value)
    }
    if(ustuda.children[5].children[0].checked){
        ustida.push(ustuda.children[5].children[0].value)
    }
    if(add1.children[0].children[0].checked){
        add.push(add1.children[0].children[0].value)
    }
    if(add1.children[1].children[0].checked){
        add.push(add1.children[1].children[0].value)
    } 
    sum = sum + (ustida.length*5)
    sum = sum + (add.length*3)
    
    ust.textContent = ustida
    qoshimcha.textContent = add
    pul.textContent = sum
    
    
}
