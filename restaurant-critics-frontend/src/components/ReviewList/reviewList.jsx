import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import reviewService from '../../services/reviewService';
import ReviewCard from '../ReviewCard/reviewCard';

const ReviewList = () => {
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
        <Container>
            <Row>
                {reviews.map((review, index) => (
                    <Col key={index} md={4} sm={6} xs={12}>
                        <ReviewCard review={review} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ReviewList;