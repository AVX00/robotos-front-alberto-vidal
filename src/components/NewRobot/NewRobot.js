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
        <select name="speed" id="speed">
          <opiton value="">--select one--</opiton>
          <opiton value="1">1</opiton>
          <opiton value="2">2</opiton>
          <opiton value="3">3</opiton>
          <opiton value="4">4</opiton>
          <opiton value="5">5</opiton>
          <opiton value="6">6</opiton>
          <opiton value="7">7</opiton>
          <opiton value="8">8</opiton>
          <opiton value="9">9</opiton>
          <opiton value="0">0</opiton>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="resistance">Resistance</label>
        <select name="resistance" id="resistance">
          <opiton value="">--select one--</opiton>
          <opiton value="1">1</opiton>
          <opiton value="2">2</opiton>
          <opiton value="3">3</opiton>
          <opiton value="4">4</opiton>
          <opiton value="5">5</opiton>
          <opiton value="6">6</opiton>
          <opiton value="7">7</opiton>
          <opiton value="8">8</opiton>
          <opiton value="9">9</opiton>
          <opiton value="0">0</opiton>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="fabrication-date">Image URL</label>
        <input id="fabrication-date" type="date" value="" />
      </div>
    </form>
  );
};
