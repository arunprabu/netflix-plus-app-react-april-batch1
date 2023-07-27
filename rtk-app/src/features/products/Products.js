import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchProductsAsync } from "./productsSlice";

const Products = () => {
  const productsState = useSelector( (state) => { // state is store data
    return state.products;
  });
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(fetchProductsAsync());
  }, []);

  const handleAddToCart = (product) => {
    console.log(product);
    dispatch(addToCart(product));
  }

  if (productsState.isLoading){
    return(<div className="spinner-border"></div>)
  }

  if(productsState.isError){
    return(<div className="alert alert-danger">{productsState.status}</div>)
  }

  return (
    <div className="row">
      <h1>Shop our Products</h1>

      {/* Loop thru here */}
      {productsState.productList.map(product => {
        return (
          <div className="col-md-3" key={product.id}>
            <div className="card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                height="300"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {product.title} | Category: {product.category}
                </h5>
                <p className="card-text">{product.description}</p>
                <button type="button" className="btn btn-primary" 
                  onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
      
    </div>
  );
};

export default Products;
