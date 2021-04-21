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
      const response = await instance.get("/users/petHost/bookings");
      this.bookings = response.data;
    } catch (error) {
      console.error("BookStore -> fetchBookings -> error", error);
    }
  };
  //
  createBooking = async (data) => {
    const response = await instance.post("/users/petOwner/bookings", data);
    this.bookings.push(response.data);
    try {
    } catch (error) {
      console.error("BookStore -> createBookings -> error", error);
    }
  };

  // Update Host Booking
  updateHostBooking = async (updateBook) => {
    try {
      const formData = new FormData();
      for (const key in updateBook) formData.append(key, updateBook[key]);
      await instance.put(`/users/petHost/bookings`, formData);
      const book = this.books.find((book) => book.id === updateBook.id);
      for (const key in book) book[key] = updateBook[key];
    } catch (error) {
      console.error("BookStore -> updateHostBooking -> error", error);
    }
  };

  // Update Owner Booking
  updateOwnerBooking = async (updateBook) => {
    try {
      const formData = new FormData();
      for (const key in updateBook) formData.append(key, updateBook[key]);
      await instance.put(`/users/petOwner/bookings`, formData);
      const book = this.books.find((book) => book.id === updateBook.id);
      for (const key in book) book[key] = updateBook[key];
    } catch (error) {
      console.error("BookStore -> updateOwnerBooking -> error", error);
    }
  };

  // Delete Booking from Owner Side
  deleteOwnerBooking = async (petOwnerId) => {
    try {
      await instance.delete(`/users/petOwner/bookings`);
      this.bookings = this.bookings.filter(
        (booking) => booking.petOwnerId !== +petOwnerId
      );
    } catch (error) {
      console.error("HostStore -> deleteOwnerBooking -> error", error);
    }
  };

  // Delete Booking from Host Side
  deleteHostBooking = async (petHostId) => {
    try {
      await instance.delete(`/users/petHost/bookings`);
      this.bookings = this.bookings.filter(
        (booking) => booking.petHostId !== +petHostId
      );
    } catch (error) {
      console.error("HostStore -> deleteHostBooking -> error", error);
    }
  };
}

const bookingStore = new BookingStore();
bookingStore.fetchBookings();

export default bookingStore;
