import React from 'react';
import {connect} from "react-redux";
import { withNamespaces } from 'react-i18next';
import { compose } from 'redux';
import * as moment from "moment";


class Events extends React.Component {

    componentDidMount() {
    }

    renderDates() {
        return new Date().toLocaleDateString() + ' - ' + new Date().toLocaleDateString()
    }

    renderListItem() {
        return (
            <div className={'mt-3 w-25 d-flex flex-column'}>
                <div className={'d-flex flex-row justify-content-between'}>
                    <div className={''}>
                        <h5>{moment().format('ddd DD.MM')}</h5>
                    </div>
                    <div className={''}>
                        <h5>Sprach Treff Deutsh</h5>
                        <p>{moment().format('HH:mm') + ' - ' + moment().add(1, 'hour').format('HH:mm')} | SR 259 UHC </p>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className={'w-100 d-flex align-items-center '}>
                    <img style={{width: '150px'}} src={'/logo.jpg'} />
                    <div>
                        <h2>International Days</h2>
                        <h5>{this.renderDates()}</h5>
                    </div>
                </div>
                {this.renderListItem()}
                {this.renderListItem()}
                {this.renderListItem()}
                {this.renderListItem()}
                {this.renderListItem()}
                {this.renderListItem()}
            </div>
        );
    }
}

export default compose(withNamespaces('translation'),  connect(null, {}) )(Events);
