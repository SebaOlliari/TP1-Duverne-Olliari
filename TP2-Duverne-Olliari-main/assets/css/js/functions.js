


function func_ej1(){
    let Ej1_c1 = parseFloat (document.getElementById("Ej1_c1").value);
    let Ej1_c2 = parseFloat (document.getElementById("Ej1_c2").value);
    let Ej1_c3 = parseFloat (document.getElementById("Ej1_c3").value);
    //Hacemos  la magia del ejercicio
    let ej1_suma = Ej1_c1 + Ej1_c2 + Ej1_c3 
    document.getElementById("ej1_Res").value = ej1_suma;
}

function func_ej2(){
    let ej2_c1 = parseFloat (document.getElementById("ej2_c1").value);
    let ej2_c2 = parseFloat (document.getElementById("ej2_c2").value);
    //Hacemos  la magia del ejercicio
    let ej2_suma = ej2_c1 + ej2_c2 
    document.getElementById("ej2_suma").value = ej2_suma;
}