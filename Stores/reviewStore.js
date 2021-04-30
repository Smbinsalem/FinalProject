import instance from "./instance";
import { makeAutoObservable, runInAction } from "mobx";

class ReviewStore {
  reviews = null;
  TopFour =null;
  loading = true;
  constructor() {
    makeAutoObservable(this);
  }

  fetchReviews = async () => {
    try {
      const response = await instance.get(`/reviews`);
      runInAction(() => {
        this.reviews = response.data;
        this.loading = false;
      });
    } catch (error) {
      console.error("ReviewStore -> fetchReviews -> error", error);
    }
  };

  topReviews = async () => {
    try {
      const response = await instance.get(`/tophosts`);
      runInAction(() => {
        this.TopFour = response.data;
        this.loading = false;
      });
    } catch (error) {
      console.error("ReviewStore -> fetchReviews -> error", error);
    }
  };

  addReview = async (newReview) => {
    try {
      const response = await instance.post(
        `/users/petOwners/reviews`,
        newReview
      );
      this.reviews.push(response.data);
    } catch (error) {
      console.error("ReviewStore -> addReview -> error", error);
    }
  };
}

const reviewStore = new ReviewStore();
reviewStore.fetchReviews();

export default reviewStore;
