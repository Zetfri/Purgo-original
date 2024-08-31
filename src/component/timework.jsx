import React from 'react';
import File from "../Assets/file-text.png"
import Promis from "../Assets/shake-hands-line.png"
import Spanner from "../Assets/Frame 13.png"
import Check from "../Assets/check-circle.png"
import Footer from './footer';

const Timework = () => {
    const cards = [
        {
            number: 1,
            img: File,
            title: "Принимаем заявку",
            p: "Вы позвонили по нашему  номеру или оставили заявку на сайте"

        },
        {
            number: 2,
            img: Promis,
            title: "Согласовываем",
            p: "Согласовали стоимость по телефону, место и время."
        },
        {
            number: 3,
            img: Spanner,
            title: "Выполняем работу",
            p: "Мастер приезжает в  договоренное время  составляет договор и  выполняет работу."
        },
        {
            number: 4,
            img: Check,
            title: "Проверяете и оплачиваете",
            p: "Вы проверяете выполненную мастером работу и производите оплату."
        },
    ]
    return (
        <>
            <div className='w-full h-[550px] px-10 mt-14 py-6 sm:px-4  bg-[#E3E3E3] sm:h-auto'>
            <button className='w-[160px] h-[45px] bg-[#81818133] rounded-[90px]  text-[#292AFF] font-bold sm:ml-5'>Преимущества</button>
            <div className='w-full h-auto flex justify-start items-center gap-5 pt-10  sm:flex-col'>
                {
                    cards.map((index, item) => (
                        <div className='w-[320px] h-[295px] bg-[#F1F5FE] rounded-[20px] p-7'>
                            <div className='w-full flex justify-between items-center    '>
                                <span className='w-[40px] h-[40px] bg-[#ADC6FE] text-[20px] flex justify-center items-center rounded-full text-[#3D3D3D] font-semibold'>{index.number}</span>
                                <img src={index.img} alt="" className='w-[24px] h-[24px]'/>
                            </div>
                            <p className='text-[#3D3D3D] text-[24px] font-semibold mt-5'>{index.title}</p>
                            <p className='w-[216px] text-[#818181] mt-2'>{index.p}</p>
                        </div>  
                    ))
                }
            </div>
            </div>
            <Footer/>
        </>
    );
}

export default Timework;
