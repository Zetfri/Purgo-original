import React, { useState } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
import Img from "../Assets/IMG_5741.png";
import Img1 from "../Assets/Mask group.png";

import Ad from "./ad";

const Cards = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="w-full h-[1600px] pb-10  bg-[#E3E3E3] sm:w-full sm:h-auto sm:pb-10">
        <div className="w-[98%] h-full bg-white mx-auto rounded-[30px]  flex sm:px-12 flex-wrap justify-center items-start py-10 sm:py-5 gap-12 sm:gap-8 sm:flex-col ">
          <div className="w-[620px]   h-[333px] flex flex-col px-6 pt-10 sm:w-full sm:h-[500px] bg-[#292AFF] rounded-[15px]">
            <p
              className="text-[30px] text-white"
              style={{ lineHeight: "36.63px" }}
            >
              Наши сантехнические услуги – комплексные решения для вашего дома и
              бизнеса!
            </p>
            <img
              src={Img}
              alt=""
              className="w-[170px] ml-80 mt-[-20px] sm:ml-0 sm:mt-2"
            />
          </div>
          <div className="w-[285px] h-[328px] sm:w-full">
            <div
              className="w-full h-[280px] flex justify-start items-end px-4 pb-4"
              style={{ backgroundImage: `url(${Img1})` }}
            >
              <p className="text-white " style={{ fontWeight: "600" }}>
                Установка сантехники <br />
                <span style={{ fontWeight: "400" }}>от 150 000 сум</span>
              </p>
            </div>

            <Button
              type="primary"
              className="w-[280px] mx-auto sm:w-full h-[48px] bg-[#292AFF] text-white rounded-[90px] mt-1"
              onClick={showModal}
            
            >
              Заказать
            </Button>
            <Modal
              className="flex justify-center items-center flex-col p-10 "
              title="Устаоновка сатнехники"
              open={open}
              onOk={hideModal}
              onCancel={hideModal}
              okText="OK"
              cancelText="Cancel"
            >
              <img src={Img1} alt="" className="ml-12 sm:ml-0" />
              <p className=" mt-5 text-center text-[20px]" style={{ fontWeight: "600" }}>
                Установка сантехники <br />
                <span style={{ fontWeight: "400" }}>от 150 000 сум</span>
              </p>
              <p className="text-justify text-[17px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                quos. Deserunt, molestiae voluptatem ipsum magnam nisi culpa
              </p>
              <input type="text" name="" id="" placeholder="Enter your name" className="mt-10 border p-2 w-[180px] rounded"/> <br />
              <input type="text" name="" id="" placeholder="Enter your number" className="mt-5 border p-2 w-[180px] rounded"/> <br />
              <button className="w-[180px] border-[1.5px] text-[18px] active:bg-[#292AFF] active:text-white  mt-4 border-[#292AFF] text-[#292AFF] h-[45px] rounded-[10px]">Yuborish</button>
            </Modal>
          </div>
          <div className="w-[285px] h-[328px]  ">
            <div
              className="w-full h-[280px] flex justify-start items-end px-4 pb-4"
              style={{ backgroundImage: `url(${Img1})` }}
            >
              <p className="text-white " style={{ fontWeight: "600" }}>
                Установка сантехники <br />
                <span style={{ fontWeight: "400" }}>от 150 000 сум</span>
              </p>
            </div>
            <Button
              type="primary"
              className="w-[280px] mx-auto sm:w-full h-[48px] bg-[#292AFF] text-white rounded-[90px] mt-1"
              onClick={showModal}
            >
              Заказать
            </Button>
            <Modal
              className="flex justify-center items-center flex-col p-10 "
              title="Устаоновка сатнехники"
              open={open}
              onOk={hideModal}
              onCancel={hideModal}
              okText="OK"
              cancelText="Cancel"
            >
              <img src={Img1} alt="" className="ml-12 sm:ml-0" />
              <p className=" mt-5 text-center text-[20px]" style={{ fontWeight: "600" }}>
                Установка сантехники <br />
                <span style={{ fontWeight: "400" }}>от 150 000 сум</span>
              </p>
              <p className="text-justify text-[17px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                quos. Deserunt, molestiae voluptatem ipsum magnam nisi culpa
              </p>
              <input type="text" name="" id="" placeholder="Enter your name" className="mt-10 border p-2 w-[180px] rounded"/> <br />
              <input type="text" name="" id="" placeholder="Enter your number" className="mt-5 border p-2 w-[180px] rounded"/> <br />
              <button className="w-[180px] border-[1.5px] text-[18px] active:bg-[#292AFF] active:text-white  mt-4 border-[#292AFF] text-[#292AFF] h-[45px] rounded-[10px]">Yuborish</button>
            </Modal>
          </div>
          <div className="w-[285px] h-[328px] mt-[-100px]  sm:mt-0">
            <div className="w-full h-[280px] bg-[#292AFF] rounded-[20px]">
              <p className="text-white p-4 text-[30px]">
                20% скидка для постоянных клиенты!
              </p>
            </div>
            <Button
              type="primary"
              className="w-[280px] mx-auto sm:w-full h-[48px] bg-[#292AFF] text-white rounded-[90px] mt-1"
              onClick={showModal}
            >
              Заказать
            </Button>
            <Modal
              className="flex justify-center items-center flex-col p-10 "
              title="Устаоновка сатнехники"
              open={open}
              onOk={hideModal}
              onCancel={hideModal}
              okText="OK"
              cancelText="Cancel"
            >
              <img src={Img1} alt="" className="ml-12 sm:ml-0" />
              <p className=" mt-5 text-center text-[20px]" style={{ fontWeight: "600" }}>
                Установка сантехники <br />
                <span style={{ fontWeight: "400" }}>от 150 000 сум</span>
              </p>
              <p className="text-justify text-[17px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                quos. Deserunt, molestiae voluptatem ipsum magnam nisi culpa
              </p>
              <input type="text" name="" id="" placeholder="Enter your name" className="mt-10 border p-2 w-[180px] rounded"/> <br />
              <input type="text" name="" id="" placeholder="Enter your number" className="mt-5 border p-2 w-[180px] rounded"/> <br />
              <button className="w-[180px] border-[1.5px] text-[18px] active:bg-[#292AFF] active:text-white  mt-4 border-[#292AFF] text-[#292AFF] h-[45px] rounded-[10px]">Yuborish</button>
            </Modal>
          </div>
          <div className="w-[285px] h-[328px] mt-[-100px]  sm:mt-0">
            <div
              className="w-full h-[280px] flex justify-start items-end px-4 pb-4"
              style={{ backgroundImage: `url(${Img1})` }}
            >
              <p className="text-white " style={{ fontWeight: "600" }}>
                Установка сантехники <br />
                <span style={{ fontWeight: "400" }}>от 150 000 сум</span>
              </p>
            </div>
            <Button
              type="primary"
              className="w-[280px] mx-auto sm:w-full h-[48px] bg-[#292AFF] text-white rounded-[90px] mt-1"
              onClick={showModal}
            >
              Заказать
            </Button>
            <Modal
              className="flex justify-center items-center flex-col p-10 "
              title="Устаоновка сатнехники"
              open={open}
              onOk={hideModal}
              onCancel={hideModal}
              okText="OK"
              cancelText="Cancel"
            >
              <img src={Img1} alt="" className="ml-12 sm:ml-0" />
              <p className=" mt-5 text-center text-[20px]" style={{ fontWeight: "600" }}>
                Установка сантехники <br />
                <span style={{ fontWeight: "400" }}>от 150 000 сум</span>
              </p>
              <p className="text-justify text-[17px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                quos. Deserunt, molestiae voluptatem ipsum magnam nisi culpa
              </p>
              <input type="text" name="" id="" placeholder="Enter your name" className="mt-10 border p-2 w-[180px] rounded"/> <br />
              <input type="text" name="" id="" placeholder="Enter your number" className="mt-5 border p-2 w-[180px] rounded"/> <br />
              <button className="w-[180px] border-[1.5px] text-[18px] active:bg-[#292AFF] active:text-white  mt-4 border-[#292AFF] text-[#292AFF] h-[45px] rounded-[10px]">Yuborish</button>
            </Modal>
          </div>
          <div className="w-[285px] h-[328px] mt-[-100px]  sm:mt-0">
            <div
              className="w-full h-[280px] flex justify-start items-end px-4 pb-4"
              style={{ backgroundImage: `url(${Img1})` }}
            >
              <p className="text-white " style={{ fontWeight: "600" }}>
                Установка сантехники <br />
                <span style={{ fontWeight: "400" }}>от 150 000 сум</span>
              </p>
            </div>
            <Button
              type="primary"
              className="w-[280px] mx-auto sm:w-full h-[48px] bg-[#292AFF] text-white rounded-[90px] mt-1"
              onClick={showModal}
            >
              Заказать
            </Button>
            <Modal
              className="flex justify-center items-center flex-col p-10 "
              title="Устаоновка сатнехники"
              open={open}
              onOk={hideModal}
              onCancel={hideModal}
              okText="OK"
              cancelText="Cancel"
            >
              <img src={Img1} alt="" className="ml-12 sm:ml-0" />
              <p className=" mt-5 text-center text-[20px]" style={{ fontWeight: "600" }}>
                Установка сантехники <br />
                <span style={{ fontWeight: "400" }}>от 150 000 сум</span>
              </p>
              <p className="text-justify text-[17px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                quos. Deserunt, molestiae voluptatem ipsum magnam nisi culpa
              </p>
              <input type="text" name="" id="" placeholder="Enter your name" className="mt-10 border p-2 w-[180px] rounded"/> <br />
              <input type="text" name="" id="" placeholder="Enter your number" className="mt-5 border p-2 w-[180px] rounded"/> <br />
              <button className="w-[180px] border-[1.5px] text-[18px] active:bg-[#292AFF] active:text-white  mt-4 border-[#292AFF] text-[#292AFF] h-[45px] rounded-[10px]">Yuborish</button>
            </Modal>
          </div>
          <div className="w-[285px] h-[328px]  mt-[-100px] sm:mt-0">
            <div
              className="w-full h-[280px] flex justify-start items-end px-4 pb-4"
              style={{ backgroundImage: `url(${Img1})` }}
            >
              <p className="text-white " style={{ fontWeight: "600" }}>
                Установка сантехники <br />
                <span style={{ fontWeight: "400" }}>от 150 000 сум</span>
              </p>
            </div>
            <Button
              type="primary"
              className="w-[280px] mx-auto sm:w-full h-[48px] bg-[#292AFF] text-white rounded-[90px] mt-1"
              onClick={showModal}
            >
              Заказать
            </Button>
            <Modal
              className="flex justify-center items-center flex-col p-10 "
              title="Устаоновка сатнехники"
              open={open}
              onOk={hideModal}
              onCancel={hideModal}
              okText="OK"
              cancelText="Cancel"
            >
              <img src={Img1} alt="" className="ml-12 sm:ml-0" />
              <p className=" mt-5 text-center text-[20px]" style={{ fontWeight: "600" }}>
                Установка сантехники <br />
                <span style={{ fontWeight: "400" }}>от 150 000 сум</span>
              </p>
              <p className="text-justify text-[17px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                quos. Deserunt, molestiae voluptatem ipsum magnam nisi culpa
              </p>
              <input type="text" name="" id="" placeholder="Enter your name" className="mt-10 border p-2 w-[180px] rounded"/> <br />
              <input type="text" name="" id="" placeholder="Enter your number" className="mt-5 border p-2 w-[180px] rounded"/> <br />
              <button className="w-[180px] border-[1.5px] text-[18px] active:bg-[#292AFF] active:text-white  mt-4 border-[#292AFF] text-[#292AFF] h-[45px] rounded-[10px]">Yuborish</button>
            </Modal>
          </div>
          <div className="w-[285px] h-[328px] mt-[-100px]  sm:mt-0">
            <div
              className="w-full h-[280px] flex justify-start items-end px-4 pb-4"
              style={{ backgroundImage: `url(${Img1})` }}
            >
              <p className="text-white " style={{ fontWeight: "600" }}>
                Установка сантехники <br />
                <span style={{ fontWeight: "400" }}>от 150 000 сум</span>
              </p>
            </div>
            <Button
              type="primary"
              className="w-[280px] mx-auto sm:w-full h-[48px] bg-[#292AFF] text-white rounded-[90px] mt-1"
              onClick={showModal}
            >
              Заказать
            </Button>
            <Modal
              className="flex justify-center items-center flex-col p-10 "
              title="Устаоновка сатнехники"
              open={open}
              onOk={hideModal}
              onCancel={hideModal}
              okText="OK"
              cancelText="Cancel"
            >
              <img src={Img1} alt="" className="ml-12 sm:ml-0" />
              <p className=" mt-5 text-center text-[20px]" style={{ fontWeight: "600" }}>
                Установка сантехники <br />
                <span style={{ fontWeight: "400" }}>от 150 000 сум</span>
              </p>
              <p className="text-justify text-[17px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                quos. Deserunt, molestiae voluptatem ipsum magnam nisi culpa
              </p>
              <input type="text" name="" id="" placeholder="Enter your name" className="mt-10 border p-2 w-[180px] rounded"/> <br />
              <input type="text" name="" id="" placeholder="Enter your number" className="mt-5 border p-2 w-[180px] rounded"/> <br />
              <button className="w-[180px] border-[1.5px] text-[18px] active:bg-[#292AFF] active:text-white  mt-4 border-[#292AFF] text-[#292AFF] h-[45px] rounded-[10px]">Yuborish</button>
            </Modal>
          </div>
          <div className="w-[285px] h-[328px] mt-[-100px]  sm:mt-0">
            <div
              className="w-full h-[280px] flex justify-start items-end px-4 pb-4"
              style={{ backgroundImage: `url(${Img1})` }}
            >
              <p className="text-white " style={{ fontWeight: "600" }}>
                Установка сантехники <br />
                <span style={{ fontWeight: "400" }}>от 150 000 сум</span>
              </p>
            </div>
            <Button
              type="primary"
              className="w-[280px] mx-auto sm:w-full h-[48px] bg-[#292AFF] text-white rounded-[90px] mt-1"
              onClick={showModal}
            >
              Заказать
            </Button>
            <Modal
              className="flex justify-center items-center flex-col p-10 "
              title="Устаоновка сатнехники"
              open={open}
              onOk={hideModal}
              onCancel={hideModal}
              okText="OK"
              cancelText="Cancel"
            >
              <img src={Img1} alt="" className="ml-12 sm:ml-0" />
              <p className=" mt-5 text-center text-[20px]" style={{ fontWeight: "600" }}>
                Установка сантехники <br />
                <span style={{ fontWeight: "400" }}>от 150 000 сум</span>
              </p>
              <p className="text-justify text-[17px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                quos. Deserunt, molestiae voluptatem ipsum magnam nisi culpa
              </p>
              <input type="text" name="" id="" placeholder="Enter your name" className="mt-10 border p-2 w-[180px] rounded"/> <br />
              <input type="text" name="" id="" placeholder="Enter your number" className="mt-5 border p-2 w-[180px] rounded"/> <br />
              <button className="w-[180px] border-[1.5px] text-[18px] active:bg-[#292AFF] active:text-white  mt-4 border-[#292AFF] text-[#292AFF] h-[45px] rounded-[10px]">Yuborish</button>
            </Modal>
          </div>
          <div className="w-[285px] h-[328px] mt-[-100px]  sm:mt-0">
            <div
              className="w-full h-[280px] flex justify-start items-end px-4 pb-4"
              style={{ backgroundImage: `url(${Img1})` }}
            >
              <p className="text-white " style={{ fontWeight: "600" }}>
                Установка сантехники <br />
                <span style={{ fontWeight: "400" }}>от 150 000 сум</span>
              </p>
            </div>
            <Button
              type="primary"
              className="w-[280px] mx-auto sm:w-full h-[48px] bg-[#292AFF] text-white rounded-[90px] mt-1"
              onClick={showModal}
            >
              Заказать
            </Button>
            <Modal
              className="flex justify-center items-center flex-col p-10 "
              title="Устаоновка сатнехники"
              open={open}
              onOk={hideModal}
              onCancel={hideModal}
              okText="OK"
              cancelText="Cancel"
            >
              <img src={Img1} alt="" className="ml-12 sm:ml-0" />
              <p className=" mt-5 text-center text-[20px]" style={{ fontWeight: "600" }}>
                Установка сантехники <br />
                <span style={{ fontWeight: "400" }}>от 150 000 сум</span>
              </p>
              <p className="text-justify text-[17px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                quos. Deserunt, molestiae voluptatem ipsum magnam nisi culpa
              </p>
              <input type="text" name="" id="" placeholder="Enter your name" className="mt-10 border p-2 w-[180px] rounded"/> <br />
              <input type="text" name="" id="" placeholder="Enter your number" className="mt-5 border p-2 w-[180px] rounded"/> <br />
              <button className="w-[180px] border-[1.5px] text-[18px] active:bg-[#292AFF] active:text-white  mt-4 border-[#292AFF] text-[#292AFF] h-[45px] rounded-[10px]">Yuborish</button>
            </Modal>
          </div>
          <div className="w-[285px] h-[328px]  mt-[-100px] sm:mt-0">
            <div
              className="w-full h-[280px] flex justify-start items-end px-4 pb-4"
              style={{ backgroundImage: `url(${Img1})` }}
            >
              <p className="text-white " style={{ fontWeight: "600" }}>
                Установка сантехники <br />
                <span style={{ fontWeight: "400" }}>от 150 000 сум</span>
              </p>
            </div>
            <Button
              type="primary"
              className="w-[280px] mx-auto sm:w-full h-[48px] bg-[#292AFF] text-white rounded-[90px] mt-1"
              onClick={showModal}
            >
              Заказать
            </Button>
            <Modal
              className="flex justify-center items-center flex-col p-10 "
              title="Устаоновка сатнехники"
              open={open}
              onOk={hideModal}
              onCancel={hideModal}
              okText="OK"
              cancelText="Cancel"
            >
              <img src={Img1} alt="" className="ml-12 sm:ml-0" />
              <p className=" mt-5 text-center text-[20px]" style={{ fontWeight: "600" }}>
                Установка сантехники <br />
                <span style={{ fontWeight: "400" }}>от 150 000 сум</span>
              </p>
              <p className="text-justify text-[17px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                quos. Deserunt, molestiae voluptatem ipsum magnam nisi culpa
              </p>
              <input type="text" name="" id="" placeholder="Enter your name" className="mt-10 border p-2 w-[180px] rounded"/> <br />
              <input type="text" name="" id="" placeholder="Enter your number" className="mt-5 border p-2 w-[180px] rounded"/> <br />
              <button className="w-[180px] border-[1.5px] text-[18px] active:bg-[#292AFF] active:text-white  mt-4 border-[#292AFF] text-[#292AFF] h-[45px] rounded-[10px]">Yuborish</button>
            </Modal>
          </div>
          <div className="w-[285px] h-[328px] mt-[-100px]  sm:mt-0">
            <div
              className="w-full h-[280px] flex justify-start items-end px-4 pb-4"
              style={{ backgroundImage: `url(${Img1})` }}
            >
              <p className="text-white " style={{ fontWeight: "600" }}>
                Установка сантехники <br />
                <span style={{ fontWeight: "400" }}>от 150 000 сум</span>
              </p>
            </div>
            <Button
              type="primary"
              className="w-[280px] mx-auto sm:w-full h-[48px] bg-[#292AFF] text-white rounded-[90px] mt-1"
              onClick={showModal}
            >
              Заказать
            </Button>
            <Modal
              className="flex justify-center items-center flex-col p-10 "
              title="Устаоновка сатнехники"
              open={open}
              onOk={hideModal}
              onCancel={hideModal}
              okText="OK"
              cancelText="Cancel"
            >
              <img src={Img1} alt="" className="ml-12 sm:ml-0" />
              <p className=" mt-5 text-center text-[20px]" style={{ fontWeight: "600" }}>
                Установка сантехники <br />
                <span style={{ fontWeight: "400" }}>от 150 000 сум</span>
              </p>
              <p className="text-justify text-[17px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                quos. Deserunt, molestiae voluptatem ipsum magnam nisi culpa
              </p>
              <input type="text" name="" id="" placeholder="Enter your name" className="mt-10 border p-2 w-[180px] rounded"/> <br />
              <input type="text" name="" id="" placeholder="Enter your number" className="mt-5 border p-2 w-[180px] rounded"/> <br />
              <button className="w-[180px] border-[1.5px] text-[18px] active:bg-[#292AFF] active:text-white  mt-4 border-[#292AFF] text-[#292AFF] h-[45px] rounded-[10px]">Yuborish</button>
            </Modal>
          </div>
          <div className="w-[285px] h-[328px] mt-[-100px] sm:mt-0">
            <div
              className="w-full h-[280px] flex justify-start items-end px-4 pb-4"
              style={{ backgroundImage: `url(${Img1})` }}
            >
              <p className="text-white " style={{ fontWeight: "600" }}>
                Установка сантехники <br />
                <span style={{ fontWeight: "400" }}>от 150 000 сум</span>
              </p>
            </div>
            <Button
              type="primary"
              className="w-[280px] mx-auto sm:w-full h-[48px] bg-[#292AFF] text-white rounded-[90px] mt-1"
              onClick={showModal}
            >
              Заказать
            </Button>
            <Modal
              className="flex justify-center items-center flex-col p-10 "
              title="Устаоновка сатнехники"
              open={open}
              onOk={hideModal}
              onCancel={hideModal}
              okText="OK"
              cancelText="Cancel"
            >
              <img src={Img1} alt="" className="ml-12 sm:ml-0" />
              <p className=" mt-5 text-center text-[20px]" style={{ fontWeight: "600" }}>
                Установка сантехники <br />
                <span style={{ fontWeight: "400" }}>от 150 000 сум</span>
              </p>
              <p className="text-justify text-[17px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                quos. Deserunt, molestiae voluptatem ipsum magnam nisi culpa
              </p>
              <input type="text" name="" id="" placeholder="Enter your name" className="mt-10 border p-2 w-[180px] rounded"/> <br />
              <input type="text" name="" id="" placeholder="Enter your number" className="mt-5 border p-2 w-[180px] rounded"/> <br />
              <button className="w-[180px] border-[1.5px] text-[18px] active:bg-[#292AFF] active:text-white  mt-4 border-[#292AFF] text-[#292AFF] h-[45px] rounded-[10px]">Yuborish</button>
            </Modal>
          </div>

          <div className="w-[285px] h-[328px]  mt-[-100px] sm:mt-0">
            <div
              className="w-full h-[280px] flex justify-start items-end px-4 pb-4"
              style={{ backgroundImage: `url(${Img1})` }}
            >
              <p className="text-white " style={{ fontWeight: "600" }}>
                Установка сантехники <br />
                <span style={{ fontWeight: "400" }}>от 150 000 сум</span>
              </p>
            </div>
            <Button
              type="primary"
              className="w-[280px] mx-auto sm:w-full h-[48px] bg-[#292AFF] text-white rounded-[90px] mt-1"
              onClick={showModal}
            >
              Заказать
            </Button>
            <Modal
              className="flex justify-center items-center flex-col p-10 "
              title="Устаоновка сатнехники"
              open={open}
              onOk={hideModal}
              onCancel={hideModal}
              okText="OK"
              cancelText="Cancel"
            >
              <img src={Img1} alt="" className="ml-12 sm:ml-0" />
              <p className=" mt-5 text-center text-[20px]" style={{ fontWeight: "600" }}>
                Установка сантехники <br />
                <span style={{ fontWeight: "400" }}>от 150 000 сум</span>
              </p>
              <p className="text-justify text-[17px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                quos. Deserunt, molestiae voluptatem ipsum magnam nisi culpa
              </p>
              <input type="text" name="" id="" placeholder="Enter your name" className="mt-10 border p-2 w-[180px] rounded"/> <br />
              <input type="text" name="" id="" placeholder="Enter your number" className="mt-5 border p-2 w-[180px] rounded"/> <br />
              <button className="w-[180px] border-[1.5px] text-[18px] active:bg-[#292AFF] active:text-white  mt-4 border-[#292AFF] text-[#292AFF] h-[45px] rounded-[10px]">Yuborish</button>
            </Modal>
          </div>
          <div className="w-[285px] h-[328px]  mt-[-100px] sm:mt-0">
            <div
              className="w-full h-[280px] flex justify-start items-end px-4 pb-4"
              style={{ backgroundImage: `url(${Img1})` }}
            >
              <p className="text-white " style={{ fontWeight: "600" }}>
                Установка сантехники <br />
                <span style={{ fontWeight: "400" }}>от 150 000 сум</span>
              </p>
            </div>
            <Button
              type="primary"
              className="w-[280px] mx-auto sm:w-full h-[48px] bg-[#292AFF] text-white rounded-[90px] mt-1"
              onClick={showModal}
            >
              Заказать
            </Button>
            <Modal
              className="flex justify-center items-center flex-col p-10 "
              title="Устаоновка сатнехники"
              open={open}
              onOk={hideModal}
              onCancel={hideModal}
              okText="OK"
              cancelText="Cancel"
            >
              <img src={Img1} alt="" className="ml-12 sm:ml-0" />
              <p className=" mt-5 text-center text-[20px]" style={{ fontWeight: "600" }}>
                Установка сантехники <br />
                <span style={{ fontWeight: "400" }}>от 150 000 сум</span>
              </p>
              <p className="text-justify text-[17px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                quos. Deserunt, molestiae voluptatem ipsum magnam nisi culpa
              </p>
              <input type="text" name="" id="" placeholder="Enter your name" className="mt-10 border p-2 w-[180px] rounded"/> <br />
              <input type="text" name="" id="" placeholder="Enter your number" className="mt-5 border p-2 w-[180px] rounded"/> <br />
              <button className="w-[180px] border-[1.5px] text-[18px] active:bg-[#292AFF] active:text-white  mt-4 border-[#292AFF] text-[#292AFF] h-[45px] rounded-[10px]">Yuborish</button>
            </Modal>
          </div>
        </div>
      </div>
      <Ad />
    </div>
  );
};

export default Cards;
