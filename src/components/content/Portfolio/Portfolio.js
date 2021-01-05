import { Card,
Table,
Space } from "antd";
import React from "react";
import "./Porfolio.css";
import GridWithIcon from "../shared/GridWithIcon";
import { Link } from "react-router-dom";
import Activities from "../Activities/Activities1"

export default function Portfolio(props) {
const setNav = () => {
 props.nav("Activities");
};
  const { Meta } = Card;
  const dataSource = [
    {
      key: '1',
      theme: 'Init PC',
      acti: "Trésorier Kap Levant (Excel, Macros,...)",
      date: 'septembre 2017-janvier 2018',
      heures : '50h+',
      valorisation: '10H',
    },
    {
        key: '2',
        theme: 'Projet Personnel',
        acti: "Direct-History création de contenu",
        date: 'janvier 2018- now',
        heures : '30h+',
        valorisation: '10H'
    },
    {
        key: '3',
        theme: 'Marketing & SEO',
        acti: "Direct-History SEO Analysis and improvement",
        date: 'Avril 2019',
        heures : '12h',
        valorisation: '10H'
    },
    {
        key: '4',
        theme: 'Communication',
        acti: "Job Search et interviews",
        date: 'Décembre 2020 - Janvier 2021',
        heures : '20h+',
        valorisation: '10h'
    },
    {
        key: '5',
        theme: 'Developement Web',
        acti: "OpenClassroom : Réalisez une application web avec React.js",
        date: 'Février 2020',
        heures : '20h',
        valorisation: '10h'
    },
    {
        key: '6',
        theme: 'Developement Web avancé',
        acti: "OpenClassroom : Des applications ultra-rapides avec Node.js",
        date: 'Mars 2020',
        heures : '10h',
        valorisation: '10h'
    },
    {
        key: '7',
        theme: 'Webinars',
        acti: "Webinar : Job It day, les métiers du Data",
        date: 'Octobre 2020',
        heures : '1h30',
        valorisation: '1h30'
    },
    {
        key: '8',
        theme: 'Webinars',
        acti: "Devday : 2 Webinars (traitement langage et Serverless Panacea) ",
        date: '16/11/2020',
        heures : '3h15',
        valorisation: '3h15'
    },
    {
        key: '10',
        theme: 'Visite entreprise (Remote)',
        acti: "Aperodoo : Présentation de Odoo 14 et job opportunities",
        date: '2/12/2020',
        heures : '1h',
        valorisation: '1h'
    },
    {
        key: '9',
        theme: 'Business Analyse et Anglais',
        acti: "Formation Business analyst Fundamentals Udemy",
        date: 'December 2020',
        heures : '8h30',
        valorisation: '8h30'
    },{
        key: '11',
        theme: 'Gestion de projet',
        acti: "Formation Project Management techniques and tools Udemy",
        date: 'December 2020',
        heures : '5h',
        valorisation: '5h'
    },
    
  ];
  
  const columns = [
    {
      title: 'Thème',
      dataIndex: 'theme',
      key: 'theme',
    },
    {
      title: 'Activité',
      dataIndex: 'acti',
      key: 'acti',
      render: (text, record) => (
        <Link onClick={setNav} to={"/Activities"+record.key}>
        <Space size="middle">
        <a href= { "/Activities"+ record.key}>{record.acti}</a>
          
        </Space>
        </Link>
        
      ),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
        title: 'Heures passées',
        dataIndex: 'heures',
        key: 'heures',
      },
      {
        title: 'Valorisation',
        dataIndex: 'valorisation',
        key: 'valorisation',
      },
      
  ];

  return (
    
      <div id="containerAccueil">
      <Table dataSource={dataSource} columns={columns} 
      summary={() => (
        <Table.Summary.Row>
          <Table.Summary.Cell index={0}> Total :</Table.Summary.Cell>
          <Table.Summary.Cell index={1}></Table.Summary.Cell>
          <Table.Summary.Cell index={2}></Table.Summary.Cell>
          <Table.Summary.Cell index={3}>200h+</Table.Summary.Cell>
          <Table.Summary.Cell index={4}>60h</Table.Summary.Cell>
        </Table.Summary.Row>
      )}/>
      </div>
  );
}
