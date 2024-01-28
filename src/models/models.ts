export interface Group{
    customId: string;
    title: string;
}


export interface Task{
    customId: string;
    title: string;
    idGroup: string;
    todoCompleted: boolean;
}
