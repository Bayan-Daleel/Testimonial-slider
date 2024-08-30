const imgElm=document.querySelector("img");
const textElm=document.getElementById("text");
const nameElm=document.getElementById("name");


const testominail =[
    { img :"https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
      text:"Apple is a top mobile company that always delivers exceptional products. I am impressed with the quality and innovation of their devices. The customer service provided by Apple is unmatched, making me a loyal customer. I highly recommend Apple for anyone looking for cutting-edge technology.",
      name:"- Emily Thompson",


    },
    {
        img :"https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"I am extremely impressed with Apple's innovative products and exceptional customer service.As a loyal customer, I rely on this mobile company for all my tech needs. The seamless integration of software and hardware sets Apple apart from the competition.",
        name:"- Mohammed Thompson",

    },
    {
        img :"https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
        text:"I have been amazed by the innovative products from Apple. Their mobile devices are top-notch in design and performance. As a tech enthusiast, I highly recommend Apple to anyone looking for quality and style.",
        name:"- Samantha Johnson",
    }

];

let index=0;
showTestomial();

function showTestomial(){
    //console.log(testominail[index]);
const{img,text,name}= testominail[index];
imgElm.src=img;
textElm.innerText=text;
nameElm.innerText=name;
index++;
if(index === testominail.length){
    index=0;
}
setTimeout(()=>{
    showTestomial();
}, 20000);
}

