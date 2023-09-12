import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesContainer = () => {
  const particlsInit = useCallback(
    async(engin) => {
   
    },
    [],
  )
  const particlesloded = useCallback(
    async( ) => {
   
    },
    [],
  )

  
  return  <Particles className="w-full" id="tsparticles" init={particlsInit} loaded={particlesloded} 
  options={{
    fullScreen:{enable : false},
    background: {
      color : {
        value : ""
      }
    },
    fpsLimit : 120,
    interactivity :{
      events :{
        onClick :{
          enable : false ,
          mode : 'push'
        },
        onHover :{
          enable : true ,
          mode : 'repulse'
        },
        resize:true
      },
      modes :{
        push : {
          quantity:90
        },
        replse :{
          distance : 200,
          duration : 0.4
        }
      }
    },
    particles:{
      color : {
        value :"#e68e2e"
      },
      links : {
        color : "#f5d393",
        distance : 150,
        enable : true ,
        opacity :0.5,
        width : 1
      },
      collisions:{
        enable : true
      },
      move:{
        direction:'none',
        enable : true,
        outModes : {
          default : "bounce"
        }
      }
    }
    
    
  }}/>
};

export default ParticlesContainer;
