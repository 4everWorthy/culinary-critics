import { useState } from 'react';
import NavigationBar from './components/Navbar/navbar.jsx';

import './App.css';
import Footer from "./components/Footer/footer.jsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            {/* Navigation Bar */}
            <NavigationBar />

            {/* Main content area */}
                <div className="content-container">
                    {/*<h1>Welcome to Culinary Critics</h1>*/}
                    <div className="card">
                    {/*<button onClick={() => setCount((count) => count + 1)}>
                        Count is {count}
                    </button>
                    <p>Edit <code>src/App.jsx</code> and save to test HMR.</p>*/}
                    </div>
                    {/*<p className="read-the-docs">
                    Explore and leave your thoughts on the best restaurants!
                    </p>*/}

                </div>
            <Footer />
        </>
    );
}

export default App;
