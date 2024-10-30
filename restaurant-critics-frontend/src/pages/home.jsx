// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import Navbar from '../components/Navbar/navbar';
// import Footer from '../components/Footer/footer';
import ReviewCard from '../components/Cards/ReviewCard/reviewCard';
import reviewService from '../services/reviewService';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await reviewService.getAllReviews();
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Stick a Fork in it and Give a Review!</h2>
        <Row>
          {reviews.map((review, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="mb-4">
              <ReviewCard
                restaurantName={review.restaurantName}
                user={review.reviewerName}
                reviewText={review.reviewText}
                rating={review.rating}
                imageSrc={review.imageUrl}
                reviewDate={review.date}
              />
            </Col>
          ))}
        </Row>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
