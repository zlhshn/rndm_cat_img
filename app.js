const cardDiv = document.getElementById("cardDiv");
const loadingDiv = document.getElementById("loading");
const btn = document.querySelector(".btn");
const containerDiv = document.querySelector(".container");
const tarih = document.getElementById("tarih");

containerDiv.style.display = 'none'

setTimeout(()=>{
    loadingDiv.style.display ='none'
    containerDiv.style.display = 'block'

},1000)


const catİmage =()=>{ 
fetch('https://api.thecatapi.com/v1/images/search?limit=10')
.then((res)=>{

    if (!res.ok) {
        throw new Error(`Hata: ${res.status}`)
      }

return res.json();
})
.then((data)=>show(data))
.catch((err)=>cardDiv.innerText =err)
}






fetch('https://api.thecatapi.com/v1/images/search?limit=10')
.then((res)=>{

    if (!res.ok) {
        throw new Error(`Hata: ${res.status}`)
      }
      return res.json()
}).catch((err)=>cardDiv.innerText =err)



const show =(element)=>{

    cardDiv.innerHTML =''

element.forEach((a) => {
cardDiv.innerHTML += 
`<div class="col-12 col-sm-6 col-lg-4">
<div style="height:200px;">
  <img src="${a.url}" class="w-100 h-100" alt="...">
</div>
</div>`
});

}


btn.addEventListener('click',()=>{

catİmage()

})


