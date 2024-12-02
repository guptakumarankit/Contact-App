import { deleteDoc ,doc} from "firebase/firestore";
import React from "react";
import { IoIosContact } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import useDisclouse from "../hooks/useDisclouse";
import AddAndUpdateContact from "./AddAndUpdateContact";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {

  const { isOpen, onClose, onOpen } = useDisclouse();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contact", id));
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div className="flex items-center rounded-lg  justify-between p-2 bg-red-300"
    >
      <div className="flex items-center gap-1">
        <IoIosContact className="text-5xl text-orange" />
        <div>
          <h2 className="font-medium">{contact.name}</h2>
          <p className="text-sm">{contact.email}</p>
        </div>
      </div>
      <div className="flex text-2xl gap-1">
        <RiEditCircleLine onClick={onOpen}
        className="cursor-pointer" />
        <MdDelete 
           onClick = {() => deleteContact(contact.id)} 
           className="cursor-pointer text-orange"/>
      </div>  
    </div>

    <AddAndUpdateContact
        contact={contact}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
    />
    </>
  );
};

export default ContactCard;