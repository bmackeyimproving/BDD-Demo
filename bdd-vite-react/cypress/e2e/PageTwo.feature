Feature: Hello World

  Scenario: Display Hello World
    Given I open the Landing page
    And I click the Page Two link
    Then I should see text "Page Two"
    And I should see text "Shared service message!"