import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const PaginationBar = styled.div `
width:100%;
display:flex;
justify-content:space-between;
`;


const PaginationLink = styled(Link)`
padding:1%;
background:lightBlue;
color:white;
text-decoration:none;
border-radius:5px;`;

const Pagination = () => {




    return(

        <PaginationBar>
          <PaginationLink>
              Previous
          </PaginationLink>
          <PaginationLink>
              Next
          </PaginationLink>
        </PaginationBar>


    )



}


export default Pagination;