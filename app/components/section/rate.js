'use strict';

const React = require('react');

const ResumePropTypes = require('../../prop_types/resume');
const Datetime = require('../../utils/datetime');

const Entry = React.createClass({
    propTypes: {
        entry: ResumePropTypes.rate
    },

    render: function () {
        const startDate = Datetime.getDisplayFromDate(this.props.entry.startDate);
        const endDate = Datetime.getDisplayFromDate(this.props.entry.endDate);
        return (
            <div className='row item'>
                <div className='twelve columns'>
                    <h3>{this.props.entry.institution}</h3>
                    <p className='info'>
                        {this.props.entry.area}
                        <span> &bull; </span>
                        <span className='info-summary'>{this.props.entry.summary}</span>
                        <span> &bull; </span>
                        <em className='date'>{startDate} - {endDate}</em>
                    </p>
                </div>
            </div>
        );
    }
});

const Rate = React.createClass({
    propTypes: {
        content: ResumePropTypes.rateSet
    },

    render: function () {
        return (
            <section id='rate'>
                <div className='row rate'>
                    <div className='two columns header-col'>
                        <h1>
                            <span>Rate</span>
                        </h1>
                    </div>
                    <div className='ten columns main-col'>
                        {this.props.content.map(function (entry, index) {
                            return (
                                <Entry key={index} entry={entry}/>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = Rate;
