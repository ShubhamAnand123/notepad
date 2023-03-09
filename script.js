const addbtn = document.querySelector("#add");
const main = document.querySelector("#main");
const savenotes =()=>
{
    const notes = document.querySelectorAll(".note textarea");
    const data=[];
    notes.forEach(
        (note) =>{
            data.push(note.value)
        }
       
    )
    if(data.length===0)
    localStorage.removeItem("notes");
    else
    localStorage.setItem("notes",JSON.stringify(data));
}

addbtn.addEventListener("click",function(){
    addnote();
})
const addnote =(text="")=>{
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML=`
    <div class="tool">
      <div class="hs" ><h3>SNEHA SHENOY<span style='font-size:20px;'>&#127773;&#128077;&#9996;</span></h3></div>
      <div class="fp">
        <i class="trash fa-sharp fa-solid fa-trash"></i>
        <i class="save fa-sharp fa-solid fa-floppy-disk"></i>
        </div>

    </div>
    <textarea>${text}</textarea>`;
    note.querySelector(".trash").addEventListener("click",function()
    {
        note.remove();
        savenotes();

    })
    note.querySelector(".save").addEventListener("click",function(){
        savenotes();
    })
    main.appendChild(note);
    savenotes();
}
(function()
{
    const lsnotes = JSON.parse(localStorage.getItem("notes"));
    if(lsnotes===null)
    addnote();
    else{
    lsnotes.forEach(
        (lsnotes)=>
        {
            addnote(lsnotes);
        }

    )
    }
    


}
)()
