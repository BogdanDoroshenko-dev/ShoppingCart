import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProductCard from './ProductCard'

const mockProduct={
    id:1 ,
    title:"Test T-shirt",
    price:9.99,
    image:'test.jpg',
}

const mockAddToCart=vi.fn();

describe('ProductCard',()=>{

    test('renders product title and price',()=>{
        render(
            <ProductCard
                product={mockProduct}
                quantity={1}
                onIncrement={() => {}}
                onDecrement={() => {}}
                onQuantityChange={() => {}}
                onAddToCart={() => {}}
            
            
            />
        )
        expect(screen.getByText("Test T-shirt")).toBeInTheDocument()
    })

    test('call onAddToCart when clicked',async ()=>{
            render(
            <ProductCard
                product={mockProduct}
                quantity={1}
                onIncrement={() => {}}
                onDecrement={() => {}}
                onQuantityChange={() => {}}
                onAddToCart={mockAddToCart}
            
            
            />
        )
    await userEvent.click(screen.getByText('Add to Cart'))
    expect(mockAddToCart).toHaveBeenCalled()
    })

    test('call onIncrement when clicked',async ()=>{
    const mockIncrement = vi.fn()    
    
    render(
        <ProductCard
            product={mockProduct}
            quantity={1}
            onIncrement={mockIncrement}
            onDecrement={() => {}}
            onQuantityChange={() => {}}
            onAddToCart={() => {}}
        />
    )
    await userEvent.click(screen.getByText('+'))
    expect(mockIncrement).toHaveBeenCalled()

    })
    
    






})