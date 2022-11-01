
import { Box } from 'components/Box';
import { useSelector, useDispatch } from "react-redux";
import { Input } from 'components/ContactForm/ContactForm.styled';
import { setFilter } from 'redux/filterSlice/slice';
import { getFilter } from 'redux/selectors';

const Filter = () => {
    const dispatch = useDispatch();
    
    const handleInputName = (evt) => {
        dispatch(setFilter(evt.target.value))
    };
    const filter = useSelector(getFilter)

    return (<Box
        display="flex"
        flexDirection="column"
        p={4}
        alignItems="center"
    >
        <label> Find contacts by name
            <Input
                type="text"
                name="filter"
                value={filter}
                onChange={handleInputName}
            />
        </label>
    </Box>)
};


export default Filter;