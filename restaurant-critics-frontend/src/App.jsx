import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import BusinessDetails from './pages/BusinessDetails';
import UserProfile from './pages/UserProfile';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ReviewCard from './components/Cards/ReviewCard/reviewCard';
import reviewService from './services/reviewService'; // Import review service to fetch reviews

const App = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await reviewService.getAllReviews();
                setReviews(response.data); // Assuming the reviews are returned in `data`
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };
        fetchReviews();
    }, []); // Empty dependency array ensures the reviews are fetched once on component mount

    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/business/:id" element={<BusinessDetails />} />
                    <Route path="/profile" element={<UserProfile />} />
                </Routes>

                {/* Review Cards Section */}
                <Container>
                    <Row>
                        {reviews.map((reviewData, index) => (
                            <Col md={4} key={index} className="mb-4">
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

                <Footer />
            </div>
        </Router>
    );
};

export default App;
