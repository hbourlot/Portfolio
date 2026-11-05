import { IconBrandGithub, IconBrandLinkedin, IconDownload } from "@tabler/icons-react";
import { useSidebar } from "../../context/SidebarContext";

type PageHeaderProps = {
	title: string;
};

export const PageHeader = ({ title }: PageHeaderProps) => {
	const { open, isMobile } = useSidebar();
	const iconButton =
		"size-7 flex text-text-primary items-center justify-center rounded-md hover:bg-fill-ghost-selected hover:text-text-primary transition";

	return (
		<>
			<div
				className={`h-12 shrink-0 border-b border-border flex justify-between items-center ${open && !isMobile ? "px-4" : "px-10"}`}>
				<span className="font-light px-2 rounded-md hover:bg-fill-ghost-selected transition">{title}</span>
				<div className="flex gap-3 text-text-secondary">
					<a
						href="https://github.com/hbourlot"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
						className={iconButton}>
						<IconBrandGithub
							className="w-4 h-4"
							stroke={1.5}
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/hbourlot"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Linkedin"
						className={iconButton}>
						<IconBrandLinkedin
							stroke={1.5}
							className="w-4 h-4"
						/>
					</a>
					<a
						href={`${import.meta.env.BASE_URL}Curriculum_Bourlot.pdf`}
						download="Hugo_Bourlot_CV.pdf"
						className="h-7 px-2 flex items-center text-text-primary gap-1.5 rounded-md text-[13px] hover:bg-fill-ghost-selected hover:text-text-primary transition">
						<IconDownload
							className="w-4 h-4"
							stroke={1.5}
						/>
						Share
					</a>
				</div>
			</div>
		</>
	);
};
