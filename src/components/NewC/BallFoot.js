import $ from 'jquery';
import './css/jCirclize.css';
import './js/jCirclize.js';
import {Component} from "react";

class Percentage extends Component {
    componentDidMount() {
        this.$el = $(this.el);
        this.$el.circlize();
    }

    componentWillUnmount() {
        this.$el.circlize('destroy');
    }

    render() {
        return (
            <div ref={el => this.el = el}>
            </div>
        );
    }
}

export default Percentage
