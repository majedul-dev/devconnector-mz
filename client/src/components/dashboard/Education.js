import React, { Fragment } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteEducation } from '../../actions/profile';

const Education = ({ education, deleteEducation }) => {
    const educations = education.length <= 0 ? <p className="my-1 lead text-muted">No education added</p> : education.map(edu => (
        <tr>
            <td>{edu.school}</td>
            <td>{edu.degree}</td>
            <td>
                <Moment format="YYYY/MM/DD">{edu.from}</Moment> -{' '} {edu.to === null ? (
                    'Now'
                ) : (
                    <Moment format="YYYY/MM/DD">{edu.to}</Moment>
                )}
            </td>
            <td>
                <button className="btn btn-danger"
                    onClick={() => {
                        deleteEducation(edu._id);
                    }}
                >Delete</button>
            </td>
        </tr>
    ))
    return (
        <Fragment>
            <h2 className="my-2">Education Credential</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>School</th>
                        <th className="hide-sm">Degree</th>
                        <th className="hide-sm">Years</th>
                        <th className="hide-sm">Action</th>
                    </tr>
                </thead>
                <tbody>{educations}</tbody>
            </table>
        </Fragment>
    )
}

Education.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired
}

export default connect(null, { deleteEducation })(Education);
