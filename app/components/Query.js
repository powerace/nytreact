var React = require("react");

var Query = React.createClass({

	render: function(){
		return (
			<div className="panel-body">
				<form role="form">
				  <div className="form-group">
				    <label htmlFor="search">Search Term:</label>
				    <input type="text" className="form-control" id="searchTerm"/>
				  </div>
				  <div className="form-group">
				    <label htmlFor="pwd">Number of Records to Retrieve:</label>
						<select className="form-control" id="numRecordsSelect">
							<option value="1">1</option>
							<option value="5">5</option>
							<option value="10">10</option>
						</select>			  
				  </div>
				  <div className="form-group">
				    <label htmlFor="startYear">Start Year (Optional):</label>
				    <div className='input-group date' id="date1">
			          <input id="startYear" type='text' className="form-control" />
			          <span className="input-group-addon">
			              <span className="glyphicon glyphicon-calendar"></span>
			          </span>
			      </div>
				  </div>
				  <div className="form-group">
				    <label htmlFor="endYear">End Year (Optional):</label>
				    <div className='input-group date' id="date2">
			          <input id="endYear" type='text' className="form-control" />
			          <span className="input-group-addon">
			              <span className="glyphicon glyphicon-calendar"></span>
			          </span>
			      </div>
				  </div>
				  <button type="submit" className="btn btn-default" id="runSearch"> Search</button>
					  <button type="button" className="btn btn-default" id="clearAll"> Clear Results</button>
				</form>
			</div>
		)
	}

})

module.exports = Query;