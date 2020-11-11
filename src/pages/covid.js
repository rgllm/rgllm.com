import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import CasosAtivosChart from '../components/CasoAtivosChart';
import InternadosChart from '../components/InternadosChart';
import buildinternadosCharObject from '../utils/buildinternadosCharObject';
import CadeiasChart from '../components/CadeiasChart';

export default class Covid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jsonData: [],
    };
  }

  componentDidMount() {
    fetch('https://covid19-api.vost.pt/Requests/get_full_dataset')
      .then((response) => response.json())
      .then((jsonData) => {
        this.setState({ jsonData });
    });
  }

  render() {
    const { jsonData } = this.state;
    let internadosUci;
    let internadosEnfermaria;
    let casosAtivos;
    let cadeiasTransmissao;
    if(jsonData.data) {
      internadosUci = buildinternadosCharObject(jsonData.data, jsonData.internados_uci);
      internadosEnfermaria = buildinternadosCharObject(jsonData.data, jsonData.internados_enfermaria);
      casosAtivos = buildinternadosCharObject(jsonData.data, jsonData.ativos);
      cadeiasTransmissao = buildinternadosCharObject(jsonData.data, jsonData.cadeias_transmissao);
    }

    console.log(jsonData);
    
    return (
      <Layout>
        <Helmet title={`${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <h1>Gráficos COVID-19</h1>
          </div>
          <section className="section">
            <h2>Número de Internados em UCI e Enfermaria</h2>
            {jsonData.data && <InternadosChart internadosUci={internadosUci} internadosEnfermaria={internadosEnfermaria} />}
            <ul className="chart_label">
              <li>Azul - Capacidade Máxima em UCI (630)</li>
              <li>Amarelo - Número de internados em UCI</li>
              <li>Vermelho - Capacidade Máxima em Enfermaria (3520)</li>
              <li>Verde - Número de internados em Enfermaria</li>
            </ul>
          </section>
          <section className="section">
            <h2>Casos Ativos</h2>
            {jsonData.data && <CasosAtivosChart casosAtivos={casosAtivos} />}
          </section>
          <section className="section">
            <h2>Cadeias de Transmissão</h2>
            {jsonData.data && <CadeiasChart cadeiasTransmissao={cadeiasTransmissao} />}
          </section>
        </div>
      </Layout>
    );
  }
}
