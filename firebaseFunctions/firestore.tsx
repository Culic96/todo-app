import { QueryDocumentSnapshot } from "firebase/firestore";
import { getCollection } from ".";
export interface ITodo {
  id?: string;
  heading: string;
  desc: string;
}

const converter = <T,>() => ({
  toFirestore: (data: T) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) => {
    return { ...snap.data(), id: snap.id } as unknown as T;
  },
});

const dataPoint = <T,>(collectionPath: string) =>
  getCollection(collectionPath).withConverter(converter<T>());

export const db = {
  todos: dataPoint<ITodo>("todos"),
};
