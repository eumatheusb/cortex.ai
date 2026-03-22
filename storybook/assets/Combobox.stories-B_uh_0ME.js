import{r as o,j as t}from"./iframe-Sy2gFGJ3.js";import{C as s}from"./Combobox-DTqnRRx1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DNXORVt-.js";import"./index-DvBiN_jY.js";import"./index-oOhmCGhA.js";import"./index-rfoyWmEq.js";import"./index-D6MEHyiY.js";import"./index-C-FDDq2f.js";import"./Combination-hEgrkgqT.js";import"./index-DtrQf-Nc.js";import"./index-Bl9tSzGv.js";import"./index-iJKTUraZ.js";import"./index-B90I_nem.js";import"./index-DT1ZH9rQ.js";import"./index-vmHNRuwU.js";import"./index-CjmGKbig.js";import"./utils-44l4s4mB.js";import"./x-B2qA_yUf.js";import"./createLucideIcon-D_RK-bSM.js";import"./chevron-down-blV75o58.js";import"./search-BFJJvwjI.js";import"./loader-circle-BvJOM1Fy.js";import"./index-BQdhF_pr.js";import"./use-presence-CKHZRRw-.js";import"./check-C92KmPKj.js";import"./plus-uf6RnP68.js";const G={title:"Atoms/Combobox",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},loading:{control:"boolean"},multiple:{control:"boolean"},creatable:{control:"boolean"}},decorators:[e=>t.jsx("div",{className:"w-[340px]",children:t.jsx(e,{})})]},n=[{value:"pac-001",label:"Ana Paula Silva",description:"CPF: 123.456.789-00 | Ortodontia"},{value:"pac-002",label:"Carlos Eduardo Santos",description:"CPF: 234.567.890-11 | Implante"},{value:"pac-003",label:"Fernanda Lima",description:"CPF: 345.678.901-22 | Clareamento"},{value:"pac-004",label:"Gustavo Henrique",description:"CPF: 456.789.012-33 | Endodontia"},{value:"pac-005",label:"Isabella Martins",description:"CPF: 567.890.123-44 | Protese"},{value:"pac-006",label:"Joao Pedro Costa",description:"CPF: 678.901.234-55 | Periodontia"},{value:"pac-007",label:"Larissa Oliveira",description:"CPF: 789.012.345-66 | Cirurgia"},{value:"pac-008",label:"Matheus Almeida",description:"CPF: 890.123.456-77 | Avaliacao"}],c={name:"Busca de Paciente",render:()=>{const[e,a]=o.useState("");return t.jsx(s,{options:n,value:e,onChange:a,label:"Paciente",placeholder:"Buscar paciente...",searchPlaceholder:"Nome ou CPF..."})}},p={name:"Selecao Multipla (Dentistas)",render:()=>{const e=[{value:"dr-01",label:"Dr. Ricardo Mello",description:"Ortodontia"},{value:"dr-02",label:"Dra. Camila Reis",description:"Implantodontia"},{value:"dr-03",label:"Dr. Felipe Nunes",description:"Endodontia"},{value:"dr-04",label:"Dra. Patricia Souza",description:"Periodontia"},{value:"dr-05",label:"Dr. Andre Barbosa",description:"Cirurgia"}],[a,r]=o.useState([]);return t.jsx(s,{options:e,value:a,onChange:r,label:"Equipe Responsavel",placeholder:"Selecionar dentistas...",multiple:!0})}},u={name:"Busca Assincrona",render:()=>{const[e,a]=o.useState(""),[r,l]=o.useState(!1),[v,i]=o.useState(n),C=o.useCallback(g=>{l(!0),setTimeout(()=>{i(n.filter(S=>S.label.toLowerCase().includes(g.toLowerCase())||S.description?.toLowerCase().includes(g.toLowerCase()))),l(!1)},500)},[]);return t.jsx(s,{options:v,value:e,onChange:a,onSearch:C,label:"Busca no CRM",placeholder:"Digite para buscar...",loading:r})}},d={name:"Criar Nova Opcao",render:()=>{const[e,a]=o.useState(""),[r,l]=o.useState([{value:"conv-01",label:"Amil Dental"},{value:"conv-02",label:"Bradesco Dental"},{value:"conv-03",label:"SulAmerica Odonto"},{value:"conv-04",label:"Unimed Dental"}]);return t.jsx(s,{options:r,value:e,onChange:a,label:"Convenio",placeholder:"Selecionar ou criar...",creatable:!0,onCreateOption:v=>{const i={value:`conv-${Date.now()}`,label:v};l(C=>[...C,i]),a(i.value)}})}},m={args:{options:n,label:"Paciente",error:"Paciente obrigatorio",placeholder:"Selecionar paciente..."}},b={args:{options:n,label:"Paciente",disabled:!0,placeholder:"Indisponivel"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Busca de Paciente',
  render: () => {
    const [value, setValue] = useState<string | string[]>('');
    return <Combobox options={pacientes} value={value} onChange={setValue} label="Paciente" placeholder="Buscar paciente..." searchPlaceholder="Nome ou CPF..." />;
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Selecao Multipla (Dentistas)',
  render: () => {
    const dentistas: ComboboxOption[] = [{
      value: 'dr-01',
      label: 'Dr. Ricardo Mello',
      description: 'Ortodontia'
    }, {
      value: 'dr-02',
      label: 'Dra. Camila Reis',
      description: 'Implantodontia'
    }, {
      value: 'dr-03',
      label: 'Dr. Felipe Nunes',
      description: 'Endodontia'
    }, {
      value: 'dr-04',
      label: 'Dra. Patricia Souza',
      description: 'Periodontia'
    }, {
      value: 'dr-05',
      label: 'Dr. Andre Barbosa',
      description: 'Cirurgia'
    }];
    const [value, setValue] = useState<string | string[]>([]);
    return <Combobox options={dentistas} value={value} onChange={setValue} label="Equipe Responsavel" placeholder="Selecionar dentistas..." multiple />;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Busca Assincrona',
  render: () => {
    const [value, setValue] = useState<string | string[]>('');
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState<ComboboxOption[]>(pacientes);
    const handleSearch = useCallback((query: string) => {
      setLoading(true);
      setTimeout(() => {
        setOptions(pacientes.filter(p => p.label.toLowerCase().includes(query.toLowerCase()) || p.description?.toLowerCase().includes(query.toLowerCase())));
        setLoading(false);
      }, 500);
    }, []);
    return <Combobox options={options} value={value} onChange={setValue} onSearch={handleSearch} label="Busca no CRM" placeholder="Digite para buscar..." loading={loading} />;
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Criar Nova Opcao',
  render: () => {
    const [value, setValue] = useState<string | string[]>('');
    const [options, setOptions] = useState<ComboboxOption[]>([{
      value: 'conv-01',
      label: 'Amil Dental'
    }, {
      value: 'conv-02',
      label: 'Bradesco Dental'
    }, {
      value: 'conv-03',
      label: 'SulAmerica Odonto'
    }, {
      value: 'conv-04',
      label: 'Unimed Dental'
    }]);
    return <Combobox options={options} value={value} onChange={setValue} label="Convenio" placeholder="Selecionar ou criar..." creatable onCreateOption={label => {
      const newOpt = {
        value: \`conv-\${Date.now()}\`,
        label
      };
      setOptions(prev => [...prev, newOpt]);
      setValue(newOpt.value);
    }} />;
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    options: pacientes,
    label: 'Paciente',
    error: 'Paciente obrigatorio',
    placeholder: 'Selecionar paciente...'
  }
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    options: pacientes,
    label: 'Paciente',
    disabled: true,
    placeholder: 'Indisponivel'
  }
}`,...b.parameters?.docs?.source}}};const H=["BuscaPaciente","MultiSelect","AsyncLoading","Creatable","WithError","Disabled"];export{u as AsyncLoading,c as BuscaPaciente,d as Creatable,b as Disabled,p as MultiSelect,m as WithError,H as __namedExportsOrder,G as default};
