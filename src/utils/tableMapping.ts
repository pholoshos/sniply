export const extractTableColumns = (tableConfig: any[]) => {
    return tableConfig?.map((column: any) => {
        return column?.name;
    });
}

export const extractTableColumnsFromRawData = (rawData: any[]) => {
    return Object.keys(rawData[0]);
}