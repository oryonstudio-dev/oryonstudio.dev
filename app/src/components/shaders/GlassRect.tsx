'use client';

import { Shader, Checkerboard, Glass } from 'shaders/react'

export default function ShaderEffect() {
  return (
    <Shader style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '500px', aspectRatio: 1 }}>
        <Glass scale={1} />
    </Shader>
  )
}