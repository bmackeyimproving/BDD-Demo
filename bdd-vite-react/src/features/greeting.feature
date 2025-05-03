Feature: Greeting Component
  As a user
  I want to see a greeting message
  So that I feel welcomed

  Scenario: Display greeting message
    Given I have a name "Alice"
    When I render the Greeting component
    Then I should see text "Hello, Alice!"
