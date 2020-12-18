```javascript
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
```

```javascript
 // Add document using set option from firestore database
 FireBaseContext().collection("Students")
      .doc(obj.Id)
      .set(obj)
      .then(function () {
        // Student details addedd in firebase database  
        console.log('Student details successfully added!');
      })
      .catch(function (error) {
        // Error or Exception occure
        console.error("Error writing document: ", error);
      });
```
