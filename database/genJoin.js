const joinGenerator = (numCourses, numInst) => {
  const joinData = [];
  for (let i = 1; i <= numCourses; i += 1) {
    const join = {
      inst_id: Math.ceil(Math.random() * numInst),
      course_id: i,
    };
    joinData.push(join);

    const ids = [join.inst_id];
    for (let j = 0.6; j < 1; j += 0.1) {
      if (Math.random() > j) {
        let newId = Math.ceil(Math.random() * numInst);
        while (ids.includes(newId)) {
          newId = Math.ceil(Math.random() * numInst);
        }
        ids.push(newId);
        joinData.push({ inst_id: newId, course_id: i });
      }
    }
  }
  return joinData;
};

module.exports = joinGenerator;
