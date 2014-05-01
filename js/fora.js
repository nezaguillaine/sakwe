

var question = new Array();
question[0]='NAGUTERA ICYO UTAZI UTABONYE',
question[1]='NAGUTERA ICYAMBUKA AMAZI KITAGIRA AMAGURU',
question[2]='SOGOKURU ARYOHA ABOZE',
question[3]='HAGARARA HAKUNO,MPAGARARE HAKURYA TURATE ABEZA';
question[4]='NSHINZE UMWE NDASAKARA';
question[5]='MUTAMU IRABYINA MU GATABIRE ';
question[6]='UWAGACA YABA ARI UMUGABO ';
question[7]='NGEZE MU RUTOKI ABASIRIKARE BARAMFATA';
question[8]='MPAGAZE MU ISHYAMBA RIRAHUNGABANA ';
question[9]='AMAZI YACU AYA AHANDI KURYOHA ';
question[10]='ABAKOBWA BANJYE BOSE BIKWIJE IMPINDU ';
question[11]='UBUTAKA BW IWACU TURABUTEKA ';
question[12]='NAGUTERA AMAKARA Y UMUNTU ';
question[13]='NAGUTERA RUTAMBUKAKIBAYA RWA SEMUGESHI';
question[14]='NKUBITSE IGITI UMWAMI ANYUMVA NEZA';
question[15]='INKA YANJYE NYIKAMA IGARAMYE';
question[16]='NKUBISE URUSHYI RURUMIRA';
question[17]='ABAKOBWA BANJYE BARARA BAHAGAZE BWACYA BAKARYAMA';
question[18]='HAKURYA MU GIHUKU';
question[19]='MUTUMBAJURU WA RUJUGIRA';
question[20]='RUGANZU AGUYE N INGABO ZE';

 var choices = new Array();
 choices[0]= ['UBUTO BWA SO NA NYOKO','ISHYIGA','INKA','AMABOKO'],
 choices[1]= ['UBWATO','IJWI','IMBWA','UMUSAZI'],
 choices[2]= ['INGESE','UMUVUMBYI','UMUNEKE','IVU'];                    
 choices[3]= ['IMBEHO KU RUGI','AMENYO','UMUVURE','IBARIZO']
 choices[4]= ['INZIRA','IMBEBA','IBARIZO','ICYOBO']
 choices[5]= ['IMBWA MU MASINDE','IMVURA','IKAWA','ISAHA']
 choices[6]= ['AKANYARIRAJISHO','INGASIRE','UMUTURANYI','KUBUZA UMURYI KURYA']
 choices[7]= ['IMBEHO KU RUGI','IBISHOKORO','ITEKE','AMAGANGA']
 choices[8]= ['IGITI','IBARIZO','AMASO','UMUGABO']
 choices[9]= ['AMATA','INZOGA','UMWAMI','UMUHANDA']
 choices[10]= ['UMUGORE UTWITE','UMUVURE','IBARIZO','IMIRIZO Y IMBEBA']
 choices[11]= ['IFU','IMBEHO KU RUGI','INTASHYO','IKARAMU']
 choices[12]= ['IMBEHO KU RUGI','IMISAMBI','UMUSATSI','IGISHUSHANYO']
 choices[13]= ['IMBEHO KU RUGI','UMUVURE','UMUSAMBI','IBARIZO']
 choices[14]= ['AMENYO','UMUTOZO','IGISHYIMBO','ISUKARI']
 choices[15]= ['IMISOZI','ABANTU','AMAGURU','IBARIZO']
choices[16]= ['IBARA RY INKA','IGITONYANGA','UMUVURE','IGISAKUZO']
choices[17]= ['ISHUKA','AMATAFARI','IBARIZO','IMYUGARIRO']
choices[18]= ['INGABO','IKIZU KITAGIRA ABANTU','INZOKA','INDOBO']
choices[19]= ['AGATI ','UMUHUMETSO','IBARIZO','UMWUMBA W INSINA']
choices[20]= ['UMUSAZA','IMVURA','URUTOKI','IBARIZO']

 var answers = new Array();
 answers[0] = 'UBUTO BWA SO NA NYOKO',
 answers[1] = 'IJWI',
 answers[2] = 'UMUNEKE';
 answers[3] = 'AMENYO';
 answers[4] = 'ICYOBO';
 answers[5] = 'IBMWA MU MASINDE';
 answers[6] = 'KUBUZA UMURYI KURYA';
 answers[7] = 'IBISHOKORO';
 answers[8] = 'IBARIZO';
 answers[9] = 'AMATA';
 answers[10] = 'IMIRIZO Y IMBEBA';
 answers[11] = 'IFU';
 answers[12] = 'UMUSATSI';
 answers[13] = 'UMUSAMBI';
 answers[14] = 'UMUTOZO';
 answers[15] = 'UMUVURE';
answers[16] = 'IBARA RY INKA';
answers[17] = 'IMYUGARIRO';
answers[18] = 'IKIZU KITAGIRA ABANTU';
answers[19] = 'UMWUMBA W INSINA';
 answers[20] = 'URUTOKI';


 
var fora_header = document.getElementById('fora_header');
fora_header.style.display = 'none';
var quest_display = document.getElementById("fora_question");
quest_display.style.display = 'none';
var fora1= document.getElementById("fora1");
fora1.style.display='none';
var fora2= document.getElementById("fora2");
fora2.style.display='none';
var fora3= document.getElementById("fora3");
fora3.style.display='none';
var fora4= document.getElementById("fora4");
fora4.style.display='none';
var ans = document.getElementsByTagName('a');
ans[0].style.display = 'none';
ans[1].style.display = 'none';
ans[2].style.display = 'none';
ans[3].style.display = 'none';
var tegereza = document.getElementById('tegereza');
var tegereza_img = document.getElementById('tegereza_img');
var countdown = document.getElementById('countdown');
var question_count = document.getElementById('question_count');
var control_game = question.length - 1;
var fora_watinze = document.getElementById('fora_watinze');
var subiramo = document.getElementById('watinze_subiramo');
var logo_upperleft=document.getElementById('logo_upperleft');
var logo_upperright=document.getElementById('logo_upperright');
var logo_downleft=document.getElementById('logo_downleft');
var logo_downright=document.getElementById('logo_downright');

var counter = 0;
var right_ans = 0;
logo_upperleft.style.display="none";

logo_upperright.style.display="none";

logo_downleft.style.display="none";

logo_downright.style.display="none";
 
function mycode(){ 
    tegereza.style.display = 'none';
  tegereza_img.style.display = 'none';
  fora_header.style.display = 'block';
  quest_display.style.display = 'block';

  fora1.style.display='block';
fora2.style.display='block';
fora3.style.display='block';
fora4.style.display='block';
 logo_upperleft.style.display="block";

logo_upperright.style.display="block";

logo_downleft.style.display="block";

logo_downright.style.display="block";
  quest_display.innerHTML = question[counter];
 ans[0].innerHTML = choices[counter][0];
  
  ans[1].innerHTML = choices[counter][1];
  ans[2].innerHTML = choices[counter][2];
  ans[3].innerHTML = choices[counter][3];
   ans[0].style.color = '#ffffff';
   
  ans[1].style.color = '#ffffff';
  ans[2].style.color = '#ffffff';
  ans[3].style.color = '#ffffff';
   
   ans[0].style.background = '#f0c911';
  ans[1].style.background = '#f0c911';
  ans[2].style.background = '#f0c911';
  ans[3].style.background = '#f0c911';

   logo_upperleft.onclick = function(){
    logo_upperleft.style.display='none';
    if(ans[0].innerHTML == answers[counter]){
      ans[0].style.background = 'green';
      quest_display.innerHTML = 'YEGO,WAGIKOZE!';
      
      if (counter < control_game) {
      counter = counter + 1;
    }else if (counter >= control_game) {
        counter = counter - control_game;
    };
      right_ans = right_ans + 1;
      question_count.innerHTML =  right_ans+'/20';
    }
    else{
      ans[0].style.background = '#e65f44';
      quest_display.innerHTML = 'WAKISHE';
      if (ans[2].innerHTML == answers[counter] ) {
              ans[2].style.background = 'green';
              logo_downleft.style.display='none';
      }else if (ans[1].innerHTML == answers[counter]) {
        ans[1].style.background = 'green';
         logo_upperright.style.display='none';
      }else if(ans[3].innerHTML == answers[counter]){
        ans[3].style.background = 'green';
         logo_downright.style.display='none';
      };
       if (counter < control_game) {
      counter = counter + 1;
    }else if (counter >= control_game) {
        counter = counter - control_game;
    };
     }

   };
   logo_upperright.onclick = function(){
    logo_upperright.style.display='none';
    if(ans[1].innerHTML == answers[counter]){
      ans[1].style.background = 'green';
      quest_display.innerHTML = 'YEGO,WAGIKOZE!';
      if (counter < control_game) {
      counter = counter + 1;
    }else if (counter >= control_game) {
        counter = counter - control_game;
    };
      right_ans = right_ans + 1;
      question_count.innerHTML =  right_ans+'/30';
    }
    else{
      ans[1].style.background = '#e65f44';
      quest_display.innerHTML = 'WAKISHE';
      if (ans[2].innerHTML == answers[counter] ) {
              ans[2].style.background = 'green';
               logo_downleft.style.display='none';
      }else if (ans[0].innerHTML == answers[counter]) {
        ans[0].style.background = 'green';
         logo_upperleft.style.display='none';
      }else if(ans[3].innerHTML == answers[counter]){
        ans[3].style.background = 'green';
        logo_downright.style.display='none';
      };
       if (counter < control_game) {
      counter = counter + 1;
    }else if (counter >= control_game) {
        counter = counter - control_game;
    };
    }
    
   };
   logo_downleft.onclick = function(){
    logo_downleft.style.display='none';
    if(ans[2].innerHTML == answers[counter]){
      ans[2].style.background = 'green';
      quest_display.innerHTML = 'YEGO, WAGIKOZE!!';
       if (counter < control_game) {
      counter = counter + 1;
    }else if (counter >= control_game) {
        counter = counter - control_game;
    };
      right_ans = right_ans + 1;
      question_count.innerHTML =  right_ans+'/30';
    }
    else{
      ans[2].style.background = '#e65f44';
      quest_display.innerHTML = 'WAKISHE';
      if (ans[0].innerHTML == answers[counter] ) {
              ans[0].style.background = 'green';
              logo_upperleft.style.display='none';
      }else if (ans[1].innerHTML == answers[counter]) {
        ans[1].style.background = 'green';
        logo_upperright.style.display='none';
      }else if(ans[3].innerHTML == answers[counter]){
        ans[3].style.background = 'green';
        logo_downleft.style.display='none';
      };
       if (counter < control_game) {
      counter = counter + 1;
    }else if (counter >= control_game) {
        counter = counter - control_game;
    };
    }
    
   };
   logo_downright.onclick = function(){
    logo_downright.style.display='none';
    if(ans[3].innerHTML == answers[counter]){
      ans[3].style.background = 'green';
      quest_display.innerHTML = 'YEGO,WAGIKOZE!!';
       if (counter < control_game) {
      counter = counter + 1;
    }else if (counter >= control_game) {
        counter = counter - control_game;
    };
      right_ans = right_ans + 1;
      question_count.innerHTML =  right_ans+'/20';
    }
    else{
      ans[3].style.background = '#e65f44';
      quest_display.innerHTML = 'WAKISHE';
      if (ans[0].innerHTML == answers[counter] ) {
              ans[0].style.background = 'green';
              logo_upperleft.style.display='none';

      }else if (ans[1].innerHTML == answers[counter]) {
        ans[1].style.background = 'green';
         logo_upperright.style.display='none';
      }else if(ans[2].innerHTML == answers[counter]){
        ans[2].style.background = 'green';
         logo_downleft.style.display='none';
      };
       if (counter < control_game) {
      counter = counter + 1;
    }else if (counter >= control_game) {
        counter = counter - control_game;
    };
    }
    
   };
   };
var mycode_control= setInterval(mycode,5000);
var seconds=65;
var minutes=2;

  function settimer(){
  seconds = seconds - 1;
  if (seconds >= 10) {
    countdown.innerHTML = "0"+minutes+" : "+seconds;
  }
  else if ( (seconds < 10) && (seconds != 0)) {
     countdown.innerHTML = "0"+minutes+":0"+seconds;
  }
  else if((seconds<minutes)&&(minutes!=0)){
seconds=60;
minutes=minutes-1;
countdown.innerHTML="0"+minutes+":"+seconds;
  }

  else if ((minutes==0)&&(seconds == 0)) {
    clearInterval(countdowntime);
    clearInterval(mycode_control);
    countdown.innerHTML = 'over';
    fora_watinze.style.display = 'block';
  };
};
 var countdowntime = setInterval(settimer,1000);

   





