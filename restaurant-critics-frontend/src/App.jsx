import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Adjust this path if necessary
import ReviewCard from './components/Cards/ReviewCard/reviewCard.jsx'

const App = () => {
    // Example review data
    const reviewDatas = [{
        user: {
            name: 'Carrie',
            avatar: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg' // Replace with actual URL
        },
        imageSrc: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg', // Replace with actual URL
        restaurantName: 'Leo’s Tacos',
        reviewText: 'The best tacos in town! They were super yummy!',
        rating: 5,
        reviewDate: '3 days ago'
    },
    {
        user: {
            name: 'Carrie',
            avatar: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg' // Replace with actual URL
        },
        imageSrc: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg', // Replace with actual URL
        restaurantName: 'Leo’s Tacos',
        reviewText: 'The best tacos in town! They were super yummy!',
        rating: 5,
        reviewDate: '3 days ago'
    },
    {
        user: {
            name: 'Carrie',
            avatar: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg' // Replace with actual URL
        },
        imageSrc: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg', // Replace with actual URL
        restaurantName: 'Leo’s Tacos',
        reviewText: 'The best tacos in town! They were super yummy!',
        rating: 5,
        reviewDate: '3 days ago'
    },
    {
        user: {
            name: 'Carrie',
            avatar: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg' // Replace with actual URL
        },
        imageSrc: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg', // Replace with actual URL
        restaurantName: 'Leo’s Tacos',
        reviewText: 'The best tacos in town! They were super yummy!',
        rating: 5,
        reviewDate: '3 days ago'
    },
    {
        user: {
            name: 'Carrie',
            avatar: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg' // Replace with actual URL
        },
        imageSrc: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg', // Replace with actual URL
        restaurantName: 'Leo’s Tacos',
        reviewText: 'The best tacos in town! They were super yummy!',
        rating: 5,
        reviewDate: '3 days ago'
    },
    {
        user: {
            name: 'Carrie',
            avatar: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg' // Replace with actual URL
        },
        imageSrc: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg', // Replace with actual URL
        restaurantName: 'Leo’s Tacos',
        reviewText: 'The best tacos in town! They were super yummy!',
        rating: 5,
        reviewDate: '3 days ago'
    }];

    return (
        <Container>
            <Row>
                {reviewDatas.map((reviewData, index) => (
                    <Col md={4} key={index} className="mb-4"> {/* 3 cards per row */}
                        <ReviewCard
                        user={reviewData.user}
                        imageSrc={reviewData.imageSrc}
                        restaurantName={reviewData.restaurantName}
                        reviewText={reviewData.reviewText}
                        rating={reviewData.rating}
                        reviewDate={reviewData.reviewDate}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default App;

