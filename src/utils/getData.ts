import { api, generalApi } from "."

export interface IGetData {
    modelName: string;
    filters?: any;
    sortField?: string;
    sortOrder?: string;
    page?: number;
    pageSize?: number;
    entityId?: string;
}

/**
 * Fetches data from the API
 * @param modelName The name of the model to fetch data from
 * @param filters Optional filters to apply to the data
 * @param sortField Optional field to sort the data by
 * @param sortOrder Optional sort order to apply to the data
 * @param page Optional page number to fetch
 * @param pageSize Optional page size to use when fetching data
 * @param entityId Optional ID of a specific entity to fetch
 * @returns The data returned from the API
 */

export const getData = async ({
    modelName,
    filters = null,
    sortField = '',
    sortOrder = '',
    page = 1,
    pageSize = 10,
    entityId = '',
}: IGetData) => {
    try {
        let url = `/data/${modelName}`;

        // If entityId is provided, fetch a specific entity by ID
        if (entityId) {
            url += `/${entityId}`;
        } else {
            // If filters, sorting, or pagination parameters are provided, append them to the URL
            const queryParams = [];

            if (filters) {
                queryParams.push(`filters=${encodeURIComponent(JSON.stringify(filters))}`);
            }

            if (sortField && sortOrder) {
                queryParams.push(`sortField=${sortField}&sortOrder=${sortOrder}`);
            }

            if (page) {
                queryParams.push(`page=${page}`);
            }

            if (pageSize) {
                queryParams.push(`pageSize=${pageSize}`);
            }

            if (queryParams.length > 0) {
                url += `?${queryParams.join('&')}`;
            }
        }

        const response = await generalApi.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
        return false;
    }
};

export const addData = (modalName: string, data: any) => {
    generalApi.post('/data', data).then((response) => {
        return response.data;
    }).catch((error) => {
        console.log(error);
        return false;
    });
}