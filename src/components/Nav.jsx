import { Fragment, useState } from 'react';
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverGroup,
  Transition,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  CakeIcon,
  BuildingStorefrontIcon,
  UsersIcon,
  InformationCircleIcon,
  PhoneIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white drop-shadow-lg rounded-md w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-1 lg:px-10" aria-label="Global">
        <div className="flex items-center justify-center w-full lg:w-auto lg:justify-start p-1 lg:pl-8">
          <a href="/" className="flex items-center">
            <span className="sr-only">Obelie</span>
            <img className="w-[140px] h-[140px] lg:w-[200px] lg:h-[200px]" src="./sinfondo.png" alt="Obelie Pastelerias" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-9 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                <CakeIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                Pasteles y mas...
                <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  {({ active }) => (
                    <a
                      href="/shop"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'flex items-center px-4 py-2 text-sm'
                      )}
                    >
                      Pasteles
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <a
                      href="/chamucos"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'flex items-center px-4 py-2 text-sm'
                      )}
                    >
                      Chamucos
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <a
                      href="/gelatinas"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'flex items-center px-4 py-2 text-sm'
                      )}
                    >
                      Gelatinas
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <a
                      href="/reinas"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'flex items-center px-4 py-2 text-sm'
                      )}
                    >
                      Reinas
                    </a>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
          <a href="/sucursales" className="flex items-center text-sm font-semibold leading-6 text-gray-900">
            <BuildingStorefrontIcon className="h-5 w-5 mr-2" aria-hidden="true" />
            Sucursales
          </a>
          <a href="/eventos-bodas" className="flex items-center text-sm font-semibold leading-6 text-gray-900">
            <UsersIcon className="h-5 w-5 mr-2" aria-hidden="true" />
            Eventos y Bodas
          </a>
          <a href="#" className="flex items-center text-sm font-semibold leading-6 text-gray-900">
            <InformationCircleIcon className="h-5 w-5 mr-2" aria-hidden="true" />
            Sobre Nosotros
          </a>
          <a href="#" className="flex items-center text-sm font-semibold leading-6 text-gray-900">
            <PhoneIcon className="h-5 w-5 mr-2" aria-hidden="true" />
            Contactanos
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-2 lg:justify-end">
          <a href="#" className="flex items-center text-sm font-semibold leading-6 text-gray-900">
            <UserIcon className="h-5 w-5 mr-2" aria-hidden="true" />
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="/" className="-m-3.5 p-1.5">
                  <span className="sr-only">Obelie</span>
                  <img className="w-[140px] h-[140px] lg:w-[200px] lg:h-[200px]" src="./sinfondo.png" alt="Obelie Pastelerias" />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-0 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Popover>
                      
                      {({ open }) => (
                        <>
                          <Popover.Button className="flex items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 w-full">
                            Pasteles y mas...
                            <ChevronDownIcon
                              className={classNames(
                                open ? 'text-gray-600' : 'text-gray-400',
                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="mt-2 space-y-2">
                              <a href="/shop" className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                Pasteles
                              </a>
                              <a href="/chamucos" className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                Chamucos
                              </a>
                              <a href="/gelatinas" className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                Gelatinas
                              </a>
                              <a href="/reinas" className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                Reinas
                              </a>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                    <a href="/sucursales" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      <BuildingStorefrontIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                      Sucursales
                    </a>
                    <a href="/eventos-bodas" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      <UsersIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                      Eventos y Bodas
                    </a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      <InformationCircleIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                      Sobre Nosotros
                    </a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      <PhoneIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                      Contactanos
                    </a>
                  </div>
                  <div className="py-8">
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      <UserIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  );
}
