import { makeAutoObservable } from "mobx";
import instance from "./instance";

class BookingStore {
  bookings = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchBookings = async () => {
    try {
      const response = await instance.get("/bookings");
      this.bookings = response.data;
      this.loading = false;
    } catch (error) {
      console.error("BookStore -> fetchBookings -> error", error);
    }
  };

  fetchRecentBookings = async () => {
    try {
      this.loading = true;
      const response = await instance.get("/bookings");
      this.bookings = response.data;
      this.loading = false;
    } catch (error) {
      console.error("BookStore -> fetchBookings -> error", error);
    }
  };
  //
  createBooking = async (data) => {
    const response = await instance.post("/users/petOwners/bookings", data);
    this.bookings.push(response.data);
    try {
    } catch (error) {
      console.error("BookStore -> createBookings -> error", error);
    }
  };

  updateHostBooking = async (updateBook, navigation) => {
    try {
      // const formData = new FormData();
      // for (const key in updateBook) formData.append(key, updateBook[key]);
      await instance.put(`/users/petHosts/bookings`, updateBook);
      const book = await this.bookings.find(
        (book) => book.id === updateBook.id
      );
      for (const key in book) book[key] = updateBook[key];

      navigation.navigate(
        updateBook.bookingstatus === "Approved" ? "ClientScreen" : "Inbox"
      );
    } catch (error) {
      console.error("BookStore -> updateHostBooking -> error", error);
    }
  };

  // Delete Booking from Owner Side
  deleteOwnerBooking = async (petName, petid) => {
    try {
      await instance.delete("/users/petOwners/bookings/", {
        data: {
          petName: petName,
        },
      });
      this.bookings = this.bookings.filter(
        (booking) => booking.petId !== +petid
      );
    } catch (error) {
      console.error("BookingStore -> deleteOwnerBooking -> error", error);
    }
  };
}

const bookingStore = new BookingStore();
bookingStore.fetchBookings();

export default bookingStore;
