
import { TabView, TabPanel } from 'primereact/tabview';
import{useState}from'react';
import { Usuario } from '../usuario/Usuario';

function Tabla() {
    const [activeIndex, setActiveIndex] = useState(0);
    
  return (
    <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
    <TabPanel header="Usuarios">
      <Usuario></Usuario>
    </TabPanel>
    <TabPanel header="Registros">
        Content II

    </TabPanel>
    
</TabView>
  );
}

export default Tabla;
