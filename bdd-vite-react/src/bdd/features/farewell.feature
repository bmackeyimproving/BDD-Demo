Feature: Farewell Component
  As a user
  I want to see a farewell message
  So that I know I am being bid goodbye

  Scenario: Display farewell message
    Given I have a name "Alice"
    When I render the Farewell component
    Then I should see text "Goodbye, Alice!"
  
  Scenario Outline: Display personalized message
    Given I have a name "<name>"
    When I render the Farewell component
    Then I should see complex text "Goodbye, <name>!"

    Examples:
      | name  |
      | Sarah |
      | Alice |
      | Bob   |

