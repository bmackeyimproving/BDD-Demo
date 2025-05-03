Feature: Sample React Component
  Scenario: Render Hello World
    Given I am on the Hello World component
    Then I should see "Hello World"

  Scenario: Render with custom text
    Given I am on the Hello World component with text "Custom Message"
    Then I should see "Custom Message"

  Scenario: Click the button
    Given I am on the Hello World component
    When I click the button
    Then I should see "Clicked 1 times"

  Scenario: Reset the counter
    Given I am on the Hello World component
    When I click the button
    And I click the reset button
    Then I should see "Clicked 0 times"

  Scenario: Reset does not change text
    Given I am on the Hello World component with text "Persistent Text"
    When I click the reset button
    Then I should see "Persistent Text"

#  Scenario: Reset does not change text
#    Given This should break
