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

    const itensmenu = [
        {
            nome: "Hambúrguer Clássico",
            fotoprod: "assets/imgs/menu/hamburguer-classico.jpg",
            stock: "15",
            preco: "6.50€",
            descricao: "Carne bovina grelhada, alface, tomate, cebola roxa e molho especial no pão brioche."
        },
        {
            nome: "Cheese & Bacon",
            fotoprod: "assets/imgs/menu/cheese-bacon.jpg",
            stock: "10",
            preco: "7.90€",
            descricao: "Hambúrguer suculento com queijo cheddar derretido, bacon crocante e pickles."
        },
        {
            nome: "Veggie Gourmet",
            fotoprod: "assets/imgs/menu/veggie-gourmet.png",
            stock: "8",
            preco: "6.00€",
            descricao: "Hambúrguer vegetal caseiro, rúcula, abacate e molho de iogurte no pão integral."
        },
        {
            nome: "Duplo Steak",
            fotoprod: "assets/imgs/menu/duplo-steak.jpg",
            stock: "6",
            preco: "10.50€",
            descricao: "Duas carnes premium, queijo, cebola caramelizada e molho barbecue artesanal."
        },
        {
            nome: "Onion Rings (Acompanhamento)",
            fotoprod: "assets/imgs/menu/onion-rings.jpg",
            stock: "20",
            preco: "3.00€",
            descricao: "Anéis de cebola crocantes, servidos com molho de mostarda e mel."
        },
        {
            nome: "Combo Executivo",
            fotoprod: "assets/imgs/menu/combo-executivo.jpg",
            stock: "7",
            preco: "11.00€",
            descricao: "Hambúrguer à escolha + batatas fritas + bebida (330ml)."
        },
        {
            nome: "Batatas Fritas Premium",
            fotoprod: "assets/imgs/menu/batatas-fritas.jpg",
            stock: "25",
            preco: "3.50€",
            descricao: "Batatas fritas douradas com tempero especial da casa."
        },
        {
            nome: "Milkshake Artesanal",
            fotoprod: "assets/imgs/menu/milkshake.jpg",
            stock: "15",
            preco: "4.50€",
            descricao: "Milkshake cremoso nos sabores chocolate, baunilha ou morango."
        },
        {
            nome: "Salada Caesar",
            fotoprod: "assets/imgs/menu/salada-caesar.jpg",
            stock: "10",
            preco: "5.90€",
            descricao: "Mix de alfaces, frango grelhado, croutons e molho caesar."
        },
        {
            nome: "Brownie com Gelado",
            fotoprod: "assets/imgs/menu/brownie.jpg",
            stock: "12",
            preco: "4.90€",
            descricao: "Brownie caseiro quente com gelado de baunilha."
        }
    ];

    preencherComentarios(clientes);
    preencherCardMenu(itensmenu);
};

function preencherComentarios(clientes) {
    if (!Array.isArray(clientes) || clientes.length === 0) {
        console.warn('Não existem comentários');
        return;
    }
    clientes.forEach((cliente, i) => {
        const divPessoa = document.querySelector(`.person-${i + 1}`);
        if (!divPessoa) return;
        const estrelas = divPessoa.querySelectorAll(".client-rating i");
        const img = divPessoa.querySelector("img");
        const h4 = divPessoa.querySelector("h4");
        const p = divPessoa.querySelector("p");

        if (img) {
            img.src = cliente.foto || img.src;
        }
        if (h4) {
            h4.textContent = cliente.nome || '';
        }
        if (p) {
            p.textContent = cliente.comentario || '';
        }

        estrelas.forEach((star) => {
            const starValue = Number(star.dataset.star);
            if (Number.isNaN(starValue)){
                return "Não exites avaliações"
            };
            if (starValue <= Number(cliente.estrelas || 0)) {
                star.style.color = "#ffc107";
            }
        });
    });
}


function preencherCardMenu(itensmenu) {
    const menuSection = document.querySelector(".menu-itens");
    if (!menuSection) {
        console.warn('Não existem itens no menu');
        return;
    }
    itensmenu.forEach(item => {
        const card = document.createElement('div');
        card.className = "card-item-menu";
        card.innerHTML = `
            <img src="${item.fotoprod || ''}" alt="${item.nome || ''}">
            <h5 class="card-title-item">${item.nome || ''}</h5>
            <span class="card-price">${item.preco || ''}</span>
            <p class="card-desc">${item.descricao || ''}</p>
        `;
        menuSection.appendChild(card);
    });
}
