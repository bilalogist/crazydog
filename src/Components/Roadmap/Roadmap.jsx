import React from "react";
import { Container, Row, Col } from "reactstrap";
import RoadmapItem from "./RoadmapItem";
const Roadmap = () => {
  return (
    <section id="announce">
      <Container>
        <h1 className="road-map">Road Map</h1>
        <Row>
          <Col>
            <RoadmapItem
              title="25% Sold"
              detail="  5 Angry Dogs NFTs Giveaway for our community (Discord users and
              Twitter followers)."
            />
            <RoadmapItem
              title="50% Sold"
              detail="6 Angry Dogs NFTs will be airdropped to random token holders.
              Community Wallet filled with 3 ETH."
            />
            <RoadmapItem
              title="75% Sold"
              detail="Tag us on twitter with your angry dogs NFT. 3 tweets selected via
              twitterpicker dot com for a 2 ETH giveaway + Listing on
              Rarity.tools and we will released our Backstory."
            />
            <RoadmapItem
              title="SOLD OUT"
              detail="We launch a merch store exclusively for Angry Dogs Club holders.
              Special prizes for our holders and Community wallet filled with 7
              ETH. Money earnd from royalty fees will be used to buy floor
              priced."
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Roadmap;
