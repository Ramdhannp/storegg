import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
interface MenuItemProps {
	title: string;
	icon:
		| "overview"
		| "card"
		| "logout"
		| "messages"
		| "reward"
		| "settings"
		| "transactions";
	active?: boolean;
	href: string;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
	const { title, icon, active, href } = props;
	const classItems = cx({
		item: true,
		"mb-30": true,
		active: active,
	});
	return (
		<div className={classItems}>
			<div className="me-3">
				<Image
					src={`/icon/ic-menu-${icon}.svg`}
					width={25}
					height={25}
					alt="icon menu overview"
				/>
			</div>
			<p className="item-title m-0">
				<Link href={href} className="text-lg text-decoration-none">
					{title}
				</Link>
			</p>
		</div>
	);
}