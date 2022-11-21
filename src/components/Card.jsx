import React from "react";

export default function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/heart-disabled.svg" alt="disabled" />
            </div>
            <img width={133} height={112} src="/img/sneackers/1.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
                </div>
                <button className="button">
                <img width={11} height={11} src="img/plus.svg" alt="" />
                </button>
            </div>
        </div>
    )
}