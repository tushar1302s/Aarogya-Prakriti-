let icon1=document.querySelector("#nextIcon1");
let next=0;
icon1.addEventListener("click",()=>{
    let firstImg=document.querySelector(".firstImg");
    firstImg.style.display="none";
    let secondImg=document.querySelector(".secondImg");
    secondImg.style.display="flex";
});
let icon2=document.querySelector("#nextIcon2");
icon2.addEventListener("click",()=>{
    let secondImg=document.querySelector(".secondImg");
    secondImg.style.display="none";
    let thirdImg=document.querySelector(".thirdImg");
    thirdImg.style.display="flex";
});

let form=document.querySelector("form");
console.dir(form);




let startBtn=document.querySelector("#startBtn");
startBtn.addEventListener("click",()=>{
    let box=form.children[next];
    box.classList.add("display");
    box.classList.remove("displayNone");
    let quizInfo=document.querySelector(".quizInfo");
    quizInfo.style.display="none";
})










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
let inp25=form[24];
let inp26=form[25];
let inp27=form[26];
let inp28=form[27];
let inp29=form[28];
let inp30=form[29];
let inp31=form[30];
let inp32=form[31];
let inp33=form[32];
let inp34=form[33];
let inp35=form[34];
let inp36=form[35];
let inp37=form[36];
let inp38=form[37];
let inp39=form[38];
let inp40=form[39];
let inp41=form[40];
let inp42=form[41];
let inp43=form[42];
let inp44=form[43];
let inp45=form[44];

let submitBtn=document.querySelector(".submitBtn")

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
    nextBtn.classList.add("display");
});
inp25.addEventListener("click",function(){
    nextBtn.classList.add("display");
    
});
inp26.addEventListener("click",function(){
    nextBtn.classList.add("display");
});
inp27.addEventListener("click",function(){
    nextBtn.classList.add("display");
    
});
inp28.addEventListener("click",function(){
    nextBtn.classList.add("display");
    
});
inp29.addEventListener("click",function(){
    nextBtn.classList.add("display");
    
});
inp30.addEventListener("click",function(){
    nextBtn.classList.add("display");
    
});
inp31.addEventListener("click",function(){
    nextBtn.classList.add("display");
    
});
inp32.addEventListener("click",function(){
    nextBtn.classList.add("display");
    
});
inp33.addEventListener("click",function(){
    nextBtn.classList.add("display");
    
});
inp34.addEventListener("click",function(){
    nextBtn.classList.add("display");
    
});
inp35.addEventListener("click",function(){
    nextBtn.classList.add("display");
    
});
inp36.addEventListener("click",function(){
    nextBtn.classList.add("display");
    
});
inp37.addEventListener("click",function(){
    nextBtn.classList.add("display");
    
});
inp38.addEventListener("click",function(){
    nextBtn.classList.add("display");
    
});
inp39.addEventListener("click",function(){
    nextBtn.classList.add("display");
    
});
inp40.addEventListener("click",function(){
    nextBtn.classList.add("display");
    
});
inp41.addEventListener("click",function(){
    nextBtn.classList.add("display");
    
});
inp42.addEventListener("click",function(){
    nextBtn.classList.add("display");
    
});
inp43.addEventListener("click",function(){
    submitBtn.style.display="block";
    
});
inp44.addEventListener("click",function(){
    submitBtn.style.display="block";
    
});
inp45.addEventListener("click",function(){
    submitBtn.style.display="block";
    
});


let nextBtn=document.querySelector(".nextBtn");
nextBtn.addEventListener("click",()=>{
    let box=form.children[next];
    box.classList.add("displayNone");
    box.classList.remove("display");
    next++;
    nextBtn.classList.remove("display");
    box=form.children[next];
    box.classList.add("display");
    box.classList.remove("displayNone");
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
    let container=document.querySelector(".container");
    container.style.display="none";
    for(i=0;i<45;i++){
        if((i%3==0)&&(form[i].checked)){
            A++;
        }else if((i%3==1)&&(form[i].checked)){
            B++;
        }else if((i%3==2)&&(form[i].checked)){
            C++;
        }
    }
    determinePrakrati();
});
function determinePrakrati(){
    let vatta=(A/15)*100;
    let pitta=(B/15)*100;
    let kapha=(C/15)*100;
    displayPrakrati(vatta,pitta,kapha);
}
function displayPrakrati(vatta,pitta,kapha){
    let chart=document.querySelector("#myChart");
    chart.style.display="block";
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

function sugessions(vatta,pitta,kapha){
    if(vatta>=60){
        let vattaSugession=document.querySelector(".sugessionVatta");
        vattaSugession.style.display="block"; 
    }else if(pitta>=60){
        let pittaSugession=document.querySelector(".sugessionPitta");
        pittaSugession.style.display="block";
    }else if(kapha>=60){
        let kaphaSugessions=document.querySelector(".sugessionKapha");
        kaphaSugession.style.display="block";
    }else if(vatta=>40||pitta>=40){
        let vattapittaSugession=document.querySelector(".sugessionVatta");
        vattapittaSugession.style.display="block";
    }else if(vatta>=40||kapha>=40){
        let pittaSugession=document.querySelector(".sugessionPitta");
        pittaSugession.style.display="block";
    }else if(pitta>=40||kapha>=40){
        let kaphaSugessions=document.querySelector(".sugessionKapha");
        kaphaSugession.style.display="block";
    }else{
        let pittaSugession=document.querySelector(".sugessionPitta");
        pittaSugession.style.display="block";
    }
}