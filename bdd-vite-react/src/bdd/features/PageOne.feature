Feature: Page One

  Background:
    Given I am on the "Home" page

  @important
  Scenario: Display message from shared service
    Given I am on the "Page One" page
    Then I should see "Shared service message!"

  Scenario: Access Page One as an admin
    Given I am logged in as "admin"
    When I navigate to "Page One"
    # Then I should see "Admin Dashboard"

  Scenario: Display components on Page One
    Given I am on the "Page One" page
    Given I have a name "Alice"
    Then I should see "Hello World"
    # And I should see "Hello, Alice!"
    # And I should see "Goodbye, Alice!"


