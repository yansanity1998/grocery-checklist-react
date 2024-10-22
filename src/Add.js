import "./add.css";

function Add({ onOpenModal }) {
    return (
      <div className="Add">
          <button className="btn" onClick={onOpenModal}>Add To List</button>
          <input type="search" id="search" placeholder="Search a product..." />
      </div>
    );
}
  
export default Add;
