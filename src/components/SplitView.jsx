require("./SplitView.scss");

function SplitView(props) {
	return <div className="splitview">
	{props.children.map(function (element, i) {
			return <div className="splitview__item" key={i}>{element}</div>
		})}	
	</div>
}
module.exports = SplitView