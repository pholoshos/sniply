import { randomString } from "../../utils/getRandomString";

export interface IDefaultData {
    width: string;
    x: number;
    id: string;
    y: number;
    backgroundColor?: string;
    label: string;
    textColor: string;
    color: string;
    padding: string;
    value: string;
    span: string;
}

export const defaultData: IDefaultData = {
    width: "",
    x: 0,
    id: randomString(10),
    y: 0,
    label: "Button",
    textColor: "black",
    color: "primary",
    padding: "4px",
    value: "Button",
    span: "1",
};

