const { Given, Then } = require('@cucumber/cucumber')
const { expect } = require('chai')
const { updateStudentAssignments } = require('../../helpers/teacherHelpers')
// import { getNextAvailableTeacher, updateStudentAssignments } from '../../helpers/teacherHelpers';
// const { TEACHERS } = require('../../constants/students'); // Adjust path if necessary
// import { TEACHERS} from "../../constants/students"

// Initial state
let STUDENTS = []
let teacherAttendance = {}

// Setup for students and teacher attendance
Given('the students list is initialized', function () {
  STUDENTS = [
    {
      name: 'Harry Potter',
      subject: 'Potions Master',
      assignedTeacher: 'Horace Slughorn',
    },
    {
      name: 'Hermione Granger',
      subject: 'Potions Master',
      assignedTeacher: '',
    },
    {
      name: 'Ron Weasley',
      subject: 'Potions Master',
      assignedTeacher: 'Severus Snape',
    },
    {
      name: 'Draco Malfoy',
      subject: 'Potions Master',
      assignedTeacher: 'Horace Slughorn',
    },
    { name: 'Padma Patil', subject: 'Potions Master', assignedTeacher: '' },
    {
      name: 'Luna Lovegood',
      subject: 'Potions Master',
      assignedTeacher: 'Severus Snape',
    },
  ]

  teacherAttendance = {
    'Professor Dumbledore': 'Present',
    'Minerva McGonagall': 'Present',
    'Rubeus Hagrid': 'Present',
    'Horace Slughorn': 'Present',
    'Severus Snape': 'Present',
  }
})

Then(
  'each student should have an assigned teacher based on the hierarchy',
  function () {
    const updatedSchedule = updateStudentAssignments(
      STUDENTS,
      teacherAttendance
    )

    // Check initial assignments
    expect(updatedSchedule[0].assignedTeacher).to.equal('Horace Slughorn')
    expect(updatedSchedule[1].assignedTeacher).to.equal('Rubeus Hagrid') // Unassigned -> Hagrid
    expect(updatedSchedule[2].assignedTeacher).to.equal('Severus Snape')
    expect(updatedSchedule[3].assignedTeacher).to.equal('Horace Slughorn')
    expect(updatedSchedule[4].assignedTeacher).to.equal('Rubeus Hagrid') // Unassigned -> Hagrid
    expect(updatedSchedule[5].assignedTeacher).to.equal('Severus Snape')
  }
)

Given('Horace Slughorn is marked absent', function () {
  teacherAttendance['Horace Slughorn'] = 'Absent'
})

Then(
  'students assigned to Horace Slughorn should be reassigned to Rubeus Hagrid',
  function () {
    const updatedSchedule = updateStudentAssignments(
      STUDENTS,
      teacherAttendance
    )

    // Verify reassignment
    expect(updatedSchedule[0].assignedTeacher).to.equal('Rubeus Hagrid') // Harry reassigned
    expect(updatedSchedule[3].assignedTeacher).to.equal('Rubeus Hagrid') // Draco reassigned
  }
)

Then(
  'unassigned students should be assigned to the first available teacher (Rubeus Hagrid)',
  function () {
    const updatedSchedule = updateStudentAssignments(
      STUDENTS,
      teacherAttendance
    )

    // Verify unassigned students
    expect(updatedSchedule[1].assignedTeacher).to.equal('Rubeus Hagrid') // Hermione
    expect(updatedSchedule[4].assignedTeacher).to.equal('Rubeus Hagrid') // Padma
  }
)
