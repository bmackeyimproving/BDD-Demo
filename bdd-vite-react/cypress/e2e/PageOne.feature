Feature: Hello World

  Scenario: Display Hello World
    Given I open the Page One page
    Then I should see text "Page One"
    And I should see text "Shared service message!"