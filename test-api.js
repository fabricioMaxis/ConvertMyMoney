/*const axios = require('axios')

const url = ('https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%2706-05-2019%27&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao')

axios.get(url)
.then(res => console.log(res.data.value[0].cotacaoVenda)) */


const axios = require('axios')
const getUrl = data => `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${data}%27&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`

const getCotacaoAPI = (data) => axios.get(getUrl(data))
const extracCotacao = res => res.data.value[0].cotacaoVenda
const getToday = () =>{
    const today = new Date()
    return (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear()
}
console.log(today)

{

}