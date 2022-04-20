import React from "react";

import { Card } from "react-bootstrap";
import StarRating from "./StarRating";

const Reviews = ({ reviews }) => {
  return (
    <div className="row row-cols-3 mb-2">
      {reviews.map((review) => {
        return (
          <Card
            border="secondary"
            style={{ width: "30%", margin: "1rem" }}
            key={review.id}
          >
            <Card.Header>
              <h5>{review.name}</h5>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                <StarRating rating={review.rating} />
              </Card.Title>
              <Card.Text>{review.review}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
      {/* <Card border="secondary" style={{ width: "30%", margin: "1rem" }}>
        <Card.Header>
          <h5>Aadil</h5>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <StarRating rating={3.2} />
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card border="secondary" style={{ width: "30%", margin: "1rem" }}>
        <Card.Header>
          <h5>Aadil</h5>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <StarRating rating={3.2} />
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card border="secondary" style={{ width: "30%", margin: "1rem" }}>
        <Card.Header>
          <h5>Aadil</h5>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <StarRating rating={3.2} />
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card border="secondary" style={{ width: "30%", margin: "1rem" }}>
        <Card.Header>
          <h5>Aadil</h5>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <StarRating rating={3.2} />
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card> */}
    </div>
  );
};

export default Reviews;
