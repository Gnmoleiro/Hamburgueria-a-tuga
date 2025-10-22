window.onload = function () {
    const clientes = [
        {
            nome: "Ana Martins",
            comentario: "Hambúrguer delicioso: carne suculenta, pão fresco e temperos na medida. Atendimento atencioso e ambiente acolhedor!",
            foto: "assets/imgs/person/close-up-studio-shot-beautiful-young-mixed-race-woman-model-with-curly-dark-hair.jpg",
            estrelas: 5
        },
        {
            nome: "Ricardo Sousa",
            comentario: "Ótimo sabor e porção generosa de batatas fritas. Serviço rápido — só faltam mais opções de molhos especiais.",
            foto: "assets/imgs/person/portrait-beautiful-mature-blonde-bearded-guy-with-trendy-hairdo-casual-grey-shirt-smiling.jpg",
            estrelas: 4
        },
        {
            nome: "Beatriz Lopes",
            comentario: "Boa experiência geral; hambúrguer bem montado e saboroso. No entanto, o tempo de espera foi um pouco longo na hora de almoço.",
            foto: "assets/imgs/person/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person.jpg",
            estrelas: 3
        }
    ];

    const menu = [];

    preencherComentarios(clientes);
    numeroEstrelas(clientes);
};

function preencherComentarios(clientes) {
    clientes.forEach((cliente, i) => {
        const divPessoa = document.querySelector(`.person-${i + 1}`);

        divPessoa.querySelector("img").src = cliente.foto;
        divPessoa.querySelector("h4").textContent = cliente.nome;
        divPessoa.querySelector("p").textContent = cliente.comentario;
    });
}

function numeroEstrelas(clientes) {
    clientes.forEach((cliente, i) => {
        const divPessoa = document.querySelector(`.person-${i + 1}`);
        const estrelas = divPessoa.querySelectorAll(".client-rating i");

        estrelas.forEach((star) => {
            if (parseInt(star.dataset.star) <= cliente.estrelas) {
                star.style.color = "#ffc107";
            }
        });
    });
}
