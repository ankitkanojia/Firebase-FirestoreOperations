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
        // Error or Exception occure
        console.log('error', err.response);
      });
  }

  addDetails = (Obj) => {
    // Add document using delete option from firestore database
    FireBaseContext().collection("Students")
      .doc()
      .set(obj)
      .then(function () {
        // Student details addedd in firebase database  
        console.log('Student details successfully added!');
      })
      .catch(function (error) {
        // Error or Exception occure
        console.error("Error writing document: ", error);
      });
  }

  deleteDetails = (Obj) => {
    // Delete document using delete option from firestore database
    FireBaseContext().collection("Students")
      .doc(Obj.Id)
      .delete()
      .then(function () {
        // Student details deleted from firebase database  
        console.log("Student details successfully deleted!");
      }).catch(
        function (error) {
          // Error or Exception occure
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