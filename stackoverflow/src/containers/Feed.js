import React, {Component} from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import {Link} from 'react-router-dom';
import queryString from 'query-string';
 



const PaginationBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
 `;

 const PaginationLink = styled(Link)`
  padding: 1%;
  background: lightBlue;
  color: white;
  text-decoration: none
  border-radius: 5px;
 `;




const FeedWrapper = styled.div `
display:flex;
justify-content:space-between;
flex-direction:column;
margin:5%;
`

const Alert = styled.div `
text-align:center;


`;



const CardLink = styled(Link)`
  text-decoration: none;
 color: inherit;
+`;


const ROOT_API = 'https://api.stackexchange.com/2.2/';



class Feed extends Component {

     constructor(props){
         super(props);
         const query = queryString.parse(this.props.location.search);
         
         this.state = {
            data:[],
            loading:true,
            error:'',
            page:(query.page) ? parseInt(query.page):1
         }
     }



     componentDidMount(){

        const { page} = this.state;

       this.fetchApi(page);


     }


     componentDidUpdate(prevProps){

        if(prevProps.location.search !== this.props.location.search){

            const query = queryString.parse(this.props.location.search)


            this.setState({page:parseInt(query.page)},()=>this.fetchApi(this.state.page))


        }

     }

     async fetchApi(page){

     try{
         const data = await fetch(`${ROOT_API}questions?order=desc&sort=activity&tagged=reactjs&site=stackoverflow${(page) ? `&page=${page}` : ''}`);

         const dataJSON = await data.json();


         if(dataJSON){


            this.setState({
                data:dataJSON,
                loading:false
            });
         }

         
     }

     catch(error){


        this.setState({
            loading:false,
            error:error.message
        })

     }






     }


    render(){


        console.log(queryString.parse(this.props.location.search),'location')


        const {data,loading,error,page} = this.state;

        const {match} = this.props;


         console.log('data state',data)

        if(loading || error){

        return <Alert>{
            loading ? 'Loading...' : error}</Alert>
        }

        return(
            <>
            <FeedWrapper>
                {
                 data.items.map(item => (
                     <CardLink
                     key={item.question_id}
                     to={`/questions/${item.question_id}`}>
                         
                     <Card data={item}/>
                     </CardLink>
                 ))
                }
                <PaginationBar>
    {page > 1 && <PaginationLink to={`${match.url}?page=${page - 1}`}>Previous</PaginationLink>}
    {data.has_more && <PaginationLink  to={`${match.url}?page=${page + 1}`}>Next</PaginationLink>}
    </PaginationBar>
            </FeedWrapper>
          
            </>
        )
    }




}


export default Feed;