import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import {Group} from '../models/models';
import {Task} from '../models/models';

export const getGroupsFromFirestore = async () => {
    try {
        const groupsCollection = collection(db, 'groups');
        const groupsSnapshot = await getDocs(groupsCollection);

        const groupsData:Group[] = [];
        groupsSnapshot.forEach((document) => {
            const group = { id: document.id, title: document.data().title};
            groupsData.push(group);
        });

        return groupsData;
    } catch (error) {
        console.error('Error fetching groups:', error);
        throw error;
    }
};

export const postGroupToFireStore =async ( title: string) => {
    try {
        const groupsCollection = collection(db, 'groups');
        const newGroup = { title };
        await addDoc(groupsCollection, newGroup);
    } catch (error) {
        console.error('Error when addding a group:', error);
    }
}

export const postTodoToFireStore =async ( title: string) => {
    try {
        const todosCollection = collection(db, 'todos');
        const newTodo = { title, idGroup: "idGroup" };
        await addDoc(todosCollection, newTodo);
    } catch (error) {
        console.error('Error when addding a group:', error);
    }
}



export const getTodosFromFirestore = async () => {
    try {
        const todosCollection = collection(db, 'todos');
        const todosSnapshot = await getDocs(todosCollection);

        const todosData:Task[] = [];
        todosSnapshot.forEach((document) => {
            const todo = { id: document.id, title: document.data().title, idGroup: document.data().idGroup};
            todosData.push(todo);
        });

        return todosData;
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
};
