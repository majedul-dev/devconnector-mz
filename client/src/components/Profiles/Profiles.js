import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profile';
import Spinner from '../layout/spinner';
import ProfileItem from './ProfileItems'

const Profiles = ({ getProfiles, profile: { profiles, loading }}) => {
    useEffect(() => {
        getProfiles()
    }, [getProfiles])

    return <Fragment>
        {loading ? <Spinner /> : 
        <Fragment>
            <h1 className="large text-primary">Developers</h1>
            <p className="lead"><i className="fab fa-connectdevelop"></i> Browse and connect with developers</p>
            {profiles.length >= 0 ? (
                profiles.map(profile => (
                    <ProfileItem key={profile._id} profile={profile} />
                )
            )) : (<h4>No profile found</h4>)}
        </Fragment>}
    </Fragment>
}

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, { getProfiles } )(Profiles);
