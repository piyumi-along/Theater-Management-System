import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home/HomePage";
import MovieList from "./Movie/MovieList";
import EditBooking from "./MovieBooking/EditBooking";
import BookingList from "./MovieBooking/BookingList";
import Footer from "./OtherPages/Footer";
import NavBar from "./OtherPages/NavBar";
import MovieListToEdit from "./admin/MovieListToEdit";
import ScreenView from "./Screen/ScreenView";
import SignUp from "./Sign Up/SignUp";
import TheatreSignUp from "./admin/TheatreSignUp";
import AddBooking from "./MovieBooking/AddBooking";
import EditMovie from "./Movie/EditMovie";
import ScreenSignUp from "./admin/ScreenSignUp";
import ScreenAddSeat from "./ScreenOwner/ScreenAddSeat";
import ScreenSeat from "./ScreenOwner/ScreenSeat";
import AddMovie from "./Movie/AddMovie";
import UserList from "./admin/UserList";
import EditUsers from "./admin/EditUsers";
import ViewUsers from "./admin/ViewUsers";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>

          <Route exact path="/theatresignup">
            <TheatreSignUp />
          </Route>

        <Route exact path="/screensignup">
          <ScreenSignUp />
        </Route>

        <Route exact path="/movie-list">
          <MovieList />
        </Route>
        <Route exact path="/editmovie">
          <EditMovie />
        </Route>
        <Route exact path="/addbooking">
          <AddBooking />
        </Route>
        <Route exact path="/addseat">
          <ScreenAddSeat />
        </Route>
        <Route exact path="/screenseat">
          <ScreenSeat />
        </Route>
        <Route exact path="/moieeditlist">
          <MovieListToEdit />
        </Route>
        <Route exact path="/add-movie">
          <AddMovie />
        </Route>
        <Route exact path="/user-list">
          <UserList />
        </Route>
        <Route exact path="/view">
          <ViewUsers />
        </Route>
        <Route exact path="/screen-list">
          <ScreenView />
        </Route>
        <Route exact path="/edit-booking">
          <EditBooking />
        </Route>

        <Route exact path="/edit-users">
          <EditUsers />
</Route>
        <Route exact path="/view-bookings">
          <BookingList />

        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
