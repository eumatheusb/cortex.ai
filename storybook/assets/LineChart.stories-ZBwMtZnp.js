import{L as s}from"./LineChart-CFv2hw8n.js";import"./iframe-Sy2gFGJ3.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-44l4s4mB.js";import"./proxy-CrbPgRsh.js";import"./use-presence-CKHZRRw-.js";import"./generateCategoricalChart-wr-NjOHd.js";import"./Area-C7LWD_H9.js";import"./YAxis-Db1xx_gX.js";import"./CartesianGrid-CNCzYW_v.js";const u={title:"Organisms/Charts/LineChart",component:s,tags:["autodocs"],parameters:{layout:"padded"}},o=[{semana:"Sem 1",Meta:85,Google:42,Organico:18},{semana:"Sem 2",Meta:92,Google:38,Organico:22},{semana:"Sem 3",Meta:78,Google:45,Organico:15},{semana:"Sem 4",Meta:105,Google:52,Organico:25},{semana:"Sem 5",Meta:112,Google:48,Organico:20},{semana:"Sem 6",Meta:98,Google:55,Organico:28},{semana:"Sem 7",Meta:125,Google:60,Organico:32},{semana:"Sem 8",Meta:118,Google:58,Organico:27},{semana:"Sem 9",Meta:135,Google:65,Organico:35},{semana:"Sem 10",Meta:142,Google:62,Organico:30},{semana:"Sem 11",Meta:155,Google:70,Organico:38},{semana:"Sem 12",Meta:168,Google:75,Organico:42}],a={args:{data:o,xAxisKey:"semana",series:[{dataKey:"Meta",name:"Meta Ads",filled:!0},{dataKey:"Google",name:"Google Ads",filled:!0},{dataKey:"Organico",name:"Organico",filled:!0}],height:420}},e={args:{data:o,xAxisKey:"semana",series:[{dataKey:"Meta",name:"Meta Ads"},{dataKey:"Google",name:"Google Ads"},{dataKey:"Organico",name:"Organico",dashed:!0}],height:400}},n={args:{data:o,xAxisKey:"semana",series:[{dataKey:"Meta",name:"Meta Ads",showDots:!1,filled:!0}],height:350}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    data: leadsData,
    xAxisKey: 'semana',
    series: [{
      dataKey: 'Meta',
      name: 'Meta Ads',
      filled: true
    }, {
      dataKey: 'Google',
      name: 'Google Ads',
      filled: true
    }, {
      dataKey: 'Organico',
      name: 'Organico',
      filled: true
    }],
    height: 420
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    data: leadsData,
    xAxisKey: 'semana',
    series: [{
      dataKey: 'Meta',
      name: 'Meta Ads'
    }, {
      dataKey: 'Google',
      name: 'Google Ads'
    }, {
      dataKey: 'Organico',
      name: 'Organico',
      dashed: true
    }],
    height: 400
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    data: leadsData,
    xAxisKey: 'semana',
    series: [{
      dataKey: 'Meta',
      name: 'Meta Ads',
      showDots: false,
      filled: true
    }],
    height: 350
  }
}`,...n.parameters?.docs?.source}}};const O=["LeadsPorSemana","LinhasSimples","SemDots"];export{a as LeadsPorSemana,e as LinhasSimples,n as SemDots,O as __namedExportsOrder,u as default};
