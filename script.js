 // Função para o botão "Banheiro"
        function enviarBanheiro() {
            const numeroBanheiro = "SEU_NUMERO_AQUI"; // Insira o número com código do país e DDD, ex: 5581999999999
            const mensagemBanheiro = "Oi, preciso ir ao banheiro, poderia me levar?";
            window.open(`https://api.whatsapp.com/send?phone=${numeroBanheiro}&text=${encodeURIComponent(mensagemBanheiro)}`, '_blank');
        }

        // Função para o botão "Emergências"
        function enviarEmergencias() {
            const numeroEmergencia = "SEU_NUMERO_AQUI"; // Insira o número do grupo de WhatsApp ou outro contato
            const mensagemEmergencia = "Estou em uma emergência, por favor, me ajudem!";
            window.open(`https://api.whatsapp.com/send?phone=${numeroEmergencia}&text=${encodeURIComponent(mensagemEmergencia)}`, '_blank');
        }

        // Função para falar o título
        function falarTitulo() {
            const titulo = document.getElementById('titulo').innerText;
            falarTexto(titulo);
        }

        // Funções de voz para acessibilidade
        const botaoBanheiro = document.getElementById('btnBanheiro');
        const botaoEmergencias = document.getElementById('btnEmergencias');

        botaoBanheiro.addEventListener('focus', () => falarTexto(botaoBanheiro.innerText));
        botaoEmergencias.addEventListener('focus', () => falarTexto(botaoEmergencias.innerText));

        // Função para falar texto
        function falarTexto(texto) {
            const synth = window.speechSynthesis;
            const utterance = new SpeechSynthesisUtterance(texto);
            utterance.lang = 'pt-BR';
            synth.speak(utterance);
        }