import React, { useState } from 'react'
import { Logo } from '../../assets/logo.js'
import { Cart } from './cart'

export const Header = () => {

    // Цэс
    const menu = ['新品', '女士专区', '男士专区', '家纺专区', '配饰专区', '童装专区', '戈壁日记']

    // Сагсыг харуулах
    const [cartComp, setCartShow] = useState(false)

    return (
        <form className="header">
            {
                cartComp ? <Cart exit={() => setCartShow(false)} /> : null
            }

            <div className="info">
                <p>打击地区顺丰包邮</p>
            </div>

            <div className="nav">
                <div className="settings">
                    <div className="left">
                        <select>
                            <option>语言选择</option>
                            <option>语言选择</option>
                            <option>语言选择</option>
                        </select>
                        
                        {/* Хайлт */}
                        <div className="search">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.7834 12.4285L10.0686 9.71362" stroke="#7A7A7A"/>
                            <circle cx="6.1281" cy="5.6801" r="5.16106" stroke="#7A7A7A"/>
                            </svg>
                            <input placeholder="请输入搜索的关键词" />
                        </div>
                    </div>

                    {/* Лого */}
                    <div className="center">
                        <Logo />
                    </div>

                    <div className="right">
                        <div className="heart">
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.03481 16.9685C6.91958 15.0699 -0.342699 10.0677 0.468139 5.39409C0.996946 2.14449 3.07692 1.04912 4.55758 1.01261C7.48365 0.903071 9.03481 3.53196 9.03481 3.53196C9.03481 3.53196 10.586 0.903071 13.512 1.01261C14.9927 1.04912 17.0727 2.14449 17.6367 5.39409C18.4123 10.0677 11.15 15.0699 9.03481 16.9685Z" stroke="black" strokeWidth="0.8" strokeMiterlimit="10"/>
                            </svg>
                        </div>

                        {/* Сагс */}
                        <div onClick={() => setCartShow(true)} className="bag">
                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.09699 16.7694L2.17783 4.82007H13.7266C14.0201 8.18935 14.6433 15.2962 14.7874 16.7694C14.9315 18.2425 13.8066 19.0378 13.2262 19.2513H7.90205H2.69823C1.27312 18.9471 1.03694 17.4699 1.09699 16.7694Z" stroke="black" strokeWidth="0.8"/>
                            <path d="M4.74158 6.90118V3.85882C4.74158 0.18641 10.9452 0.0264058 11.1466 3.85882V6.90118" stroke="black" strokeWidth="0.8"/>
                            </svg>

                            <svg className="badge" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4.79674" cy="4.78917" r="4.61901" fill="#EA4335"/>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Меню */}
                <div className="menu">
                    <div className="inner">
                        {
                            menu.map(item => <a key={item} href="" className={item}>{item}</a>)
                        }
                    </div>
                </div>
            </div>
        </form>
    )
}