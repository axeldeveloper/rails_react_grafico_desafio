import React, { useState, useEffect  } from 'react';
import { Link } from "react-router-dom";
import { Chart } from "react-google-charts";



function Dashboard() {

    const [hasError, setErrors]     = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [dataCompetencia, setDataCompetencia] = useState([]);
    const [dataFuncional, setDataFuncional]     = useState([]);
    const [dataPerfil, setDataPerfil]           = useState([]);
    

    const chartDataCompetencias  = [['Nome', 'Quantidade']];
    const chartDataFuncionais  = [['Nome', 'Quantidade']];
    const chartDataProfiles  = [['Nome', 'Quantidade']];

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

    const url = "/api/v1/metters/show/3";

    async function fetchData() {
        setIsLoading(true);
        const result = await fetch(url);
        result.json().then(res => { 
                       
                setIsLoading(false)
                 
                res.knowledge_areas.map((item)  => chartDataCompetencias.push([item.title, item.total]));
                res.functional_areas.map((item) => chartDataFuncionais.push([item.title, item.total]));
                res.profiles.map((item)         => chartDataProfiles.push([item.title, item.total]));
       
                setDataCompetencia(chartDataCompetencias)
                setDataFuncional(chartDataFuncionais)
                setDataPerfil(chartDataProfiles)
                

        }).catch(err => setErrors(err));  
    };

    useEffect(() => {  fetchData(); }, []);

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
                    </div>
                </div>   

            </header>
        </div>
      
    </div>
  );
}

export default Dashboard;