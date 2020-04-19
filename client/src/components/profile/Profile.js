import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfileById } from '../../actions/profile';
import Spinner from '../layout/spinner';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import Experience from './Experience';
import Education from './Education';
import GithubRepos from './GithubRepos';

const Profile = ({ getProfileById, profile: {profile, loading}, auth, match }) => {
    useEffect(() => {
        getProfileById(match.params.id)
    }, [getProfileById, match.params.id])
    return <Fragment>
        {profile === null || loading ? <Spinner /> : 
        <Fragment>
            <Link to='/developers' className="btn btn-light">
                Back To Profile
            </Link>
            {auth.isAuthenticated && auth.loading === false && auth.user._id === profile.user._id && (<Link to='/edit-profile' className="btn btn-dark">Edit Profile</Link>)}
            <div className="profile-grid my-1">
                <ProfileTop profile={profile} />
                <ProfileAbout profile={profile} />
                <Experience profile={profile} />
                <Education profile={profile} />
                {profile.githubusername && <GithubRepos username={profile.githubusername} />}
            </div>
        </Fragment>}
    </Fragment>
}

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps, { getProfileById })(Profile);
