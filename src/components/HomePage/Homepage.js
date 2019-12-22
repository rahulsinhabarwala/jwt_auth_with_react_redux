import React, { Component, Fragment } from 'react'
import ReactTable from 'react-table-6'
import axios from 'axios';
import 'react-table-6/react-table.css'
import Navbar from '../Header/Header'
import { Redirect } from 'react-router-dom';
export default class homepage extends Component {
    state = {
        countryList:[],
        errorWhileFetch: false,
        isLoading: true
    }
    componentDidMount(){
      axios.get("https://restcountries.eu/rest/v1/all").then((res)=>{
            // on success
            this.setState({countryList: res.data,isLoading: false})
            }).catch((error)=>{
            // on error
            alert("There is an error in API call.");
            this.setState({errorWhileFetch: true, isLoading: false})
          });
      }
      
    render() {
      console.log('this.props', this.props)
         const columns = [{  
          Header: 'Name',  
          accessor: 'name'  
          },{  
          Header: 'Capital',  
          accessor: 'capital'  
          },{  
          Header: 'Dailing Codes',  
            accessor: 'callingCodes'  
          },{  
          Header: 'Population',  
          accessor: 'population'  
          },{  
          Header: 'Currencies',  
          accessor: 'currencies'  
          },{  
          Header: 'Region',  
          accessor: 'region'  
          },{  
          Header: 'Subregion',  
          accessor: 'subregion'  
          }] 
        return (
          <Fragment>
            <Navbar/>
            <ReactTable  
                data={this.state.countryList}  
                columns={columns}  
                defaultPageSize = {10}  
                pageSizeOptions = {[10,15,20]}  
                className="customReactTable"
                loading={ this.state.isLoading }
                noDataText={this.state.errorWhileFetch && 'There is an error in API call.' }
                /> 
          </Fragment>      
        )
    }
}
