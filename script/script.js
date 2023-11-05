function openModal(lang) {
    const languageData = {
        Python: {
            title: "PYTHON",
            description: " Python é uma linguagem de programação versátil e fácil de ler, conhecida por sua simplicidade e legibilidade. É popular para desenvolvimento web, análise de dados e tarefas de automação."
        },
        JavaScript: {
            title: "JAVASCRIPT",
            description: "JavaScript é uma linguagem dinâmica e versátil usada principalmente para desenvolvimento web. Ele permite páginas da web interativas e é suportado por todos os principais navegadores da web."
        }, 
        Java: {
            title: "JAVA",
            description: "Java é uma linguagem amplamente utilizada, conhecida por sua portabilidade e segurança. É frequentemente usado em aplicativos empresariais e no desenvolvimento de aplicativos Android."
        },
        C: {
            title: "C",
            description: "C é uma linguagem fundamental que oferece controle de memória em baixo nível. É usado em sistemas operacionais, sistemas embarcados e no desenvolvimento de outras linguagens de programação."
        },
        "C#": {
            title: "C#",
            description: "C# é uma linguagem versátil desenvolvida pela Microsoft. É comumente usado no desenvolvimento de aplicativos para Windows, desenvolvimento de jogos (com Unity) e serviços web."
        },
        "C++": {
            title: "C++",
            description: "C++ é uma extensão de C que oferece recursos de programação orientada a objetos. É popular no desenvolvimento de jogos, programação de sistemas e aplicativos de alto desempenho."
        },
        Ruby: {
            title: "RUBY",
            description: "Ruby é conhecido por sua sintaxe elegante e facilidade de uso. É frequentemente usado no desenvolvimento web, especialmente com o framework Ruby on Rails."
        },
        PHP: {
            title: "PHP",
            description: "PHP é uma linguagem de script no lado do servidor que alimenta muitos sites dinâmicos. É amplamente utilizado no desenvolvimento web e pode ser incorporado em HTML."
        },
        Go: {
            title: "GO (GOLANG)",
            description: "Go é uma linguagem tipada estaticamente conhecida por sua simplicidade e eficiência. Foi projetada para programação de sistemas e serviços web."
        },
        Rust: {
            title: "RUST",
            description: "Rust é uma linguagem de programação de sistemas que enfatiza segurança e desempenho. É usada no desenvolvimento de software de alto desempenho em baixo nível."
        },
        TypeScript: {
            title: "TYPESCRIPT",
            description: "TypeScript é um superset do JavaScript que adiciona tipagem estática à linguagem. É frequentemente usado em aplicativos web de grande escala."
        },
        Swift: {
            title: "SWIFT",
            description: "Swift é uma linguagem desenvolvida pela Apple usada para o desenvolvimento de aplicativos iOS, macOS, watchOS e tvOS. É conhecida por sua velocidade e recursos de segurança."
        },
        Kotlin: {
            title: "KOTLIN",
            description: "Kotlin é uma linguagem moderna, tipada estaticamente, oficialmente suportada para o desenvolvimento de aplicativos Android. É concisa e interoperável com Java."
        },
        Dart: {
            title: "DART",
            description: "Dart é uma linguagem desenvolvida pelo Google, frequentemente usada com o framework Flutter para construir aplicativos móveis multiplataforma. Oferece um ciclo de desenvolvimento rápido."
        }
    };

    const modal = document.getElementById("knowMore");

    if (languageData[lang]) {
        const data = languageData[lang];
        document.getElementById("txt1").innerHTML = data.title;
        document.getElementById("txt2").innerHTML = data.description;
        document.getElementById("txt3").innerHTML = "";
        modal.style.display = "inline-block";
    } else {
        document.getElementById("txt1").innerHTML = "UNKNOWN LANGUAGE";
        document.getElementById("txt2").innerHTML = "This language is not in the list of supported languages.";
        document.getElementById("txt3").innerHTML = "";
        modal.style.display = "inline-block";
    }
}


function closeModal() {
    document.getElementById("knowMore").style.display = 'none';
}

function mascaraTelefone(event) {
    let tecla = event.key;
    // Regex: 
    // g = não termina verificação enquanto não houver combinação para todos os elementos  
    // \D+ = troca qualquer caractere que não seja um dígito por caracter vazio
    let telefone = event.target.value.replace(/\D+/g, "");

    // Regex: i = case insensitive
    // Se Tecla é número, concatena com telefone
    if (/^[0-9]$/i.test(tecla)) {
        telefone = telefone + tecla;
        let tamanho = telefone.length;

        if (tamanho >= 12) { // Se telefone com 12 ou mais caracteres, não faz mais nada
            return false;
        }

        if (tamanho > 10) {
            telefone = telefone.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else if (tamanho > 5) {
            telefone = telefone.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
        } else if (tamanho > 2) {
            telefone = telefone.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
        } else {
            telefone = telefone.replace(/^(\d*)/, "($1");
        }

        event.target.value = telefone;
    }

    if (!["Backspace", "Delete", "Tab"].includes(tecla)) {
        return false;
    }
}

function getParameters() {

    var params = new Array();
    var paramsRet = new Array();
    var url = window.location.href;     // Obtém a URL
    var paramsStart = url.indexOf("?"); // Procura ? na URL

    if (paramsStart != -1) {
        // Encontrou ? na URL
        var paramString = url.substring(paramsStart + 1); // Retorna parte da URL após ?
        paramString = decodeURIComponent(paramString);    // Decodifica código de URI da URL
        var params = paramString.split("&"); // Retorna trechos da String separados por &
        for (var i = 0; i < params.length; i++) {
            var pairArray = params[i].split("="); // Retorna trechos da String separados por =
            if (pairArray.length == 2) {
                paramsRet[pairArray[0]] = pairArray[1];
            }

        }
        return paramsRet;
    }
    return null; // Não encontrou ? na URL
}