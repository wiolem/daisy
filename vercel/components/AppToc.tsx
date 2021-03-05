import React from 'react'
import { useRouter } from 'next/router'

const AppToc = () => {
  const [toc, setToc] = React.useState<any[]>([])
  const { pathname } = useRouter()
  const [active, setActive] = React.useState<number>(0)
  React.useEffect(() => {
    const tags: any = []
    document
      .querySelectorAll('.docne-content h2, .docne-content h3')
      .forEach((section, index) => {
        section.setAttribute('id', `docne-tag-${index}`)
        tags.push({
          id: index,
          title: section.innerHTML,
          depth: section.tagName.replace(/H/, ''),
        })
      })
    setToc(tags)
  }, [pathname])
  if (toc.length <= 0) return null
  return (
    <div className="flex-none hidden w-64 pl-8 mr-8 xl:text-sm xl:block">
      <div className="flex flex-col justify-between overflow-y-auto sticky max-h-(screen-16) -mt-10 pt-10 pb-4 top-16">
        <div className="mb-8">
          <h5 className="mb-3 text-sm font-semibold tracking-wide text-gray-900 uppercase dark:text-gray-100 lg:text-xs">
            ON THIS PAGE
          </h5>

          <ul className="overflow-x-hidden font-medium">
            {toc.map(({ id, title, depth }) => {
              return (
                <li
                  key={id}
                  className={`hover:text-gray-900 dark:hover:text-gray-100 ${
                    active === id &&
                    'text-primary-500 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-400'
                  }`}
                >
                  <a
                    className={`block py-2 transition-colors duration-100 transform scrollactive-item cursor-pointer truncate ml-${
                      depth > 2 ? 4 : 0
                    }`}
                    onClick={() => {
                      setActive(id)
                      document
                        .getElementById(`docne-tag-${id}`)
                        ?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start',
                        })
                    }}
                  >
                    {title}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AppToc
