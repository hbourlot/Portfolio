import { createContext, useContext, useSyncExternalStore } from "react";

type SidebarValue = {
	open: boolean;
	setOpen: (open: boolean) => void;
	isMobile: boolean;
};

export const SidebarContext = createContext<SidebarValue | null>(null);

export function useSidebar() {
	const context = useContext(SidebarContext);
	if (!context) throw new Error("useSidebar must be used inside SidebarContext");

	return context;
}

const mobileQuery = "(max-width: 520px)";

export function useIsMobile() {
	return useSyncExternalStore(
		(onChange) => {
			const media = window.matchMedia(mobileQuery);
			media.addEventListener("change", onChange);
			return () => media.removeEventListener("change", onChange);
		},
		() => window.matchMedia(mobileQuery).matches,
	);
}
