import React from 'react'
import { Container,Img,Title } from '../../Component/Styles/Styles'

const ProductCard = ({title,image,price}) => {
    return (
        <Container bdr="1px solid black" bgColor="lightgray" width="250px" height="350px">
            <Title size="medium" weight="800">{title}</Title>
            {/* <Img src={image} /> */}
            <Title size="large" weight="700">{price}</Title>
        </Container>
    )
}

export default ProductCard
