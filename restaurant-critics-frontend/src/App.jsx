import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewCard from './components/Cards/ReviewCard/reviewCard.jsx'; // Adjust this path if necessary

const App = () => {
    // Example review data
    const reviewData = {
        user: {
            name: 'Carrie',
            avatar: 'https://example.com/avatar.jpg' // Replace with actual URL
        },
        imageSrc: 'https://example.com/food.jpg', // Replace with actual URL
        restaurantName: 'Leo’s Tacos',
        reviewText: 'The best tacos in town! They were super yummy!',
        rating: 5,
        reviewDate: '3 days ago'
    };

    return (
        <Container>
            <Row>
                <Col>
                    {/* Use the ReviewCard component here */}
                    <ReviewCard
                        user={reviewData.user}
                        imageSrc={reviewData.imageSrc}
                        restaurantName={reviewData.restaurantName}
                        reviewText={reviewData.reviewText}
                        rating={reviewData.rating}
                        reviewDate={reviewData.reviewDate}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default App;
