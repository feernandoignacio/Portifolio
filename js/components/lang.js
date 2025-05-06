
    document.querySelectorAll('[data-idioma]').forEach(btn => {
        btn.addEventListener('click', () => {
            const idioma = btn.getAttribute('data-idioma');

            fetch('./assets/lang/idiomas.json')
                .then(response => response.json())
                .then(traducoes => {
                    const textos = traducoes[idioma];
                    document.querySelectorAll('[data-i18n]').forEach(el => {
                        const chave = el.getAttribute('data-i18n');
                        if (textos[chave]) {
                            el.innerHTML = textos[chave];
                        }

                        


                    });
                });
        });
    });