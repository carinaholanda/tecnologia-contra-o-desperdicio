const botaoQuiz = document.getElementById("botao-quiz");
const resultado = document.getElementById("resultado");

botaoQuiz.addEventListener("click", function () {

    let pontos = 0;

    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');

    if (!q1 || !q2 || !q3) {
    resultado.innerHTML = `
        <div class="resultado-card atencao">
            <h3>⚠️ Atenção</h3>
            <p>Responda todas as perguntas antes de continuar.</p>
        </div>
        `;
        return;
    }

    if (q1.value === "sim") pontos++;
    if (q2.value === "sim") pontos++;
    if (q3.value === "sim") pontos++;

    if (pontos === 3) {

        resultado.innerHTML = `
            <div class="resultado-card excelente">
                <h2>${pontos} de 3 pontos</h2>
                <h3> 🌱Excelente!</h3>

                <p>
                    Parabéns! Sua indústria está no caminho certo.
                </p>

                <p>
                    <strong>
                    A tecnologia está ajudando a construir uma operação mais eficiente e sustentável.
                    </strong>
                </p>

                <div>
                    <p>
                        Continue assim e inspire outras empresas!
                    </p>
                 </div> 
            </div>
        `;

    } else if (pontos === 2) {

        resultado.innerHTML = `
            <div class="resultado-card bom">
                <h2>${pontos} de 3 pontos</h2>
                <h3>👍Bom caminho!</h3>

                <p>
                    Sua empresa já adota práticas sustentáveis,
                    mas ainda pode utilizar mais tecnologia para reduzir desperdícios.
                </p>
            </div>
        `;

    } else if (pontos === 1) {

        resultado.innerHTML = `
            <div class="resultado-card atencao">
                <h2>${pontos} de 3 pontos</h2>
                <h3>⚠️Atenção</h3>

                <p>
                    Existem diversas oportunidades para reduzir desperdícios.
                </p>
            </div>
        `;

    } else {

        resultado.innerHTML = `
            <div class="resultado-card ruim">
                <h2>0 de 3 pontos</h2>

                <h3>🚨Hora de agir!</h3>

                <p>
                    Pequenas mudanças podem gerar grandes resultados.
                </p>
            </div>
        `;
    }

});