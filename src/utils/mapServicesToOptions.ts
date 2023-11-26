export const mapServicesToOptions = (services: any[]) => {
    return services.map((service:any) => {
        return service.name;
    });
}