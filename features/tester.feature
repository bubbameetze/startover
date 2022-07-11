Feature: Run Content Import

Background: Log user in.
    Given That Jim navigates to "https://mbetcontent.softdocs-dev.com"
    When Jim logs in with "bmadmin" and "Password@1"
    Then Clicks on the Sign in button.
@regression

    Scenario: Configured Content import exists
        Given User is on the target content import screen.
        When User clicks on the Run Import menu option
        Then The content import will be executed.