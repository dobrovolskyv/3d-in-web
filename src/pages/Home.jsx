import {Suspense, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader'
import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import HomeInfo from '../components/HomeInfo';

const Home = () => {
  const [isRotation, setIsRotation]= useState(false)
  const [currentStage, setCurrentStage] = useState(1)

  const adjustIslandForSceenSize = ()=>{
    let screenScale;
    let screenPosition;


    if(window.innerWidth < 768){
      screenScale= [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else{
      screenScale= [1,1,1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition]
  }
  const adjustPlaneForSceenSize = ()=>{
    let screenScale;
    let screenPosition;

    if(window.innerWidth < 768){
      screenScale= [1.5, 1.5, 1.5];
      screenPosition=[0, -1.5, 0]
    } else{
      screenScale= [3,3,3]
      screenPosition=[0, -4, -4]
    }

    return [screenScale, screenPosition]
  }

  const [islandScale, islandPosition] = adjustIslandForSceenSize();
  const [planeScale, planePosition] = adjustPlaneForSceenSize();
  



  return (
    <section className='w-full h-screen relative'>
       <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas className={`w-full h-screen bg-transparent ${isRotation ? 'cursor-grabbing' : 'cursor-grab'}`}
      camera={{near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1,1,1]} intensity={2}/>
          <ambientLight intensity={0.5}/>
          <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1}/>

          <Bird/>
          <Sky isRotation={isRotation}/>
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={[0.1, 4.7077, 0]}
            isRotation={isRotation}
            setIsRotation={setIsRotation}
            setCurrentStage={setCurrentStage}
          />
          <Plane
          position={planePosition}
          scale={planeScale}
          isRotation={isRotation}
          rotation={[0, 20, 0]}
          />
          
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home