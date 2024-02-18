document.addEventListener('DOMContentLoaded', () => {
    const billetter = [];

    document.getElementById('kjopBillett').addEventListener('click', kjopBillett);
    document.getElementById('slettAlle').addEventListener('click', slettAlleBilletter);

    function kjopBillett() {
        const film = document.getElementById('filmer').value;
        const antall = document.getElementById('antall').value;
        const fornavn = document.getElementById('fornavn').value;
        const etternavn = document.getElementById('etternavn').value;
        const telefonnr = document.getElementById('telefonnr').value;
        const epost = document.getElementById('epost').value;

        if(!film){
            alert('Velg film');
            return;
        }

        if(!antall){
            alert('Velg antall billetter');
            return;
        }

        if(!fornavn){
            alert('Fyll ut ditt navn');
            return;
        }

        if(!etternavn){
            alert('Fyll ut ditt etternavn');
            return;
        }

        if(!telefonnr){
            alert('Fyll ut telefonnummer');
            return;
        }

        if(!erGyldigTelefon(telefonnr)){
            alert('Telefonnummer må være 8 siffer');
            return;
        }

        if(!epost){
            alert('Fyll ut eposten din');
            return;
        }

        if(!erGyldigEpost(epost)){
            alert('Eposten er ikke gyldig');
            return;
        }


        const billett = { film, antall, fornavn, etternavn, telefonnr, epost };
        billetter.push(billett);
        visBilletter();
        blankUtFelter();
    }


    function visBilletter() {
        const liste = document.getElementById('billettListe');
        liste.innerHTML = `<tr class="bg-gray-50">
    <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Film</th>
    <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Antall</th>
    <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Fornavn</th>
    <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Etternavn</th>
    <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Telefonnr</th>
    <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Epost</th>
</tr>`;
        billetter.forEach(billett => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="px-6 py-4 text-center text-sm text-gray-500">${billett.film}</td>
                <td class="px-6 py-4 text-center text-sm text-gray-500">${billett.antall}</td>
                <td class="px-6 py-4 text-center text-sm text-gray-500">${billett.fornavn}</td>
                <td class="px-6 py-4 text-center text-sm text-gray-500">${billett.etternavn}</td>
                <td class="px-6 py-4 text-center text-sm text-gray-500">${billett.telefonnr}</td>
                <td class="px-6 py-4 text-center text-sm text-gray-500">${billett.epost}</td>
            `;
            liste.appendChild(tr);
        });
    }

    function blankUtFelter() {
        document.getElementById('filmer').value = '';
        document.getElementById('antall').value = '';
        document.getElementById('fornavn').value = '';
        document.getElementById('etternavn').value = '';
        document.getElementById('telefonnr').value = '';
        document.getElementById('epost').value = '';
    }

    function slettAlleBilletter() {
        billetter.length = 0;
        visBilletter();
    }

    function erGyldigTelefon(telefonnr) {
        const telefonRegex = /^[\d]{8}$/;
        return telefonRegex.test(telefonnr);
    }

    function erGyldigEpost(epost) {
        const epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return epostRegex.test(epost);
    }
});