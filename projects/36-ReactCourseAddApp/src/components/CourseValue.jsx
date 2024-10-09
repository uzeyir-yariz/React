import { useSelector } from "react-redux";

const CourseValue = () => {
  const totalCost = useSelector(({ courses: { data, searchTerm } }) => {
    return data.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).reduce((acc,course) => acc + course.cost, 0);
  });

  return (
    <div className="row text-end">
      <h5 className="display-6">toplam tutar : {totalCost} </h5>
    </div>
  )
}

export default CourseValue
