const joinGenerator = (numCourses, numInst) => {
  const joinData = [];
  for (let i = 1; i <= numCourses; i += 1) {
    const numInstructors = Math.ceil(Math.random() * 3);
    const assignedIds = [];
    for (let j = 0; j < numInstructors; j += 1) {
      let newId = Math.ceil(Math.random() * numInst);
      while (assignedIds.includes(newId)) {
        newId = Math.ceil(Math.random() * numInst);
      }
      assignedIds.push(newId);
      joinData.push({ inst_id: newId, course_id: i });
    }
  }
  return joinData;
};

module.exports = joinGenerator;
