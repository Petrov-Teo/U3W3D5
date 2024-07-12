import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import TopComponentsList from "./TopComponentsList";
import MusicSection from "./MusicSection";
import PlayerSpotify from "./PlayerSpotify";

const HomeSpotify = () => {
  const result = useSelector((state) => state.main.result);
  // const dispatch = useDispatch();
  return (
    <Container className="mainContainer">
      <TopComponentsList result={result} />
      <MusicSection titole="Musica dalla tua Ricerca " searchArtist="sofia" />
      <MusicSection titole="Rock Section" searchArtist="queen" />
      <MusicSection titole="Pop Culture" searchArtist="katyperry" />
      <MusicSection titole="Hip - Hop" searchArtist="eminem" />
      <PlayerSpotify />
    </Container>
  );
};
export default HomeSpotify;
