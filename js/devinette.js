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
     

for(var essai = 1; essai <= 7; essai++){ // Le jeu ne permet que six tentatives pour réussir la devinette
    var reponse = prompt("Entrez un nombre compris entre 1 et 100 :" );
    if (reponse > solution){
            reponse = console.log(reponse + " est trop grand, veuillez saisir un autre nombre");
        }
        else if(reponse < solution){
            reponse = console.log(reponse + " est trop petit, veuillez saisir un autre nombre");
        }
        else{
            reponse = console.log("Bravo, La solution est " + solution + " et tu as deviné en" + essai + " essais ");
            
        }
}

essai++;

if ((essai >=6) && (reponse !== solution)){
            reponse = prompt("Perdu, La solution était "  + solution +  "\nEssaie encore !");
    }
    


    


  
