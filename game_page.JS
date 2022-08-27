var name_of_player1=localStorage.getItem("player1_name");
var name_of_player2=localStorage.getItem("player2_name");

var player1_score=0;
var player2_score=0;
document.getElementById("player1_name").innerHTML=name_of_player1 +":";
document.getElementById("player1_name").innerHTML=name_of_player2 +":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_Question").innerHTML=name_of_player1;
document.getElementById("player_Answer").innerHTML=name_of_player2;

function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    first_letter=word.charAt(1);
    console.log(first_letter);

    length_divided_by_2=Math.floor(word.length/2);
    second_letter=word.charAt(length_divided_by_2);
    console.log(second_letter);

    length_minus_1=(word.length-1);
    third_letter=word.charAt(length_minus_1);
    console.log(third_letter);

remove_letter_1=word.replace(first_letter,"_");
remove_letter_2=remove_letter_1.replace(second_letter,"_");
remove_letter_3=remove_letter_2.replace(third_letter,"_");
console.log(remove_letter_3);
}

