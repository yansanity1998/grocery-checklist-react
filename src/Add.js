import "./add.css";

function Add(props) {
    return (
      <div className="Add">
          <button className="btn" onClick={props.onOpenModal}>Add To List</button>
          <input type="search" id="search" placeholder="Search a product..." />
      </div>
    );
}
  
export default Add;
