// let multiplicationTable=[];

// for(let i=1; i<11; i++) {
//     for (let j=1; j<11; j++) {
//         multiplicationTable.push(`${i} * ${j} = ${i*j}`)
//     }
// }

let prefix = ['gatos' , 'gato' , 'gatitos' , 'gatunos' , 'michis' , 'gatines' , 'nekos' ];
let word =  ['peludos' , 'tiernos' , 'gordos' , 'juguetones', ' dormilones' , 'comelones'];

let multiplicationTable= [];

for(let i=0; i < prefix.length; i++) {
    for(let j=0; j <word.length; j++) {
        // console.log(`${prefix[1]}${word[j].com}`)
        let div = document.createElement('div');
        div.innerText = `
            ${prefix[i]}${word[j]}.com
            ${prefix[i]}${word[j]}.net
            ${prefix[i]}${word[j]}.us
            ${prefix[i]}${word[j]}.io
        `
        document.body.appendChild(div);
    }

}


