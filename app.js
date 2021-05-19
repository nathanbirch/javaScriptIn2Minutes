function getTeams() {
  let students = parseFloat(document.getElementById('students').value);
  let teams = parseFloat(document.getElementById('teams').value);

  let remainder = students % teams;
  let studentsPerTeam = Math.floor(students / teams);

  let message = teams - remainder + ' teams of ' + studentsPerTeam;
}
