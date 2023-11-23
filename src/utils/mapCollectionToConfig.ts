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


