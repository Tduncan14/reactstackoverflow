import React,{Component} from 'react';
import styled from 'styled-components';


const QuestionWrapper = styled.div `
display:flex;
justify-content:space-between;
flex-direction:column;
margin:5%;
`;

const Alert = styled.div`
  text-align:center;
`;

class Question extends Component {

   constructor(){
     super()


     this.state ={
         data:[],
         loading:true,
         error:'',
     }
   }


   render(){

     const { data,loading,error} = this.state;


    if(loading || error ){

        return <Alert>{loading ? 'Loading...' : error }</Alert>
    }



   }




}


export default Question;