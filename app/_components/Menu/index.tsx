"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./index.module.css";

export default function Menu() {
	const open = () => {
		document.querySelector("nav")?.classList.add(styles.open);
	};

	const [ isOpen, setOpen ] = useState<boolean>(false);
	const open = () => setOpen(true);

	return (
		<div>
			<nav className={styles.nav}>
				<ul className={styles.items}>
				<li className={styles.item}>
						<Link href="/news">ニュース</Link>
					</li>
					<li className={styles.item}>
						<Link href="/member">メンバー</Link>
					</li>
					<li className={styles.item}>
						<Link href="/contact">お問い合わせ</Link>
					</li>
				</ul>
			</nav>
			<button className={styles.button} onClick={open}>
				<Image
					src="/menu.svg"
					alt="メニュー"
					width={24}
					height={24}
				/>
			</button>
		</div>
	);
}