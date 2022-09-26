Feature: adding first time

  Background:
    Given I open Google page

  Scenario Outline: visiting the frontpage
    When I enter "<url>" on the "search" tab
    Then I verify the url contains "<urlContains>"

    Examples:
      | url               | urlContains |
      | {\"id\":\"url1\"} | Youtube     |
      | {\"id\":\"url2\"} | Facebook    |