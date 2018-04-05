// Indications:
// Créer une fonction "start" qui appelle d'une manière répétitive via la fonction setInterval.
// Créer une fonction "stop" qui arrête le traitement de setInterval.
// Créer une fonction "reset" qui remet les valeurs et l'affichage à 0 .

// La méthode setInterval () appelle une fonction ou évalue une expression à des intervalles déterminés (en millisecondes).

// La méthode setInterval () continuera d' appeler la fonction jusqu'à ce que clearInterval () est appelée, ou la fenêtre est fermée.

console.log("test");

var h = 0;
var m = 0;
var s = 0;
var time;

// Je charge ma page avec le $(document).ready
$(document).ready(function () {

    // la méthode setInterval () exécutera la fonction une fois toutes les 1 seconde, comme une montre numérique
    $("#start").click(function () {
        time = setInterval(function () {
            // On affiche les variables dans la div dans le html
            $("#s").html(s);
            $("#m").html(m);
            $("#h").html(h);
            s++;
            console.log("seconde:", s);
            if (s > 58) {
                m++;
                s = 0;

                console.log("minute:", m);
            }
            if (m > 58) {
                h++;
                m = 0;
            }
        }, 1000);

    });

    $("#stop").click(function () {

        clearInterval(time); //clearInterval stoppe l'action de setInterval

    });

    $("#reset").click(function () {

        s = 0;
        m = 0;
        h = 0;

        // On affiche les variables dans la div dans le html
        $("#s").html("0");
        $("#m").html("0");
        $("#h").html("0");

    });
});