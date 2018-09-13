/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
var reponse = prompt("Entrez un nombre compris entre 1 et 100 :" );
while(reponse !== solution){
    for(var i = 1; i<=6; i++){// Le jeu ne permet que six tentatives pour réussir la devinette
      if (reponse > solution){
      reponse = prompt("reponse + " est trop grand,veuillez saisir un autre nombre);
      }
      else{
      reponse = prompt("reponse + " est trop petit,veuillez saisir un autre nombre);
      }
  }

  
