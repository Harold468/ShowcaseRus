# Showcase R us
    
    - https://showcaserus.glitch.me/
    
## Showcase and order products in 3D via email using node js react js & react three fiber


![3 fiber](/reactthreefibre.png)




























![rnn](rnn.png)















## Render 3D objects 
```js
import {  OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense,useState,useEffect, useCallback, useRef} from "react";
import * as THREE from 'three';
import Newbalance from './New_balance_997';
// import Pants from './Pants_baked_ver';
import Tshirthoodie from './T_shirt_hoodie_3d_model';
import axios from "axios";
import Swal from "sweetalert2";
import { BeatLoader } from "react-spinners";
import harold from '/harold.jpg'

<Canvas className="z-40" camera={{ fov: 75, position: [0, 2, 5] }}>
                <Suspense fallback={'loading shoe...'}>
                    <ambientLight/>
                    <hemisphereLight color="white"/>
                    <OrbitControls
                    ref={controlsRef}
                    minDistance={5}       
                    maxDistance={50}     
                    enablePan={false}
                    minPolarAngle={Math.PI / 6}
                    maxPolarAngle={Math.PI / 2}
                    />
                    {
                        selected===0?
                        <Newbalance
                         scale={scaleSize * 0.007}
                         Soles={Soles}
                          Outer={Outer}
                          Laces={Laces}
                          Inner={Inner}
                         /> 
                        :
                    //     selected===1?
                    // <Pants />
                    // :
                    <Tshirthoodie
                     scale={scaleSize * 0.6}
                     Shirt1={Shirt1}
                     />
                    }
                </Suspense>

            
            </Canvas>
```

## Send emails after customization and confirmation

```js
app.post('/email',(async(req,res)=>{
    try{


        await send_email(subject=`Your order from Showcase R us`,req?.body.email,req?.body.name,req?.body.phone,req?.body.product,req?.body.product_parts)


        await send_email(subject=`Order was received from ${req?.body.email}`,owner_email,req?.body.name,req?.body.phone,req?.body.product,req?.body.product_parts)
     
    
    
        res.status(201).json({"message":"email sent successfully"})
    }catch(e){
        res.status(400).send(`${e}`)
    }


}))

```








![min screen](/shoe3dmin.png)



















![3D shoe](/3dshoe.png)

