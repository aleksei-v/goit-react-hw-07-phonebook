import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/operations";
import { Box } from "./Box";
import ContactForm from "./ContactForm";
import ContactList from './ContactList';
import Filter from "./Filter";
import Title from "./Title";
import { getIsLoading, getError } from "redux/selectors";
import { useSelector } from "react-redux";
import Loader from "./Loader/Loader";

export const App = () => {
    
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

    useEffect(() => {
      dispatch(fetchContacts())
    }, [dispatch])
        
    return(<Box p={5} color="black" bg="muted">
        <Title text="Phonebook" />
        <ContactForm />
        <Title text="Contacts" />
        <Filter />
        {!error && isLoading && <Loader/>}
        <ContactList/>
    </Box>)
}