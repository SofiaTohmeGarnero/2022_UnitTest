import styled from 'styled-components';

export const Container = styled.div`
display: flex; 
justify-content: center;
align-items: center;
.pagination {
  display: flex;  
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 100px;
  ul {
     margin: 0px;
     font-size: 20px;
  }
  .MuiPaginationItem-page {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      color: #FAFAFA;
      font-size: 20px;
      padding: 5px;
      margin: 15px;
      :hover {
        background-color: grey;
        }
    }
  .MuiPaginationItem-ellipsis {
      color: #FAFAFA;
  }
  .Mui-selected {
      background-color: rgb(128, 128, 128, 0.6)
  }
}
`;