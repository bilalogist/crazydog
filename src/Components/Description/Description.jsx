import React, { useState } from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import Faq from "./Faq";

const Description = () => {
  const [mintDate, setMintDate] = useState("6 Oct,2021");
  const [sales, setSales] = useState(false);
  const [gifLoaded, setGifLoaded] = useState(false);
  return (
    <section id="announce">
      <Container>
        <Row>
          <Col md={6}>
            <h1 className="About-dogs">What is Angry Dogs Club?</h1>
            <Faq>
              Angry Dogs Club is a collection of 1,111 NFTs living on the
              Ethereum Blockchain. Each dog consists of a unique combination of
              a hat, face, body, clothes, and background. There will also be a
              small amount of super rare 1/1 Dogs. After reveal you will be able
              to find more information regarding rarities on rarity.tools
            </Faq>
            <Faq title="Available for Mint?">
              There will be 1,100 Angry Dogs available to mint at launch, with
              11 reserved for team members and other community activities
              [promotions, airdrops, etc]. Angry Dogs will be available to mint
              for 0.06Ξ + Gas. Max 10 NFT of each transaction
            </Faq>
            <Faq title="When is the reveal?">
              You'll be able to see your dog immediately after minting. For more
              information Join our community discord!
            </Faq>
            <Faq title="Angry Dog Holders Benefits">
              - We launch a merch store exclusively for Angry Dogs Club holders.
              <br />
              <br />
              - Money earnd from royalties (65%) will return to Angry Dog
              holders each month in the shape of Bonus.
              <br /> <br />- Will open a virtual private club exclusively for
              the members of the Angry Dogs Club where our members can
              participate in different activities like: Game, contests and many
              more!
            </Faq>
          </Col>
          <Col md={6}>
            <img
              src="/img/easygif.gif"
              alt="Dog Gif"
              className={"img-fluid"}
              style={{ display: !gifLoaded && "none" }}
              onLoad={() => {
                setGifLoaded(true);
              }}
            />
            {!gifLoaded && (
              <div className="d-flex justify-content-center center-block">
                <Spinner
                  style={{ width: "3rem", height: "3rem" }}
                  color="primary"
                  type="grow"
                />
              </div>
            )}
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mint-area">
          <Col className="mint">
            <div className="text-center rounded-top">
              <p>Sales: {sales ? "Active" : "Inactive"}</p>
              <p>Mint Date: {mintDate}</p>
            </div>
            <div className="text-center rounded-bottom"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Description;
