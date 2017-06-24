var React = require("react");
var Search = require("./Search");
var Saved = require("./Saved");

var Main = React.createClass({
	render: function(){
		return (
				<div className="row">
					<div className="col-sm-12">
						<div className="panel panel-primary">
							<div className="panel-heading">
								<h3 className="panel-title">
									<strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong>
								</h3>
							</div>
							<Search />
							<Saved />
						</div>
					</div>
				</div>
			)
	}
})

module.exports = Main;

		