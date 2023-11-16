const cardDiv = document.getElementById("cardDiv");
const loadingDiv = document.getElementById("loading");
const btn = document.querySelector(".btn");
const containerDiv = document.querySelector(".container");
const tarih = document.getElementById("tarih");

containerDiv.style.display = 'none'

setTimeout(()=>{
    loadingDiv.style.display ='none'
    containerDiv.style.display = 'block'
    catİmage()

},3000)



const loadingShow =()=>{

  loadingDiv.style.display ='block'
  containerDiv.style.display = 'none'
}


const loadingHide =()=>{
  loadingDiv.style.display ='none'
  containerDiv.style.display = 'block'

}

const catİmage =()=>{ 
  loadingShow()

fetch('https://api.thecatapi.com/v1/images/search?limit=10')
.then((res)=>{

    if (!res.ok) {
        throw new Error(`Hata: ${res.status}`)
      }

return res.json();
})
.then((data)=>{
  loadingHide()
  show(data)
})
.catch((err)=>{
  loadingHide()
cardDiv.innerHTML = `
   <h2> ${err} <h2>
   <img src="./img/error.gif" >
` })

}






const show =(element)=>{

    cardDiv.innerHTML =''

element.forEach((a) => {
cardDiv.innerHTML += 
`<div class="col-12 col-sm-6 col-lg-4">
<div style="height:200px;" class='m-4 rounded-3'>
  <img src="${a.url}" class="w-100 h-100" alt="...">
</div>
</div>`
});

}


btn.addEventListener('click',()=>{

catİmage()

})


