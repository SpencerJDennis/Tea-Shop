import React from 'react';
import PropTypes from 'prop-types';

export default function DefaultForm(props){
  let formTitle = "New Tea";
  let formSubTitle = "";
  let teaToEdit = [];
  if(props.editing){
    teaToEdit = props.tea;
    formTitle = "Edit " + props.tea.name;
    formSubTitle = props.tea.id;
  }

  return(
    <form onSubmit={props.formSubmissionHandler} className="form">
      <div className="formheader">
        <div className="formtitle">
          <h1>{formTitle}</h1>
          <p>id: {formSubTitle}</p>
        </div>
      </div>
      
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        name="name"
        placeholder="Tea Name"
        defaultValue={teaToEdit.name || ''} />
      <br />
      <label htmlFor="origin">Origin: </label>
      <input
        type="text"
        name="origin"
        placeholder="Tea Origin"
        defaultValue={teaToEdit.origin || ''} />
      <br />
      <label htmlFor="price">Price: </label>
      <input
        type="number"
        name="price"
        step="0.01"
        defaultValue={teaToEdit.price || ''} />
      <br />
      <label htmlFor="description">Description: </label>
      <input
        type="text"
        name="description"
        placeholder="Tea Description"
        defaultValue={teaToEdit.description || ''} />
      <br />
      <input
        type="number"
        name="stock"
        placeholder="130"
        defaultValue={teaToEdit.stock || 130} />
      <br />
      <button type="submit">{props.buttonText}</button>
    </form>
  )
}

DefaultForm.propTypes = {
  formSubmissionhandler: PropTypes.func,
  buttonText: PropTypes.string,
  editing: PropTypes.bool
}