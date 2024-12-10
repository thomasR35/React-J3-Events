import React, { useState } from "react";

const ContactForm = ({ setContacts }) => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    let lastId = localStorage.getItem("lastId");
    lastId = lastId ? parseInt(lastId) : 0;

    const newId = lastId + 1;

    const newContact = {
      id: newId,
      lastName,
      firstName,
      age,
      email,
      phone,
      message,
    };

    const storedContacts =
      JSON.parse(localStorage.getItem("formDataList")) || [];
    storedContacts.push(newContact);
    localStorage.setItem("formDataList", JSON.stringify(storedContacts));

    localStorage.setItem("lastId", newId.toString());

    setContacts(storedContacts);

    setLastName("");
    setFirstName("");
    setAge("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="lastName">Nom:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="firstName">Prénom:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="age">Âge:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phone">Téléphone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default ContactForm;
