var type= document.querySelectorAll('.typedText>div')
var pic1= document.querySelectorAll('.pic1-icons>div')
var pic2= document.querySelectorAll('.pic2-icons>div')
var pic3= document.querySelectorAll('.pic3-icons>div')


for(let i = 0; i < type.length*100; i++) {
    setTimeout(() => {
        let r= i%type.length
        type.forEach((e,k)=>k!==r?e.style.display='none':e.style.display='block')
        pic1.forEach((e,k)=>k!==r?e.style.color='grey':e.style.color='black')
        pic1.forEach((e,k)=>k!==r?e.style.zoom = '1.0':e.style.zoom = '1.2')
        pic2.forEach((e,k)=>k!==r?e.style.color='grey':e.style.color='black')
        pic2.forEach((e,k)=>k!==r?e.style.zoom = '1.0':e.style.zoom = '1.2')
        pic3.forEach((e,k)=>k!==r?e.style.textShadow='0px 0px 0px white':e.style.textShadow='1px 1px 2px white')
        pic3.forEach((e,k)=>k!==r?e.style.zoom = '1.0':e.style.zoom = '1.2')
        console.log(type[r].textContent)
    }, i * 2000);
 }
