import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const MusicSection = ({ titole, searchArtist }) => {
  const [resultsApi, setResultsApi] = useState({});

  const fillMusicSection = async () => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchArtist}`);
      if (response.ok) {
        let { data } = await response.json();
        setResultsApi(data.slice(0, 4));
        console.log(resultsApi);
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    fillMusicSection();
  }, []);

  return (
    <Container>
      <Row className="row">
        <Col md="10">
          <h2 className="py-3 text-light">{titole}</h2>
        </Col>
        <Col md="12">
          {resultsApi.length > 0 ? (
            <Row>
              {resultsApi.map((ArtistSong) => (
                <Card key={ArtistSong.id} className="w-25 bg-transparent text-light border border-0">
                  <Card.Img variant="top" src={ArtistSong.album.cover_medium} />
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
