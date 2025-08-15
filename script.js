const inp = document.querySelector("#first-input");
const btn1 = document.querySelector("#first-btn");
const mainContaint = document.querySelector("#text-div");
const hr = document.querySelector("hr");


   const msg = document.createElement("p");
   msg.textContent = "Please Enter Text"
   msg.style.color = "red"
   msg.setAttribute("hidden", true);
   hr.insertAdjacentElement("afterend",msg);
   

btn1.addEventListener("click", ()=>{
   const textValue = inp.value;



   if(textValue === ""){
      msg.removeAttribute("hidden");
      return;
     
   }
      msg.setAttribute("hidden", true);
      const newDiv = mainContaint.cloneNode(true);
      newDiv.removeAttribute("hidden");
      newDiv.classList.add("flex");
      const paragraph = newDiv.querySelector("#paragraph");
      paragraph.textContent = textValue;


      const deleteBtn = newDiv.querySelector("#delete-btn");
      deleteBtn.addEventListener("click",()=>{
         newDiv.remove();
      })
      const editBtn = newDiv.querySelector("#edit-btn");
      editBtn.addEventListener("click", () => {
      inp.value = paragraph.textContent;
      newDiv.remove();
      })
      inp.value = "";
      hr.insertAdjacentElement("afterend", newDiv);

})
