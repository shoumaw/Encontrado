'use strict';

const React = require('react');

const ResumePropTypes = require('../../prop_types/resume');
const About = require('./about');
const Search = require('./search');
const Rate = require('./rate');
const Footer = require('./footer');

const Section = React.createClass({
    propTypes: {
        basics: ResumePropTypes.basics,
        search: ResumePropTypes.searchSet,
        rate: ResumePropTypes.rateSet,
        languages: ResumePropTypes.languagesSet
    },

    render: function () {

        return (
            <div>
                <About content={this.props.basics}/>
                <Search content={this.props.search}/>
                <Rate content={this.props.rate}/>
                <Footer content={this.props.basics}/>
            </div>
        );
    }
});

module.exports = Section;
