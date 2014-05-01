var question = new Array();
question[0]='NAGUTERA ICYO UTAZI UTABONYE',
question[1]='NAGUTERA ICYAMBUKA AMAZI KITAGIRA AMAGURU',
question[2]='SOGOKURU ARYOHA ABOZE',
question[3]='HAGARARA HAKUNO,MPAGARARE HAKURYA TURATE ABEZA';
question[4]='NSHINZE UMWE NDASAKARA';

var answers = new Array();
 answers[0] = 'UBUTO BWA SO NA NYOKO';
 answers[1] = 'IJWI';
 answers[2] = 'UMUNEKE';
 answers[3] = 'AMENYO';
 answers[4] = 'ICYOBO';

 var sakuza_questions = document.getElementById('sakuza_questions');
 sakuza_questions.style.display = "none";
 var sakuza_answer  = document.getElementById('sakuza_answer');
 sakuza_answer.style.display = "none";
 var sakuza_header = document.getElementById('sakuza_header');
 sakuza_header.style.display = "none";
 var myanswer = document.getElementById('myanswer');
 var Ndakiguhaye = document.getElementById('Ndakiguhaye');
 var sak_soma = document.getElementById('sak_soma');
 var countdown = document.getElementById('countdown');
 var question_count = document.getElementById('question_count');
 var soma_watinze = document.getElementById('soma_watinze');
 var soma_komeza = document.getElementById('soma_komeza');
 var tegereza = document.getElementById('tegereza');
var tegereza_img = document.getElementById('tegereza_img');

 var counter = 0;
 var control_game = question.length - 1;
 var right_ans = 0 ;
 function codes(){
 	sakuza_questions.style.color = "#333";
 	tegereza.style.display = 'none';
	tegereza_img.style.display = 'none';
	sakuza_header.style.display = "block";
	sakuza_questions.style.display = "block";
	 sakuza_answer.style.display = "block";
 sakuza_questions.innerHTML = question[counter];

sak_soma.onclick = function(){
	if (myanswer.value.toUpperCase() == answers[counter]) {
		sakuza_questions.innerHTML = 'Yego!!...wagikoze';
		if (counter < control_game) {
			counter = counter + 1;
			myanswer.value ="";
		}else if (counter >= control_game) {
			counter = counter - control_game;
			myanswer.value ="";
		};
		if ( right_ans < 4) {
      right_ans = right_ans + 1;
      question_count.innerHTML =  right_ans+'/20';
    }else if ( right_ans == 4) {
      question_count .innerHTML = right_ans+'/20';
      clearInterval(countdowntime);
      clearInterval(mycode_control);
      soma_komeza.style.display = 'block';

    };
	}
	else if (myanswer.value.toUpperCase() != answers[counter]) {
		sakuza_questions.innerHTML = "Yoo!!..wakishe igisubizo ni "+answers[counter];
		if (counter < control_game) {
			counter = counter + 1;
			myanswer.value="";
		}else if (counter >= control_game) {
			counter = counter - control_game;
			myanswer.value ="";
		};
	}
};
Ndakiguhaye.onclick = function(){
	sakuza_questions.style.color = "green";
	sakuza_questions.innerHTML = answers[counter];
	if (counter < control_game) {
			counter = counter + 1;
			myanswer.value ="";
		}else if (counter >= control_game) {
			counter = counter - control_game;
			myanswer.value ="";
		};
};
};
var mycode_control = setInterval(codes,5000);
 var seconds = 65;
   var minutes = 1;

    function settimer(){
  seconds = seconds - 1;
  if (seconds >= 10) {
    countdown.innerHTML = "0"+minutes+" : "+seconds;
  }else if ( (seconds < 10) && (seconds != 0)) {
     countdown.innerHTML = "0"+minutes+" :0"+seconds;
  }else if ((seconds < minutes) && (minutes != 0)) {
    seconds = 60;
    minutes = minutes - 1;
    countdown.innerHTML = "0"+minutes+" : "+seconds;
  }else if ((minutes == 0) && (seconds == 0)){
    clearInterval(countdowntime);
    clearInterval(mycode_control);
    countdown.innerHTML = 'over';
    soma_watinze.style.display = 'block';

  };
};
 var countdowntime = setInterval(settimer,1000);