import React from "react";

function CategoryFilter({categories, category, setter}) {



  const newButtons = categories.map((cat) => {
    const className = cat === category ? "selected" : null;
     return (
    <button onClick={() => setter(cat)} className={className} key={cat}>{cat}</button> 
     )

})

  return (
    <div className="categories">
      <h5>Category filters</h5>
     {newButtons}
    </div>
  );
}

export default CategoryFilter;
