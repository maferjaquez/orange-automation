
# Feature: Orange HRM Claim scenarios

# Background: Login to OrangeHRM
#      Given The user login to the OrangeHRM website and see home

# Scenario: Create a claim "Medical Reimbursement" claim.
#         Then Go to 'Claim' tab
#         Then On Top Bar Menu, select 'Assign Claim' option
#         Then User types Employee Name and selects from Autocomplete, select Event with Currency and Remarks
#         |employeename               |Joseph                     |
#         |autocompletevalue          |Joseph Evans               |   
#         |eventname                  |Medical Reimbursement      |
#         |currencyoption             |Euro                       |
#         |remarkstext                |Pay me :)                  |
