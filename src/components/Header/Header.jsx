import React from "react";
import { Link } from 'react-router-dom'

import styles from './Header.module.scss'

import { useTotal } from "../../hooks/useTotal";

export default function Header({onClickOpen}) {
	const { total } = useTotal()

	return (
		<header className="d-flex justify-between align-center p-40">
			<div className={`${styles.headerLeft} d-flex align-center`}>
				<img width={40} height={40} src="/img/logo.png" alt="React sneakers"/>
				<div>
					<Link to="/"><h3 className="text-uppercase">React Sneackers</h3></Link>
					<p className="opacity-5">Магазин лучших кросовок</p>
				</div>
			</div>
			<ul className="d-flex">
				<li className="mr-30" onClick={onClickOpen}>
					<img width={18} height={18} src="/img/card.svg" alt="Card" />
					<span>{total} руб.</span>
				</li>
				<Link to="/favorite">
					<li className="mr-20">
						<img src="/img/favorite.svg" alt="Favorite" />
					</li>
				</Link>
				<Link to="/orders">
					<li>
						<img width={18} height={18} src="/img/user.svg" alt="Заказы" />
					</li>
				</Link>
			</ul>
		</header>
	)
}