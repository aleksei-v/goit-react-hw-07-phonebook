import { Notify } from 'notiflix/build/notiflix-notify-aio';
import shortid from "shortid";
import { useState } from "react";
import { Box } from 'components/Box';
import { Input, AddButton } from './ContactForm.styled';
import { add } from "redux/contactsSlice/slice";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from 'redux/selectors';

const ContactForm = () => {
    
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleInputChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case "name":
                setName(value)
                break;
        
            case "number":
                setNumber(value)
                break;
            default:
                return;
        }
    };
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const onSubmitContact = ({ name, number }) => {
  
        const newContact = {
            id: shortid.generate(),
            name,
            number,
        };
        const isContactExists = contacts.find(({ name }) => newContact.name.toLocaleLowerCase() === name.toLocaleLowerCase());
       
        isContactExists
            ? Notify.failure(`${newContact.name} is already in contacts`) :
            dispatch(add(newContact));
        if (!isContactExists) {
            resetForm()
        };
    };

    const onClickSubmit = (evt) => {
        evt.preventDefault();
        
        onSubmitContact({ name, number });
    };

    const resetForm = () => {
        setName("");
        setNumber("");
    };
  
    return (
        <>
            <form
                onSubmit={onClickSubmit}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    p={4}
                    alignItems="center"
                >
                    <label>Name
                        <Input
                            type="text"
                            name="name"
                            value={name}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces.
                    For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>Number
                        <Input
                            type="tel"
                            name="number"
                            value={number}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                </Box>
                <AddButton
                    type="submit">
                    Add contact
                </AddButton>
            </form>
        </>
    );
};

export default ContactForm;