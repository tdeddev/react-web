import './Product.css'

const Product = (props) => {
    const {result} = props
    return (
        <div className="product">
            <div className="content">
                <img src={result.imgUrl}/>
            </div>
        </div>
    )
}

export default Product