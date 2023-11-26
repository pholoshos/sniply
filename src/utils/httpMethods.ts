export const hasGetMethod =(service:any) => {
    return service.methods.includes('get');
}

export let hasPostMethod = (service:any) => {   
    return service.methods.includes('post');
}

export const hasPutMethod = (service:any) => {
    return service.methods.includes('put');
}

export const hasDeleteMethod = (service:any) => {
    return service.methods.includes('delete');
}

export const hasPatchMethod = (service:any) => {
    return service.methods.includes('patch');
}

export const hasHeadMethod = (service:any) => {
    return service.methods.includes('head');
}

export const hasOptionsMethod = (service:any) => {
    return service.methods.includes('options');
}   


//generic method to check if a service has a specific http method
export const hasHttpMethod = (service: any, method: string) => {
    return service.methods.includes(method);
}



//generic method to get all services with a specific http method
export const getAllGetMethods  = (services:any) => {
    return services.filter((service:any) => hasGetMethod(service));
}

export const getAllPostMethods  = (services:any) => {
    return services.filter((service:any) => hasPostMethod(service));
}

export const getAllPutMethods  = (services:any) => {
    return services.filter((service:any) => hasPutMethod(service));
}

export const getAllDeleteMethods  = (services:any) => {
    return services.filter((service:any) => hasDeleteMethod(service));
}

export const getAllPatchMethods  = (services:any) => {
    return services.filter((service:any) => hasPatchMethod(service));
}   

//generic method to get all services with a specific http method
export const getAllMethods = (services: any, method: string) => {
    return services.filter((service: any) => service.methods.includes(method));
}

