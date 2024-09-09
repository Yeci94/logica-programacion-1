
function name (num1, num2 , num3){

    let mayor;
    let menor;
    let central;
    if (num1>=num2 && num1>=num3 ){
        mayor=num1
    }else if (num2>=num1 && num2>=num3){
        mayor=num2
    }else if (num3>=num2 && num3>=num1){
        mayor=num3
    }
    
    if (num1<=num2 && num1<=num3){
        menor=num1
    }else if (num2<=num1 && num2<=num3){
        menor=num2
    }else if (num3<= num2 && num3<=num1){
        menor=num3
    }
    
    if (num1<= mayor && num1>=menor){
        central=num1
    }else if (num2<= mayor && num2>=menor){
        central=num2
    }else if (num3<= mayor && num3>=menor){
        central=num3
    }
     console.log(`${mayor}  ${central}  ${menor}`);
     console.log(`${menor}  ${central}  ${mayor}`);
    }
     let num1;
    
    // Repetir hasta que el usuario ingrese un número válido
    while (true) {
        num1 = parseInt(prompt("Ingrese número 1"));
    
        // Verificar si la entrada es un número
        if (!isNaN(num1)) {
            break; // Si es un número, salir del bucle
        } else {
            alert("Por favor, ingrese un número válido.");
        }
    }
        let num2;
        while(true) {
             num2 = parseInt(prompt("ingrese numero 2"));
        if (!isNaN(num2)) {
            break;
         }else{
            alert("Por favor , ingrese un numero valido.");
         }
    
    }
        
    let num3
    
        // Repetir hasta que el usuario ingrese un número válido
        while (true) {
            num3 = parseInt(prompt("Ingrese número 3"));
        
            // Verificar si la entrada es un número
            if (!isNaN(num3)) {
                break; // Si es un número, salir del bucle
            } else {
                alert("Por favor, ingrese un número válido.");
            }
        }
    
    
    
    name(num1,num2,num3)