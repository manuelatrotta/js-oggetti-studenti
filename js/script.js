//Esercizio 1
//Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà
var studente = {
  'nome': 'Santino',
  'cognome': 'Vito',
  'eta' : '28',
};

for (var key in studente) {
  console.log(studente[key]);
}
//Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
var classe = [
  {
    'nome': 'Oscar',
    'cognome': 'Wilde',
    'eta' : '31',
  },
  {
    'nome': 'Primo',
    'cognome': 'Levi',
    'eta' : '22',
  },
  {
    'nome': 'Bram',
    'cognome': 'Stoker',
    'eta' : '29',
  },
];

for (var i = 0; i < classe.length; i++) {
  console.log(classe[i].nome + ' ' + classe[i].cognome);
}

//Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var nuovoStudente = {
  'nome' : prompt('inserisci il nome dell\'alunno'),
  'cognome': prompt('inserisci il cognome'),
  'eta': prompt('inserisci l\ età'),
};
console.log(nuovoStudente);
classe.push(nuovoStudente);
console.log(classe);
