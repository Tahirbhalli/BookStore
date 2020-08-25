import React from 'react'
import {fetchbooks} from '../redux/books/bookActions';
import {connect} from 'react-redux';

function Books(props) {
    return (
        <div>
            {props.books[0].title}
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        books: state.books
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchbooks: dispatch(fetchbooks()),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Books);