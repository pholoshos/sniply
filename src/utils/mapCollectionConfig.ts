//to map collection to form config
export const mapCollectionToFormConfig = (collection:any)=> {
    // Initialize an empty array
    let formConfig = [];

    // Loop over the key-value pairs in the collection
    for (let [key, value] of Object.entries(collection)) {
        // Create an object with the properties
        let obj = {
            name: key,
            placeholder: "Enter " + key,
            value: value
        };

        // Push the object into the array
        formConfig.push(obj);
    }

    // Return the array
    return formConfig;
}

// Call the function with the collection
let collection = {username : "pholosho", emailaddress : ""};
let formConfig = mapCollectionToFormConfig(collection);


//to map form config to collection
export const mapFormConfigToCollection = (formConfig:any)=> {
    // Initialize an empty object
    let collection :any= {};

    // Loop over the objects in the form config
    for (let obj of formConfig) {
        // Get the key and value from the object
        let key = obj.name;
        let value = obj.value;

        // Assign the key-value pair to the object
        collection[key] = value;
    }

    // Return the object
    return collection;
}

// Call the function with the form config
let formConfig2 = [
  {
    "name": "username",
    "placeholder": "Enter username",
    "value": "pholosho"
  },
  {
    "name": "emailaddress",
    "placeholder": "Enter emailaddress",
    "value": ""
  }
];
let collection2 = mapFormConfigToCollection(formConfig);

