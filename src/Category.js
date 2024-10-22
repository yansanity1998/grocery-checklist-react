import "./category.css";

function Category() {
    return (
        <div class="filter-sort-container">
            <div class="category-buttons">
                <button class="category-btn active" data-value="">
                    <i class="fas fa-th-large"></i> All
                </button>
                <button class="category-btn" data-value="Vegetables">
                    <i class="fas fa-carrot"></i> Vegetables
                </button>
                <button class="category-btn" data-value="Fruits">
                    <i class="fas fa-apple-alt"></i> Fruits
                </button>
                <button class="category-btn" data-value="Snacks">
                    <i class="fas fa-cookie"></i> Snacks
                </button>
            </div>
            
        </div>
    );
  }
  
  export default Category;
  