// --- FUNÇÃO PARA COPIAR O CÓDIGO PARA A ÁREA DE TRANSFERÊNCIA ---
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('ID da plataforma copiado com sucesso: ', text);
        // Exibir uma mensagem para o usuário
        alert('ID da plataforma copiado com sucesso: ' + text);
    }).catch(err => {
        console.error('Erro ao copiar o código: ', err);
    });
}

// Seleciona todas as divs com a classe 'div-codigo'
const codigoDivs = document.querySelectorAll('.div-codigo');

// Adiciona um evento de clique a cada div
codigoDivs.forEach(div => {
    div.addEventListener('click', () => {
        // Obtém o valor do atributo data-codigo
        const codigo = div.getAttribute('data-codigo');
        // Copia o código para a área de transferência
        if (codigo) {
            copyToClipboard(codigo);
        }
    });
});


// --- FUNÇÃO PARA O BOTÃO QUE VOLTAR AO TOPO ---
// Seleciona o elemento com a classe 'img-icon-up'
const scrollToTopButton = document.querySelector('.img-icon-arrow_up');

// Adiciona um evento de clique ao elemento
scrollToTopButton.addEventListener('click', () => {
    // Rola suavemente até o topo da página
    window.scrollTo({
        top: 0, // Posição Y para onde rolar
        behavior: 'smooth' // Comportamento de rolagem suave
    });
});

// --- FUNÇÃO PARA O BOTÃO QUE VAI PARA O FIM ---
// Seleciona o elemento com a classe 'img-icon-up'
const scrollToBottomButton = document.querySelector('.img-icon-arrow_down');

// Adiciona um evento de clique ao elemento
scrollToBottomButton.addEventListener('click', () => {
    // Rola suavemente até o topo da página
    window.scrollTo({
        top: document.body.scrollHeight, // Posição Y para onde rolar
        behavior: 'smooth' // Comportamento de rolagem suave
    });
});


function isMobile() {
    return window.innerWidth <= 768; // Considera 768px como limite para mobile
}

document.querySelectorAll('.imagem_de_fundo').forEach(img => {
    img.addEventListener('click', () => {
        if (isMobile()) {
            // Calcula 20% da altura da janela de visualização
            const scrollAmount = window.innerHeight * 0.225; 

            // Faz a página subir 20% da altura da viewport
            window.scrollBy({
                top: +scrollAmount, // Usando vh para uma rolagem proporcional
                behavior: 'smooth' // Para uma transição suave
            });
        }
    });
});
