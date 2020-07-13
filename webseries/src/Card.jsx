import React from 'react';
function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img className="card_image" src={props.imgsrc} alt="image" />
          <div className="card_info">
            <h3 className='card_title'>{props.title}</h3>
            <span className="card_category">{props.category}</span><br />
            <a href={props.link} target="_blank"><button>Watch Now</button></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
