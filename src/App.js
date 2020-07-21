import React, { Component } from 'react';
import FireBaseContext from "./firebase-context";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    // GET method or Fetch data API call from firestore database
    FireBaseContext().collection("Students")
      .get()
      .then(collectionData => {
        // you will get student data collection in collectionData object
        console.log('data collection : ', collectionData);
      }).catch(err => {
        console.log('error', err.response);
      });
  }

  DeleteRecord = (Obj) => {
    // Delete document using delete option from firestore database
    FireBaseContext().collection("Students")
      .doc(Obj.Id)
      .delete()
      .then(function () {
        console.log("Student details successfully deleted!");
      }).catch(
        function (error) {
          console.error("Error removing document: ", error);
        });
  }

  render() {
    return (
      <React.Fragment>
        <h2>App Page</h2>
      </React.Fragment>
    );
  }
}

export default App;