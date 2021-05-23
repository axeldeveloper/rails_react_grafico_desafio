import React, { useState, useEffect  } from 'react';
import { Link } from "react-router-dom";
import { Chart } from "react-google-charts";

var colors = [{ Name: 'Circle' }, { Name: 'Shift' }];

function Dashboard() {
    let selected = 'Circle';
    
    const [hasError, setErrors]                 = useState(false);
    const [isLoading, setIsLoading]             = useState(false);
    const [dataCompetencia, setDataCompetencia] = useState([]);
    const [dataFuncional, setDataFuncional]     = useState([]);
    const [dataPerfil, setDataPerfil]           = useState([]);
    const [dataCircle, setDataCircle]           = useState([]);
    const [dataShift, setDataShift]             = useState([]);

    const [dataCol, setDataCol]             = useState([]);
    

    const chartDataCompetencias  = [['Nome', 'Quantidade']];
    const chartDataFuncionais  = [['Nome', 'Quantidade']];
    const chartDataProfiles  = [['Nome', 'Quantidade']];
    const chartDataCircles  = [['Nome', 'Quantidade']];
    const chartDataShifts  = [['Nome', 'Quantidade']];

    const [optionsC, setOptionsC] = useState({
        title: 'Blox por Área de competência',
        //chartArea: { width: '80%' },
        hAxis: {
          title: 'Total',
          minValue: 0,
          titleTextStyle: { color: '#333' }
        },
        vAxis: {
          title: 'Nome',
        },
    });
    const [optionsF, setOptionsF] = useState({
        title: 'Blox por Área Funcional',
        //chartArea: { width: '80%' },
        hAxis: {
          title: 'Total',
          minValue: 0,
          titleTextStyle: { color: '#333' }
        },
        vAxis: {
          title: 'Nome',
        },
    });
    const [optionsP, setOptionsP] = useState({
        title: 'Blox por Perfil',
        //chartArea: { width: '80%' },
        hAxis: {
          title: 'Total',
          minValue: 0,
          titleTextStyle: { color: '#333' }
        },
        vAxis: {
          title: 'Nome',
        },
    });

    const [optionsCol, setOptionsCol] = useState({});

    const [tipos, setTipos] = useState([
		  {id: 'Circle', name: 'Circle'},
		  {id: 'Shift', name: 'Shift'}
	]);

    const url = "/api/v1/metters/show/3";

    async function fetchData() {
        setIsLoading(true);
        const result = await fetch(url);
        result.json().then(res => { 
                       
                setIsLoading(false)
                 
                res.knowledge_areas.map((item)  => chartDataCompetencias.push([item.title, item.total]));
                res.functional_areas.map((item) => chartDataFuncionais.push([item.title, item.total]));
                res.profiles.map((item)         => chartDataProfiles.push([item.title, item.total]));
                res.circles.map((item)          => chartDataCircles.push([item.title, item.total]));
                res.shifts.map((item)           => chartDataShifts.push([item.title, item.total]));
                
                console.log("shifts" ,  res.shifts )
                console.log("circles" ,  res.circles )


                setDataCompetencia(chartDataCompetencias);
                setDataFuncional(chartDataFuncionais);
                setDataPerfil(chartDataProfiles);
                setDataCircle(chartDataCircles);
                setDataShift(chartDataShifts);
                

        }).catch(err => setErrors(err));  
    };

    useEffect(() => {    
        fetchData();  Init();
    }, []);

    let countriesList = tipos.length > 0 && tipos.map((item, i) => {
        return ( <option key={i} value={item.id}>{item.name}</option>)}, this)
    

    function handleChange(e)  {
        //this.setState({ selectedOption });   
        console.log(e.target.value);
       
        if(e.target.value == 'Circle' ){
            Init();
        }
        else if(e.target.value == 'Shift'){
            selected = 'Shift';
            ObterShift();         
        }
    }

    function Init(){
        if (selected.length > 0){
            setDataCol(chartDataCircles); 
            setOptionsCol({
                title: 'Blox por Ciclo',
                hAxis: {
                  title: 'Nome',
                  minValue: 0,
                  titleTextStyle: { color: '#333' }
                },
                vAxis: {
                  title: 'Total',
                },
            });    
        }
    }

    function ObterShift(){
        if (selected.length > 0){
            setDataCol(dataShift); 
            setOptionsCol({
                title: 'Blox por Shift',
                hAxis: {
                    title: 'Nome',
                    minValue: 0,
                    titleTextStyle: { color: '#333' }
                },
                vAxis: {
                    title: 'Total',
                },
            }); 
        }
    }


  return (
    <div className="container p-2">
        <div className="row">
            <header className="App-header">
                <div className="col-lg-12">                
                    <h1 className="mt-5">Desafio Dashboard</h1>
                    <p className="lead">
                        Projeto RoR e react - Api RESTful
                    </p>    
                    <div className="row" >
                      
                            <div className="col-lg-4">    
                                <Chart
                                    width={'400px'}
                                    height={'300px'}
                                    chartType="PieChart"
                                    loader={<div>Loading Chart</div>}
                                    data={dataCompetencia}
                                    options={optionsC}
                                    />
                            </div> 
                            <div className="col-lg-4">    
                                <Chart
                                    width={'400px'}
                                    height={'300px'}
                                    chartType="PieChart"
                                    loader={<div>Loading Chart</div>}
                                    data={dataFuncional}
                                    options={optionsF}
                                    />
                            </div>
                            <div className="col-lg-4">    
                                <Chart
                                    width={'400px'}
                                    height={'300px'}
                                    chartType="PieChart"
                                    loader={<div>Loading Chart</div>}
                                    data={dataPerfil}
                                    options={optionsP}
                                    />
                            </div>
                            <div className="col-lg-12">                           
                                Qunatidade de blox por 
                                <select onChange={handleChange}>
                                    {countriesList}
                                </select>
                            </div>
                           
                           
                            <div className="col-lg-12">    
                                <Chart
                                    width={'800px'}
                                    height={'600px'}
                                    chartType="ColumnChart"
                                    loader={<div>Loading Chart</div>}
                                    data={dataCol}
                                    options={optionsCol}
                                    />
                            </div>
                    
                    
                    </div>
                </div>   

            </header>
        </div>
      
    </div>
  );
}

export default Dashboard;