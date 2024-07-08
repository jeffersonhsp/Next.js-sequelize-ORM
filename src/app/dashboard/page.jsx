'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useContext } from "react";
import AuthContext from '@/src/contexts/authContext';

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


export default function Home() {
  const router = useRouter()
  const { user, login, logout } = useContext(AuthContext);

  const User = {
    name: `${user?.user}`,
    email: 'name@example.com',
    imageUrl:
      user? "/on.png"
      : "/off.png"
  }
  
  const navigation = [
    { name: 'Dashboard', href: '#', current: true },
  ]


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


  const handleLogin = () => {
    router.push('/auth')
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <div>



      <>
        <div className="min-h-full">
          <Disclosure as="nav" className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      alt="Your Company"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      className="h-8 w-8"
                    />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          aria-current={item.current ? 'page' : undefined}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium',
                          )}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3 p-1">
                      <div>
                        <MenuButton className=" p-1 relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img alt="" src={User.imageUrl} className="h-8 w-8 " />
                        </MenuButton>
                      </div>
                      <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                      >

                        {
                          user ? (
                            <>
                              <a onClick={handleLogout} className='cursor-pointer px-2 py-4'  > Logout </a>
                            </>
                          ) : (
                            <a onClick={handleLogin} className='cursor-pointer px-2 py-4'  > Login </a>
                          )
                        }

                      </MenuItems>
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                    <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                  </DisclosureButton>
                </div>
              </div>
            </div>

            <DisclosurePanel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium',
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
              <div className="border-t border-gray-700 pb-3 pt-4">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img alt="" src={User.imageUrl} className="h-10 w-10 " />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">{User.name}</div>
                    <div className="text-sm font-medium leading-none text-gray-400">{User.email}</div>
                  </div>

                </div>
                <div className="mt-3 space-y-1 px-2">
                  {
                    user ? (
                      <>
                        <a onClick={handleLogout} className='cursor-pointer p-1 text-white'> Logout </a>
                      </>
                    ) : (
                      <a onClick={handleLogin} className='cursor-pointer p-1 text-white' > Login </a>
                    )
                  }
                </div>
              </div>
            </DisclosurePanel>
          </Disclosure>

          <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{/* Your content */}</div>
          </main>
        </div>
      </>
    </div >
  );
}





