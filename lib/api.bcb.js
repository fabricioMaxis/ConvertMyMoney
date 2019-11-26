const axios = require('axios')
const getUrl = data => `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${data}%27&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`

const getCotacaoAPI = (data) => axios.get(getUrl(data))
const extracCotacao = res => res.data.value[0].cotacaoVenda
const getCotacao = async() => {
    try{
        const res = await getCotacaoAPI('06-11-19')
        const cotacao =extracCotacao(res)
        return cotacao
    }catch(error){
        return ''

    }
}
module.exports = {
    getCotacaoAPI,
    getCotacao,
    extracCotacao

}