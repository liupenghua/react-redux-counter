import React from 'react';
import { connect } from 'react-redux'
// import store from '../redux/store/store'
import actionCreator from '../redux/actionCreator'

const mapStateToProps = (state) =>{
    return {
        times:state.times
    }
}
/**
    3种定义mapDispatchToProps的方式（react-redux 官网）
    1、connect 函数不带上mapDispatchToProps  ，dispatch 函数自动添加到组件的props
    然后还是使用dispatch(action)来处理state
    2、mapDispatchToProps是一个函数 返回一个object 如下，
    3、mapDispatchToProps是一个object 如下
 */
// const mapDispatchToProps = (dispatch) =>{
//         // const times = this.state.times
//     return{
//         onChange :(isIncrement)=>{
//             if(isIncrement){
//                 dispatch(actionCreator.increment())
//                 // this.props.increment()
//             }else {
//                 dispatch(actionCreator.decrement())
//                 // this.props.decrement()
//             }
//         }
//     }
        
// }
const mapDispatchToProps = {
     increment:actionCreator.increment,
     decrement:actionCreator.decrement
        
}



class Counter extends React.Component{
    constructor(props){
        super(props)
        // this.state={
        //     times: store.getState().times
        // }
    }
    // onChange =(isIncrement)=>{
    //     // const times = this.state.times
    //     if(isIncrement){
    //         this.props.dispatch(actionCreator.increment())
    //         // this.props.increment()
    //     }else {
    //         this.props.dispatch(actionCreator.decrement())
    //         // this.props.decrement()
    //     }
    // }
    componentDidMount(){
        // store.subscribe(()=>{
        //     this.setState({
        //         times:store.getState().times
        //     })
        // })
    }
    render(){
        return (
            <>
                <p>
                    <span>Clicked me {this.props.times} </span>
                    <button onClick={()=>this.props.increment()}>+</button>
                    <button onClick={()=>this.props.decrement()}>-</button>
                </p>
            </>
        )
    }
}

export default connect(mapStateToProps ,mapDispatchToProps)(Counter) 