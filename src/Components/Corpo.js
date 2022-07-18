import Stories from "./PartesCorpo/Stories";
import Posts from "./PartesCorpo/Posts";
import Sugestoes from "./PartesCorpo/Sugestoes";

export default function Corpo() {
  function Usuario(props) {
    return (
      <div class="usuario">
        <img src={`assets/img/${props.usuario}.svg`} />
        <div class="texto">
          <strong>{props.usuario}</strong>
          {props.nome}
        </div>
      </div>
    );
  }
  return (
      <div class="corpo">
        <div class="esquerda">
          <Stories />
          <Posts />
        </div>

        <div class="sidebar">
          <Usuario usuario="catanacomics" nome="Catana"/>
          <Sugestoes />
    

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
      </div>
    )
}