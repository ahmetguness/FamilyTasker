import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "./firebaseConfig";

export async function authenticateUser(userKind, userName, password) {
  try {
    const userRef = collection(db, userKind);
    const q = query(userRef, where(userKind + "UserName", "==", userName));
    const querySnapshot = await getDocs(q);

    let isUserValid = false;
    let userData = null;
    let userId = null;

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const passPropertyName = userKind + "Password";
      if (
        data.hasOwnProperty(passPropertyName) &&
        data[passPropertyName] === password
      ) {
        isUserValid = true;
        userData = data;
        userId = doc.id;
      }
    });

    return { isValid: isUserValid, userInfo: { id: userId, ...userData } };
  } catch (error) {
    console.error("Error during authentication:", error);
    return { isValid: false, userInfo: null };
  }
}

export async function fetchTasksByChildId(userId) {
  try {
    const taskRef = collection(db, `child/${userId}/tasks`);
    const querySnapshot = await getDocs(taskRef);

    let tasks = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      tasks.push({
        id: doc.id,
        ...data,
        createdAt: data.createdAt
          ? data.createdAt.toDate().toISOString()
          : null,
      });
    });
    return tasks;
  } catch (error) {
    console.error("Error during getting tasks:", error);
    return [];
  }
}

export async function addTask(childId, taskName, taskDescription, taskImgUri) {
  try {
    let imageUrl = "";

    if (taskImgUri) {
      const response = await fetch(taskImgUri);
      const blob = await response.blob();
      const filename = taskImgUri.substring(taskImgUri.lastIndexOf("/") + 1);
      const storageRef = ref(storage, `tasks/${childId}/${filename}`);
      await uploadBytes(storageRef, blob);
      imageUrl = await getDownloadURL(storageRef);
    }

    const taskRef = collection(db, `child/${childId}/tasks`);
    await addDoc(taskRef, {
      taskName,
      taskDescription,
      taskImg: imageUrl,
      createdAt: serverTimestamp(),
    });

    console.log("Task successfully added!");
  } catch (error) {
    console.error("Error adding task: ", error);
  }
}

export async function createAccount(userType, userName, password) {
  try {
    const accountRef = collection(db, userType);
    await addDoc(accountRef, {
      [`${userType}UserName`]: userName,
      [`${userType}Password`]: password,
    });
    console.log("Account created successfully");
  } catch (error) {
    console.error("Error creating account: ", error);
  }
}

export async function connectUsers(parentId, childId) {
  try {
    const connectRef = collection(db, `parent/${parentId}/connections`);
    const q = query(connectRef, where("connectedChild", "==", childId));

    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      await addDoc(connectRef, {
        connectedChild: childId,
      });
      console.log("Connected successfully");
    } else {
      console.log("Child is already connected");
    }
  } catch (error) {
    console.error("Error connecting users: ", error);
  }
}

export async function deleteTaskFromFirestore(childId, taskId) {
  try {
    const deleteRef = doc(db, `child/${childId}/tasks/${taskId}`);
    await deleteDoc(deleteRef);
    console.log("Task deleted successfully");
  } catch (error) {
    console.error("Error while deleting task: ", error);
  }
}

export async function addCompletedTasks(childId, itemInfo) {
  try {
    const compTaskRef = collection(db, `child/${childId}/completedTasks`);
    await addDoc(compTaskRef, itemInfo);
  } catch (error) {
    console.error("Error while adding completed tasks: ", error);
  }
}
