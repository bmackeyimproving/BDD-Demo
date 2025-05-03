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
