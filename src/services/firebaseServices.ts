import { addDoc, collection, deleteDoc, doc, getDocs, limit, orderBy, query, where } from 'firebase/firestore';
import { db } from './firebase';
import { Group } from '../models/models';
import { Task } from '../models/models';

export const getGroupsFromFirestore = async () => {
    try {
        const groupsCollection = collection(db, 'groups');
        const groupsCollectionOrdered = query(groupsCollection, orderBy('title', 'asc'));
        const groupsSnapshot = await getDocs(groupsCollectionOrdered);

        const groupsData: Group[] = [];
        groupsSnapshot.forEach((document) => {
            const group = { id: document.id, title: document.data().title };
            groupsData.push(group);
        });

        return groupsData;
    } catch (error) {
        console.error('Error fetching groups:', error);
        throw error;
    }
};

export const postGroupToFireStore = async (title: string) => {
    try {
        const groupsCollection = collection(db, 'groups');
        const newGroup = { title };
        await addDoc(groupsCollection, newGroup);
    } catch (error) {
        console.error('Error when addding a group:', error);
    }
}

export const postTodoToFireStore = async (title: string, idGroup: string) => {
    try {
        const todosCollection = collection(db, 'todos');
        const newTodo = { title, idGroup };
        await addDoc(todosCollection, newTodo);
    } catch (error) {
        console.error('Error when addding a group:', error);
    }
}

export const deleteTodoFireStore = async (idTodo: string) => {
    try {
        const documentRef = doc(db, "todos", idTodo)
        await deleteDoc(documentRef);
    } catch (error) {
        console.error("Error when trying to delete the todo:", error);
    }
}

export const getTodosFromFirestore = async (idGroup: string) => {
    try {
        const todosCollection = collection(db, 'todos');
        const todosQuery = query(todosCollection, where('idGroup', '==', idGroup), orderBy('title', 'asc'));
        const todosSnapshot = await getDocs(todosQuery);

        const todosData: Task[] = [];
        todosSnapshot.forEach((document) => {
            const todo = { id: document.id, title: document.data().title, idGroup: document.data().idGroup };
            todosData.push(todo);
        });

        return todosData;
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
};

export const getTodosFromFirstGroupFirestore = async () => {
    try {
        const groupsCollection = collection(db, 'groups');
        const groupsCollectionOrdered = query(groupsCollection, orderBy('title', 'asc'), limit(1));
        const groupsSnapshot = await getDocs(groupsCollectionOrdered);

        const groupsData: Group[] = [];
        groupsSnapshot.forEach((document) => {
            const group = { id: document.id, title: document.data().title };
            groupsData.push(group);
        });
        if (groupsData.length > 0) {
            const firstGroup = groupsData[0];
            const todosCollection = collection(db, 'todos');
            const todosQuery = query(todosCollection, where('idGroup', '==', firstGroup.id), orderBy('title', 'asc'));
            const todosSnapshot = await getDocs(todosQuery);

            const todosData: Task[] = [];
            todosSnapshot.forEach((document) => {
                const todo = { id: document.id, title: document.data().title, idGroup: document.data().idGroup };
                todosData.push(todo);
            });
            return { todosData, firstGroup };
        }
        const todosData: Task[] = [];
        const firstGroup: Group = {
            id: "",
            title: "",
        };
        return { todosData, firstGroup };
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
};
