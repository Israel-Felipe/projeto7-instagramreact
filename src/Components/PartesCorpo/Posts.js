import React from "react";
export default function Posts() {

    const postObj = [{postUser:"meowed", postImg:"gato-telefone", userLike:"respondeai", NumLike:"101.523"}, 
    {postUser:"barked", postImg:"dog", userLike:"adorable_animals", NumLike:"99.159"}];

    

    function Post(props) {
    const [like, setLike] = React.useState("heart-outline");
    
      return (
        <div class="post">
                <div class="topo">
                  <div class="usuario">
                    <img src={`assets/img/${props.user}.svg`} />
                    {props.user}
                  </div>
                  <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                  </div>
                </div>
  
                <div class="conteudo" onDoubleClick={() => {
                            if (like === "heart-outline") {
                            setLike("heart");
                            } else {
                            setLike("heart-outline");
                            }
                        }}>
                  <img src={`assets/img/${props.imgConteudo}.svg`}/>
                </div>
  
                <div class="fundo">
                  <div class="acoes">
                    <div>
                      <ion-icon name={like}
                        onClick={() => {
                            if (like === "heart-outline") {
                            setLike("heart");
                            } else {
                            setLike("heart-outline");
                            }
                        }}>
                      </ion-icon>
                      <ion-icon name="chatbubble-outline"></ion-icon>
                      <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                      <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                  </div>
  
                  <div class="curtidas">
                    <img src={`assets/img/${props.userLike}.svg`} />
                    <div class="texto">
                      Curtido por <strong>{props.userLike}</strong> e <strong>outras {props.num} pessoas</strong>
                    </div>
                  </div>
                </div>
              </div>
      )
    }
    
    return (
        <div class="posts">
            {postObj.map(post=> <Post user={post.postUser} imgConteudo={post.postImg} userLike={post.userLike} num={post.NumLike}/>)}
        </div>
    )
    }