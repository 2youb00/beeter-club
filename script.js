async function get(){
    const response= await fetch("club.json");
    const data= await response.json();
    console.log(data["Premier League"]);
    return await data;
}
get();

let UCL1=document.querySelector(".UCL1");
let UCL2=document.querySelector(".UCL2");
let lnga1=document.querySelector(".la-liga1");
let lnga2=document.querySelector(".la-liga2");
let super1=document.querySelector(".super1");
let super2=document.querySelector(".super2");















// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btns1 = document.querySelector(".pls1");
var btnspict1 = document.querySelector(".Club1Logo");
var btns2 = document.querySelector(".pls2");
var btnspict2 = document.querySelector(".Club2Logo");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
let plschoose=0;
// When the user clicks on the button, open the modal
 function pls1() {
        modal.style.display = "block";plschoose=1;
        return plschoose;
    }
btns1.onclick =pls1;
btnspict1.onclick =pls1;
function pls2() {
        modal.style.display = "block"; plschoose=2;
        return plschoose;}
btns2.onclick = pls2;
btnspict2.onclick = pls2;


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/// open and close the sitter
function toggleClubs(countryId) {
    var clubsDiv = document.getElementById(countryId);
    if (clubsDiv.classList.contains("displaynone")) {
        clubsDiv.classList.remove("displaynone");
    } else {
        clubsDiv.classList.add("displaynone");
    }
}



// seching for the name of the club---------------------------------
let serchinpet = document.querySelector(".serch-club-Name");
let serchbtn = document.querySelector(".serch-btn");
serchbtn.addEventListener("click", async () => {
    data= await get();
    if(serchinpet.value.indexOf(data.Bundesliga[0].club)!=-1) {
        console.log(data.Bundesliga[0].club);
    }else{
        for (let i = 0; i < data.Bundesliga.length; i++) {
            console.log(data.Bundesliga[i].club);
            
        }
        
    }
})
//  cliking the club from the sech pop up -------------------
//------name of the title ban on the contry 
//--------------------------put the titles after ccchoseing the club --------------------
function cunt(ucl,Europa,liga,supercop,domesticcup){
return ((Number(ucl)*10)+(Number(Europa)*2.9)+(Number(supercop*1.5))+(Number(liga)*3.5)+(Number(domesticcup)*2.5));
}
function puttitles(imgsrc,ucl,Europa,liga,supercop,domesticcup,ligasrc,domesticcupsrc,i){
    let SCORE=cunt(ucl,Europa,liga,supercop,domesticcup).toFixed(2);
    if(i==1){
        console.log(1);
        document.querySelector('.Club1Logo').src=imgsrc;
        document.querySelector('.Club1Logo').classList.remove('displaynone');
        document.querySelector('.pls1').classList.add('displaynone');
        document.querySelector('.UCL1 p').innerHTML=ucl;
        document.querySelector('.Europa1 p').innerHTML=Europa;
        document.querySelector('.la-liga1 p').innerHTML=liga;
        document.querySelector('.la-liga1 img').src=ligasrc;
        document.querySelector('.super1 p').innerHTML=supercop;
        document.querySelector('.domesticcup1 p').innerHTML=domesticcup;
        document.querySelector('.domesticcup1 img').src=domesticcupsrc;
        document.querySelector('.SCORE1 p').innerHTML=SCORE;
    }else if(i==2){
        document.querySelector('.Club2Logo').src=imgsrc;
        document.querySelector('.Club2Logo').classList.remove('displaynone');
        document.querySelector('.pls2').classList.add('displaynone');
        document.querySelector('.UCL2 p').innerHTML=ucl;
        document.querySelector('.Europa2 p').innerHTML=Europa;
        document.querySelector('.la-liga2 p').innerHTML=liga;
        document.querySelector('.la-liga2 img').src=ligasrc;
        document.querySelector('.super2 p').innerHTML=supercop;
        document.querySelector('.domesticcup2 p').innerHTML=domesticcup;
        document.querySelector('.domesticcup2 img').src=domesticcupsrc;
        document.querySelector('.SCORE2 p').innerHTML=SCORE;

    }
}

let clubsinf=document.getElementById("clubInfo");
async function choose(contry,iname){
        data= await get();
        modal.style.display = "none";
        let imgsrc=data[`${contry}`][iname].imageSrc;
        let urc=data[`${contry}`][iname]['UEFA Champions League'];
        let Europa=data[`${contry}`][iname]['UEFA Europa League'];
        let liga=data[`${contry}`][iname][`domestic leagues`];
        let ligasrc=data[`${contry}`][iname][`domestic leagues src`];
        let supercop=data[`${contry}`][iname]['Supercopa'];
        let domesticcup=data[`${contry}`][iname][`domestic cup`];
        let domesticcupsrc=data[`${contry}`][iname][`domestic cup src`];
        console.log(imgsrc,urc,liga,supercop);
        if(plschoose==1){
        puttitles(imgsrc,urc,Europa,liga,supercop,domesticcup,ligasrc,domesticcupsrc,1);
        }else if(plschoose==2){
        puttitles(imgsrc,urc,Europa,liga,supercop,domesticcup,ligasrc,domesticcupsrc,2);
        }
        console.log(data[`${contry}`][iname]);
        
    };