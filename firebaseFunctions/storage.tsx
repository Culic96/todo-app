import { storage } from "./index";
import { ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"


export const uploadImage = (file: File) => {
    const imageRef = ref(storage, `images/${v4()}`);
    uploadBytes(imageRef, file);
}