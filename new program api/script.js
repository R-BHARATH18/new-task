const body =document.body
const con = document.createElement('div');
con.classList.add("container","background");
const row = document.createElement('div');
row.classList.add("row","mt-3");
con.append(row);

const ifapi= "https://www.anapioficeandfire.com/api/books";



fetch(ifapi)
.then((res) =>{
  if(res.status ===200)
  return res.json();
  else throw new Error("something error occured")
}).then(function(data){
  console.log(data);
for (let i=0;i<data.length;i++) {
  row.innerHTML += `  
          <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="card border text-white mb-3" style="max-width: 18rem;">
          <div clas="card-header text-center bg-dark h4" id="bookName">${data[i].bookname}</div>
          <div class="pt-2 bg">
          <div class="card-body">
              <div class="text-center p-3">


   <p id="isbn">isbn:${data[i].isbn}</p>
   <p id="numberofpage">numberofpage:${data[i].numberofpage}</p>
   <p id="authors">authors:${data[i].authors}</p>
   <p id ="publishername">publishername:${data[i].publishername}</p>
   <p id ="releaseddate">releaseddate:${data[i].releaseddate}</p>
   <p id ="5charactersofeachbook">5charactersofeachbook:${data[i].charactersofeachbook}</p>
   
   </div>
   </div>
   </div>
   </div>`

  document.body.append(con); 
};
}).catch(function(err){
  console.log(err.message);
});

async function iceandfire()
{
    const responese=await fetch("https://www.anapioficeandfire.com/api/books");
    const users =await responese.json();
    return users;
    
}
document.addEventListener("DOMContentLoaded", async () => {
    let users =[];

    try {
        users = await iceandfire();
    } catch(e) {
        console.log("Error!");
        console.log(e);
    }
    console.log(users);
});

