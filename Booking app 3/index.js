function handleFormSubmit(event) {
axios
  .delete("https://crudcrud.com/api/fbba33b2a5244c3db4f8dd520c8d426c/appointmentData/id")
        .then((resolve) => console.log(resolve))
        .catch((error) => console.log(error));
  axios
   .put("https://crudcrud.com/api/fbba33b2a5244c3db4f8dd520c8d426c/appointmentData/id")
        .then((resolve) => console.log(resolve))
        .catch((error) => console.log(error));


  axios
   .post("https://crudcrud.com/api/fbba33b2a5244c3db4f8dd520c8d426c/appointmentData")
        .then((resolve) => console.log(resolve))
        .catch((error) => console.log(error));
}

// Do not touch the code below
module.exports = handleFormSubmit;
