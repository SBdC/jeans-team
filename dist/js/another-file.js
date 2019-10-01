/*!
 * project-name v0.0.1
 * A description for your project.
 * (c) 2019 YOUR NAME
 * MIT License
 * https://github.com/SBdC/jeans-team.git
 */

console.log('another-file.js file loaded');


/*global  Siema*/
/*eslint no-undef: "error"*/

var mySiema = new Siema({
    duration: 1000,
    loop: true,
    passive: true
}); // listen for keydown event

setInterval((function() {
    return mySiema.next();
}), 6000);


var impressum = document.getElementById("impressum");

var show = document.getElementById("show-impressum");

var click = true;

impressum.addEventListener("click", showImpressum, false);

function showImpressum() {


    if (click === true) {
        click = false;
        impressum.style.color = "red";
        impressum.innerHTML = "Impressum X";
        var div = document.createElement("div");
        div.id = "wrap";

        div.innerHTML = "<p><strong>Jeans Team -" + "c/o Franz Schuette - Wattstrasse 24 - 13355 Berlin - Deutschland </strong> </p> " + " <p> Verantwortlich nach $ 6 Teledienstgesetz: Franz Schuette</p>" + "<p>Hinweise: Jeans team bemueht sich auf dieser Webseite richtige und vollstaendige Informationen zur Verfuegung zu stellen, uebernimmt jedoch keine Haftung oder Garantie fuer die Aktualitaet, Richtigkeit und Vollstaendigkeit der auf dieser Webseite bereitgestellten Informationen. Dies gilt auch fuer alle Verbindungen (&quot;Links&quot;), auf die diese Webseite direkt oder indirekt verweist. </p>" +
            "<p> Jeans team ist fuer den Inhalt einer Seite, die mit einem solchen Link erreicht wird, nicht verantwortlich. Die Redaktion uebernimmt keine Haftung fuer unverlangt eingesandte Manuskripte, Fotos, Illustrationen.</p>" +
            "<p> Jeans Team behaelt sich das Recht vor, ohne vorherige Ankuendigung Aenderungen oder Ergaenzungen der bereitgestellten Informationen vorzunehmen. Der Inhalt dieser Webseite ist urheberrechtlich geschuetzt. Vervielfaeltigung, Speicherung und Nachdruck nur mit ausdruecklicher, schriftlicher Genehmigung von Jeans Team. Jeans Team beachtet die datenschutzrechtlichen Bestimmungen des Bundesdatenschutzgesetzes. Soweit personenbezogene Daten eingegeben werden, richten sich diese selbstverstaendlich nur an Jeans Team.</p>" +
            "<p>Jeans Team wird diese ohne die Einwilligung des Nutzers nicht an Dritte weitergeben.</p>";



        show.append(div);
    } else {
        click = true;
        impressum.innerHTML = "Impressum";
        impressum.style.color = "black";

        wrap.remove();

        console.log(click);
    }


}