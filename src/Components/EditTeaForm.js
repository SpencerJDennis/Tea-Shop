import React from 'react';
import DefaultForm from './DefaultForm'
import PropTypes from 'prop-types';

export default function EditTeaForm (props) {
  const { tea } = props;

  function handleEditTeaFormSubmission(event) {
    event.preventDefault();
    props.onEditTea({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      description: event.target.description.value,
      id: tea.id,
      stock: parseInt(event.target.stock.value)
    });
  }

  return (
    <DefaultForm 
      formSubmissionHandler={handleEditTeaFormSubmission} 
      buttonText="Edit Tea"
      tea = {tea}
      editing = {true}
    />
  );
}

EditTeaForm.propTypes = {
  onEditTea: PropTypes.func,
  tea: PropTypes.object
};