// 1つ目のgraph
var Axis = React.createClass({
    displayName: "Axis",
    propTypes: {
        h: React.PropTypes.number,
        axis: React.PropTypes.func,
        axisType: React.PropTypes.oneOf(['x', 'y'])
    },



    componentDidUpdate: function() { this.renderAxis(); },
    componentDidMount: function() { this.renderAxis(); },
    renderAxis: function() {
        var node = ReactDOM.findDOMNode(this);
        d3.select(node).call(this.props.axis);

    },
    render: function() {

        var translate = "translate(0," + this.props.h + ")";

        return /*#__PURE__*/ (
            React.createElement("g", { className: "axis", transform: this.props.axisType == 'x' ? translate : "" }));


    }
});



var Grid = React.createClass({
    displayName: "Grid",
    propTypes: {
        h: React.PropTypes.number,
        grid: React.PropTypes.func,
        gridType: React.PropTypes.oneOf(['x', 'y'])
    },


    componentDidUpdate: function() { this.renderGrid(); },
    componentDidMount: function() { this.renderGrid(); },
    renderGrid: function() {
        var node = ReactDOM.findDOMNode(this);
        d3.select(node).call(this.props.grid);

    },
    render: function() {
        var translate = "translate(0," + this.props.h + ")";
        return /*#__PURE__*/ (
            React.createElement("g", { className: "y-grid", transform: this.props.gridType == 'x' ? translate : "" }));


    }
});



var Dots = React.createClass({
    displayName: "Dots",
    propTypes: {
        data: React.PropTypes.array,
        x: React.PropTypes.func,
        y: React.PropTypes.func
    },


    render: function() {

        var _self = this;

        //remove last & first point
        var data = this.props.data.splice(1);
        data.pop();

        var circles = data.map(function(d, i) {

            return /*#__PURE__*/ React.createElement("circle", {
                className: "dot",
                r: "7",
                cx: _self.props.x(d.date),
                cy: _self.props.y(d.count),
                fill: "#7dc7f4",
                stroke: "#3f5175",
                strokeWidth: "5px",
                key: i
            });
        });

        return /*#__PURE__*/ (
            React.createElement("g", null,
                circles));


    }
});



var LineChart = React.createClass({
    displayName: "LineChart",

    propTypes: {
        width: React.PropTypes.number,
        height: React.PropTypes.number,
        chartId: React.PropTypes.string
    },


    getDefaultProps: function() {
        return {
            width: 600,
            height: 300,
            chartId: 'v1_chart'
        };

    },
    getInitialState: function() {
        return {
            width: this.props.width
        };

    },
    render: function() {
        var data = [
            { day: '2014', count: 419.2 }
        ];


        var margin = { top: 5, right: 50, bottom: 20, left: 50 },
            w = this.state.width - (margin.left + margin.right),
            h = this.props.height - (margin.top + margin.bottom);

        var parseDate = d3.time.format("%Y").parse;

        data.forEach(function(d) {
            d.date = parseDate(d.day);
        });

        var x = d3.time.scale().
        domain(d3.extent(data, function(d) {
            return d.date;
        })).
        rangeRound([0, w]);

        var y = d3.scale.linear().
        domain([0, d3.max(data, function(d) {
            return d.count + 100;
        })]).
        range([h, 0]);

        var yAxis = d3.svg.axis().
        scale(y).
        orient('left').
        ticks(5);

        var xAxis = d3.svg.axis().
        scale(x).
        orient('bottom').
        tickValues(data.map(function(d, i) {
            if (i > 0)
                return d.date;
        }).splice(1)).
        ticks(4);

        var yGrid = d3.svg.axis().
        scale(y).
        orient('left').
        ticks(5).
        tickSize(-w, 0, 0).
        tickFormat("");

        var line = d3.svg.line().
        x(function(d) {
            return x(d.date);
        }).
        y(function(d) {
            return y(d.count);
        }).interpolate('cardinal');


        var transform = 'translate(' + margin.left + ',' + margin.top + ')';

        return /*#__PURE__*/ (
            React.createElement("div", null, /*#__PURE__*/
                React.createElement("svg", { id: this.props.chartId, width: this.state.width, height: this.props.height }, /*#__PURE__*/

                    React.createElement("g", { transform: transform }, /*#__PURE__*/
                        React.createElement(Grid, { h: h, grid: yGrid, gridType: "y" }), /*#__PURE__*/
                        React.createElement(Axis, { h: h, axis: yAxis, axisType: "y" }), /*#__PURE__*/
                        React.createElement(Axis, { h: h, axis: xAxis, axisType: "x" }), /*#__PURE__*/
                        React.createElement("path", { className: "line shadow", d: line(data), strokeLinecap: "round" }), /*#__PURE__*/
                        React.createElement(Dots, { data: data, x: x, y: y })))));
    }
});


var Visitors = React.createClass({
    displayName: "Visitors",
    render: function() {
        return /*#__PURE__*/ (
            React.createElement("div", null, /*#__PURE__*/
                React.createElement("h3", null, "正社員（庶務業務）"), /*#__PURE__*/
                React.createElement("div", { className: "bottom-right-svg" }, /*#__PURE__*/
                    React.createElement(LineChart, null))));
    }
});


ReactDOM.render( /*#__PURE__*/ React.createElement(Visitors, null), document.getElementById("top-line-chart"));



// ２つ目のgraph
var Axis = React.createClass({
    displayName: "Axis",
    propTypes: {
        h: React.PropTypes.number,
        axis: React.PropTypes.func,
        axisType: React.PropTypes.oneOf(['x', 'y'])
    },



    componentDidUpdate: function() { this.renderAxis(); },
    componentDidMount: function() { this.renderAxis(); },
    renderAxis: function() {
        var node = ReactDOM.findDOMNode(this);
        d3.select(node).call(this.props.axis);

    },
    render: function() {

        var translate = "translate(0," + this.props.h + ")";

        return /*#__PURE__*/ (
            React.createElement("g", { className: "axis", transform: this.props.axisType == 'x' ? translate : "" }));


    }
});



var Grid = React.createClass({
    displayName: "Grid",
    propTypes: {
        h: React.PropTypes.number,
        grid: React.PropTypes.func,
        gridType: React.PropTypes.oneOf(['x', 'y'])
    },


    componentDidUpdate: function() { this.renderGrid(); },
    componentDidMount: function() { this.renderGrid(); },
    renderGrid: function() {
        var node = ReactDOM.findDOMNode(this);
        d3.select(node).call(this.props.grid);

    },
    render: function() {
        var translate = "translate(0," + this.props.h + ")";
        return /*#__PURE__*/ (
            React.createElement("g", { className: "y-grid", transform: this.props.gridType == 'x' ? translate : "" }));


    }
});



var Dots = React.createClass({
    displayName: "Dots",
    propTypes: {
        data: React.PropTypes.array,
        x: React.PropTypes.func,
        y: React.PropTypes.func
    },


    render: function() {

        var _self = this;

        //remove last & first point
        var data = this.props.data.splice(1);
        data.pop();

        var circles = data.map(function(d, i) {

            return /*#__PURE__*/ React.createElement("circle", {
                className: "dot",
                r: "7",
                cx: _self.props.x(d.date),
                cy: _self.props.y(d.count),
                fill: "#7dc7f4",
                stroke: "#3f5175",
                strokeWidth: "5px",
                key: i
            });
        });

        return /*#__PURE__*/ (
            React.createElement("g", null,
                circles));


    }
});



var LineChart = React.createClass({
    displayName: "LineChart",

    propTypes: {
        width: React.PropTypes.number,
        height: React.PropTypes.number,
        chartId: React.PropTypes.string
    },


    getDefaultProps: function() {
        return {
            width: 600,
            height: 300,
            chartId: 'v1_chart'
        };

    },
    getInitialState: function() {
        return {
            width: this.props.width
        };

    },
    render: function() {
        var data = [
            { day: '2014', count: 592.3 },

        ];


        var margin = { top: 5, right: 50, bottom: 20, left: 50 },
            w = this.state.width - (margin.left + margin.right),
            h = this.props.height - (margin.top + margin.bottom);

        var parseDate = d3.time.format("%Y").parse;

        data.forEach(function(d) {
            d.date = parseDate(d.day);
        });

        var x = d3.time.scale().
        domain(d3.extent(data, function(d) {
            return d.date;
        })).
        rangeRound([0, w]);

        var y = d3.scale.linear().
        domain([0, d3.max(data, function(d) {
            return d.count + 100;
        })]).
        range([h, 0]);

        var yAxis = d3.svg.axis().
        scale(y).
        orient('left').
        ticks(5);

        var xAxis = d3.svg.axis().
        scale(x).
        orient('bottom').
        tickValues(data.map(function(d, i) {
            if (i > 0)
                return d.date;
        }).splice(1)).
        ticks(4);

        var yGrid = d3.svg.axis().
        scale(y).
        orient('left').
        ticks(5).
        tickSize(-w, 0, 0).
        tickFormat("");

        var line = d3.svg.line().
        x(function(d) {
            return x(d.date);
        }).
        y(function(d) {
            return y(d.count);
        }).interpolate('cardinal');


        var transform = 'translate(' + margin.left + ',' + margin.top + ')';

        return /*#__PURE__*/ (
            React.createElement("div", null, /*#__PURE__*/
                React.createElement("svg", { id: this.props.chartId, width: this.state.width, height: this.props.height }, /*#__PURE__*/

                    React.createElement("g", { transform: transform }, /*#__PURE__*/
                        React.createElement(Grid, { h: h, grid: yGrid, gridType: "y" }), /*#__PURE__*/
                        React.createElement(Axis, { h: h, axis: yAxis, axisType: "y" }), /*#__PURE__*/
                        React.createElement(Axis, { h: h, axis: xAxis, axisType: "x" }), /*#__PURE__*/
                        React.createElement("path", { className: "line shadow", d: line(data), strokeLinecap: "round" }), /*#__PURE__*/
                        React.createElement(Dots, { data: data, x: x, y: y })))));




    }
});


var Visitors = React.createClass({
    displayName: "Visitors",
    render: function() {
        return /*#__PURE__*/ (
            React.createElement("div", null, /*#__PURE__*/
                React.createElement("h3", null, "正社員（専門職業務）"), /*#__PURE__*/
                React.createElement("div", { className: "bottom-right-svg" }, /*#__PURE__*/
                    React.createElement(LineChart, null))));



    }
});


ReactDOM.render( /*#__PURE__*/ React.createElement(Visitors, null), document.getElementById("top-line-chart1"));