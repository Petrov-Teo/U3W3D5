import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

const MusicSection = ({ titole, searchArtist }) => {
  const [resultsApi, setResultsApi] = useState([]);
  const dispatch = useDispatch();

  const fillMusicSection = async () => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchArtist}`);
      if (response.ok) {
        let { data } = await response.json();
        setResultsApi(data.slice(0, 4));
        console.log(data.slice(0, 4));
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    fillMusicSection();
  }, [searchArtist]);

  return (
    <Container className="ms-5 ps-5">
      <Row className="row ">
        <Col md="10">
          <h2 className="py-3 text-light">{titole}</h2>
        </Col>
        <Col md="10">
          {resultsApi.length > 0 ? (
            <Row>
              {resultsApi.map((ArtistSong) => (
                <Card
                  key={ArtistSong.id}
                  className="card-with bg-transparent text-light border border-0"
                  onClick={() => {
                    dispatch({ type: "SELECTED", payload: ArtistSong });
                  }}
                >
                  <Card.Img className="bored-img" variant="top" src={ArtistSong.album.cover_medium} />
                  <Card.Body>
                    <Card.Title>Track:{ArtistSong.title}</Card.Title>
                    <Card.Text>Artist:{ArtistSong.artist.name}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </Row>
          ) : (
            <p>No results found</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MusicSection;
