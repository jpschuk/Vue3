import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { defineStore } from "pinia";
import { db } from "../firebaseConfig";
import { auth } from "../firebaseConfig";

export const useDatabaseStore = defineStore("database", {
  state: () => ({
    documents: [],
  }),
  actions: {
    async getUrls() {
      const q = query(
        collection(db, "urlz"),
        where("user", "==", auth.currentUser.uid)
      );
      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          this.documents.push({
            id: doc.id,
            ...doc.data(),
          });
        });
      } catch (error) {
        console.log(error);
      } finally {
      }
    },
  },
});
