import { Box } from 'components/Box';
import { Button } from '../ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { showCurrentContacts } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { ContactOrder, ContactLi } from './ContactList.styled';

const ContactList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])
    
    const currentContacts = useSelector(showCurrentContacts);

    return (
        <Box pl={6} pr={6}>
            <ContactOrder>
                {currentContacts.map((({ id, name, phone }) => {
                    return (
                        <ContactLi key={id}>
                            {name}: {phone}
                            <Button onClick={() => {
                                dispatch(deleteContact(id))
                            }}>
                                Удалить
                            </Button>
                        </ContactLi>
                    )
                }))}
            </ContactOrder>
        </Box>)
};
    
export default ContactList;