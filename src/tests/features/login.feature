Feature: Admin Orange HRManagment

    Scenario: Login to OrangeHRM
        Given The user login to the OrangeHRM website and see home
        When A User enters Username 'Admin', the Password 'admin123', and clicks on the login button
        Then Redirects to Main screen and validate
        Then Go to 'Claim' tab
        Then On Top Bar Menu, select 'Assign Claim' option
        # Then User types Employee Name and selects from Autocomplete, select Event with Currency and Remarks
        # |employeename               |Joseph                     |
        # |autocompletevalue          |Joseph Evans               |   
        # |eventname                  |Medical Reimbursement      |
        # |currencyoption             |Euro                       |
        # |remarkstext                |Pay me :)                  |
        # Then Verify Assign Claim setted
        # Then Add Expenses record