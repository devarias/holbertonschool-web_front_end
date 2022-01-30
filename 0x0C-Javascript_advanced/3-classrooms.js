function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return () => seat;
  }

  const students = Array.from({ length: numbersOfStudents }, (_, i) =>
    studentSeat(i + 1)
  );

  return students;
}

