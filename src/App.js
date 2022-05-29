import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Speaker from './models/Speaker.js';

const App = () => {

  console.log(Speaker);

  return (

    <Canvas style={{ height: 1000 }} camera={{ position: [0, 2, 5], zoom: 1 }}>
      <OrbitControls />

      <color attach="background" args={["orange"]} />

      <hemisphereLight intensity={0} />

      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
      />
      <Suspense fallback={null}>
        <Speaker />
      </Suspense>

    </Canvas>
  );
};

export default App;
