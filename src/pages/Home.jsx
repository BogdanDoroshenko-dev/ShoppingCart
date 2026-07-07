import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <div className="hero">
                <h1>Shop without limits</h1>
                <p>Discover quality products at unbeatable prices. The store that's almost real.</p>
                <Link to="/catalog" className="hero-btn">Browse Catalog</Link>
            </div>

            <div className="features">
                <div className="feature-card">
                    <div className="feature-icon">🚚</div>
                    <h3>Free Shipping</h3>
                    <p>On all orders over $50</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">✨</div>
                    <h3>Quality Products</h3>
                    <p>Curated with care</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">↩️</div>
                    <h3>Easy Returns</h3>
                    <p>30 day guarantee</p>
                </div>
            </div>
        </div>
    )
}

export default Home