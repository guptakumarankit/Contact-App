import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { CiSearch } from "react-icons/ci";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclouse";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFoundContact from "./components/NotFoundContact";


function App() {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclouse();

  const getContacts = async () => {
    try {
      const contactsRef = collection(db, "contact");
      onSnapshot(contactsRef, (snapshot) => {
        const contactLists = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
        return contactLists;
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contact");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);

      return filteredContacts;
    });
  };


  return (
    <>
      <div className="m-auto max-w-[470px]">
        <NavBar />
        <div className="flex gap-2">
          <div className="relative flex flex-grow items-center">
            <CiSearch className="absolute text-3xl text-white ml-1 " />
            <input
              onChange={filterContacts}
              type="text"
              className="h-10 flex-grow rounded-md border border-white bg-transparent text-white pl-9"
            />
          </div>
          <AiFillPlusCircle onClick={onOpen} className="text-5xl text-white cursor-pointer" />
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {contacts.length <= 0 ? (
            <NotFoundContact />
          ) : (
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          )}
        </div>
      </div>
      <AddAndUpdateContact isOpen={isOpen} onClose={onClose}/>
      <ToastContainer className='max-w-[470px]' position="bottom-center" />
    </>
  );
}

export default App;