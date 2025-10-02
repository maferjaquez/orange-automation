Feature: Admin Orange HRManagment

@test_individual
    Scenario: Login to OrangeHRM
        Given The user login to the OrangeHRM website and see home
        When A User enters Username 'Admin', the Password 'admin123', and clicks on the login button
        Then Redirects to Main screen and validate
        Then Go to 'Admin' tab
        Then On Topbar Menu Admin from 'User Management', select 'Users' option and validate section 'System Users'
        Then Search an user 'langlang' in System Users