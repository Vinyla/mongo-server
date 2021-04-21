import Student from '../models/student.model';

const list = (req, res) => {
  Student.find((err, data) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json(data);
  });
}

export default { list }
