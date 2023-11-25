// Utility function to get a component by ID
export const getComponentById = (pageId:string, componentId:string,config:any) => {
  const { pages } = config; // Replace 'yourConfigObject' with the actual variable containing your configuration

  // Find the specified page by ID
  const page = pages[pageId];

  if (page) {
    // Find the specified component by ID within the page
    const component = page.components.find((comp:any) => comp.id === componentId);

    return component || null;
  }

  return null; // Page not found
};
