import { useRouter } from 'next/router'
import settings from '../pages/settings.json'

const Button = () => {
  const router = useRouter()
  return (
    <div
      className="mt-auto text-white cursor-pointer mr-4 bg-green-500 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-md font-semibold h-12 items-center px-4 inline-flex"
      onClick={() => {
        router.push(settings?.categories?.[0]?.docs?.[0]?.path || '/404')
      }}
    >
      Get started
    </div>
  )
}

export default Button
