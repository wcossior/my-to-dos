export interface Group{
    id: string;
    title: string;
}


export interface Task{
    id: string;
    title: string;
    idGroup: string;
    todoCompleted: boolean;
}
