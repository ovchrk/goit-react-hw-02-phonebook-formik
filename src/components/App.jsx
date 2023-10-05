import { Component } from 'react';
import { Container } from './Container';
import { ContactForm } from './ContactForm';
import { List } from './List';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [ { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    filter: "",
  }
  addContact = ({name, number}) => {
    const newContact = {
      id: nanoid(5),
      name: name,
      number: number,
    }
    
    const inList = this.state.contacts.some(contact => contact.name === newContact.name);

    if (inList) {
      alert(`${newContact.name}  is already in contacts.`);
      return; 
    }
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts, ]
    }))
  }

    deleteContact = (idToDelete) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({id}) => id !== idToDelete)
    }))
  }


  render() { 
    const { contacts, filter } = this.state
    const filteredContacts = contacts.filter(({name}) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    return (<Container>
      <h1 className='text-3xl mb-8'>Phonebook</h1>
      <ContactForm onSubmit={this.addContact}></ContactForm>
      <List filteredContacts={filteredContacts} handleDelete={this.deleteContact}></List>
      
    </Container>)
   }
} 
export { App };

//! Або можна зробити ось так без import styles

// export const App = () => (
//   <>
//     <h1 className="text-yellow-300 font-extrabold font-sans text-6xl">Hello, React</h1>
//   </>
// );

//! Моя вам порада - оскільки ми використовуємо Tailwind,
//! ми повністю позбавляємося CSS файлів, тому краще писати інлайн стилі,
//! оскільки Tailwind сам все зробить за нас, а також неперевершено оптимізує
//! CSS файли, тому бийте компоненти на маленькі під-компоненти
//! щоб воно виглядало чисто, і постарайтеся повністю позбавитися від CSS файлів.
