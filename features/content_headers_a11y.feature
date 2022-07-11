Feature: Content A11y UI Regression (sprint 104)
@regression @fs71662
Scenario: Verfiy that Panel headers roles are defined as button
Given User is able to go to Etrieve Content application
Then User is able to login to the Etrieve Content
Then User can verify that header with id "showInbox" has role defined as button
Then User can verify that header with id "showTree" has role defined as button
Then User can verify that header with id "recicleBinTab" has role defined as button
Then User can verify that header with id "showKeyFields" has role defined as button
Then User can verify that header with id "showKeyLinkedDocuments" has role defined as button
Then User can verify that header with id "showDocumentHistory" has role defined as button
Then Logout from the Content

@regression @fs71662
Scenario: Verfiy that Panel headers aria-expanded toggles between true and false when selected
Given User is able to go to Etrieve Content application
Then User is able to login to the Etrieve Content
Then As user selects the header with id "showInbox", verify that the aria-expanded toggles between true and false when selected.
Then User expands the "showInbox" header.
Then As user selects the header with id "showTree", verify that the aria-expanded toggles between true and false when selected.
Then As user selects the header with id "recicleBinTab", verify that the aria-expanded toggles between true and false when selected.
Then User expands the "showKeyLinkedDocuments" header.
Then As user selects the header with id "showKeyFields", verify that the aria-expanded toggles between true and false when selected.
Then As user selects the header with id "showKeyLinkedDocuments", verify that the aria-expanded toggles between true and false when selected.
Then As user selects the header with id "showDocumentHistory", verify that the aria-expanded toggles between true and false when selected.
Then Logout from the Content

@regression @fs71662
Scenario: Verfiy that Panel headers Title contain the text 
Given User is able to go to Etrieve Content application
Then User is able to login to the Etrieve Content
Then User can verify that header with id "showInbox" has title containing the "Unfiled"
Then User can verify that header with id "showTree" has title containing the "Tree"
Then User can verify that header with id "recicleBinTab" has title containing the "Recycle Bin"
Then User can verify that header with id "showKeyFields" has title containing the "Key Fields"
Then User can verify that header with id "showKeyLinkedDocuments" has title containing the "Links"
Then User can verify that header with id "showDocumentHistory" has title containing the "History"
Then Logout from the Content

@regression @fs70582
Scenario: Verfiy that focus should follow the selected document in the unfiled panel.
Given User is able to go to Etrieve Content application
Then User is able to login to the Etrieve Content
Then Click Configure icon gear on top right
Then Click Area link
Then Click on the New Area link
Then Create a New Area
Then Click Configure icon gear on top right
Then Click on Key Fields section
Then Click on Add New Key Field
Then Enter the name for new Key Field
Then Click on add button to add keyfield
Then Click Configure icon gear on top right
Then Click on Doc Type section
Then Click on Add New Document Type
Then Enter new name for first Document Type and click Add
Then Search for the first doc type in search bar and click on it
Then Click on the plus button
Then Search for created text keyfield 1 and click on checkbox 
Then Click on Area on left side
Then Click on plus button to add area
Then Search available test area
Then Click checkbox to add area
Then Click on Name Definition section
Then Delete previous name definitions present
Then Delete previous name definitions present
Then Click on Add Definition
Then Click on key field dropdown
Then Click on key field created from dropdown
Then Click Save button
Then Click on Update Existing Documents
Then Accept the alert box by clicking ok twice
Then Click Configure icon gear on top right
Then Click Area link
Then Click the link for an newly created Area
Then Click on add folder level button
Then Click on plus button
Then Select Field from definition type dropdown 
Then Select Document Type from field dropdown
Then Click save to save folder level
Then Click on Update Existing Data
Then Accept the alert box by clicking ok twice
Then User is able to go to Etrieve Content application
Then Click on the newly created area in the tree.
Then User is able to upload the file for Area
Then Click on unfiled document
Then Click on Doc Type dropdown
Then Select first Doc Type Text from dropdown
Then Enter string value in the text keyfield
Then Click outside the field
Then Verify the Title of the webpage contains the name of the document defined in the DocType name definition
Then Click on the trash can on the top right
Then Click on the x next to the recycle bin
Then Click ok on the pop-up box
Then Click Configure icon gear on top right
Then Click on Key Fields section
Then Search for first keyfield and click on it
Then Click on Values Tab to remove the value 
Then Click on the X glyphicon to remove the values
Then Click Configure icon gear on top right
Then Click on Doc Type section
Then Search for the first doc type in search bar and click on it
Then Click on Name Definition section
Then Delete previous name definitions present
Then Click on Update Existing Documents
Then Accept the alert box by clicking ok twice
Then Click Configure icon gear on top right
Then Click Area link 
Then Click the link for an newly created Area 
Then Click on x to delete folder level
Then Click on Update Existing Data
Then Accept the alert box by clicking ok twice
Then Click Configure icon gear on top right
Then Click on Doc Type section
Then Click on the edit button
Then Search for the doc type in search bar and click on it
# Then User waits 45 seconds for tree clean up.
Then Click on the delete button
Then Accept the alert box by clicking ok
Then Click Configure icon gear on top right
Then Click on Key Fields section
Then Click on the edit button
Then Search for first keyfield and click on it
Then Click on the delete button
Then Accept the alert box to delete
Then Click Configure icon gear on top right
Then Click Area link 
Then Click the link for an newly created Area 
Then Click the gear next to the Area Name and Delete the Area
Then Logout from the Content

@regression @us71470
Scenario: Verfiy that focus should follow the selected document in the unfiled panel.
Given User is able to go to Etrieve Content application
Then User is able to login to the Etrieve Content
Then Click Configure icon gear on top right
Then Click Area link
Then Click on the New Area link
Then Create a New Area
Then User is able to go to Etrieve Content application
Then Click on the newly created area in the tree.
Then User is able to upload the file for Area
Then User is able to upload the file for Area
Then User is able to upload the file for Area
Then User is able to upload the file for Area
Then User is able to upload the file for Area
Then User is able to upload the file for Area
Then User is able to upload the file for Area
Then User is able to upload the file for Area
Then User focus follows the clicked unfiled documents.
Then User keyboard focus follows a clicked unfiled document.
Then User selects the first unfiled document.
Then Click on the trash can on the top right
Then User selects the first unfiled document.
Then Click on the trash can on the top right
Then User selects the first unfiled document.
Then Click on the trash can on the top right
Then User selects the first unfiled document.
Then Click on the trash can on the top right
Then User selects the first unfiled document.
Then Click on the trash can on the top right
Then User selects the first unfiled document.
Then Click on the trash can on the top right
Then User selects the first unfiled document.
Then Click on the trash can on the top right
Then User selects the first unfiled document.
Then Click on the trash can on the top right
Then Click on the x next to the recycle bin
Then Click ok on the pop-up box
Then Click Configure icon gear on top right
Then Click Area link 
Then Click the link for an newly created Area 
Then Click the gear next to the Area Name and Delete the Area
Then Logout from the Content

@regression @esc71984
Scenario: Verfiy that unlink icons are to the right of and on the same line with document references.
Given User is able to go to Etrieve Content application
Then User is able to login to the Etrieve Content
Then Click Configure icon gear on top right
Then Click Area link
Then Click on the New Area link
Then Create a New Area
Then User is able to go to Etrieve Content application
Then Click on the newly created area in the tree.
Then User is able to upload the file for Area
Then User is able to upload the file for Area
Then User is able to upload the file for Area
Then User is able to upload the file for Area
Then User selects the first unfiled document.
Then Click the start linking button on the bottom right
Then User clicks on the second unfiled document in the area.
Then Click on the check button to link documents
Then User selects the first unfiled document.
Then Click the start linking button on the bottom right
Then User clicks on the third unfiled document in the area.
Then Click on the check button to link documents
Then User selects the first unfiled document.
Then Click the start linking button on the bottom right
Then User clicks on the fourth unfiled document in the area.
Then Click on the check button to link documents
Then User selects the first unfiled document.
Then Click on the Links on the bottom right.
Then Verify that all of the 3 unlink buttons have the css attributes margin 0px and padding 0px applied.
Then User selects the first unfiled document.
Then Click on the trash can on the top right
Then User selects the first unfiled document.
Then Click on the trash can on the top right
Then User selects the first unfiled document.
Then Click on the trash can on the top right
Then User selects the first unfiled document.
Then Click on the trash can on the top right
Then Click on the x next to the recycle bin
Then Click ok on the pop-up box
Then Click Configure icon gear on top right
Then Click Area link 
Then Click the link for an newly created Area 
Then Click the gear next to the Area Name and Delete the Area
Then Logout from the Content

@regression @us72218
Scenario: Verfiy that calendar datepicker icons are vertically positioned in the date fields.
Given User is able to go to Etrieve Content application
Then User is able to login to the Etrieve Content
Then Click Configure icon gear on top right
Then Click on Key Fields section
Then Click on Add New Key Field
Then Enter the name for new Key Field for default date 1
Then Select the data type date from dropdown for new Key Field
Then Click on add button to add keyfield
Then Search for created default date key field 1 and click on it
Then Click on Rules on the left side
Then Apply the is required rule
