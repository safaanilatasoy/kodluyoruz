import {useEffect, useState} from 'react'
import List from './List'
import Form from './Form'

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Anıl",
      phone_number: "123123",
    },
    {
      fullname: "Doğukan",
      phone_number: "124233",
    },
    {
      fullname: "ilker",
      phone_number: "214545",
    },
    {
      fullname: "Emre",
      phone_number: "433523",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);


  return (
    <div>
      <List contacts={contacts}/>
      <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts
