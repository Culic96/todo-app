import { storage } from "./index";
import { ref, uploadBytes, uploadBytesResumable } from "firebase/storage"
import { v4 } from "uuid"

const uploadFile = (file: File | undefined) => {
    if (!file) return;
    const storageRef = ref(storage, `/images/${v4()}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed", (snapshot) => {
        const prog = (Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    });


}

export { uploadFile };