const divResult = document.getElementById('result');

var tabInit = [
    [10, 10, 10, 10, 10],
    [10, 1, 1, 1, 10],
    [10, 0, 0, 0, 10],
    [10, 2, 2, 2, 10],
    [10, 10, 10, 10, 10],
];
var cptclick = new Array();
cptclick[0] = new Array(3);
cptclick[1] = new Array(3);
for (var i=0; i<2; i++){
	for (var j=0; j<3; j++){
		cptclick[i][j] = 0;
	}
}

var nbClick = 0;
var tmp;
var ready = true;
var joueur1 = true; 

tableDisplay();
document.getElementById('joueur').style.background = '#999';

function tableDisplay(){
	let txt = "";  

	for(let i=0; i < tabInit.length; i++){
		txt += "<div>";
		for(let j=0; j < tabInit[i].length; j++){
			if(tabInit[i][j] == 0 && tabInit[i][j] != 10){
				txt += "<button id=\""+i+"-"+j+"\" class='fake' style='border-color:#ffffff00;border-radius:50px;background-color:#ffffff00;width:95px;height:95px;'onclick='verification(\""+i+"-"+j+"\")'></button>";
			} else if(tabInit[i][j] == 1 && tabInit[i][j] != 10){
				txt += "<button id=\""+i+"-"+j+"\" class='bouton' style='border-color:#000000;border-radius:50px;background-color:#fff;width:95px;height:95px;'onclick='verification(\""+i+"-"+j+"\")'></button>";
			} else if(tabInit[i][j] == 2 && tabInit[i][j] != 10){
				txt += "<button id=\""+i+"-"+j+"\" class='bouton' style='border-radius:50%;background-color:#000;width:95px;height:95px;'onclick='verification(\""+i+"-"+j+"\")'></button>";
			}
		}
		txt += "</div>";
	}


	divResult.innerHTML = txt;
}

function verification(button){
	let n = button.substr(0,1);
	let m = button.substr(2,1);
	if (joueur1 == true){
		if(tabInit[n][m] == 1){
			if (parseInt(n) == 1 && parseInt(m) == 1)
				cptclick[0][0] = 1;
			if (parseInt(n) == 1 && parseInt(m) == 2)
				cptclick[0][1] = 1;
			if (parseInt(n) == 1 && parseInt(m) == 3)
				cptclick[0][2] = 1;
			execute(button);

			joueur1 = !joueur1;
		}
	}
	else{
		if(tabInit[n][m] == 2){
			if (parseInt(n) == 3 && parseInt(m) == 1)
				cptclick[1][0] = 1;
			if (parseInt(n) == 3 && parseInt(m) == 2)
				cptclick[1][1] = 1;
			if (parseInt(n) == 3 && parseInt(m) == 3)
				cptclick[1][2] = 1;
			execute(button);
			joueur1 = true;
		}
	}

}

function execute(button){
	if(ready){
		nbClick++;
	
		var ligne = button.substr(0,1);
		var colonne = button.substr(2,1);
		a = parseInt(ligne)+1;
		b = parseInt(colonne)+1;
		if((parseInt(ligne)+parseInt(colonne))%2==0){
			for(let i=ligne-1; i<=a; i++){
				for(let j=colonne-1; j<=b; j++){
					if(tabInit[i][j] == 0){
						ide = document.getElementById(i+'-'+j);
						ide.style.background = '#ffff00aa'; 
						console.log("i = "+i);
						console.log("j = "+j);

						document.getElementById(i+'-'+j).addEventListener('click', change)
						function change(){
							tmp = tabInit[i][j];
							tabInit[i][j] = tabInit[ligne][colonne];
							tabInit[ligne][colonne] = tmp;

							tableDisplay();
							Gagnant();
							if (joueur1 == false) {
								document.getElementById('joueur').style.background = '#333';
							}
							else if (joueur1 == true) {
								document.getElementById('joueur').style.background = '#999';
							}
						}
					}
				}
			}
		}
		else {
			if(tabInit[parseInt(ligne)-1][parseInt(colonne)] == 0){
				ide = document.getElementById((parseInt(ligne)-1)+'-'+(parseInt(colonne)));
				ide.style.background = '#ffff00aa'; 
				
				ide.addEventListener('click', change)
						function change(){
							tmp = tabInit[parseInt(ligne)-1][parseInt(colonne)];
							tabInit[parseInt(ligne)-1][parseInt(colonne)] = tabInit[ligne][colonne];
							tabInit[ligne][colonne] = tmp;

							tableDisplay();
							Gagnant();

							if (joueur1 == false) {
								document.getElementById('joueur').style.background = '#333';
							}
							else if (joueur1 == true) {
								document.getElementById('joueur').style.background = '#999';
							}
						}
			}
			if(tabInit[parseInt(ligne)][parseInt(colonne)-1] == 0){
				ide = document.getElementById((parseInt(ligne))+'-'+(parseInt(colonne)-1));
				ide.style.background = '#ffff00aa'; 

				ide.addEventListener('click', change)
						function change(){
							tmp = tabInit[parseInt(ligne)][parseInt(colonne)-1];
							tabInit[parseInt(ligne)][parseInt(colonne)-1] = tabInit[ligne][colonne];
							tabInit[ligne][colonne] = tmp;

							tableDisplay();
							Gagnant();
							
							if (joueur1 == false) {
								document.getElementById('joueur').style.background = '#333';
							}
							else if (joueur1 == true) {
								document.getElementById('joueur').style.background = '#999';
							}
						}
			}
			if(tabInit[parseInt(ligne)+1][parseInt(colonne)] == 0){
				ide = document.getElementById((parseInt(ligne)+1)+'-'+(parseInt(colonne)));
				ide.style.background = '#ffff00aa'; 

				ide.addEventListener('click', change)
						function change(){
							tmp = tabInit[parseInt(ligne)+1][parseInt(colonne)];
							tabInit[parseInt(ligne)+1][parseInt(colonne)] = tabInit[ligne][colonne];
							tabInit[ligne][colonne] = tmp;

							tableDisplay();
							Gagnant();

							if (joueur1 == false) {
								document.getElementById('joueur').style.background = '#333';
							}
							else if (joueur1 == true) {
								document.getElementById('joueur').style.background = '#999';
							}
						}
			}
			if(tabInit[parseInt(ligne)][parseInt(colonne)+1] == 0){
				ide = document.getElementById((parseInt(ligne))+'-'+(parseInt(colonne)+1));
				ide.style.background = '#ffff00aa'; 

				ide.addEventListener('click', change)
						function change(){
							tmp = tabInit[parseInt(ligne)][parseInt(colonne)+1];
							tabInit[parseInt(ligne)][parseInt(colonne)+1] = tabInit[ligne][colonne];
							tabInit[ligne][colonne] = tmp;

							tableDisplay();
							Gagnant();
							if (joueur1 == false) {
								document.getElementById('joueur').style.background = '#333';
							}
							else if (joueur1 == true) {
								document.getElementById('joueur').style.background = '#999';
							}
						}
			}
		}
	}
}


function Gagnant() {
	if (cptclick[0][0] == 1 && cptclick[0][1] == 1 && cptclick[0][2] == 1){
		if (tabInit[1][1]==1 && tabInit[1][2]==1 && tabInit[1][3]==1){ gagnant(1); }
		if (tabInit[2][1]==1 && tabInit[2][2]==1 && tabInit[2][3]==1){ gagnant(1); }
		if (tabInit[3][1]==1 && tabInit[3][2]==1 && tabInit[3][3]==1){ gagnant(1); }
		if (tabInit[1][1]==1 && tabInit[2][1]==1 && tabInit[3][1]==1){ gagnant(1); }
		if (tabInit[1][2]==1 && tabInit[2][2]==1 && tabInit[3][2]==1){ gagnant(1); }
		if (tabInit[1][3]==1 && tabInit[2][3]==1 && tabInit[3][3]==1){ gagnant(1); }
		if (tabInit[1][1]==1 && tabInit[2][2]==1 && tabInit[3][3]==1){ gagnant(1); }
		if (tabInit[1][3]==1 && tabInit[2][2]==1 && tabInit[3][1]==1){ gagnant(1); }
	}
	if (cptclick[1][0] == 1 && cptclick[1][1] == 1 && cptclick[1][2] == 1){
		if (tabInit[1][1]==2 && tabInit[1][2]==2 && tabInit[1][3]==2){ gagnant(2); }
		if (tabInit[2][1]==2 && tabInit[2][2]==2 && tabInit[2][3]==2){ gagnant(2); }
		if (tabInit[3][1]==2 && tabInit[3][2]==2 && tabInit[3][3]==2){ gagnant(2); }
		if (tabInit[1][1]==2 && tabInit[2][1]==2 && tabInit[3][1]==2){ gagnant(2); }
		if (tabInit[1][2]==2 && tabInit[2][2]==2 && tabInit[3][2]==2){ gagnant(2); }
		if (tabInit[1][3]==2 && tabInit[2][3]==2 && tabInit[3][3]==2){ gagnant(2); }
		if (tabInit[1][1]==2 && tabInit[2][2]==2 && tabInit[3][3]==2){ gagnant(2); }
		if (tabInit[1][3]==2 && tabInit[2][2]==2 && tabInit[3][1]==2){ gagnant(2); }
	}

	function gagnant(joueur){
		box_gagnant= document.getElementById('result');
		var txtWin = "<div style='background:black;'>";
		txtWin +="<p style='margin-top:80px;font-size:50px; color:#fff; text-align:center'>Joueur " + joueur + " est gagnant</p>"; 
		txtWin +="</div>";
		box_gagnant.innerHTML = txtWin;
	}
}