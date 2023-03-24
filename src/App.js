import React, { useState,useEffect } from 'react';
import { Container, InputGroup, Table , Form} from 'react-bootstrap';
import './App.css';





const App=()=>{
  
  
  const [user,setUser] = useState({});
const [query,setQuery] = useState('');
 


 
  useEffect(() => {
    
    setTimeout(() => {
     loadUsers()
    }, 2000);
  }, []);

  const loadUsers = async()=>{
    const res  = await fetch("https://api.rootnet.in/covid19-in/stats/latest")
    const jsres = await res.json();
    console.log(jsres)
    setUser(jsres);

  }


 


  
  return(
    <div className="App">
      <h1>Covid Api Project</h1>
   <InputGroup className="mb-3">
        <Form.Control
        className='input'
          placeholder="Search for State"
          aria-label="Search for State"
          aria-describedby="basic-addon2"
          onChange={(e) => setQuery(e.target.value)}
        />
    
        </InputGroup>
<div>


 
             <Container mb-4>                <section className='border prime p-4 text-center mb-4'>
        <Table p-4 center striped bordered variant='dark' responsive>
          <thead>
            <tr>
              <th >S.No</th>
              <th >Name</th>
              <th >Total Case</th>
              <th >Discharge</th>
              <th >Death</th>
              <th >Indian Cases</th>
              <th >Foreign Cases</th>
            </tr>
          </thead>
          <tbody className='hover'>
          { 
               
               user['data'] && user['data'].regional.filter((value) =>value.loc.toLowerCase().includes(query) ).map((value,index) => (
            <tr>
              <th >{index + 1}</th>
              <td>{value.loc}</td>
              <td>{value.totalConfirmed}</td>
              <td>{value.discharged}</td>
              <td>{value.deaths}</td>
              <td>{value.confirmedCasesIndian}</td>
              <td>{value.confirmedCasesForeign}</td>
                  </tr>
            ))}
            </tbody>
        </Table>
      </section>
                 </Container>
                  
                    
                  
 
                  
            
            
 
</div>


    </div>
  )
}
export default App;