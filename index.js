function cadastrarAluno() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const curso = document.getElementById('curso').value;

    const listaAlunos = document.getElementById('listaAlunos');

    const novoAluno = document.createElement('li');
    novoAluno.innerHTML = `<strong>${nome}</strong> - ${idade} anos - Curso: ${curso}`;
    
    listaAlunos.appendChild(novoAluno);

    // Limpar os campos do formulário após cadastrar
    document.getElementById('cadastroForm').reset();
}