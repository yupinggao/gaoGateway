export interface IItem {
    text: string;
    image: string;
    imageClass: string;
    imageHeight: string;
    imageWidth: string
}

export interface IContent {
    id: number;
    date: string;
    title: string;
    itemList: IItem[];
}