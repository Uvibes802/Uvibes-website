import type { HeroBannerProps } from "../../types/banner/heroBanner";
import Image from "next/image";
import Logo_uVibesDesktop from "../../../public/images/Logo UVIBES.png";
import Logo_uVibes from "../../../public/images/Logo VI blanc.png";
import "../../styles/banner/heroBanner.css";
import WhiteButton from "../button/WhiteButton";

export function HeroBanner({
	title,
	subtitle,
	description,
	image,
	alt,
}: HeroBannerProps) {
	return (
		<div className="hero-banner-wrapper">
			<div className="hero-banner-container">
				<div className="hero-banner-logo-button">
					<Image
						src={Logo_uVibes}
						alt="Logo uVibes"
						width={80}
						className="logo_mobile"
					/>
					<Image
						src={Logo_uVibesDesktop}
						alt="Logo uVibes desktop"
						width={400}
						className="logo_desktop"
					/>
					<WhiteButton title="Connectez-vous à Uvibes" type="button" />
				</div>
					<div className="hero-banner-content">
						<h2 className="hero-banner-subtitle">{subtitle}</h2>
						<h1 className="hero-banner-title">{title}</h1>
						<p className="hero-banner-description">{description}</p>
					</div>
	
			</div>
			
			<div className="hero-banner-image-container">
				<Image
					src={image}
					alt={alt}
					className="hero-banner-image"
					width={600}
					height={900}
					priority
				/>
			</div>
		</div>
	);
}
