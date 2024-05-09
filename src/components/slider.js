function Slider(){
    return (
        <>
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3490TGuS18awGWSXiLo8v5_Oe5dB0OwjoxQ&usqp=CAU" className="d-block w-100"  height="400" width="500" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa2n90sG3uFr6PSNqKOwF14Ye9GEXK1ceg_g&usqp=CAU" className="d-block w-100" height="400" width="500" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1r3cvJh5Q-1lxI6MCSa_keE-OaOOqPebVQg&usqp=CAU" className="d-block w-100" height="400" width="500" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    );
}
export default Slider;