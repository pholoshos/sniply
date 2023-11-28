import { randomString } from "./getRandomString";

export interface IComponent {
    componentName?: string;
    label?: string;
    description?: string;
    image?: string;
    link?: string;
    tags?: string[];
    options?: any;
    onClick?: () => void;
    onSelect?: () => void;
    onDeselect?: () => void;
    extra?: any;
    id?: string;
}


export const createComponent = (component: IComponent) => {
    import(`../lib/${component?.componentName}/${component?.componentName}.svelte`).then((module) => {
        return {
            component: module.default,
            id: randomString(10),
            ...component,
        }

    });
}

export const createArrayOfComponents = (components: IComponent[]) => {
    return components.map((component) => createComponent(component));
}