import { collection, deleteDoc, doc, getDocs, orderBy, query, setDoc, updateDoc } from 'firebase/firestore';
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
            const group: Group = { customId: document.data().customId, title: document.data().title };
            groupsData.push(group);
        });
        return groupsData;
    } catch (error) {
        console.error('Error fetching groups:', error);
        throw error;
    }
};

export const getTodos_FromFirestore = async () => {
    try {
        const groupsCollection = collection(db, 'todos');
        const groupsSnapshot = await getDocs(groupsCollection);

        const todosData: Task[] = [];
        groupsSnapshot.forEach((document) => {
            const todo: Task = {
                customId: document.data().customId,
                title: document.data().title,
                idGroup: document.data().idGroup,
                todoCompleted: document.data().todoCompleted
            };
            todosData.push(todo);
        });
        return todosData;
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
};

export const postGroupToFireStore = async (group: Group) => {
    try {
        const groupsCollection = collection(db, 'groups');
        const groupDocRef = doc(groupsCollection, group.customId);
        await setDoc(groupDocRef, group);
    } catch (error) {
        console.error('Error when adding a group:', error);
        throw error;
    }
}

export const postTodoToFireStore = async (todo: Task) => {
    try {
        const todosCollection = collection(db, 'todos');
        const todoDocRef = doc(todosCollection, todo.customId);
        await setDoc(todoDocRef, todo);
    } catch (error) {
        console.error('Error when addding a group:', error);
        throw error;
    }
}

export const editTodoToFireStore = async (todo: Task) => {
    try {
        const todosCollection = collection(db, 'todos');
        const todoDoc = doc(todosCollection, todo.customId);
        const updatedTodo = { title: todo.title, todoCompleted: todo.todoCompleted };
        await updateDoc(todoDoc, updatedTodo);
    } catch (error) {
        console.error('Error when updating check todo:', error);
        throw error;
    }
}


export const deleteTodoFireStore = async (idTodo: string) => {
    try {
        const documentRef = doc(db, "todos", idTodo)
        await deleteDoc(documentRef);
    } catch (error) {
        console.error("Error when trying to delete the todo:", error);
        throw error;
    }
}