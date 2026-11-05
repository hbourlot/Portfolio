import type { Icon } from "@tabler/icons-react";
import { NavLink } from "react-router";
import { useSidebar } from "../../context/SidebarContext";

type SidebarLinkProps = {
	to: string;
	icon?: Icon;
	label: string;
};

export const SidebarLink = ({ to, icon: IconComponent, label }: SidebarLinkProps) => {
	const { isMobile, setOpen } = useSidebar();
	return (
		<div className="flex w-full px-2">
			<NavLink
				to={to}
				onClick={() => isMobile && setOpen(false)}
				className="flex items-center gap-2 text-[12px] w-full px-2 py-1.75 rounded-lg hover:bg-fill-ghost-selected text-text-primary transition">
				{IconComponent && (
					<IconComponent
						className="w-3 h-3"
						stroke={2}
					/>
				)}
				<span className="truncate">{label}</span>
			</NavLink>
		</div>
	);
};
