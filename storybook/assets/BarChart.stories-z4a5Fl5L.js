import{B as o}from"./BarChart-A4xYAipT.js";import"./iframe-Sy2gFGJ3.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-44l4s4mB.js";import"./proxy-CrbPgRsh.js";import"./use-presence-CKHZRRw-.js";import"./generateCategoricalChart-wr-NjOHd.js";import"./YAxis-Db1xx_gX.js";import"./CartesianGrid-CNCzYW_v.js";const y={title:"Organisms/Charts/BarChart",component:o,tags:["autodocs"],parameters:{layout:"padded"}},i=[{mes:"Jan","Oral Unic":185e3,"Clinica Fabio":142e3,"Unidade Centro":98e3},{mes:"Fev","Oral Unic":198e3,"Clinica Fabio":155e3,"Unidade Centro":105e3},{mes:"Mar","Oral Unic":21e4,"Clinica Fabio":148e3,"Unidade Centro":112e3},{mes:"Abr","Oral Unic":195e3,"Clinica Fabio":162e3,"Unidade Centro":99e3},{mes:"Mai","Oral Unic":225e3,"Clinica Fabio":17e4,"Unidade Centro":118e3},{mes:"Jun","Oral Unic":24e4,"Clinica Fabio":158e3,"Unidade Centro":125e3},{mes:"Jul","Oral Unic":218e3,"Clinica Fabio":165e3,"Unidade Centro":11e4},{mes:"Ago","Oral Unic":232e3,"Clinica Fabio":172e3,"Unidade Centro":128e3},{mes:"Set","Oral Unic":245e3,"Clinica Fabio":18e4,"Unidade Centro":135e3},{mes:"Out","Oral Unic":258e3,"Clinica Fabio":175e3,"Unidade Centro":142e3},{mes:"Nov","Oral Unic":27e4,"Clinica Fabio":188e3,"Unidade Centro":148e3},{mes:"Dez","Oral Unic":295e3,"Clinica Fabio":195e3,"Unidade Centro":155e3}],r=t=>`R$${(t/1e3).toFixed(0)}k`,a={args:{data:i,xAxisKey:"mes",series:[{dataKey:"Oral Unic",name:"Oral Unic"},{dataKey:"Clinica Fabio",name:"Clinica Fabio"},{dataKey:"Unidade Centro",name:"Unidade Centro"}],formatValue:r,height:420}},e={args:{data:i,xAxisKey:"mes",series:[{dataKey:"Oral Unic",name:"Oral Unic"},{dataKey:"Clinica Fabio",name:"Clinica Fabio"},{dataKey:"Unidade Centro",name:"Unidade Centro"}],stacked:!0,formatValue:r,height:420}},n={args:{data:i.slice(0,6),xAxisKey:"mes",series:[{dataKey:"Oral Unic",name:"Oral Unic"}],layout:"horizontal",formatValue:r,height:350}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    data: monthlyRevenueData,
    xAxisKey: 'mes',
    series: [{
      dataKey: 'Oral Unic',
      name: 'Oral Unic'
    }, {
      dataKey: 'Clinica Fabio',
      name: 'Clinica Fabio'
    }, {
      dataKey: 'Unidade Centro',
      name: 'Unidade Centro'
    }],
    formatValue: formatBRL,
    height: 420
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    data: monthlyRevenueData,
    xAxisKey: 'mes',
    series: [{
      dataKey: 'Oral Unic',
      name: 'Oral Unic'
    }, {
      dataKey: 'Clinica Fabio',
      name: 'Clinica Fabio'
    }, {
      dataKey: 'Unidade Centro',
      name: 'Unidade Centro'
    }],
    stacked: true,
    formatValue: formatBRL,
    height: 420
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    data: monthlyRevenueData.slice(0, 6),
    xAxisKey: 'mes',
    series: [{
      dataKey: 'Oral Unic',
      name: 'Oral Unic'
    }],
    layout: 'horizontal',
    formatValue: formatBRL,
    height: 350
  }
}`,...n.parameters?.docs?.source}}};const O=["FaturamentoMensalPorClinica","Stacked","Horizontal"];export{a as FaturamentoMensalPorClinica,n as Horizontal,e as Stacked,O as __namedExportsOrder,y as default};
