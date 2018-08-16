import React from 'react'

import { connect } from 'react-redux'

const Users = (props) => (

    <div>
        {
            props._isUsersAreLoading ?
            'Loading'
            :
            props._users ? 
            props._users.results.map(e => {
                return (<div key={e.login.uuid}><div>{e.name.first}</div>
                    <img src={e.picture.medium} alt='' />
                </div>)
            })
            :
            'No users!'
        }
    </div>

)

const mapStateToProps = state => ({
    _users: state.fetchUsers.users,
    _isUsersAreLoading: state.fetchUsers.isUsersAreLoading
})

export default connect(mapStateToProps)(Users)