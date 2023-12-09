let sahir; 
console.log(sahir)

 sahir ="sahir1212"

//  template literatls
 var abc=`i am ${sahir}  `

console.log(abc)

 let obj={

name:"your name",
city:"your city"


 }


 var myobj=obj;

 myobj.name="sahir"
 myobj.city="khi"


 console.log(myobj)
 console.log(obj)

//destructuring with variable name changing :
 const {name:name1,city}=obj

console.log(name1, city)




let obj1=[0,-1,-2,5  
]
    
    //destructuring
const [pehla,duja,teeja]=obj1

console.log(duja)



const data_obj = {
    title:"Product Title",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png'
}



var card =document.getElementById("c1")


// var i1 =document.getElementById("i1")


const {title,description,image_url}=data_obj

card.innerHTML= ` ${title}`


