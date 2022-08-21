export interface BookInterface{
    id: number,
    title: string,
    author: string,
    description: string,
    rating: number
}

export type ArrayBooks = BookInterface[];