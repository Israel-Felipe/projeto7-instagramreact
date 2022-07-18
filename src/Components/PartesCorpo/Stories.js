export default function Stories() {

const StoriesUser = ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"]
  function Story(props) {
    return (
      <div class="story">
        <div class="imagem">
          <img src={`assets/img/${props.user}.svg`} />
        </div>
        <div class="usuario">
          {props.user}
        </div>
      </div>
    );
  }

return (
    <div class="stories">
        {StoriesUser.map(story => <Story user={story} />)}
        <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </div>
)
}
