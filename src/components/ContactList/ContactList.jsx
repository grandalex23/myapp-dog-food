import React from "react";

const ContactList = ({ contacts }) => {
   return (
      <div className="contacts">
         {contacts.map((contact) => {
            return (
               <div className="contact">
                  <div>{contact.name}</div>
                  <div>{contact.lastName}</div>
               </div>
            );
         })}
      </div>
   );
};

export default ContactList;
