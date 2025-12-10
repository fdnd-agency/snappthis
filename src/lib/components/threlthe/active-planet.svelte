<script>
    import { T } from '@threlte/core'
    import { OrbitControls } from 'three/examples/jsm/Addons.js';
</script>

    <T.PerspectiveCamera
        makeDefault
        position={[14, 10, 0]}
        oncreate={(ref) => ref.lookAt(0, 0, 0)}
    />

    <OrbitControls enableDamping dampingFactor={0.05} />

    <T.DirectionalLight position={[10, 20, 10]} intensity={2} castShadow />
    <T.AmbientLight intensity={0.6}/>

    <T.Mesh>
        <T.SphereGeometry args={[3, 20, 32]} />
        <T.MeshStandardMaterial color="#4d4d4d" />
    </T.Mesh>

    <T.Mesh rotation.x={-Math.PI / 2} receiveShadow>
        <T.PlaneGeometry args={[15, 15]} />
        <T.MeshStandardMaterial color="#34591B" />
    </T.Mesh>
