export const getAllRoutes = (data: any) => {
    return data?.pages;
}

export const getPages = (data) => {
    return Object.values(data.pages);
}