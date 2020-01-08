
// // export default(operation,index) =>{




// //     return{
// //         type:'updateFrozen',
// //         payload:{
// //             operation,
// // //             index
// // //         }
// // //     }
// // // }



// // // connect redux to the component the component with react-redux

// // //import {component} from 'react-redux';

// // // binds the action creators to react
// // //import {bindActionCreators} from 'redux'



// // // function mapStateToProps(state){

// // // returns the comonent state


// //  /// return{
// //      frozen:state.frozen
// //  }


// // }

// // to update the store with action creators
// // which updates the reducers which updates the store

// //

// function mapDispatchToProps(dispatch){



//     return bindActionCreator({
//         updateFrozen:updateFrozen

//     },dispatch)

// }

// export default connect(mapDispatchToProps,mapDispatchToProps)(Dept);