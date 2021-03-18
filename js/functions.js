console.log("functions js");

// apskaiciuoti kambario sienu plota
// apskaiciuoti grindu ir lubu plotus
// apskaiciuoti viso kambario visu plotu pavirsius

let ilgis = 10;
let plotis = 5;
let aukstis = 3;

// sukuri funkcija kuri grazina sienu plota

function getSienuPlotas(f_ilgis, f_plotis, f_aukstis) {
  //   debugger;
  // funkcijos body kuris vyks kai mes parasysim getSienuPlotas(10, 5, 3);
  // sienu plotas yra perimetas padauginas is auksio
  let perimetras = (f_ilgis + f_plotis) * 2;
  let sienuPlotas = perimetras * f_aukstis;
  // jau paskaiciavom sienu plota ir norim ji grazinti su return
  return sienuPlotas;
}

// funkcijos iskvietimas - invocation
// jei grazinam sienu plota tai turim ji is console loginti kad pamatytumem
// getSienuPlotas(10, 5, 3);
// let kambarys1sienos = getSienuPlotas(10, 5, 3);
// console.log("kambarys1sienos", kambarys1sienos, "kvm");

// getSienuPlotas(11, 4, 2);
// getSienuPlotas(ilgis, plotis, aukstis);

//----------------------------------------------------------------------------------------------------------

// ta pati funkcija kuri atspausdina sienu plota
function getSienuPlotasAspausdinti(f_ilgis, f_plotis, f_aukstis) {
  //   debugger;
  // funkcijos body kuris vyks kai mes parasysim getSienuPlotas(10, 5, 3);
  // sienu plotas yra perimetas padauginas is auksio
  let perimetras = (f_ilgis + f_plotis) * 2;
  let sienuPlotas = perimetras * f_aukstis;
  // jau paskaiciavom sienu plota ir norim ji grazinti su return
  console.log("sienuPlotas", sienuPlotas);
}
// siuo budu mes negalim panaudoti gautos reiksmes tolimesniem poreikiam
getSienuPlotasAspausdinti(10, 5, 3);

// padauginti sienu plota is dvieju
let sienuPlotasKartDu = getSienuPlotas(10, 5, 3) * 2;

//----------------------------------------------------------------------------------------------------------
// apskaiciuoti grindu ir lubu plotus
//  padauginti ilgi is plocio ir viska is dvieju

function getGrindysLubos(f_ilgis, f_plotis) {
  let grinduPlotas = f_ilgis * f_plotis;
  return grinduPlotas * 2;
}

// let grindysLubos = getGrindysLubos(10, 5);
// console.log("grindysLubos", grindysLubos);

//----------------------------------------------------------------------------------------------------------
// parasyti funkcija apskaiciuoti viso kambario visu plotu pavirsius ir juos grazinti
function getAllPavirsiaiPlotas(f_ilgis, f_plotis, f_aukstis) {
  // reikia sienu plota sudeti su gridu ir lubu plotu
  let sienuPlotas = getSienuPlotas(f_ilgis, f_plotis, f_aukstis);
  let grindyLubos = getGrindysLubos(f_ilgis, f_plotis);
  return sienuPlotas + grindyLubos;
}

// apskaiciuoti 3 kambariu pavirsiu plotus
// i p a
// 10 4 3
// 11 10 4
// 20 5 4.5

let kambarys1Pavirsiai = getAllPavirsiaiPlotas(10, 4, 3);
console.log("kambarys1Pavirsiai", kambarys1Pavirsiai);

let kambarys2Pavirsiai = getAllPavirsiaiPlotas(11, 10, 4);
console.log("kambarys2Pavirsiai", kambarys2Pavirsiai);

let kambarys3Pavirsiai = getAllPavirsiaiPlotas(20, 5, 4.5);
console.log("kambarys3Pavirsiai", kambarys3Pavirsiai);
