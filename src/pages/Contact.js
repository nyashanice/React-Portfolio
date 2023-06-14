import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Contact() {
  return (
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <textarea
          class="form-control"
          id="name"
          rows="3"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="name@example.com"
        ></input>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          class="form-control"
          id="message"
          rows="3"
        ></textarea>
      </div>
      <button>Submit</button>
    </form>
  );
}
