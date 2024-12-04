Feature: Teacher Assignment for Potions Master

  Scenario: Initial assignment for students
    Given the students list is initialized
    Then each student should have an assigned teacher based on the hierarchy

  Scenario: Reassign students when a teacher goes absent
    Given the students list is initialized
    And Horace Slughorn is marked absent
    Then students assigned to Horace Slughorn should be reassigned to Rubeus Hagrid

  Scenario: Reassign unassigned students
    Given the students list is initialized
    Then unassigned students should be assigned to the first available teacher (Rubeus Hagrid)
