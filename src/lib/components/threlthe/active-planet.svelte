<script>
    import { T } from '@threlte/core'
</script>

<T.DirectionalLight position={[10, 20, 10]} intensity={2} castShadow />
<T.AmbientLight color="#FEFEFEFE"/>

<T.Mesh>
        <T.SphereGeometry args={[2, 32, 32]} />
        <T.MeshStandardMaterial color="#4d4d4d" />
</T.Mesh>