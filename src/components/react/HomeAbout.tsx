import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

type Props = {
	locale: string;
};

const FEATURES = [
	{ key: 'featAimbot', icon: '◎' },
	{ key: 'featEsp', icon: '◈' },
	{ key: 'featSkeleton', icon: '⬡' },
	{ key: 'featHealth', icon: '♥' },
	{ key: 'featVehicles', icon: '▣' },
	{ key: 'featRecoil', icon: '↯' },
	{ key: 'featStreamproof', icon: '◉' },
] as const;

const QUICK_LINKS = [
	{ href: '/enlisted-hacks/', labelKey: 'aboutPillar' },
	{ href: '/enlisted-esp/', labelKey: 'aboutEsp' },
	{ href: '/enlisted-aimbot/', labelKey: 'aboutAimbot' },
	{ href: '/enlisted-vehicles/', labelKey: 'aboutVehicles' },
	{ href: '/updates/', labelKey: 'aboutUndetected' },
	{ href: '/pricing/', labelKey: 'aboutStore' },
] as const;

function HomeAboutInner() {
	const { t } = useTranslation();

	return (
		<section className="home-about shell" aria-labelledby="home-about-title">
			<header className="home-about__head">
				<p className="home-about__eyebrow">{t('home.aboutEyebrow')}</p>
				<h2 id="home-about-title">{t('home.aboutTitle')}</h2>
				<p className="home-about__lede">{t('home.aboutP1')}</p>
			</header>

			<div className="home-about__grid">
				<div className="home-about__features">
					<h3 className="home-about__subhead">{t('home.aboutFeaturesTitle')}</h3>
					<ul className="home-about__feature-list">
						{FEATURES.map(({ key, icon }) => (
							<li key={key} className="home-about__feature">
								<span className="home-about__feature-icon" aria-hidden="true">
									{icon}
								</span>
								<div>
									<strong>{t(`home.${key}Title`)}</strong>
									<p>{t(`home.${key}Desc`)}</p>
								</div>
							</li>
						))}
					</ul>
				</div>

				<aside className="home-about__aside">
					<div className="home-about__card">
						<h3 className="home-about__subhead">{t('home.aboutLicenseTitle')}</h3>
						<p>{t('home.aboutLicenseDesc')}</p>
						<ul className="home-about__checks">
							<li>{t('home.aboutCheck1')}</li>
							<li>{t('home.aboutCheck2')}</li>
							<li>{t('home.aboutCheck3')}</li>
						</ul>
						<a className="home-about__cta" href="/pricing/">
							{t('home.aboutCta')}
						</a>
					</div>

					<nav className="home-about__links" aria-label={t('home.aboutLinksTitle')}>
						<h3 className="home-about__subhead">{t('home.aboutLinksTitle')}</h3>
						<ul>
							{QUICK_LINKS.map((link) => (
								<li key={link.href}>
									<a href={link.href}>{t(`home.${link.labelKey}`)}</a>
								</li>
							))}
						</ul>
					</nav>
				</aside>
			</div>
		</section>
	);
}

export default function HomeAboutApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeAboutInner />
		</I18nProvider>
	);
}
