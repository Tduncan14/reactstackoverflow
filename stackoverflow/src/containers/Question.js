import React,{Component} from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import {Link} from 'react-router-dom';
const ROOT_API = 'https://api.stackexchange.com/2.2/';

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


   async componentDidMount(){

      const {match} = this.props;


      try{
        const data = await fetch(
          `${ROOT_API}questions/${match.params.id}?site=stackoverflow`
        )


        const dataJSON = await data.json();


        if(dataJSON){

          this.setState({
            data:dataJSON,
            loading:false
          })
        }
      }


      catch(error){

        console.log(error)

        this.setState({
          loading:true,
          error:error.message
        })
      }

   }


   render(){

     const { data,loading,error} = this.state;


    if(loading || error ){

        return <Alert>{loading ? 'Loading...' : error }</Alert>
    }


    console.log(this.state.data,'question data')
    return(
        <QuestionWrapper>
        <Card key={data.items[0].question_id} data={data.items[0]} />
        </QuestionWrapper>
     
      )
   



   }


  
      
    
}


export default Question;