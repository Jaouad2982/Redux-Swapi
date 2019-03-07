import React from "react";
import Loader from 'react-loader-spinner';
import { connect } from "react-redux";
import { CharacterList } from "../components";
// import actions
import {charsReducer} from "../reducers/starWarsReducer"
import {getInfo} from "../actions";
class CharacterListView extends React.Component {
 

  componentDidMount=() =>{
    console.log(this.props.characters)
    // call our action
    this.props.getInfo()
  }

  render() {
    console.log(this.props.characters)
    if (this.props.isLoading) {
      // return something here to indicate that you are fetching data
      <div>
        <h3>Data being fetched </h3>
        <Loader type="Bars" color="#00BFFF" height="90" width="60" />
      </div>
    }
    return (
     
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
        {this.props.error && <p> Error :{this.props.error}</p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({

  characters:state.charsReducer.characters,
  isLoading: state.charsReducer.isLoading,
  error: state.charsReducer.error
})
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    getInfo
  }
)(CharacterListView);
