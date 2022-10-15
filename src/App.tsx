import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { Logo } from './Logo'
import './styles/global.css'

export function App() {
  return (
    <div className='w-screen h-screen bg-gray-900 flex items-center justify-center text-gray-100'>
      <header className='flex flex-col items-center'>

        <Logo />
        <Heading size='lg' className='mt-4'>
          Ignite Lab
        </Heading>

        <Text size='lg' className='text-gray-400 mt-1'>
          Login and Start using!
        </Text>
      </header>
      {/* <button className='bg-cyan-500 font-medium px-4 py-2 rounded text-white hover:bg-cyan-300'>Enviar</button> */}
    </div>
  )
}
