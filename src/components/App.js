import React from 'react';
import './App.css';
import { addTodo, deleteTodo, markDone} from "../actions"
import { connect } from 'react-redux';
import Header from './Header/Header';
import TodoList from './TodoList/TodoList';
import AddForm from './AddForm/AddForm';

class App extends React.Component {

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onClickAdd = () => {
    let id = Math.floor(Math.random() * 1000);
    this.props.addTodo({ id, ...this.state });
  };

  onDeleteTodo = (id) => {
    this.props.deleteTodo(id);
  };

  onMarkDone = (id) => {
    this.props.markDone(id)
  }


  render(){
     const { todos } = this.props;

     return (
      <>
        <Header/>
        <div className="app">
          <div className="container">
            <div className="row">
              <div className="col-xs-8">
                <TodoList
                  todos={todos}
                  onDeleteTodo={(id) => this.onDeleteTodo(id)}
                  onMarkDone={(id) => this.onMarkDone(id)}
                />
              </div>
              <div className="col-xs-4">
                <AddForm
                  onChange={(e) => this.onChange(e)}
                  onClickAdd={() => this.onClickAdd()}
                />
              </div>
            </div>
          </div>
        </div>
      </>

    );
  }

}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};


export default connect(mapStateToProps, {addTodo, deleteTodo, markDone})(App);
