import PropTypes from 'prop-types'

const ProductCard = ({ product, quantity, onIncrement, onDecrement, onQuantityChange, onAddToCart }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="price">${product.price}</p>

            <div className="quantity-controls">
                <button className="glass-btn" onClick={onDecrement}>-</button>
                <input
                    type="number"
                    value={quantity}
                    onChange={onQuantityChange}
                />
                <button className="glass-btn" onClick={onIncrement}>+</button>
            </div>

            <button className="glass-btn primary" onClick={onAddToCart}>
                Add to Cart
            </button>
        </div>
    )
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
    quantity: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onQuantityChange: PropTypes.func.isRequired,
    onAddToCart: PropTypes.func.isRequired,
}

export default ProductCard