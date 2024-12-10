import React, { useEffect, useState } from "react";
import Header from "./Header";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import ContactList from "./ContactList";

const Form = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("formDataList");
    if (storedData) {
      setContacts(JSON.parse(storedData));
    }
  }, []);

  return (
    <>
      <Header
        logoSrc="./Solutions-website-logo-png.png"
        siteTitle="Nice Site"
      />
      <ContactForm setContacts={setContacts} />
      <ContactList contacts={contacts} />
      <Footer copyright="Sronnok" />
    </>
  );
};

export default Form;
