import styled from 'styled-components'
import ProductsItem from './ProductsItem'
import { popularProducts } from '../data'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;   
    `

const Products = () => {
    
    return (
        <Container>
            {popularProducts.map((product) => (
                <ProductsItem key={product.id} item={product} />
            ))}

        </Container>
    )
}

export default Products
