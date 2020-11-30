Organization of components:
- There is the index component which contains the App component.
- The App component contains information on the mirrors (name, size, frame price) and sets up the heading for the page
- The App component contains the FilteredList Component which has all the functionality and renders the dropdowns for
    filtering and sorting the mirror items
- The FilteredList Component contains the DisplayList Component which has the functionaltiy for the Cart and renders the
item card for each mirror. 
- The DisplayList Component contains the Display Cart Component which finally renders the items in the cart



How data is passed down through components:
The available constant information on the mirrors is stored in the App Component which is passed to
FilteredList, and therefore DisplayList and DisplayCart. When the mirror items are filtered on in 
FilteredList, this information is passed to DisplayList and therefore DisplayCart. Once changes in the
Cart are made, this is information is stored in DisplayList and passed down to DisplayCart which renders
the cart and items in it. 


How the user trigger state changes:

