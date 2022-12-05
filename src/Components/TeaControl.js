import React from 'react';
import NewTeaForm from './NewTeaForm';
import TeaList from './TeaList';
import EditTeaForm from './EditTeaForm';
import TeaDetail from './TeaDetail';
import OriginalTeaList from '../OriginalTeaList';

export default class TeaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterTeaList: OriginalTeaList.data.tea.sort((a, b) => a.name.localeCompare(b.name)),
      selectedTea: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedTea != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTea: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingTeaInList = (editTea) => {
    const editedMasterTeaList = this.state.masterTeaList
      .filter(tea => tea.id !== this.state.selectedTea.id)
      .concat(editTea);
    this.setState({
      masterTeaList: editedMasterTeaList.sort((a, b) => a.name.localeCompare(b.name)),
      editing: false,
      selectedTea: null
    });
  }

  handleAddingNewTeaToList = (newTea) => {
    const newMasterTeaList = this.state.masterTeaList.concat(newTea);
    this.setState({masterTeaList: newMasterTeaList.sort((a, b) => a.name.localeCompare(b.name))});
    this.setState({formVisibleOnPage: false});
  }

  handleChangingSelectedTea = (id) => {
    const selectedTea = this.state.masterTeaList.filter(tea => tea.id === id)[0];
    this.setState({selectedTea: selectedTea});
  }

  handleSellingTea = (id) => {
    let teaToEdit = this.state.masterTeaList.filter(tea => tea.id === id)[0];
    teaToEdit.stock > 0 ? teaToEdit.stock-- : alert("This tea is SOLD OUT!");
    const editedMasterTeaList = this.state.masterTeaList
      .filter(tea => tea.id !== id)
      .concat(teaToEdit);
    this.setState({
      masterTeaList: editedMasterTeaList.sort((a, b) => a.name.localeCompare(b.name))
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.editing ) {      
      currentlyVisibleState = <EditTeaForm tea = {this.state.selectedTea} onEditTea = {this.handleEditingTeaInList} />
      buttonText = "Back to Tea List";
    } else if (this.state.selectedTea != null) {
      currentlyVisibleState = <TeaDetail 
        tea={this.state.selectedTea} 
        onClickingEdit = {this.handleEditClick} 
        onClickingSell = {this.handleSellingTea}/>
      buttonText = "Back to Tea List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTeaForm onNewTeaCreation={this.handleAddingNewTeaToList}/>;
      buttonText = "Back to Tea List"; 
    } else {
      currentlyVisibleState = <TeaList 
        onTeaSelection={this.handleChangingSelectedTea}
        onTeaSold={this.handleSellingTea}
        teaList={this.state.masterTeaList.sort((a, b) => a.name.localeCompare(b.name))} 
      />;
      buttonText = "Add Tea"; 
    }
    return (
      <main>
        {currentlyVisibleState}
        <button onClick={this.handleClick} className="main-button">{buttonText}</button> 
      </main>
    );
  }

}