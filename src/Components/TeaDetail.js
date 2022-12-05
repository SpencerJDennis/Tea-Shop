import React from 'react';
import PropTypes from 'prop-types';

export default function TeaDetail(props){
  const{ tea, onClickingEdit, onClickingSell } = props;
  return(
    <div className="teadetail">
      <h1 className="teatitle">Tea Details</h1>
      <h3 className="teadetails">{tea.name} - {tea.origin} - ${tea.price} - Stock: {tea.stock} oz.</h3>
      <button onClick={() => onClickingSell(tea.id)}>Sell Cup - {tea.stock} oz.</button>
      <button onClick={onClickingEdit}>Edit Tea</button>
      <p className="teadescription">{tea.description}</p>
      <p className="teastock"></p>
    </div>
  )
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickDelete: PropTypes.func,
  onClickEdit: PropTypes.func,
  onClickSell: PropTypes.func
}