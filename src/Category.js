import "./category.css";

function Category(props) {
    return (
        <div class="filter-sort-container">
            <div class="category-buttons">
                <button class="category-btn active" data-value=""> {props.category1} </button>
                <button class="category-btn" data-value="">{props.category2}</button>
                <button class="category-btn" data-value="">{props.category3}</button>
                <button class="category-btn" data-value="">{props.category4}</button>
            </div>
        </div>
    );
  }
  
  export default Category;
  