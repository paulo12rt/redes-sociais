const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);
}
async function vizualizarInformacoesGlobais() {
  const res = await fetch(url)
  const dados = await res.json()
  cosole.log(dados);
  const paragrafo = document.createElement('p')
paragrafo.innerHTML = `Você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${dados.total_pessoas_conectadas} estão conectadas em alguma rede social e passam em média ${dados.tempo_medio} horas conectadas.`
}console container= document.getElementById
vizualizarInformacoesGlobais()