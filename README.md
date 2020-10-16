# Interview assignment

This is a JavaScript interview assignment. It needs to be finished in 2 days and a PR needs to be raised with your changes or code needs to be pushed in this repo. All aspects of your solution will be evaluated not only the functionality of it. Please show case your appraoche to code organization, testing, architecture...

You have a minimal technical limitation. The only requirement is to deliver a **Rest API** that will be consumed by a **Reacjs App**. No complicated backend persistance is needed.

Part of the solutions should be a READ ME file with the instructions on how to run the solution. You can also dockerize the solution if you want.

Feel free to use any framework/lib that you deem necessary.

# The application requirement:
The application will be a dynamic form renderer witch will be used to collect basic user questions. 

## Frontend:
### UC1 - Form generation: 
Render a dynamically defined form. The form definition should come from backend and should contain 3 fields: name, email, enquiry.
The definition will allow us to add any new fields to the form just by changing the definition. 
The should have basic UI validation. 

Example:

Definition:
```
[
  {
    "id": "name",
    "fieldName": "Name"
  },
  {
    "id": "email",
    "fieldName": "E-mail"
  },
  {
    "id": "enquiery",
    "fieldName": "Enquiery"
  }
]
```

Form:

Name
_________
E-mail
_________
Enquiry

______________

        Submit 


### UC2 - Form submission
The form should perform a basic UI validation and if the validation passes it will submit the data to the backend.
If the validation failed the user will be appropriately notified.

### UC3 - Enquery lisitng
A simple table that will load the submitted data form backend and render it in a simple table.

## Backend:
### UC1: Get form definition
API that will serve the definition to the user.
### UC2: Submit data
API that will accept the and store the submitted user data
### UC3: Get all data
API that will load all the stored data
### Backend note
* The definition can be stored in a file.
* The data can be stored in an in-memory structure. No need for complex DB setup but plugging DB should be possible in the future.
