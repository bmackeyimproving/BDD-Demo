Feature: Page One

  Scenario: Display message from shared service
    Given I am on the "Page One" page
    Then I should see "Shared service message!"

  Scenario: Display components on Page One
    Given I am on the "Page One" page
    Given I have a name "Alice"
    Then I should see "Hello World"
    # And I should see "Hello, Alice!"
    # And I should see "Goodbye, Alice!"
