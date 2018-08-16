import React from 'react'
import { connect } from 'react-redux'
import { onChangeEmailInputAction, onChangePasswordInputAction } from '../state/auth'

const Auth = (props) => {
    return (
        <div>
            <input
                placeholder='email'
                type='email'
                onChange={props._onChangeEmailInputAction}
            />
            <input
                placeholder='password'
                type='password'
                onChange={props._onChangePasswordInputAction}
            />
            <button
                onClick={() => null}
            >
                Login
            </button>
        </div>
    )
}


const mapStateToProps = (state) => ({

})

const mapDispatchToState = (dispatch) => ({
    _onChangeEmailInputAction: (event) => dispatch(onChangeEmailInputAction(event.target.value)),
    _onChangePasswordInputAction: (event) => dispatch(onChangePasswordInputAction(event.target.value))
})

export default connect(mapStateToProps, mapDispatchToState)(Auth)