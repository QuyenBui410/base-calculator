import React, { Fragment, useRef } from 'react';
import { Menu, Transition } from '@headlessui/react';

import SettingIconImage from '../../assets/img/setting.png';
import { THEME_BUTTONS } from '../constants/calculators';

const SettingCalculator = ({
  themeMode,
  changeThemeMode,
  changBackground,
  removeBackground,
}) => {
  const inputFile = useRef(null);

  const onButtonClick = () => {
    inputFile.current.click();
  };

  const onFileChange = (e) => {
    /* Selected files data can be collected here. */
    changBackground(e.target.files);
  };

  return (
    <>
      <input
        accept="image/*"
        type="file"
        id="file"
        ref={inputFile}
        onChange={onFileChange}
        style={{ display: 'none' }}
      />
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button>
          <img src={SettingIconImage} alt="setting" className="w-5 h-5" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-50 right-0 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={changeThemeMode}
                    type="button"
                    className={`${
                      active ? 'bg-purple-500 text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {themeMode === THEME_BUTTONS.LIGHT.value
                      ? 'Change to dark mode'
                      : 'Change to light mode'}
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={onButtonClick}
                    type="button"
                    className={`${
                      active ? 'bg-purple-500 text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Change background
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={removeBackground}
                    type="button"
                    className={`${
                      active ? 'bg-purple-500 text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Remove background
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default SettingCalculator;
