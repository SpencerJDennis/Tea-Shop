import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import DefaultForm from './DefaultForm';

export default function NewTeaForm(props){
  function handleNewTeaFormSubmission(event){
    event.preventDefault();
    props.onNewTeaCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      description: event.target.description.value,
      id: v4(),
      stock: 130
    });
  }

  return(
    <DefaultForm
      formSubmissionHandler={handleNewTeaFormSubmission}
      buttonText="Add Tea" 
      editing = {false}
    />
  )
}

NewTeaForm.propTypes = {
  onNewTeaCreation: PropTypes.func
}