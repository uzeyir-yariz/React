import useInput from "../hooks/useInput";

const PersonInfo = () => {

  const [firstName, bindFirstName, resetFirstName] = useInput("")
  const [lastName, bindLastName, resetLastName] = useInput("")

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`${firstName} ${lastName}`)
    resetFirstName();
    resetLastName();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="control mb-4">
        <label className="label">adınız</label>
        <input
          {...bindFirstName}
          className="input"
          type="text"
        />
      </div>

      <div className="control">
        <label className="label">soyadınız</label>
        <input
          {...bindLastName}
          className="input"
          type="text"
        />
      </div>

      <div className="control">
        <button onClick={handleSubmit} className="button mt-4 is-fullwidth is-primary">Submit</button>
      </div>
    </form>
  );
};

export default PersonInfo;
