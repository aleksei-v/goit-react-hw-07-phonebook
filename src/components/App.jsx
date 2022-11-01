import { Box } from "./Box";
import ContactForm from "./ContactForm";
import ContactList from './ContactList';
import Filter from "./Filter";
import Title from "./Title";


export const App = () => 
    <Box p={5} color="black" bg="muted">
        <Title text="Phonebook" />
        <ContactForm />
        <Title text="Contacts" />
        <Filter/>
        <ContactList/>
    </Box>