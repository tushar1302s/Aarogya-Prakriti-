let form=document.querySelector("form");
console.dir(form)
let next=0;
if(form[0].checked||form[1].checked||form[2].checked){
    console.log("Selected")
}
let nextBtn=document.querySelector(".nextBtn");
let preBtn=document.querySelector(".preBtn");
let inp1=form[0];
let inp2=form[1];
let inp3=form[2];
let inp4=form[3];
let inp5=form[4];
let inp6=form[5];
let inp7=form[6];
let inp8=form[7];
let inp9=form[8];
let inp10=form[9];
let inp11=form[10];
let inp12=form[11];
let inp13=form[12];
let inp14=form[13];
let inp15=form[14];
let inp16=form[15];
let inp17=form[16];
let inp18=form[17];
let inp19=form[18];
let inp20=form[19];
let inp21=form[20];
let inp22=form[21];
let inp23=form[22];
let inp24=form[23];
inp1.addEventListener("click",function(){
    nextBtn.classList.add("display");
});
inp2.addEventListener("click",function(){
    nextBtn.classList.add("display");
});
inp3.addEventListener("click",function(){
    nextBtn.classList.add("display");
});
inp4.addEventListener("click",function(){
    nextBtn.classList.add("display");
});
inp5.addEventListener("click",function(){
    nextBtn.classList.add("display");
});
inp6.addEventListener("click",function(){
    nextBtn.classList.add("display");
});
inp7.addEventListener("click",function(){
    nextBtn.classList.add("display");
});
inp8.addEventListener("click",function(){
    nextBtn.classList.add("display");
});
inp9.addEventListener("click",function(){
    nextBtn.classList.add("display");
});
inp10.addEventListener("click",function(){
    nextBtn.classList.add("display");
});
inp11.addEventListener("click",function(){
    nextBtn.classList.add("display");
});
inp12.addEventListener("click",function(){
    nextBtn.classList.add("display");
});
inp13.addEventListener("click",function(){
    nextBtn.classList.add("display");
});
inp14.addEventListener("click",function(){
    nextBtn.classList.add("display");
});
inp15.addEventListener("click",function(){
    nextBtn.classList.add("display");
});
inp16.addEventListener("click",function(){
    nextBtn.classList.add("display");
});
inp17.addEventListener("click",function(){
    nextBtn.classList.add("display");
});
inp18.addEventListener("click",function(){
    nextBtn.classList.add("display");
});
inp19.addEventListener("click",function(){
    nextBtn.classList.add("display");
});
inp20.addEventListener("click",function(){
    nextBtn.classList.add("display");
});
inp21.addEventListener("click",function(){
    nextBtn.classList.add("display");
});
inp22.addEventListener("click",function(){
    nextBtn.classList.add("display");
});
inp23.addEventListener("click",function(){
    nextBtn.classList.add("display");
});
inp24.addEventListener("click",function(){
    let submitBtn=document.querySelector(".Submit");
    submitBtn.classList.add("display");
});
nextBtn.addEventListener("click",function(){
    let box=form.children[next];
    box.classList.add("displayNone");
    box.classList.remove("display");
    next++;
    nextBtn.classList.remove("display");
    box=form.children[next];
    box.classList.add("display");
    box.classList.remove("displayNone");
    if(next!=0){
        preBtn.classList.add("display");
    }
    console.log(next);
    progress(next);
});
preBtn.addEventListener("click",function(){
    if(next!=0){
        preBtn.classList.add("display");
        let box=form.children[next];
        box.classList.add("displayNone");
        box.classList.remove("display");
        next--;
        nextBtn.classList.remove("display");
        box=form.children[next];
        box.classList.remove("displayNone");
        box.classList.add("display");
        console.log(next);
        progress(next);
    }
})
let i=0;
let A=0;
let B=0;
let C=0;
form.addEventListener("submit",function(event){
    event.preventDefault();
    let box=form.children[next];
    box.classList.add("displayNone");
    box.classList.remove("display");
    // let submitBtn=document.querySelector(".Submit");
    // submitBtn.classList.add("displayNone");
    let container=document.querySelector(".container");
    container.style.display="none";
    for(i=0;i<24;i++){
        if((i%3==0)&&(form[i].checked)){
            A++;
        }else if((i%3==1)&&(form[i].checked)){
            B++;
        }else if((i%3==2)&&(form[i].checked)){
            C++;
        }
    }
    determinePrakrati();
    let start=document.querySelector(".journey");
    start.style.display="block";
});
function determinePrakrati(){
    let vatta=(A/8)*100;
    let pitta=(B/8)*100;
    let kapha=(C/8)*100;
    displayPrakrati(vatta,pitta,kapha);
}
function displayPrakrati(vatta,pitta,kapha){
    const data = {
        labels: ['Vata', 'Pitta', 'Kapha'],
        datasets: [{
            data: [vatta, pitta, kapha], // Example percentages (you can replace them with your actual data)
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)', // Vata
                'rgba(54, 162, 235, 0.7)', // Pitta
                'rgba(255, 206, 86, 0.7)' // Kapha
            ],
            borderWidth: 1
        }]
    };
    
    // Options for the pie chart
    const options = {
        responsive: true,
        maintainAspectRatio: false
    };
    
    // Get the context of the canvas element
    const ctx = document.getElementById('myChart').getContext('2d');
    // Create the pie chart
    const myPieChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options
    });
    sugessions(vatta,pitta,kapha);
}

let inner=document.querySelector(".inner");
let progressTxt=document.querySelector(".progress")
function progress(next){
    progressTxt.style.display="none";
    inner.classList.add("display");
    inner.classList.remove("displayNone");
    let a=next+1;
    let width=(a/8)*100;
    inner.style.width=`${width}%`;
    let QuestionsNumber=document.querySelector(".atemptedQ");
    QuestionsNumber.style.display="block";
    QuestionsNumber.innerText=` ${next} Completed`;
}
function sugessions(vatta,pitta,kapha){
    if(vatta>pitta&&vatta>kapha){
        let vattaSugession=document.querySelector(".sugessionsvatta");
        vattaSugession.style.display="flex";
    }
    else if(pitta>vatta&&pitta>kapha){
        let pittaSugession=document.querySelector(".sugessionspitta");
        pittaSugession.style.display="flex";
    }
    else if(kapha>vatta&&kapha>pitta){
        let pittaSugession=document.querySelector(".sugessionspitta");
        pittaSugession.style.display="flex";
    }
    if(vatta>=50){
        let vattaSugession=document.querySelector(".sugessionsvatta");
        vattaSugession.style.display="flex";
    }
    else if(pitta>=50){
        let pittaSugession=document.querySelector(".sugessionspitta");
        pittaSugession.style.display="flex";
    }
    else if(kapha>=50){
        let pittaSugession=document.querySelector(".sugessionspitta");
        pittaSugession.style.display="flex";
    }
    if(vatta>=pitta&&vatta>=kapha){
        let vattaSugession=document.querySelector(".sugessionsvatta");
        vattaSugession.style.display="flex";
    }
    else if(pitta>=vatta&&pitta>=kapha){
        let pittaSugession=document.querySelector(".sugessionspitta");
        pittaSugession.style.display="flex";
    }
    else if(kapha>=vatta&&kapha>=pitta){
        let pittaSugession=document.querySelector(".sugessionspitta");
        pittaSugession.style.display="flex";
    }

    if(vatta==pitta){
        let vattaSugession=document.querySelector(".sugessionsvatta");
        vattaSugession.style.display="flex";
        let pittaSugession=document.querySelector(".sugessionspitta");
         pittaSugession.style.display="flex";
    }else if(vatta==kapha){
        let vattaSugession=document.querySelector(".sugessionsvatta");
        vattaSugession.style.display="flex";
        let kaphaSugessions=document.querySelector(".sugessionskapha");
        kaphaSugession.style.display="flex";
    }else if(kapha==pitta){
        let kaphaSugessions=document.querySelector(".sugessionskapha");
        kaphaSugession.style.display="flex";
        let pittaSugession=document.querySelector(".sugessionspitta");
         pittaSugession.style.display="flex";
    }else if(vatta>pitta&&vatta>kapha){
        let vattaSugession=document.querySelector(".sugessionsvatta");
        vattaSugession.style.display="flex";
    }
    else if(pitta>vatta&&pitta>kapha){
        let pittaSugession=document.querySelector(".sugessionspitta");
        pittaSugession.style.display="flex";
    }
    else if(kapha>vatta&&kapha>pitta){
        let pittaSugession=document.querySelector(".sugessionspitta");
        pittaSugession.style.display="flex";
    }
}