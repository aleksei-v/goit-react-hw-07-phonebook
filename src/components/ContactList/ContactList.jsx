import { Box } from 'components/Box';
import { Button } from '../ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from 'redux/contactsSlice/slice';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {

    const dispatch = useDispatch();

    const contacts = useSelector(getContacts);
    
    const filter = useSelector(getFilter);

    const filterContactByName = () => {
        const adjustedFilter = filter.toLocaleLowerCase();
        return contacts.filter(({ name }) =>
            name.toLocaleLowerCase().includes(adjustedFilter));
    };

    const currentContacts = filterContactByName();

    return (
        <Box
            as="ul"
            display="flex"
            flexDirection="column"
            p={4}
            alignItems="center"
        >
            {currentContacts.map((({ id, name, number }) => {
                return (
                    <li key={id}>
                        {name}: {number}
                        <Button onClick={() => {
                            dispatch(remove(id))
                        }}>
                            Удалить
                        </Button>
                    </li>
                )
            }))}
        </Box>);
};
    
export default ContactList;