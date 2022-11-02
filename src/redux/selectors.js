export const selectFilter = state => state.filter;

export const selectContacts = state => state.contacts.contacts;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const showCurrentContacts = state => {
    const filter = selectFilter(state);
    const contacts = selectContacts(state)

    const filterContactByName = () => {
        const adjustedFilter = filter.toLocaleLowerCase();
        return contacts.filter(({ name }) =>
            name.toLocaleLowerCase().includes(adjustedFilter));
    };

    const currentContacts = filterContactByName();

    return currentContacts
};