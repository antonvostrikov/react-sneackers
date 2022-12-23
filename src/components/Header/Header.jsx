import React, { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom'

import styles from './Header.module.scss'

export default function Header({onClickOpen}) {
	return (
		<header className="d-flex justify-between align-center p-40">
			<div className={`${styles.headerLeft} d-flex align-center`}>
				<img width={40} height={40} src="/img/logo.png" />
				<div>
					<Link to="/"><h3 className="text-uppercase">React Sneackers</h3></Link>
					<p className="opacity-5">Магазин лучших кросовок</p>
				</div>
			</div>
			<ul className="d-flex">
				<li className="mr-30" onClick={onClickOpen}>
					<img width={18} height={18} src="/img/card.svg" alt="Card" />
					<span>1205 руб.</span>
				</li>
				<Link to="/favorite">
					<li className="mr-20">
						<img src="/img/favorite.svg" alt="Favorite" />
					</li>
				</Link>
				<li>
					<img width={18} height={18} src="/img/user.svg" />
				</li>
			</ul>
		</header>
	)
}