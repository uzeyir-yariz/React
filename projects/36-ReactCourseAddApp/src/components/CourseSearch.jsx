import { changeSearch } from "../store/slices/CourseSlice";
import { useSelector, useDispatch } from "react-redux";

const CourseSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.courses.searchTerm;
  });

  return (
    <div className="row mt-4">
      <h4 className="w-50">kurslarım</h4>
      <input
        className="w-50 form-control"
        type="text"
        placeholder="kurs ara"
        onChange={(e) => {
          dispatch(changeSearch(e.target.value));
        }}
        value={searchTerm}
      />
    </div>
  );
};

export default CourseSearch;
