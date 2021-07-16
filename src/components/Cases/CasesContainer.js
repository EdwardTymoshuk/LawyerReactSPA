import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getCases } from '../../redux/casesReducer'
import Cases from './Cases'
import Preloader from '../common/Preloader/Preloader'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

const CasesContainer = ({ cases, isAuth, name, isFetching, ...props }) => {

    useEffect(() => {
        props.getCases()
    }, [])
    
    return (
        <>
            {isFetching ? <Preloader /> : null}
            <Cases cases={cases} isAuth={isAuth} name={name} />
        </>
    )
}

let mapStateToProps = (state) => {
    return {
        cases: state.casesPage.cases,
        isFetching: state.casesPage.isFetching,
        isAuth: state.auth.isAuth,
        name: state.auth.name
    }
}

export default compose(connect(mapStateToProps, { getCases }), withAuthRedirect)(CasesContainer)