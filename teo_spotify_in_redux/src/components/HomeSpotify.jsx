import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import TopComponentsList from "./TopComponentsList";
import MusicSection from "./MusicSection";

const HomeSpotify = () => {
  const result = useSelector((state) => state.main.result);
  // const dispatch = useDispatch();
  return (
    <Container>
      <TopComponentsList result={result} />
      <MusicSection titole="Rock Section" searchArtist="queen" />
      <MusicSection titole="Pop Culture" searchArtist="katyperry" />
      <MusicSection titole="Hip - Hop" searchArtist="eminem" />
    </Container>
  );
};
export default HomeSpotify;
