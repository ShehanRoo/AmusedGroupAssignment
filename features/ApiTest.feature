@regression
Feature: API endpoint verification tests

  @get @r1
  Scenario Outline: <TestCaseName>
    Given User sends GET request with <Scenario>
    Then User verifies GET response data

    Examples: 
      | Scenario        | TestCaseName                                                |
      | "singleItem"    | "Verify GET API response when single item is requested"     |
      | "multipleItems" | "Verify GET API response when multiple items are requested" |

  @post @r1
  Scenario Outline: <TestCaseName>
    Given User sends POST request with <Scenario>
    Then User verifies POST response data

    Examples: 
      | Scenario  | TestCaseName                                            |
      | "addItem" | "Verify POST API response when valid data is submitted" |

  @put
  Scenario Outline: <TestCaseName>
    Given User sends POST request with "addItem"
    And User sends PUT request with <Scenario>
    Then User verifies PUT response data

    Examples: 
      | Scenario     | TestCaseName                                           |
      | "updateItem" | "Verify PUT API response when valid data is submitted" |

  @delete
  Scenario Outline: <TestCaseName>\
    Given User sends POST request with "addItem"
    Given User sends DELETE request with <Scenario>
    Then User verifies DELETE response data

    Examples: 
      | Scenario     | TestCaseName                                              |
      | "deleteItem" | "Verify DELETE API response when valid data is submitted" |
