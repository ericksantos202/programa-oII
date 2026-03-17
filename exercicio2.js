const jogadores = [
    { nome: "Luigi", pts: 100},
    { nome: "Mario", pts: 250},
    { nome: "Yoshi", pts: 150},
];

const rankingdecres = jogadores.sort((a, b) => {return b.pts - a.pts;});

const mario = jogadores.find(j => {return j.nome === 'Mario';});

console.log(rankingdecres);
console.log(mario);