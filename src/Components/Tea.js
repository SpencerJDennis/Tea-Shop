import React from 'react';
import PropTypes from 'prop-types';

export default function Tea(props){
  return(
    <div className="tea">
      <div className="teaclickeddetails" onClick={() => props.whenTeaClicked(props.id)}>
        <h3 className="teaproperties">{props.name} - {props.origin} Tea - ${props.price} </h3>
      </div>
      <div className="selltea">
        <button className="teabutton" onClick={() => props.whenTeaSold(props.id)}>Sell Tea <br/> {props.stock} oz.</button>
      </div>
    </div>
  )
}

Tea.propTypes={
  id: PropTypes.string,
  name: PropTypes.string,
  origin: PropTypes.string,
  onTeaClicked: PropTypes.func,
  stock: PropTypes.number
}