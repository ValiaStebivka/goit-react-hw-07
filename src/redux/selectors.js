export const selectFilter = state => state.filter.name;

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.loading;

export const selectError = state => state.contacts.error;

