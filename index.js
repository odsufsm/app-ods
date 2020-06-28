var odsList = [
    {
        id: '1',
        titulo: 'Erradicação da Pobreza',
        cor: '#e5233b',
        image: 'images/01.webp',
        selecionado: false
    },
    {
        id: '2',
        titulo: 'Fome Zero e Agricultura Sustentável',
        cor: '#dca63a',
        image: 'images/02.webp',
        selecionado: false
    },
    {
        id: '3',
        titulo: 'Saúde e Bem-estar',
        cor: '#4c9e38',
        image: 'images/03.webp',
        selecionado: false
    },
    {
        id: '4',
        titulo: 'Educação de Qualidade',
        cor: '#c51a2d',
        image: 'images/04.webp',
        selecionado: false
    },
    {
        id: '5',
        titulo: 'Igualdade de Gênero',
        cor: '#ff3a20',
        image: 'images/05.webp',
        selecionado: false
    },
    {
        id: '6',
        titulo: 'Água Potável e Saneamento',
        cor: '#27bde2',
        image: 'images/06.webp',
        selecionado: false
    },
    {
        id: '7',
        titulo: 'Energia Limpa e Acessível',
        cor: '#fdc30a',
        image: 'images/07.webp',
        selecionado: false
    },
    {
        id: '8',
        titulo: 'Trabalho Decente e Crescimento Econômico',
        cor: '#a21a42',
        image: 'images/08.webp',
        selecionado: false
    },
    {
        id: '9',
        titulo: 'Indústria, Inovação e Infraestrutura',
        cor: '#fe6925',
        image: 'images/09.webp',
        selecionado: false
    },
    {
        id: '10',
        titulo: 'Redução das Desigualdades',
        cor: '#de1768',
        image: 'images/10.webp',
        selecionado: false
    },
    {
        id: '11',
        titulo: 'Cidades e Comunidades Sustentáveis',
        cor: '#fd9d24',
        image: 'images/11.webp',
        selecionado: false
    },
    {
        id: '12',
        titulo: 'Consumo e Produção Responsáveis',
        cor: '#c08b2f',
        image: 'images/12.webp',
        selecionado: false
    },
    {
        id: '13',
        titulo: 'Ação Contra a Mudança Global do Clima',
        cor: '#3f7e45',
        image: 'images/13.webp',
        selecionado: false
    },
    {
        id: '14',
        titulo: 'Vida na Água',
        cor: '#0997d9',
        image: 'images/14.webp',
        selecionado: false
    },
    {
        id: '15',
        titulo: 'Vida Terrestre',
        cor: '#56c02a',
        image: 'images/15.webp',
        selecionado: false
    },
    {
        id: '16',
        titulo: 'Paz, Justiça e Instituições Eficazes',
        cor: '#00689d',
        image: 'images/16.webp',
        selecionado: false
    },
    {
        id: '17',
        titulo: 'Parcerias e Meio de Implementação',
        cor: '#1a486a',
        image: 'images/17.webp',
        selecionado: false
    }
];

const cidadesList = [
    'Santa Maria',
    'Cachoeira do Sul',
    'Frederico Westphalen',
    'Palmeira das Missões'
];

const bairroList = [
    'Agroindustrial',
    'Arroio Grande',
    'Boi Morto',
    'Bonfim',
    'Camobi',
    'Campestre do Menino Deus',
    'Caramelo',
    'Carolina',
    'Caturrita',
    'Cauduro',
    'Centro',
    'Cerrito',
    'Chácara das Flores',
    'Cohab Fernando Ferrari',
    'Cohab Passo Ferreira',
    'Cohab Santa Marta',
    'Cohab Tancredo Neves',
    'Diácono João Luiz Pozzobon',
    'Distrito Industrial',
    'Divina Providência',
    'Dom Antônio Reis',
    'Duque de Caxias',
    'Faixa São Pedro',
    'Formosa',
    'Industrial',
    'Itararé',
    'Itararu',
    'Juscelino Kubitschek',
    'Km 3',
    'Lorenzi',
    'Maringá',
    'Medianeira',
    'Menino Jesus',
    'Noal',
    'Nonoai',
    'Nossa Senhora das Dores',
    'Nossa Senhora de Fátima',
    'Nossa Senhora de Lourdes',
    'Nossa Senhora do Perpétuo Socorro',
    'Nossa Senhora do Rosário',
    'Nossa Senhora das Dores',
    'Nossa Senhora Medianeira',
    'Nova Santa Marta',
    'Padre de Platano',
    'Passo D\'areia',
    'Passo das Tropas',
    'Patronato',
    'Pinheiro Machado',
    'Presidente João Goulart',
    'Renascença',
    'Retiro Padres',
    'Ruralcel',
    'Salgado Filho',
    'São João',
    'São José',
    'Subúrbios',
    'Tancredo Neves',
    'Tomazetti',
    'Uglione',
    'Urlandia',
    'Vila Arco-Íris',
    'Vila Bilibio',
    'Vila Fighera',
    'Vila Formosa',
    'Zona Rural'
];

slides = document.getElementById('slides');
document.getElementById('slide1-next').addEventListener('click', function () { slides.slideNext() });
document.getElementById('slide2-next').addEventListener('click', function () { slides.slideNext() });

shuffle(odsList);
orderList = [];
for (let ods of odsList) {
    orderList.push(ods.id);
}
console.log(orderList);
let grid = document.getElementById('grid');
let ods_count = 0;
while (ods_count < 17) {
    //for(let i = 0; i < 6; i++){
    //grid.innerHTML += '<ion-row style="height: 15%">';
    //for(let j = 0; j < 3 && ods_count < 17; j++){
    //grid.innerHTML += '<ion-col size="4" style="background-color: ' + odsList[ods_count].cor + '">' + odsList[ods_count].titulo + '</ion-col>';
    grid.innerHTML += 
        `<div class="square">
            <div class="content" style="background-color:${odsList[ods_count].cor}" onclick="selecionaOds(this, ${ods_count})">
                <img src="${odsList[ods_count].image}" alt="${odsList[ods_count].titulo}"></img>
            </div>
            <ion-icon class="hide" name="checkmark-circle-outline"></ion-icon>
        </div>`;
    ods_count++;
    //}
    //grid.innerHTML += '</ion-row>';
    //}
}

let cidade_select = document.getElementById('cidadeSelect');
for (let cidade of cidadesList) {
    cidade_select.innerHTML += '<ion-select-option value="' + cidade + '">' + cidade + '</ion-select-option>';
}

cidade_select.addEventListener('ionChange', function () {
    if (cidade_select.value == 'Santa Maria') {
        document.getElementById('divBairro').classList.remove('hide');
    } else {
        document.getElementById('divBairro').classList.add('hide');
    }
});

let bairro_select = document.getElementById('bairroSelect');
for (let bairro of bairroList) {
    bairro_select.innerHTML += '<ion-select-option value="' + bairro + '">' + bairro + '</ion-select-option>';
}

document.getElementById('enviarButton').addEventListener('click', function () {
    let resposta = {
        ods_selecionado: getSelecionados(),
        ods_ordem: orderList,
        cidade: cidade_select.value,
        bairro: bairro_select.value
    }
    if (resposta.ods_selecionado.length < 1) {
        presentAlert('Selecione os objetivos que você acha mais importante');
    } else if (!resposta.cidade) {
        presentAlert('Selecione sua cidade');
    } else if (resposta.cidade == 'Santa Maria' && !resposta.bairro) {
        presentAlert('Selecione seu bairro');
    } else {
        postResposta(resposta);
    }
});

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function selecionaOds(square, ods_number) {
    let icon = square.parentElement.getElementsByTagName('ion-icon')[0];
    if (odsList[ods_number].selecionado == false) {
        odsList[ods_number].selecionado = true;
        icon.classList.remove('hide');
        square.parentElement.style.backgroundColor = "gray";
    } else {
        odsList[ods_number].selecionado = false;
        icon.classList.add('hide');
        square.parentElement.style.backgroundColor = "";
    }
}

function getSelecionados() {
    selecionadoList = [];
    for (ods of odsList) {
        if (ods.selecionado) {
            selecionadoList.push(ods.id);
        }
    }
    return selecionadoList;
}

function getLocationIpLookUp() {
    const locationPromise = new Promise((resolve, reject) => {
        fetch('https://ipapi.co/json/').then(response => {
            resolve(response.json());
        }, err => {
            reject(err);
        });
    });
    return locationPromise;
}

function getLocationApi() {
    const locationPromise = new Promise((resolve, reject) => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(position => {
                let location = { lon: position.coords.longitude, lat: position.coords.latitude };
                resolve(location);
            }, err => {
                reject(err);
            });
        } else {
            reject('Geolocation não disponível.');
        }
    });
    return locationPromise;
}

async function postResposta(resposta) {
    const loading = document.createElement('ion-loading');
    loading.message = 'Enviando resposta...';
    loading.duration = 5000;
    document.body.appendChild(loading);
    await loading.present();
    let locationIpStr = "";
    let locationApiStr = "";
    try {
        let locationIp = await getLocationIpLookUp();
        locationIpStr = 'lat: ' + locationIp.latitude + ' lon: ' + locationIp.longitude;
    } catch (err) {
        console.log(err);
    }
    try {
        let locationApi = await getLocationApi();
        locationApiStr = 'lat: ' + locationApi.lat + ' lon: ' + locationApi.lon;
    } catch (err) {
        console.log(err);
    }
    let params = new URLSearchParams();
    params.append('ods_selecionado', resposta.ods_selecionado);
    params.append('ods_ordem', resposta.ods_ordem);
    params.append('cidade', resposta.cidade);
    if (resposta.bairro) {
        params.append('bairro', resposta.bairro);
    }
    else {
        params.append('bairro', "");
    }
    params.append('locationIp', locationIpStr);
    params.append('locationApi', locationApiStr);
    try {
        let postRequest = fetch('https://script.google.com/macros/s/AKfycbzEdyY_pR4muarZmMyJRfn0dUTIhoTJrFy4rJzrK_E8SoZXaDo/exec', { method: 'POST', redirect: 'follow', body: params });
        let response = await postRequest;
        let jsonResponse = await response.json();
        await loading.dismiss();
        window.location.href = './sucesso.html';
        return jsonResponse;
    } catch (err) {
        await loading.dismiss();
        presentAlert('Erro ao enviar resposta');
        return err;
    }
}

var grid_row_size = 3;

function changeGrid() {
    let squares = document.getElementsByClassName('square');
    if (grid_row_size == 3) {
        grid_row_size = 4;
        for (square of squares) {
            square.style.width = '22vmin';
            square.style.paddingBottom = '22vmin';
            square.getElementsByClassName('content')[0].style.fontSize = 'x-small';
        }
    } else {
        grid_row_size = 3;
        for (square of squares) {
            square.style.width = '30vmin';
            square.style.paddingBottom = '30vmin';
            square.getElementsByClassName('content')[0].style.fontSize = 'medium';
        }
    }

}

function presentAlert(message) {
    const alert = document.createElement('ion-alert');
    //alert.header = 'Alert';
    //alert.subHeader = 'Subtitle';
    alert.message = message;
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    return alert.present();
}
