Feature: Run Content Import
@regression
    Scenario: Configured Content import exists
        Given User is on the target content import screen.
        When User clicks on the Run Import menu option
        Then The content import will be executed.