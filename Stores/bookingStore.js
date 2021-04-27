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
      await instance.put(`/users/petHosts/bookings`, updateBook);
      const newbook = await this.bookings.find(
        (book) => book.id === updateBook.id
      );
      for (const key in newbook) newbook[key] = updateBook[key];

      this.bookings
        .filter((booking) => booking.id !== updateBook.id)
        .push(newbook);
    } catch (error) {
      console.error("BookStore -> updateHostBooking -> error", error);
    }
  };

  // Delete Booking from Owner Side
  deleteOwnerBooking = async (petName, petid, navigation) => {
    try {
      await instance.delete("/users/petOwners/bookings/", {
        data: {
          petName: petName,
        },
      });
      this.bookings = this.bookings.filter(
        (booking) => booking.petId !== +petid
      );
      navigation.replace("Inbox");
    } catch (error) {
      console.error("BookingStore -> deleteOwnerBooking -> error", error);
    }
  };
}

const bookingStore = new BookingStore();
bookingStore.fetchBookings();

export default bookingStore;
