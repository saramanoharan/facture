function onload() {
    document.getElementById('date').value=formatDate(Date.now()); 
}
function formatDate(date) 
{
    var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();

    if (month.length < 2) {
        month = '0' + month;
    }

    if (day.length < 2) {
        day = '0' + day;
    }

    return [day, month, year];
}



function calculate(){
		/*Quantité*/
     	var note1= parseInt(document.getElementById("ligne1b").value);
		var note2= parseInt(document.getElementById("ligne2b").value);
		var note3= parseInt(document.getElementById("ligne3b").value);
		var note4= parseInt(document.getElementById("ligne4b").value);
		var note5= parseInt(document.getElementById("ligne5b").value);
		var note6= parseInt(document.getElementById("ligne6b").value);
		var note7= parseInt(document.getElementById("ligne7b").value);
		var note8= parseInt(document.getElementById("ligne8b").value);
		var note9= parseInt(document.getElementById("ligne9b").value);
		var note10= parseInt(document.getElementById("ligne10b").value);
		var note11= parseInt(document.getElementById("ligne11b").value);
		/*Prix unitaire */
		var notea= parseInt(document.getElementById("ligne1c").value);
		var noteb= parseInt(document.getElementById("ligne2c").value);
		var notec= parseInt(document.getElementById("ligne3c").value);
		var noted= parseInt(document.getElementById("ligne4c").value);
		var notee= parseInt(document.getElementById("ligne5c").value);
		var notef= parseInt(document.getElementById("ligne6c").value);
		var noteg= parseInt(document.getElementById("ligne7c").value);
		var noteh= parseInt(document.getElementById("ligne8c").value);
		var notei= parseInt(document.getElementById("ligne9c").value);
		var notej= parseInt(document.getElementById("ligne10c").value);
		var notek= parseInt(document.getElementById("ligne11c").value);
		/*Total*/
		document.getElementById("ligne1d").value=(note1*notea);
		document.getElementById("ligne2d").value=(note2*noteb);
		document.getElementById("ligne3d").value=(note3*notec);
		document.getElementById("ligne4d").value=(note4*noted);
		document.getElementById("ligne5d").value=(note5*notee);
		document.getElementById("ligne6d").value=(note6*notef);
		document.getElementById("ligne7d").value=(note7*noteg);
		document.getElementById("ligne8d").value=(note8*noteh);
		document.getElementById("ligne9d").value=(note9*notei);
		document.getElementById("ligne10d").value=(note10*notej);
		document.getElementById("ligne11d").value=(note11*notek);

		document.getElementById("totaux").value=(note1*notea+note2*noteb+note3*notec+note4*noted+note5*notee+note6*notef+note7*noteg+note8*noteh+note9*notei+note10*notej+note11*notek +"€");

	// Sous-Total
	const sous_toto = parseInt(document.getElementById('sous_toto').value=prix*qte);
	// Remise	
	const remise = parseInt(document.getElementById("remise").value);
	// Sous-Total moins les remises
	const sous_toto_remise = parseInt(document.getElementById('sous_toto_remise').value=sous_toto-(remise/100));
	// Taux d'impots
	const tauximpots = parseInt(document.getElementById('tauximpots').value);
	// Taxe totale
	const totaltaxe = parseInt(document.getElementById('totaltaxe').value=Math.round(sous_toto*(tauximpots/100)));
	// Solde
	const solde = parseInt(document.getElementById('solde').value=sous_toto_remise+totaltaxe);
    // Expédition - Manutension
    const expmanu = parseInt(document.getElementById('expmanu').value);
}

function access() {
	var username = prompt("Identifiant", "");
	var password = prompt("Mot de passe", "");

	if (username === "Admin_GSB" && password === "admin") {
		document.location.href="pdf.html";
	} else {
        alert("Mauvais identifiant. Veuillez réessayer.")
    }
}


 