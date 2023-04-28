function verificar() {
    let nomesobrenome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let tel = document.getElementById('telefone').value;
    let cep = document.getElementById('cep').value;
    let cpf = document.getElementById('cpf').value;
    let numero = document.getElementById('numero').value;
    let bairro = document.getElementById('bairro').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let senha = document.getElementById('senha').value;
    let confirmsenha = document.getElementById('confirmSenha').value;


    if (!nomesobrenome || !email || !tel || !cep || !numero || !bairro || !estado || !cidade || !cpf || !senha || !confirmsenha) {
        alert("por favor preencher todos os campos");
    } else {
        alert("campo preenchido com sucesso"); }

}