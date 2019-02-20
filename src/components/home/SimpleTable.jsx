import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const SimpleTable = ({Title, Items, Headers, MaxSize}) => {
  return (
    <div className="card pd-20 pd-sm-40 mg-t-20">
        <h6 className="card-body-title">{Title}</h6>
        <div className="table-responsive">
            <table className="table table-hover table-bordered mg-b-0">
                <thead className="bg-info">
                    <tr>
                        {
                            Headers.map(d => {
                                return (
                                    <th key={d}>{d}</th>
                                );
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        Items.slice(0, MaxSize).map(d => {
                            return(
                                <tr key={d.id}>
                                    <td>{d.companyName}</td>
                                    <td>{d.email}</td>
                                    <td>{moment(d.timeSent).format('MMMM Do YYYY, h:mm:ss a')}</td>
                                    <td>{d.text}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

SimpleTable.propTypes = {

}

export default SimpleTable;