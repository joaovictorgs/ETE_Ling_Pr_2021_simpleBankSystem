/**
 * @type {Array.<clientes>}
 */
var clientes = [
    [nome = "Bruno",
     código = "123", 
     senha = "123", 
     saldo = 100], 
    [nome = "Joaozinho",
     código = "456", 
     senha = "456", 
     saldo = 10],
]

var codigo = window.prompt("Digite o seu código")
var senha = window.prompt("Digite sua senha")
do{
/**
 * 
 * @param {string} cliente busca a conta relacionada com o código e a senha já inseridos 
 * @returns {string}
 */

function procura_cliente(cliente){
return cliente[1] == codigo && cliente[2] == senha
}
var cliente_localizado = (clientes.find(procura_cliente))
if(cliente_localizado == null){
alert("Cliente não localizado")
}

else{
var operacao = Number(window.prompt("Qual operação você gostaria de fazer? 1-Saque, 2-Deposito, 3-Transferencia"))
var valor =  Number(window.prompt("Qual o valor da operação em R$"))  
}
if(valor<0){
    alert("O valor digitado está incorreto")
}
else{
switch(operacao){
    case 1:
        if(cliente_localizado[3]>=valor && valor>0){
cliente_localizado[3]=cliente_localizado[3]-valor            
console.log("a operação foi realizada e o seu saldo atual é de: R$" +cliente_localizado[3])
        }
        else{
        alert("você não possui saldo o sufiente para realizar a operação, seu saldo é de: R$" +cliente_localizado[3])    
        }
        break
    case 2:
        var codigo2 = window.prompt("Digite o código da conta em que você deseja realizar o depósito")
        /**
         * 
         * @param {string} conta procura a conta relacionada com o código inserido
         * @returns {string} 
         */
        function procura_conta(conta){
            return conta[1] == codigo2 
            }
            
            var conta_localizada = (clientes.find(procura_conta))
            
            if(conta_localizada == null){
            alert("Conta não localizada")
            }
            else{
                conta_localizada[3]=conta_localizada[3]+valor            
                console.log("a operação foi realizada")    
            }
        break
    case 3:
        if(cliente_localizado[3]>=valor && valor>0){
        var codigo2 = window.prompt("Digite o código da conta em que você deseja realizar o depósito")
        /**
         * 
         * @param {string} conta procura a conta relacionada com o código inserido
         * @returns {string}
         */
        function procura_conta(conta){
            return conta[1] == codigo2 
            }
            
            var conta_localizada = (clientes.find(procura_conta))
            
            if(conta_localizada == null){
            alert("Conta não localizada")
            }
            else{
                conta_localizada[3]=conta_localizada[3]+valor
                cliente_localizado[3]=cliente_localizado[3]-valor       
                console.log("a operação foi realizada e o seu saldo atual é de: R$"+cliente_localizado[3])    
            }
        }
        else{
            alert("você não possui saldo o sufiente para realizar a operação, seu saldo é de: R$" +cliente_localizado[3])  
        }

        break

}
}
var continuar = true
continuar = window.confirm("você deseja fazer outra operação")
}
while(continuar)