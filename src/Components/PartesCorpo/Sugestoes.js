export default function Sugestoes() {

  const sugestoes = [{SugestaoUser:"bad.vibes.memes", razao:"Segue você"}, {SugestaoUser:"chibirdart", razao:"Segue você"}, {SugestaoUser:"razoesparaacreditar", razao:"Novo no Instagram"}, {SugestaoUser:"adorable_animals", razao:"Segue você"},{SugestaoUser:"smallcutecats", razao:"Segue você"}];
  
function Sugestao(props) {
    return (
      <div class="sugestao">
        <div class="usuario">
          <img src={`assets/img/${props.user}.svg`}  />
          <div class="texto">
            <div class="nome">{props.user}</div>
            <div class="razao">{props.razao}</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>
    );
  }

return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestoes.map(sugestao => <Sugestao user={sugestao.SugestaoUser} razao={sugestao.razao}/>)}   
    </div>
)
}
