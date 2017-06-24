var React = require("react");
var Query = require("./Query");
var Results = require("./Results");

var Search = React.createClass({

	render: function(){
		return(
			<div>
				<Query/>
				<Results/>
			</div>
		)
	}

})

module.exports = Search;
