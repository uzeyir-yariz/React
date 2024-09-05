const Contact = () => {
  return (
    <div className="fullheight contact">
      <form className="form">
        <div className="field">
          <label className="label">Adınız</label>
          <div className="control">
            <input className="input" type="text" placeholder="Adınız..." />
          </div>
        </div>

        <div className="field">
          <label className="label">Soyadınız</label>
          <div className="control">
            <input className="input" type="text" placeholder="Soyadınız..." />
          </div>
        </div>

        <div className="field">
          <label className="label">Yorumunuz</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Yorumunuz..."
            ></textarea>
          </div>
        </div>

        <div className="control">
          <button className="button is-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
