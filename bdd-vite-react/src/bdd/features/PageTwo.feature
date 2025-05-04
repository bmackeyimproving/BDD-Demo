Feature: Page Two

  Scenario: Display message from shared service
    Given I am on the "Page Two" page
    Then I should see "Shared service message!"
  
  Scenario: Verify data-testid content
    Given I am on the "Page Two" page
    Then I should see "Shared service message!"
    And I should see "Get Data in ways that are not fragile" in the data-testid "get-data"
