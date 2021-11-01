import React, { useState } from 'react';

export default function addMovie() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const updateName = (e) => {
    setName(e.target.value);
  }

  return (
    <form>
      <input type="text" name="name" />
      <input type="text" name="price" />
      <button>Submit</button>
    </form>
  );
}
