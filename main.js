import {React,useState,lazy,Suspense} from 'react';
const P =lazy(()=>import('./an.js'));
export default function App1() {
    const [showComponent, setShowComponent] = useState(false);
    return (
        <div>
            <h1>Welcome to App1 Component</h1>
<button onClick={() => setShowComponent(true)}>Load An Component(Heavy)
</button>
{showComponent && (
                <Suspense fallback={<div>Loading An Component...</div>}>
                    <P />
                </Suspense> )}
        </div>
    );
}
