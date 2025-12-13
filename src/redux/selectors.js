import { createSelector } from "@reduxjs/toolkit";

export const selectContactIds = (state) => state.contacts.ids;
export const selectContactEntities = (state) => state.contacts.entities;
export const selectFilter = (state) => state.filter;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;

export const selectContacts = createSelector(
  [selectContactIds, selectContactEntities],
  (ids, entities) => {
    return ids.map((id) => entities[id]).filter((contact) => contact !== undefined && contact !== null)
});

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
