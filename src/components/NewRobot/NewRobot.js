const NewRobot = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="img">Image URL</label>
        <input id="img" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="speed">Speed</label>
        <select name="speed-select" id="speed">
          <option value="">--select one--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="0">0</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="resistance">Resistance</label>
        <select name="resistance-select" id="resistance">
          <option value="">--select one--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="0">0</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="fabrication-date">Image URL</label>
        <input id="fabrication-date" type="date" value="" />
      </div>
    </form>
  );
};

export default NewRobot;
