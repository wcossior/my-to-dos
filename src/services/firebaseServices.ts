import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import Group from '../models/models';

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
