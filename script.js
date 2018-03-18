// Indications:
// Créer une fonction "start" qui appelle d'une manière répétitive via la fonction setInterval.
// Créer une fonction "stop" qui arrête le traitement de setInterval.
// Créer une fonction "reset" qui remet les valeurs et l'affichage à 0 .

// https://www.zirolis.com/tuto/realiser-un-chronometre-avec-html-css-et-jquery

console.log("test");

var h = 0;
var m = 0;
var s = 0;
var time;
// var bo = true;

// Je charge ma page avec le $(document).ready
$(document).ready(function () {

    // setInterval déclenche des actions après un intervalle de temps donné, ou de la répéter après un intervalle de temps.
    $("#start").click(function () {
        time = setInterval(function () {
            s++;

            if (s > 59) {
                m++;
                s = 0;
            }
            if (m > 59) {
                h++;
                m = 0;
            }

            $("#s").html();
            $("#m").html();
            $("#h").html();
        }, 1000);
        // bo = true;
    });

    $("#stop").click(function () {

        clearInterval(time); // On stop l'intervalle lancer

        // On affiche les variable dans les conteneur dédié
        $("#s").html();
        $("#m").html();
        $("#h").html();

        // Affecter true a bo pour indiquer qu'il n'y a plus d'Intervalle actif
        // bo = true;
    });

    $("#reset").click(function () {

        s = 0;
        m = 0;
        h = 0;

        $("#s").html("0 s");
        $("#m").html("0 min :");
        $("#h").html("0 h :");

        // if (bo == false) {
        //     clearInterval(temps);
        // }

        // bo = true;

    });
});