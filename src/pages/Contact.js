import React from 'react';

export default function Contact() {
  return (
    <div>
      <form>
        <div>
          <p><span class="text-white">Name: </span><input type="text"></input></p>
        </div>
        <br />
        <div>
          <p><span class="text-white">Email: </span><input type="email"></input></p>
        </div>
        <br />
        <div>
          <p><span class="text-white">Message: </span><input></input></p>
        </div>
        <br />
        <div>
          <button type="submit" class="bg-white rounded-xl px-2">Submit</button>
        </div>
      </form>
    </div>
  );
}