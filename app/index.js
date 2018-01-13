'use strict';

const ReactDOM = require('react-dom');

const Routes = require('./routes');

function getResumePath() {
    if (['localhost', '127.0.0.1'].indexOf(window.location.hostname) === -1) {
        return '/public/resume.json';
    }
    return '/public/resume.example.json';
}

function getNavigation() {
    return {
        home: 'Home',
        about: 'About',
        search: 'Search',
        rate: 'Rate'
    };
}

ReactDOM.render(
    Routes.get({
        resumePath: getResumePath(),
        navigation: getNavigation()
    }),
    document.getElementById('app')
);
