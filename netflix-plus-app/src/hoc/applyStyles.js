// a higher-order component (HOC) is a fn that 
// takes a component as input and return a new comp as output 

const applyStyles = (OriginalComponent) => {
  console.log(OriginalComponent);
  
  const NewComponent = (props) => {
    console.log(props); 
    return (
      <div className="red-box">
        <OriginalComponent {...props}/>
      </div>
    );
  }

  return NewComponent;
}

export default applyStyles;