let notas = [[8, 7], [6, 9, [5, 2], 8, 2], [2, 9, 5]];

for (let i = 0; i < notas.length; i++) {
    
    for (let j = 0; j < notas[i].length; j++) {

        for (let k = 0; k < notas[i][j].length; k++) {
            alert(notas[i][j][k]);
        }
    }

}
