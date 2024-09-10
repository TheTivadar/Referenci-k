import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromDown, slideInFromLeft, slideInFromRight } from '@/utils/motion';

const Kapcsolat = () => {
  return (
    <div className="pt-28 pb-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromDown}
        id="title"
        className="text-center my-10 lg:my-20"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">Kapcsolat</h1>
        <div className="flex justify-center mt-4">
          <div className="w-16 sm:w-24 border-b-4 border-yellow-500"></div>
        </div>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-8 lg:space-y-0 lg:space-x-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft(0.5)}
        id="title"
        className="text-center my-10 lg:my-20"
      >
        <div className="flex flex-col space-y-6 w-full lg:w-1/3 text-center  lg:text-left">
        <div>
            <h2 className="text-3xl font-bold pb-4">Elérhetőségek</h2>
            <div className="flex justify-center">
            <div className="justify-center w-24 sm:w-24 border-b-4 border-yellow-500"></div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Telefonszám</h2>
            <p className="text-gray-700 text-lg">+36301234567</p>
            <div className="flex justify-center">
            <div className="w-24 md:pt-1 sm:w-24 border-b-2 border-yellow-500"></div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Email</h2>
            <p className="text-gray-700 text-lg">info@example.com</p>
            <div className="flex justify-center">
            <div className="w-24 md:pt-1 sm:w-24 border-b-2 border-yellow-500"></div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Helyszín</h2>
            <p className="text-gray-700 text-lg">Bácsalmás, Magyarország</p>
            <div className="flex justify-center">
            <div className="w-24 md:pt-1 sm:w-24 border-b-2 border-yellow-500"></div>
            </div>
          </div>
        </div>
        </motion.div>
        <div className="w-full lg:w-2/3">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromRight(0.5)}
            className="p-6 sm:p-8 bg-orange-50 shadow-lg rounded-lg"
          >
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Név
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  placeholder="Add meg a neved"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  placeholder="Add meg az email címed"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Telefonszám
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  placeholder="Add meg a telefonszámod"
                />
              </div>
              <div>
                <label htmlFor="help" className="block text-gray-700 font-medium mb-2">
                  Miben tudunk segíteni?
                </label>
                <textarea
                  id="help"
                  name="help"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  rows={4}
                  placeholder="Írd le, miben tudunk segíteni"
                />
              </div>
              <div>
                <label htmlFor="additional" className="block text-gray-700 font-medium mb-2">
                  További megjegyzés
                </label>
                <input
                  type="text"
                  id="additional"
                  name="additional"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  placeholder="Add meg a megjegyzésed"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600"
              >
                Küldés
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Kapcsolat;